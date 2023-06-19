// Write your code here
import './index.css'

const Denominations = props => {
  const {denominations, withdrawAmount} = props
  const {value} = denominations
  const onWithdrawalAmt = () => {
    withdrawAmount(value)
  }
  return (
    <li className="denominations-item-container">
      <button
        type="button"
        className="denominations-button"
        onClick={onWithdrawalAmt}
      >
        {value}
      </button>
    </li>
  )
}

export default Denominations
