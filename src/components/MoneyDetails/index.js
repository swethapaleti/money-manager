const MoneyDetails = props => {
  const {income, expenses} = props
  const balance = income - expenses
  return (
    <div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <p>Your Balance</p>
        <p testid="balanceAmount">Rs {balance}</p>
      </div>
      <div>
        <img
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <p>Your Income</p>
        <p testid="incomeAmount">Rs {income}</p>
      </div>
      <div>
        <img
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <p>Your Expenses</p>
        <p testid="expensesAmount">Rs {expenses}</p>
      </div>
    </div>
  )
}

export default MoneyDetails
