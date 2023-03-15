import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import Pages from './pages/Pages';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Pages />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
