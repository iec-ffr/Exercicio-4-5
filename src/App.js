import React from 'react';
import {ApplicationRoutes} from './ApplicationRoutes';
import {Provider} from 'react-redux'
import { Nav } from './components'
import store from './store'
import './bootstrap.css'

function App() {
  return (
    <>
     <Provider store={store}>
        <Nav />
        <ApplicationRoutes />
     </Provider>
    </>
  );
}

export default App;
