import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import profile_photo from '../src/assets/images/profile-1.jpg';
function App() {
  return (
    <div className='container'>
      <Navbar />
      <main>
        <Dashboard />
      </main>
      <div className='right'>
          <div className='top'>
            <button id='menu-btn'>
              <span className="material-icons-sharp">menu</span>
            </button>
            <div className='profile'>
              <div className="info">
                <p> Hey, <b>Yassine</b></p>
                <small className="text-muted">Welcome Admin</small>
              </div>
              <div className='profile-photo'>
                <img src={profile_photo} className='profile-photo' alt='profile' />
              </div>
            </div>
          </div><br />
          <div className='sales-analytics'>
            <h2>Sales analytics</h2><br />

            <div className='item online'>
              <div className='icon'>
                <span className="material-icons-sharp">shopping_cart</span>
              </div>
              <div className='right'>
                <div className='info'>
                  <h3>ONLINE ORDERS</h3>
                  <small className="text-muted">Last 24 Hours</small>
                </div>
                <h5 className='success'>+39%</h5>
                <h3>3888</h3>
              </div>
            </div>

            <div className='item offline'>
              <div className='icon'>
                <span className="material-icons-sharp">local_mall</span>
              </div>
              <div className='right'>
                <div className='info'>
                  <h3>OFFLINE ORDERS</h3>
                  <small className="text-muted">Last 24 Hours</small>
                </div>
                <h5 className='danger'>-19%</h5>
                <h3>1034</h3>
              </div>
            </div>

            <div className='item customers'>
              <div className='icon'>
                <span className="material-icons-sharp">person</span>
              </div>
              <div className='right'>
                <div className='info'>
                  <h3>NEW CUSTOMERS</h3>
                  <small className="text-muted">Last 24 Hours</small>
                </div>
                <h5 className='success'>+20%</h5>
                <h3>40</h3>
              </div>
            </div>

          </div>
        </div>
    </div>
  );
}

export default App;
