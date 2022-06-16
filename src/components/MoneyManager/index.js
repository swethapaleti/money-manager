import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    select: 'INCOME',
    moneyList: [],
  }

  inputTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }

  inputAmount = event => {
    this.setState({
      amount: event.target.value,
    })
  }

  inputSelect = event => {
    this.setState({
      select: event.target.value,
    })
  }

  addMoney = event => {
    const {title, amount, select, moneyList} = this.state
    event.preventDefault()
    if (
      title === '' ||
      amount === '' ||
      select === '' ||
      // eslint-disable-next-line no-restricted-globals
      isNaN(parseInt(amount))
    ) {
      return
    }
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === select,
    )
    const newTransaction = {
      title,
      select: typeOption.displayText,
      id: uuidv4(),
      amount: parseInt(amount),
    }

    const updatedList = [...moneyList, newTransaction]

    this.setState({
      moneyList: updatedList,
      title: '',
      amount: '',
    })
  }

  deleteMoney = id => {
    const {moneyList} = this.state
    const result = moneyList.filter(each => each.id !== id)
    this.setState({
      moneyList: result,
    })
  }

  getAmount = type => {
    const {moneyList} = this.state
    const filterList = moneyList.filter(each => each.select === type)
    let sum = 0
    filterList.forEach(each => {
      sum += each.amount
    })
    return sum
  }

  render() {
    const {title, amount, select, moneyList} = this.state
    return (
      <div>
        <div>
          <h1>Hi, Richard</h1>
          <p>Welcome back to your Money Manager</p>
        </div>
        <MoneyDetails
          income={this.getAmount('Income')}
          expenses={this.getAmount('Expenses')}
        />
        <div>
          <form onSubmit={this.addMoney}>
            <h1>Add Transaction</h1>
            <label htmlFor="title">TITLE</label>
            <input
              onChange={this.inputTitle}
              value={title}
              id="title"
              type="text"
            />
            <label htmlFor="amount">AMOUNT</label>
            <input
              onChange={this.inputAmount}
              value={amount}
              id="amount"
              type="text"
            />
            <label htmlFor="type">TYPE</label>
            <select onChange={this.inputSelect} id="type" value={select}>
              {transactionTypeOptions.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button type="submit">Add</button>
          </form>
          <div>
            <h1>History</h1>
            <ul>
              <li>
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
                <p>&nbsp;</p>
              </li>
              {moneyList.map(each => (
                <TransactionItem
                  deleteMoney={this.deleteMoney}
                  key={each.id}
                  item={each}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
