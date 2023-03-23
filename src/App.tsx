import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import Pages from './pages/Pages';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab, fas);

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Pages />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
