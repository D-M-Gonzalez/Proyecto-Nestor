import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AboutUs from './containers/AboutUs/AboutUs';
import Contact from './containers/Contact/Contact';
import Error404 from './containers/Error404/Error404';
import Home from './containers/Home/Home';
import Layout from './containers/Layout/Layout';
import Services from './containers/Services/Services';

export interface IApplicationProps { }

const App: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about_us" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error404 message="La página que estas buscando no existe" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;