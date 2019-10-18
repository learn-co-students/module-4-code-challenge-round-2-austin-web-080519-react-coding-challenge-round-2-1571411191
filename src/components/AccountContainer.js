import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
// import Search from "./Search";
const transactionURL = `https://boiling-brook-94902.herokuapp.com/transactions`;
class AccountContainer extends Component {
  constructor() {
    super();

    this.state = {
      transactions: [],
      search: [],
      value: ""
    };
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  }
  componentDidMount() {
    fetch(transactionURL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          transactions: data
        });
      });
  }
  // handleChange(e) {
  //   console.log(e);
  // }
  // let money = transactions;
  // money = money.filter(function(dolla) {
  //   dolla.include(e.target.value);
  // });

  handleChange = e => {
    let money = [...this.state.transactions];
    money =
      e.target.value === ""
        ? (money = [...this.state.transactions])
        : money.filter(dolla => {
            return (
              dolla.category.includes(e.target.value) ||
              dolla.description.includes(e.target.value)
            );
          });

    this.setState({
      search: money,
      value: e.target.value
    });
  };
  render() {
    return (
      <div>
        {/* <Search handleChange={this.handleChange} /> */}
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <TransactionsList
          transaction={
            this.state.value === ""
              ? this.state.transactions
              : this.state.search
          }
        />
        ;
      </div>
    );
  }
}

export default AccountContainer;
