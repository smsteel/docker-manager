import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Registry from './components/Registry'
import store from './store'
import CssBaseline from '@material-ui/core/CssBaseline'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <React.Fragment>
          <CssBaseline />
          <Registry />
        </React.Fragment>
      </Provider>
    )
  }
}

export default App
