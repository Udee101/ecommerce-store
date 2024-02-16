import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { router } from './routes.jsx'
import {store, persistor} from './stores/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
// import {  } from './stores/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} /> 
    </PersistGate>
  </Provider>
)
