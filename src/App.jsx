import AppRoutes from './route/index';
import { GlobalStyle } from './common/style/globalStyle';
import Loading from './components/loading/loading';
import React from 'react';

const App = () => {

  

return (

  <React.Fragment>
    <GlobalStyle />
    <Loading/>
  <AppRoutes />
  </React.Fragment>
);

}
export default App;
