import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import Pages from './pages/Pages';

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
