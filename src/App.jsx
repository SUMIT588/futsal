import React from 'react';
import { GlobalStyle } from './common/style/globalStyle';

import { CustomRoute } from './pages/route';

const App = () => {

return (

  <React.Fragment>
    <GlobalStyle />
  <CustomRoute />
  </React.Fragment>
);

}
export default App;
