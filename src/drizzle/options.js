//redux imports
//import { compose } from 'redux'

// Import contracts
import UserFactory from '../eth/build/contracts/UserFactory.json'

// Redux DevTools
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const drizzleOptions = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545'
    }
  },
  contracts: [
    UserFactory
  ],
  polls: {
    //accounts: 1500
  }
}

export default drizzleOptions
