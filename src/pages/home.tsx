import { useEffect } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import DefaultLayout from '../components/layouts/default-layout';
import ProductCard from '../components/product-card';
import Loader from '../components/UI/loader';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../redux';
import { getProducts } from '../redux/products/slice-list';
import { useNavigate } from 'react-router-dom';
import {
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';
const HomePage = () => {
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector((state: any) => state.login);
  const { products, loading } = useAppSelector((state) => state.productList);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const navigate = useNavigate();

  return (
<DefaultLayout>
  <Container
  
    style={{
      backgroundImage: "linear-gradient(to right, #2c3e50, #3498db)",
      minWidth: "100%",
      minHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",  // Modifica la proprietà justifyContent
      alignItems: "center",
    }}
  >
    <br />
    <h2 style={{ fontSize: "70px", color: 'white', fontWeight: "bold",textAlign: 'center' }} className='mt-20 '>
      #1 <span className="fancy">W2C</span> Italiano
      <svg className="ms-3" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <image
          xlinkHref="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1ee-1f1f9.svg"
          className="emoji"
          width="100"
          height="100"
        />
        <title>🇮🇹</title>
      </svg>
    </h2>
    <br />
    <h3 style={{ fontSize: "40px", color:"#FBFBFB", fontWeight:"300",textAlign: 'center'}} className='mt-2' >Where To Cop italiano per prodotti su pandabuy.com</h3>
    <Row className='d-flex justify-content-center align-items-center mt-24'>

  <Col md={6} className='mt-2'>
        <Button
          className='w-full text-white text-center shadow-4 p-4 d-flex align-items-center'
          
          onClick={() => navigate('/home')}
          style={{
            backgroundColor: "black",
            border: "none",
            fontSize: "1.4rem",
            maxHeight: '95px',
          }}
        >
          <span>Prodotti</span>
          <div className="ml-auto ms-2">
            <MDBIcon color='secondary' fas icon="angle-right" />
          </div>
          <span className="ms-1">
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
              <image
                xlinkHref="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f6d2.svg"
                className="emoji"
                width="30"
                height="30"
              />
              <title>🛒</title>
            </svg>
          </span>
        </Button>
      </Col>

      <Col md={6} className='mt-2'>
        <Button
          className='w-full text-white text-center shadow-4 p-4 d-flex align-items-center'
          color='dark'
          onClick={!userInfo ? (() => navigate("/register")) : (() => navigate(`/profile/${userInfo._id}`))}
          style={{
            backgroundColor: "black",
            border: "none",
            fontSize: "1.4rem",
            maxHeight: '95px'
          }}
          data-mdb-ripple-duration="0s"
        >
          {!userInfo ? (
            <>Registrati</>
          ) : (
            <>Profilo</>
          )}
          <div className="ms-2">
            <MDBIcon color='secondary' fas icon="angle-right" />
          </div>
          <span className="ms-3 me-3">
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
              <image
                xlinkHref="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f680.svg"
                className="emoji"
                width="30"
                height="30"
              />
              <title>🚀</title>
            </svg>
          </span>
        </Button>
      </Col>
      


</Row>
        <Col md={6} className='mt-10 mb-10'>
            {/* Aggiungi il div solo su dispositivi mobili */}
            <div className="mobile-only-div shadow-3" style={{ textAlign: "center", marginTop: "20px" }}>
            <div style={{backgroundColor:"white", fontWeight:"bolder", fontSize:"1.4rem", }} className='p-3 rounded-3 '>
            <span>
              <svg className="me-1"width="30" height="30" xmlns="http://www.w3.org/2000/svg" >
                        <image
                          xlinkHref="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4b8.svg"
                          className="emoji"
                          width="30"
                          height="30"
                        />
                        <title>💸</title>
                      </svg>Registrati        
          <a href="bronci.com" target="_blank" className="ms-1 me-1 w-full square rounded-2 pe-2  hover-zoom zoom" style={{ color:"white", backgroundColor: '#1F51FF' }}>
            <FaExternalLinkAlt
              
              size={20}
              className='icons__cart me-0  text-white ps-1 me-1 ms-1 cursor-pointer'
            />
            QUI
          </a>
          per degli sconti fino a 144$ su pandabuy! <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" >
                        <image
                          xlinkHref="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4b8.svg"
                          className="emoji"
                          width="30"
                          height="30"
                        />
                        <title>💸</title>
                      </svg></span>
                      </div>
            </div>
        </Col>

    <br />
  </Container>
</DefaultLayout>



  );
};

export default HomePage;
