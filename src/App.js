import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <img src="images/lax.jpg" alt="" width="40" height="34" className="d-inline-block align-text-top"/>
            Horizon Offices
          </a>
        </div>
      </nav>

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/abbe-sublett-nxZDMUQhN4o-unsplash.jpg" className="d-block w-100 h-50" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="images/michal-nevaril-FFv-MNZty3Y-unsplash.jpg" className="d-block w-100 h-50" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="images/Gallery of KPF Designs CITIC Tower, Beijing's Tallest Building  - 1.jpg of KPF Designs CITIC Tower, Beijing's Tallest Building  - 1.jpg" class="d-block w-100 h-50" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h2 className="text-center jinx">PLANS</h2>

      <div className="container building-types">
        <div className="row">
            <div className="col-md-3">
                <div className="thumbnail">
                <img src="images/kaleb-tapp-1deQbU6DhBg-unsplash.jpg" className="stars" alt="5Star"/>
                   <div className="caption">
                     <h3 className="hj">VIRTUAL OFFICES</h3>
                     <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                     cillum dolore eu fugiat nulla pariatur..</p>
                   </div>
                 </div>
               </div>

               <div className="col-md-3">
                <div className="thumbnail">
                <img src="images/kaleb-tapp-1deQbU6DhBg-unsplash.jpg" className="stars" alt="5Star"/>
                   <div className="caption">
                     <h3 className="hj">VIRTUAL OFFICES</h3>
                     <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                     cillum dolore eu fugiat nulla pariatur..</p>
                   </div>
                 </div>
               </div>

               <div className="col-md-3">
                <div className="thumbnail">
                <img src="images/kaleb-tapp-1deQbU6DhBg-unsplash.jpg" className="stars" alt="5Star"/>
                   <div className="caption">
                     <h3 className="hj">VIRTUAL OFFICES</h3>
                     <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                     cillum dolore eu fugiat nulla pariatur..</p>
                   </div>
                 </div>
               </div>

               <div className="col-md-3">
                <div className="thumbnail">
                <img src="images/kaleb-tapp-1deQbU6DhBg-unsplash.jpg" className="stars" alt="5Star"/>
                   <div className="caption">
                     <h3 className="hj">VIRTUAL OFFICES</h3>
                     <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                     cillum dolore eu fugiat nulla pariatur..</p>
                   </div>
                 </div>
               </div>
        </div>
      </div>

      <div className="container footer">
        <div className="row">
          <div className="col-md-4 right">
            <h3 className="gam">VISIT US IN GAMBIA</h3>
            <h5 className="gam1">Banjul,The Gambia</h5>
            <p className="gam2">Sancha, suleyjobe</p>
          </div>
          <div className="col-md-4 center">
            <h3 className="sl" >VISIT US IN Sierra Leone</h3>
            <h5 className="sl1">Freetown, Sierra leone</h5>
            <p className="sl2">calbatown, Rokelcity</p>
          </div>
          <div className="col-md-4 left">
            <h3 className="gh">VISIT US IN GHANA</h3>
            <h5 className="gh1">Accra, Gbawe</h5>
            <p className="gh2">bulem, FIF</p></div>
        </div>
      </div>
    </div>
  );
}

export default App;
