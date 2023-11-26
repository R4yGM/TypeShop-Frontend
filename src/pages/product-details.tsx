import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Row,
} from 'react-bootstrap';
import { MDBIcon,MDBCard, MDBCardBody, MDBBtn } from 'mdb-react-ui-kit';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { SiFoodpanda } from 'react-icons/si';
import { GoLinkExternal } from 'react-icons/go';
import { useNavigate, useParams } from 'react-router-dom';
import DefaultLayout from '../components/layouts/default-layout';
import { Product } from '../components/product-card';
import Loader from '../components/UI/loader';
import Message from '../components/UI/message';
import Rating from '../components/UI/rating';
import RedButton from '../components/UI/red-button';
import { useAppDispatch, useAppSelector } from '../redux';
import { addToCart, AddCart } from '../redux/cart/cart-slice';
import { getProductById } from '../redux/products/slice-details';
import authAxios from '../utils/auth-axios';
import { setError } from '../utils/error';
import { formatCurrencry, getDate } from '../utils/helper';

const ProductDetails = () => {
  const dispatch = useAppDispatch();
  const { product, loading } = useAppSelector((state) => state.productDetail);
  const { userInfo } = useAppSelector((state) => state.login);
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [refresh, setRefresh] = useState<boolean>(false);

  const onAdd = () => {
    dispatch(AddCart(product as Product))
    //dispatch(addToCart(product as Product));
    //navigate('/cart');
  };
  

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const review = {
      comment,
      rating,
    };
    authAxios
      .post(`/products/${product?._id}/reviews`, review)
      .then((res) => {
        toast.success('thank you for the comment 🙂');
        setRefresh((prev) => (prev = !prev));
      })
      .catch((err) => toast.error(setError(err)));
  };

  useEffect(() => {
    dispatch(getProductById(id));
    window.scrollTo(0, 0);
  }, [id, dispatch, refresh]);

  let itemId;
  var customUrl:any = null;

    try {
  
      const pandabuyUrlObj = new URL(product.pandabuy_affiliate);
      const searchParams = new URLSearchParams(pandabuyUrlObj.search);
    
      var pandabuyUrl = searchParams.get("url");
      const isYupooLink = pandabuyUrl && pandabuyUrl.includes("yupoo");
      
      if (isYupooLink) {
        const match = pandabuyUrl.match(/albums\/([^/]+)/);
        if (match) {
          itemId = match[1];
        }
      } else if (pandabuyUrl && pandabuyUrl.includes("weidian.com")) {
        const url = new URL(pandabuyUrl);
        const searchParams = new URLSearchParams(url.search);
        itemId = searchParams.get("itemID");
      }else if (pandabuyUrl && pandabuyUrl.includes("taobao.com")) {
        const url = new URL(pandabuyUrl);
        const searchParams = new URLSearchParams(url.search);
        itemId = searchParams.get("id");
      }

    } catch (error) {
      console.log(error)
    }

  
  if (itemId) {
    // Creare un'altra variabile con qc.pandabuy/qg?g= e l'itemId
    customUrl = `https://qc.pandabuy.com/qc?g=${itemId}`;
  }


  return (
    <DefaultLayout title={product?.name}>
      {loading || !product ? (
        <Loader />
      ) : (
        <Container className='mt-7'>
          <Row>
          <Col md={5}>
            <Card className='shadow-4 mb-3'>
              <Image
                rounded
                src={product?.image}
                style={{ objectFit :'cover', width: '100%', height: 'auto', maxWidth: '100%', maxHeight: '590px' }}
              />
            </Card>
          </Col>

            <Col md={5}>
              <ListGroup
                variant='flush'
                className='shadow-4 p-8 bg-white rounded'
              >
                <h2 className='mb-3' style={{fontWeight:"medium", fontSize:"xx-large"}}>{product?.name}    <hr style={{ border: '0', borderBottom: '1px solid #ccc', margin: '20px 0' }} />
</h2>
                  
                <ListGroup.Item>
                  <h5 className=' d-flex justify-content-between align-items-center'>
                    <span style={{fontSize:"x-large",fontWeight:"300"}} >Price</span>
                    <span className="badge bg-dark p-2 text-light" style={{fontSize:"medium"}}>{formatCurrencry(product.price)} 
        
                      <svg className="ms-2"width="20" height="20"  xmlns="http://www.w3.org/2000/svg" >
                                      <image
                                        xlinkHref="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4b8.svg"
                                        className="emoji"
                                        width="20"
                                        height="20"
                                      />
                                      <title>💸</title>
                                    </svg>

                    </span>
                  </h5>
                </ListGroup.Item>

                <ListGroup.Item>
                <h5 className=' d-flex justify-content-between align-items-center'>
                    <span style={{fontSize:"x-large",fontWeight:"300"}} >Category</span>
                    <span className="badge bg-dark p-2 text-light" style={{fontSize:"medium"}}>{product.category} 
        
                      <svg className="ms-2"width="20" style={{fill:"white"}}  height="20" xmlns="http://www.w3.org/2000/svg" >
                                      <image
                                        xlinkHref="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f97c.svg"
                                        className="emoji"
                                        width="20"
                                        height="20"
                                      />
                                      <title>🥼</title>
                                    </svg>

                    </span>
                  </h5>
                </ListGroup.Item>
                <div className='mt-4 mb-3'>
                  <h5 className=' d-flex justify-content-between align-items-center'>
                    <span style={{fontSize:"x-large",fontWeight:"300"}} >Brand</span>
                    <span className="badge bg-dark p-2 text-light " style={{fontSize:"medium"}}>{product.brand} 
        
                       <MDBIcon fas icon="copyright" className='ms-2' />


                    </span>
                  </h5>
                </div>

                    <MDBCardBody className='pb-1'>
                      <div className='d-flex justify-content-between align-items-center pb-2 mb-1' >
                        <a href={product.pandabuy_url} target="_blank" className="w-full">
                          <MDBBtn
                            outline
                            style={{ maxHeight: '47px', whiteSpace: 'nowrap', fontSize: "1rem", overflow: 'hidden' }} // Imposta white-space su nowrap e overflow su hidden
                            type="button"
                            className="w-full pandabuy"
                            color='success'
                          >
                            Buy on pandabuy
                            <MDBIcon className='ms-5' color='success' fas icon="angle-right" />
                          </MDBBtn>
                        </a>
                      </div>
                      {customUrl && (  // Condizione: Mostra il pulsante solo se customUrl esiste
                        <div className='d-flex justify-content-between align-items-center pb-2 mb-1'>
                          <a href={customUrl} target="_blank" className="w-full">
                            <MDBBtn
                              outline
                              style={{ maxHeight: '47px', whiteSpace: 'nowrap', fontSize: "1rem", overflow: 'hidden' }} // Imposta white-space su nowrap e overflow su hidden
                              type="button"
                              className="w-full text-center"
                              color='dark'
                            >
                              Quality Check
                              <MDBIcon className='ms-5' color='dark' fas icon="angle-right" />
                            </MDBBtn>
                          </a>
                        </div>
                      )}
                      <MDBBtn
                      outline
                        type="button"
                        color="warning"
                        onClick={onAdd}
                        className="w-full text-center"
                        style={{ maxHeight: '47px', whiteSpace: 'nowrap', fontSize: "1rem", overflow: 'hidden' }}
                      >
                        Save item
                        <MDBIcon className='ms-5' color='warning' fas icon="angle-right" />
                      </MDBBtn>
                    </MDBCardBody>
              </ListGroup>
            </Col>
          </Row>
          <hr></hr>
          <Row className='mt-2'>
            <Col md={5}>
              <Card className='shadow-4 mb-2 w-full'>
                <Card.Body>
                  <h3 style={{ color: 'black' }} >Reviews</h3>
                  <ListGroup variant='flush'>
                    {product.reviews.length === 0 ? ( // Controlla se non ci sono recensioni
                      <ListGroup.Item>
                        <p>No reviews</p>
                      </ListGroup.Item>
                    ) : (
                      product.reviews.map((review) => (
                        <ListGroup.Item key={review._id}>
                          <div className='d-flex'>
                            <strong>{review.name}</strong>
                            <Rating value={review.rating} />
                            <p>{getDate(review.createdAt)}</p>
                          </div>
                          <p>{review.comment}</p>
                        </ListGroup.Item>
                      ))
                    )}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col md={5}>
              <ListGroup className='p-1 mb-7'>
                <ListGroup.Item style={{ backgroundColor:"white" }} className='shadow-4'>
                  <h3  color='dark' >Post a review</h3>
                  {userInfo ? (
                    <Form onSubmit={onSubmit}>
                      <Form.Group controlId='rating'>
                        <Form.Label style={{fontWeight:"300"}}>Rating</Form.Label>
                        <Form.Control
                          required
                          onChange={(e: any) => setRating(e.target.value)}
                          as='select'
                          style={{ border: '1px solid #ced4da', outline: 'none' }}
                        >
                          <option value={1}>⭐️</option>
                          <option value={2}>⭐⭐</option>
                          <option value={3}>⭐⭐⭐</option>
                          <option value={4}>⭐⭐⭐⭐</option>
                          <option value={5}>⭐⭐⭐⭐⭐</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId='comment'>
                        <Form.Label style={{fontWeight:"300"}}>Comment</Form.Label>
                        <Form.Control
                          required
                          onChange={(e) => setComment(e.target.value)}
                          as={'textarea'}
                          style={{ border: '1px solid #ced4da', outline: 'none' }}

                          rows={3}
                        />
                      </Form.Group>

                      <MDBBtn
                              outline
                              style={{ maxHeight: '47px', whiteSpace: 'nowrap', fontSize: "1rem", overflow: 'hidden' }} // Imposta white-space su nowrap e overflow su hidden
                              type="submit"
                              className="w-full text-center mt-2"
                              color='dark'
                            >
                              Submit
                              <MDBIcon className='ms-5' color='dark' fas icon="angle-right" />
                            </MDBBtn>
                    </Form>
                  ) : (
                    <Message>
                      You must login first to feedback{' '}
                      <Link to='/login' className='ms-2'>
                        Login Now
                      </Link>
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      )}
    </DefaultLayout>
  );
};

export default ProductDetails;
