import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import {store, persistor} from './stores/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App.jsx';
import { firebaseAppConfig } from './firebase.config.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} app={firebaseAppConfig}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={App} /> 
    </PersistGate>
  </Provider>
)
