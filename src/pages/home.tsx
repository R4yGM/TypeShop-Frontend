import { useEffect } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import DefaultLayout from '../components/layouts/default-layout';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../redux';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector((state: any) => state.login);
  //const { products, loading } = useAppSelector((state) => state.productList);

  useEffect(() => {
    //dispatch(getProducts());
  }, [dispatch]);
  const navigate = useNavigate();
  const currentUrl = window.location.href;

  return (
<DefaultLayout>
<Helmet>
        <title>#1 W2C Italiano - Where To Cop italiano per prodotti su pandabuy.com</title>
        <meta
          name="description"
          content="Dove trovare prodotti italiani su pandabuy.com. Registrati per sconti fino a 144$. Prodotti aggiunti quotidianamente, stai cercando un prodotto? te lo troviamo noi per te!"
        />

        <link rel="canonical" href={currentUrl} />

        {/* Meta tag per Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="#1 W2C Italiano" />
        <meta property="og:description" content="Dove trovare prodotti italiani su pandabuy.com. Registrati per sconti fino a 144$. Prodotti aggiunti quotidianamente, stai cercando un prodotto? te lo troviamo noi per te!" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content="src/round.png" /> 
        <meta property="og:type" content="website" />

        {/* Meta tag per Twitter Cards */}
        <meta name="twitter:title" content="#1 W2C Italiano" />
        <meta name="twitter:description" content="Dove trovare prodotti italiani su pandabuy.com. Registrati per sconti fino a 144$. Prodotti aggiunti quotidianamente, stai cercando un prodotto? te lo troviamo noi per te!" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:image" content="src/round.png" /> 
        <meta name="twitter:card" content="summary_large_image" />
  </Helmet>
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
    <h1 style={{  color: 'white', fontWeight: "bold",textAlign: 'center', fontSize:"3.875rem"}} className='mt-20 '>
      #1 <span className="fancy">W2C</span> Italiano 
      <svg className="ms-3" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <image
          xlinkHref="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1ee-1f1f9.svg"
          className="emoji"
          width="100"
          height="100"
          alt="flag🇮🇹"
        />
        <title>flag🇮🇹</title>
      </svg>
    </h1>
    <br />
    <h2 style={{color:"#FBFBFB", fontWeight:"300",textAlign: 'center'}} className='mt-2' >Where To Cop italiano per prodotti fidati su pandabuy.com</h2>
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
            <i className="bi bi-caret-right"></i>
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
            <i className="bi bi-caret-right"></i>
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
            <div style={{backgroundColor:"white", fontWeight:"bolder", fontSize:"1.4rem",color:"black" }} className='p-3 rounded-3 '>
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
          <a href="https://pandabuy.allapp.link/clhrvn90b4msdaf2k0fg" target="_blank" className="ms-1 me-1 w-full square rounded-2 pe-2  hover-zoom zoom" style={{ color:"white", backgroundColor: '#1F51FF' }}>
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
