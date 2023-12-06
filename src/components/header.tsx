import { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../redux';
import { Size, reset } from '../redux/cart/cart-slice';
import { userLogout } from '../redux/users/login-slice';
import Marquee from "react-fast-marquee";

const Header = () => {
  const { userInfo } = useAppSelector((state) => state.login);
  const [CartSize, setCartSize] = useState();
  //const { cartItems } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
  const reloadCartSize = async () => {
    if (userInfo){
    try {
      const resultAction = await dispatch(Size());
      if (resultAction.payload) {
        const items = resultAction.payload;
        setCartSize(items?.length);
      } else {
        console.log("L'azione è stata respinta o rifiutata");
      }
    } catch (error) {
      console.error("Errore durante la chiamata:", error);
    }
  };
  };
  reloadCartSize()
}, [dispatch]);

  const onLogout = () => {
    dispatch(userLogout());
    dispatch(reset());
    navigate('/login');
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <nav
        className='navbar text-light navbar-expand-lg navbar-light h-12 d-none d-lg-block w-full' style={{backgroundColor:"#191919"}}
        id='templatemo_nav_top'
      >
        


            <Marquee >
            <div className="marque_wrapper">
              <span style={{marginLeft:"8rem"}}><svg className="me-1"width="15" height="15" xmlns="http://www.w3.org/2000/svg" >
                        <image
                          xlinkHref="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4b8.svg"
                          className="emoji"
                          width="15"
                          height="15"
                        />
                        <title>💸</title>
                      </svg>Registrati su pandabuy         
          <a href="https://pandabuy.allapp.link/clhrvn90b4msdaf2k0fg" target="_blank" className="ms-1 me-1 w-full square rounded-2 pe-2  hover-zoom zoom" style={{ color:"white", backgroundColor: '#1F51FF' }}>
            <FaExternalLinkAlt
              
              size={20}
              className='icons__cart me-0  text-white p-1 cursor-pointer'
            />
            QUI
          </a>
        per degli sconti fino a 144$!         <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" >
                        <image
                          xlinkHref="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4b8.svg"
                          className="emoji"
                          width="15"
                          height="15"
                        />
                        <title>💸</title>
                      </svg></span>
                </div>
                <div className="marque_wrapper">
        <span style={{marginLeft:"9.5rem"}}><svg className="me-1"width="15" height="15" xmlns="http://www.w3.org/2000/svg" >
                        <image
                          xlinkHref="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4b8.svg"
                          className="emoji"
                          width="15"
                          height="15"
                        />
                        <title>💸</title>
                      </svg>Registrati su pandabuy         
          <a href="https://pandabuy.allapp.link/clhrvn90b4msdaf2k0fg" target="_blank" className="ms-1 me-1 w-full square rounded-2 pe-2  hover-zoom zoom" style={{ color:"white", backgroundColor: '#1F51FF' }}>
            <FaExternalLinkAlt
              
              size={20}
              className='icons__cart me-0  text-white p-1 cursor-pointer'
            />
            QUI
          </a>
        per degli sconti fino a 144$!         <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" >
                        <image
                          xlinkHref="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4b8.svg"
                          className="emoji"
                          width="15"
                          height="15"
                        />
                        <title>💸</title>
                      </svg></span>

</div>
<div className="marque_wrapper">
        <span style={{marginLeft:"9.5rem"}} ><svg className="me-1"width="15" height="15" xmlns="http://www.w3.org/2000/svg" >
                        <image
                          xlinkHref="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4b8.svg"
                          className="emoji"
                          width="15"
                          height="15"
                        />
                        <title>💸</title>
                      </svg>Registrati su pandabuy         
          <a href="https://pandabuy.allapp.link/clhrvn90b4msdaf2k0fg" target="_blank" className="ms-1 me-1 w-full square rounded-2 pe-2  hover-zoom zoom" style={{ color:"white", backgroundColor: '#1F51FF' }}>
            <FaExternalLinkAlt
              
              size={20}
              className='icons__cart me-0  text-white p-1 cursor-pointer'
            />
            QUI
          </a>
        per degli sconti fino a 144$!   <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" >
                        <image
                          xlinkHref="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4b8.svg"
                          className="emoji"
                          width="15"
                          height="15"
                        />
                        <title>💸</title>
                      </svg></span>
            </div>

            <div className="marque_wrapper">
        <span style={{marginLeft:"9.5rem"}} ><svg className="me-1"width="15" height="15" xmlns="http://www.w3.org/2000/svg" >
                        <image
                          xlinkHref="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4b8.svg"
                          className="emoji"
                          width="15"
                          height="15"
                        />
                        <title>💸</title>
                      </svg>Registrati su pandabuy         
          <a href="https://pandabuy.allapp.link/clhrvn90b4msdaf2k0fg" target="_blank" className="ms-1 me-1 w-full square rounded-2 pe-2  hover-zoom zoom" style={{ color:"white", backgroundColor: '#1F51FF' }}>
            <FaExternalLinkAlt
              
              size={20}
              className='icons__cart me-0  text-white p-1 cursor-pointer'
            />
            QUI
          </a>
        per degli sconti fino a 144$!   <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" >
                        <image
                          xlinkHref="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4b8.svg"
                          className="emoji"
                          width="15"
                          height="15"
                        />
                        <title>💸</title>
                      </svg></span>
            </div>
            </Marquee>
        
      </nav>

      <Navbar
        collapseOnSelect
        expand='lg'
        sticky='top'
        bg='white'
        className='shadow px-0 py-3'
      >
        <div className='container-xl'>
          {/* Logo */}
          <Navbar.Brand as={NavLink} to='/'>
            <img
              style={{ objectFit :'cover', width: '40%', height: 'auto', maxWidth: '40%', maxHeight: '290px' }}
              src='https://firebasestorage.googleapis.com/v0/b/rep-project-1337.appspot.com/o/logo%2Fw2c_navbar.png?alt=media'
              className='avatar rounded me-lg-20'
              height={300}
              width={300}
              alt='...'
            />
          </Navbar.Brand>
          {/* Navbar toggle */}
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          {/* Collapse */}
          <Navbar.Collapse id='responsive-navbar-nav'>
            {/* Nav */}
            <div className='navbar-nav me-lg-auto' >
              <Nav.Item
                as={NavLink}
                className=' nav-link me-3'
                to='/'
                aria-current='page'
              >
                <span>Home</span>
              </Nav.Item>
              <Nav.Item as={NavLink} className=' nav-link me-3' to='/home'>
                <span>Prodotti</span>
              </Nav.Item>

              <Nav.Item as={NavLink} className=' nav-link me-3' to='/trova'>
                <span>Trova</span>
              </Nav.Item>
            </div>
            {/* Right navigation */}

            <div className='d-flex align-items-center'>
              <div className='d-flex align-items-center ms-3'>
                {/* 
                <Link className='nav-link' to='/home'>
                  <i className='fa fa-fw fa-search text-dark me-2'></i>
                </Link>
                */}
                {!userInfo ? (
                  <></>
                ) : (
                  <Link
                  className='nav-icon position-relative text-decoration-none me-5 '
                  to='/cart'
                >
                  
                  <i style={{color:"black",fontSize:"1.5rem" }} className="bi bi-cart3"></i>

                  
                  <span
                    style={{ backgroundColor: 'black' }}
                    className='position-absolute top-1 left-100 translate-middle badge rounded-pill  text-white'
                  >
                    {CartSize}
                  </span>
                </Link>
                )}

              </div>
              {!userInfo ? (
                <>
                  <div className='d-flex align-items-lg-center mt-3 mt-lg-0'>
                    <Nav.Link
                      as={NavLink}
                      to='/login'
                      className='btn btn-secondary btn-sm text-black me-3 ms-5 p-3'
                    >
                      Login
                    </Nav.Link>
                  </div>

                  <div className='d-flex align-items-lg-center mt-3 mt-lg-0 '>
                    <Nav.Link
                      as={NavLink}
                      to='/register'
                      style={{backgroundColor:"#16192c"}}
                      className='btn btn-sm text-white  ms-xs-3 p-3'
                    >
                      Registrati
                    </Nav.Link>
                  </div>
                </>
              ) : (
                <NavDropdown
                  align={isMobile ? undefined : 'end'}
                  title={<i className="bi bi-person-circle mr-3" style={{fontSize:"1.5rem", color:"black"}}></i>}
                  
                  id='basic-nav-dropdown'
                >
                  {userInfo.isAdmin && (
                    <NavDropdown.Item as={NavLink} to='/dashboard'>
                      Dashboard
                    </NavDropdown.Item>
                  )}
                  <NavDropdown.Item
                    as={NavLink}
                    to={`/profile/${userInfo._id}`}
                  >
                    Profilo
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
              )}
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
