import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  Card,
} from 'react-bootstrap';

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { FaMinus, FaPlus, FaExternalLinkAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import DefaultLayout from '../../components/layouts/default-layout';
import Message from '../../components/UI/message';
import { useAppDispatch, useAppSelector } from '../../redux';
import { addToCart, getUserOrder, removeFromCart, AddCart, RemoveCart } from '../../redux/cart/cart-slice';
import { formatCurrencry } from '../../utils/helper';
import { AnyListenerPredicate } from '@reduxjs/toolkit/dist/listenerMiddleware/types';
import { getProductById } from '../../redux/products/slice-details';

const CartPage = () => {
  //const { cartItems } = useAppSelector((state) => state.cart);
  //const { userInfo } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();
  //const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Aggiungi uno stato per il caricamento

  //const cartItems = dispatch(getUserOrder())
  //console.log(res)
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const resultAction = await dispatch(getUserOrder());
        if (resultAction.payload) {
          const items = resultAction.payload;
          setCartItems(items);
        } else {
          console.log("L'azione è stata respinta o rifiutata");
        }
        setIsLoading(false); // Imposta isLoading su false quando il caricamento è completo
      } catch (error) {
        console.error("Errore durante la chiamata:", error);
        setIsLoading(false); // Assicurati che isLoading sia impostato su false in caso di errore
      }
    };

    fetchCartItems();
  }, [dispatch]);

  const additem = async (product: any) => {
    try {
      const resultAction = await dispatch(AddCart(product));
      if (AddCart.fulfilled.match(resultAction)) {
        // Handle success
        console.log("Success");
  
        // After adding an item, fetch the updated cart data
        fetchCartItems();
      } else {
        // Handle failure
        console.log("AddCart action failed");
      }
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };

  const removeitem = async (product: any) => {
    try {
      const resultAction = await dispatch(RemoveCart(product));
      if (RemoveCart.fulfilled.match(resultAction)) {
        // Handle success
        console.log("Success");
  
        // After adding an item, fetch the updated cart data
        fetchCartItems();
      } else {
        // Handle failure
        console.log("RemoveCart action failed");
      }
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };
  
  const fetchCartItems = async () => {
    try {
      const resultAction = await dispatch(getUserOrder());
      if (resultAction.payload) {
        const items = resultAction.payload;
        setCartItems(items);
      } else {
        // Handle rejection or failure
        console.log("The action was rejected or failed");
      }
    } catch (error) {
      console.error("Error during the call:", error);
    }
  };
  

  const navigate = useNavigate();

  const imageStyle = {
    width: '80px', // Imposta la larghezza desiderata
    height: '80px', // Imposta l'altezza desiderata
  };

  if (isLoading) {
    return (
<DefaultLayout title='cart shop'>
  <Container className='mt-5 d-flex align-items-center justify-content-center' style={{ minHeight: '70vh' }}>
    <MDBSpinner grow>
      <span className='visually-hidden'>Loading</span>
    </MDBSpinner>  <span className='ms-3'>Loading</span>
  </Container>
</DefaultLayout>

    );
}
  
  return (
    <DefaultLayout title='Carrello | Prodotti salvati | w2c.space' >
      <Helmet>
        <title>Carrello | Prodotti salvati | w2c.space</title>
        <meta name="description" content="I tuoi elementi salvati su w2c.space per prodotti fidati su pandabuy" />
        <meta name="keywords" content="shopping cart, cart, checkout, w2c.space, saved, salvati, prodotti, pandabuy, finds, w2c, pandabuy finds, pandabuy prodotti" />
        <meta name="author" content="w2c.space" />
        <meta property="og:title" content="Shopping Cart" />
        <meta property="og:description" content="I tuoi elementi salvati su w2c.space per prodotti fidati su pandabuy" />
        <meta property="og:image" content="src/round.png" />
        <meta property="og:url" content="src/round.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shopping Cart" />
        <meta name="twitter:description" content="I tuoi elementi salvati su w2c.space per prodotti fidati su pandabuy" />
        <meta name="twitter:image" content="src/round.png" />
      </Helmet>
      <Container className='mt-5'>
        {cartItems.length === 0 ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
  <div className='section-title text-center' style={{ margin: 'auto', maxWidth: '600px' }}>
    <h2 style={{ fontWeight: 'bold' }}>
      Il tuo carrello è vuoto, vai ad aggiungere dei prodotti!
    </h2>
    <h3 style={{ fontWeight: 'normal' }} className='mt-3'>
      <MDBIcon fas icon="external-link-alt" />
      <Link to='/home' className='mx-3'>
        Torna alla home
      </Link>
    </h3>
  </div>
</div>

        ) : (
          <Row>
            <Col md={8}>
              <br/>
              <div className="" style={{border:"none"}}>
  <MDBCard className='p-5 text-center shadow-1 w-100' style={{border:"none"}}>
    
    <h2 style={{ fontWeight: "bold", color: "black" }}>
    <svg className="me-5" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
        <image
          xlinkHref="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f31f.svg"
          className="emoji"
          width="30"
          height="30"
        />
        <title>⭐️</title>
      </svg>
            Your saved items
      <svg className="ms-5" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
        <image
          xlinkHref="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f31f.svg"
          className="emoji"
          width="30"
          height="30"
        />
        <title>⭐️</title>
      </svg>
    </h2>
  </MDBCard>
</div>


              <br/>
              <ListGroup variant='flush'>
                {cartItems.map((item: any) => (
    <ListGroup.Item key={item._id} className='cart-item p-2 p-md-4 mb-2'>
<MDBCard className="mb-3 hover-zoom zoom  shadow-2 pt-1 pb-1">
<MDBCardBody className="d-flex justify-content-between align-items-center flex-wrap pe-3">
    <div className="d-flex flex-row align-items-center me-3 mb-2 mb-md-0">
      <div>
      <a href={`/products/${item._id}`} target="_blank">
        <MDBCardImage
          src={item.image}
          fluid
          className="rounded-3"
          style={{ width: "65px" }}
          alt="Item image"
        />
        </a>
      </div>
      <div>
      <a href={`/products/${item._id}`} target="_blank">
        <MDBTypography tag="h5" className="ms-3 mb-2">
          {item.name}
        </MDBTypography>
      </a>
        <p className="small mb-0 ms-3">
          <a href={item.pandabuy_url} target="_blank" className="p-1 w-full square rounded-2 pe-2  hover-zoom zoom" style={{ color:"white", backgroundColor: '#332D2D' }}>
            <FaExternalLinkAlt
              
              size={20}
              className='icons__cart me-0  text-white p-1 cursor-pointer'
            />
            Pandabuy.com
          </a>
        </p>
      </div>
    </div>
    <div className="d-flex flex-row align-items-center ms-6 flex-wrap mb-md-0">
      <div className="me-3 mb-2 mb-md-0" style={{ width: "50px" }}>
      
        <MDBTypography
          tag="h5"
          className="fw-normal mb-0"
        >
          {item.qty}
        </MDBTypography>
      </div>
      <div className="me-3 mb-2 mb-md-0" style={{ minWidth: "80px" }}>
        <MDBTypography tag="h5" className="mb-0">
          {formatCurrencry(item.price * item.qty)}
        </MDBTypography>
      </div>
      <div className="d-flex flex-row align-items-center flex-wrap justify-content-end mb-2 mb-md-0">
        <FaPlus
          onClick={() => additem(item)}
          size={24}
          style={{ backgroundColor: '#14A44D' }}
          className='icons__cart m-2 rounded-circle text-white p-1 cursor-pointer'
        />
        <FaMinus
          size={24}
          style={{ backgroundColor: '#DC4C64' }}
          className='icons__cart m-2 rounded-circle text-white p-1 cursor-pointer'
          onClick={() => removeitem(item)}
        />
      </div>
    </div>
  </MDBCardBody>
</MDBCard>
  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col md={4}>
            <MDBCard className="mb-6 shadow-4">
      <MDBCardBody>
      <h2 className='mb-3' style={{fontWeight:"bold"}}>Cart
      <svg className="ms-3"width="30" height="30" xmlns="http://www.w3.org/2000/svg" >
                        <image
                          xlinkHref="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f6d2.svg"
                          className="emoji"
                          width="30"
                          height="30"
                        />
                        <title>🛒</title>
                      </svg>
         </h2>
        <ListGroup variant='flush'>
          <ListGroup.Item as='h2'>
          Subtotal ({cartItems.reduce((acc, item: any) => acc + item.qty, 0)} items)
          </ListGroup.Item>
          <ListGroup.Item className='d-flex justify-content-between align-items-center'>
            <span>Total Price:</span>
            <span style={{ fontWeight: 'bold' }}>
              {formatCurrencry(
                cartItems.reduce((acc, item: any) => acc + item.price * item.qty, 0)
              )}
            </span>
          </ListGroup.Item>
          <ListGroup.Item className='d-flex justify-content-between align-items-center'>
            <MDBBtn
              className='w-full text-white me-2'
              color='dark'
              onClick={() => navigate('/')}
              style={{ maxHeight: '47px' }}
            >
              Search items
              <MDBIcon className='ms-3' fas icon="angle-right" />
            </MDBBtn>
          </ListGroup.Item>
        </ListGroup>
      </MDBCardBody>
    </MDBCard>
            </Col>
          </Row>
        )}
      </Container>
    </DefaultLayout>
  );
  
};

export default CartPage;
