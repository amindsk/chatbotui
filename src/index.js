import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import Layout from './Layout';
import { ToastContainer } from 'react-toastify';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


const AppLayout = () => {

  return (
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <Layout />
        <ToastContainer autoClose={5000} draggable={false} limit={5} />
      </BrowserRouter>
    </DndProvider>
  )
}

const App = () => {


  return (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  );
}

root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);