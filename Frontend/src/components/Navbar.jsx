import cozystay from '../assets/cozystay.png';

function Navbar() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg" style={{ padding: 30 }}>

          {/* Left menu */}
          <div className="me-auto" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Stays</a>
              </li>
            </ul>
          </div>

          {/* Center logo */}
          <a className="navbar-brand mx-auto" href="#">
            <img src={cozystay} alt="Cozystay Logo" style={{ width: 190 }} />
          </a>

          {/* Right menu */}
<div className="ms-auto">
  <ul className="navbar-nav">
    <li className="nav-item ms-auto">
      <a className="nav-link" href="#">Tel: +41 22 345 67 88</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Account</a>
    </li>
  </ul>
</div>


        </nav>
      </div>
    </>
  );
}

export default Navbar;
