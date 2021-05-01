import React from 'react';
import Home from './pages/Home'

class App extends React.Component {
  render(){
  return (

    <div className="App">
    <div id="page-wrapper">
    <Home/> 
  
  <footer id="footer">
    <ul className="icons">
      
      <li><a href="https://linkedin.com/in/kelliksimons" className="icon brands alt fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
      
      <li><a href="https://github.com/kelliksimons" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
     
    </ul>
    <ul className="copyright">
      <li>&copy; Kellik Simons </li>
    </ul>
  </footer>

</div>
    </div>
  );
}
}


export default App;
