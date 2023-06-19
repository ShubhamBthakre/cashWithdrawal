// Write your code here

import {Component} from 'react'
import './index.css'
import Denominations from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amtBalance: 2000}

  onWithdrawAmount = value => {
    this.setState(prevState => ({amtBalance: prevState.amtBalance - value}))
  }

  render() {
    const {amtBalance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="cash-withdrawal-app-container">
        <div className="cart-container">
          <div className="profile-container">
            <div className="profile-name-icon-container">
              <p className="name-icon">S</p>
            </div>
            <div className="profile-name-container">
              <p className="profile-name">Sarah Williams</p>
            </div>
          </div>
          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <div className="amount-container">
              <p className="amount-balance">{amtBalance}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <div className="withdrawal-container">
            <p className="withdrawal-heading">Withdrawal</p>
            <p className="withdrawal-details">CHOOSE SUM (IN RUPEES)</p>
          </div>

          <ul className="denomination-container">
            {denominationsList.map(eachArray => (
              <Denominations
                denominations={eachArray}
                key={eachArray.id}
                withdrawAmount={this.onWithdrawAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
