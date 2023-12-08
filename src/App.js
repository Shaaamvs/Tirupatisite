import './App.css';
import Banner from './Component/Banner';
import Content from './Component/Content';
import Footer from './Component/Footer';
import Nav from './Component/Nav';
import Package from './Component/Package';
import Testimonal from './Component/Testimonal';
import Cartlogo from './Component/cartlogo';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function App() {
  return (
 <>
 <Nav/>
<Banner/>
<br/>
<br/>

<Cartlogo/>


<Content/>
<Testimonal/>
<Package/>
<hr/>
<Footer/>

 </>
  );
}

export default App;
