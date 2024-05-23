import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { dispatch } from './store';
import { persistStore } from 'redux-persist'
import Layout from './Layout';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import 'react-toastify/dist/ReactToastify.css';
import "./index.css"
import { cosmicTheme, darkTheme, lightTheme } from './common/theme';
import { getTheme, handleChangeTheme } from './common/commonSlice';


const root = ReactDOM.createRoot(document.getElementById('root'));

let persistor = persistStore(store);


const AppLayout = () => {

  const selectedTheme = useSelector(getTheme)

  React.useEffect(() => {
    if (localStorage.getItem("theme")) {
      dispatch(handleChangeTheme(localStorage.getItem("theme")))
      if (theme === "light") {
        document.documentElement.style.setProperty(' --primary-color-light', '#e21949');
        document.documentElement.style.setProperty(' --paper-default-light', '#fff');
      } else if(theme === "dark"){
        document.documentElement.style.setProperty(' --primary-color-light', '#f1145e');
        document.documentElement.style.setProperty(' --paper-default-light', '#13294e');
      }
    }
  }, [selectedTheme])

  const theme = React.useMemo(
    () => createTheme(selectedTheme === "light" ? lightTheme : selectedTheme === "dark" ? darkTheme : cosmicTheme),
    [selectedTheme]
  );
  return (
    <ThemeProvider theme={theme}>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <Layout />
          <ToastContainer autoClose={5000} draggable={false} limit={5} />
        </BrowserRouter>
      </DndProvider>
    </ThemeProvider>
  )
}

const App = () => {


  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppLayout />
      </PersistGate>
    </Provider>
  );
}

root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);