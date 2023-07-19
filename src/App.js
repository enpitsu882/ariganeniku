import Footer from './components/Footer';
import Header from './components/Header';
import Top from './screens/Top';
import './headers.css';
import './blog.css';
import './features.css';
import './heroes.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './screens/Profile';
import Products from './screens/Products';
import NoMatch from './screens/NoMatch';
import Blog from './screens/Blog';

const App = () => {
  return (
    <BrowserRouter basename='ariganeniku'>
      <div className="App">
        <Header />

        <Routes>
          <Route path='/' element={<Top />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/products' element={<Products />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
