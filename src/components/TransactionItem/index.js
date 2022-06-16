const TransactionItem = props => {
  const {item, deleteMoney} = props
  const {title, amount, select, id} = item

  const deleteItem = () => {
    deleteMoney(id)
  }
  return (
    <li>
      <p>{title}</p>
      <p>{amount}</p>
      <p>{select}</p>
      <button testid="delete" onClick={deleteItem} type="button">
        <img
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </button>
    </li>
  )
}

export default TransactionItem
