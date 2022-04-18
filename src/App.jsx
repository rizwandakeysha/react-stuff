// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Bantu <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Pelajari ReactJs
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, {Component} from 'react';  
// import './App.css';  
// import Alert from './Components/Alert';  
// // import element Alert yang telah dibuat  
  
// class App extends Component {  
//   constructor() {
    
//     super();
//     this.state = {
//       type: "danger",
//       header: "Fatal Error",
//       content: "ini content dari alert"
//     }
//   }

//   // fungsi untuk mengubah tipe  
// changeTypeAlert = (event) =>{  
//   this.setState({type: event.target.value});  
// }  
// // fungsi untuk mengubah header  
// changeHeaderAlert = (event) => {  
//   this.setState({header: event.target.value});  
// }  
// // fungsi untuk mengubah content  
// changeContentAlert = (event) => {  
//   this.setState({content: event.target.value});  
// }

//   render() {  
//     return (
//       <Alert type={this.state.type} header={this.state.header}>  
//       {this.state.content}  
//       <hr />  
//       <h4>Alert Control</h4>  
//       <b className="text-left">Tipe Alert</b>  
//       <select className="form-control" name="type" value={this.state.type}  
//         onChange={this.changeTypeAlert}>  
//         <option value="success">Success</option>  
//         <option value="warning">Warning</option>  
//         <option value="danger">Danger</option>  
//         <option value="info">Info</option>  
//       </select>  
//       <b className="text-left">Header Alert</b>  
//       <input  
//         type="text" name="header" className="form-control" value={this.state.header}  
//         onChange={this.changeHeaderAlert} />  
//       <b className="text-left">Content Alert</b>  
//       <input  
//         type="text" name="content" className="form-control" value={this.state.content}  
//         onChange={this.changeContentAlert} />  
//       </Alert> 
      
//     )
//   }
// }

import React from "react";
import Utama from "./Components/Utama";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-sm navbar-dark bgnav static-top">
            <div class="container">
              <a class="navbar-brand" href="/">
                <img src="https://ppdb.smktelkom-mlg.sch.id/assets/home/img/logo_putih.png" alt="logo telkom" height="50"/> 
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span> 
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a class="nav-link"><Link to="/" class="text-nav">Beranda</Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"><Link to="/TentangSaya" class="text-nav">Tentang Kami</Link></a>
                  </li>
                  {/* <li class="nav-item">
                    <a class="nav-link"><Link to="/Karya" class="text-nav">Karya</Link></a>
                  </li> */}
                  {/* <li class="nav-item">
                    <a class="nav-link"><Link to="/Kontak" class="text-nav">Kontak</Link></a>
                  </li> */}
                  <li class="nav-item">
                    <a class="nav-link"><Link to="/Galeri" class="text-nav">Galeri</Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"><Link to="/pegawai" class="text-nav">Pegawai</Link></a>
                  </li>
                </ul> 
              </div>
            </div>
          </nav>
          <p><Utama /></p>
      </div>

    )
  }
}

export default App;