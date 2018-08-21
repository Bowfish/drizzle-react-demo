// react imports
import { drizzleConnect } from 'drizzle-react'

import User from './User'

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus,
    UserFactory: state.contracts.UserFactory
  }
}

const UserContainer = drizzleConnect(User, mapStateToProps);

export default UserContainer
