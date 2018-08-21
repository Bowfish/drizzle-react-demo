import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { AccountData } from 'drizzle-react-components'

class User extends Component {

  constructor(props, context) {
    super(props)

    this.contracts = context.drizzle.contracts
    this.web3 = context.drizzle.web3

    this.contracts.UserFactory.methods.setUserData(
      this.web3.utils.toHex('Damian'),
      this.web3.utils.toHex('Hischier'),
      this.web3.utils.toHex('1000.100.10.1'),
      this.web3.utils.toHex('20.05.1970')
    ).send()

    this.getUserDataKey = this.contracts.UserFactory.methods.getUserData.cacheCall(
        this.props.accounts[0]
    )
  }

  render() {
    // If the data isn't here yet, show loading
    if(!(this.getUserDataKey in this.props.UserFactory.getUserData)) {
      return (
        <div>
        </div>
      )
    }

    // If the data is here, get it and display it
    const userData = this.props.UserFactory.getUserData[this.getUserDataKey].value

    return (
      <div>
        <h3>Account Data</h3>
        <AccountData accountIndex="0" units="ether" precision="3" />
        <div>
          <div>
            <br />
          </div>
          <div>
            <h3>User Data</h3>
            <p>First Name  : {this.web3.utils.hexToUtf8(userData[0])}</p>
            <p>Last Name   : {this.web3.utils.hexToUtf8(userData[1])}</p>
            <p>Email       : {this.web3.utils.hexToUtf8(userData[2])}</p>
            <p>Birth Date  : {this.web3.utils.hexToUtf8(userData[3])}</p>
          </div>
        </div>
      </div>
    )
  }
}

User.propTypes = {
  store: PropTypes.object.isRequired
}

User.contextTypes = {
  drizzle: PropTypes.object
}

export default User
