import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import './index.scss'
import store from './redux/store'

// You need bootstrap? $ yarn add bootstrap
// See: https://create-react-app.dev/docs/adding-bootstrap

// Single-page application (SPA)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to Pre-render with react-snap
// Step 1: install $ yarn add --dev react-snap
// Step 2: add to package.json run script: "postbuild": "react-snap"
// Step 3: Add to package.json: "reactSnap":{"inlineCss":true}
// Step 3: replace to the script below.

/*
import { hydrate, render } from 'react-dom'
import * as serviceWorker from './serviceWorker'

const rootElement = document.getElementById('root')
if (rootElement && rootElement!.hasChildNodes()) {
  hydrate(<AppRouter />, rootElement)

  // Precache - set to 'register' once you Pre-render
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: http://bit.ly/CRA-PWA
  serviceWorker.register()
} else {
  render(<AppRouter />, rootElement)
}
*/
