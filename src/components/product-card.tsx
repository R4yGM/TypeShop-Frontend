import { Suspense } from 'react';
import {
  Container
} from 'react-bootstrap';
import { formatCurrencry } from '../utils/helper';
import { ReviewTypes } from '../utils/interfaces';
import { MDBCard, MDBCardBody, MDBCardImage, MDBBtn,MDBSpinner } from 'mdb-react-ui-kit';
export type Product = {
  _id: number | string;
  name: string;
  price: number;
  image: string;
  pandabuy_url: string;
  pandabuy_affiliate: string;
  category: string;
  brand: string;
  qty: number;
  createdAt: Date;
  reviews: ReviewTypes[];
};

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const cardStyle = {
    borderRadius: '30px',
    overflow: 'hidden', // Nascondi l'overflow
    width: '100%', // Set the card's width to 100%
    maxWidth: '400px'
  };


  
  const redirectToProductDetails = () => {
    window.location.href = `/products/${product._id}`;
  };

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
      }else if (product.pandabuy_affiliate.includes("tmall")){
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

    <MDBCard style={cardStyle} className='w-75 h-75 my-3 rounded hover-shadow hover-zoom zoom'>
  <div style={{ position: 'relative' }}>
  <Suspense fallback={  
        <Container className='mt-5 d-flex align-items-center justify-content-center' style={{ minHeight: '70vh' }}>
          <MDBSpinner grow>
            <span className='visually-hidden'>Loading</span>
          </MDBSpinner>  <span className='ms-3'>Loading</span>
        </Container>}>
          <a href={`/products/${product._id}`} target='_blank'>
            <MDBCardImage
              src={product.image}
              alt='Immagine del prodotto'
              fluid
              className='w-100 rounded'
              style={{
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '15px',
                objectFit: 'cover',
                width: '100%',
                height: '30vh',
              }}
            />
          </a>
        </Suspense>
    </div>
    <MDBCardBody className='pb-0'>
      <div className='d-flex justify-content-between'>
        
        <div>
          
          <p>
            
            <a href={`/products/${product._id}`} className='text-dark'>
            {product.name}
            </a>
          </p>
          <p className='small text-muted mb-2'>{product.brand} {product.category}</p>
          <div>
        <h5><span className="badge bg-dark mb-4 p-2 text-light fs-5 ">{formatCurrencry(product.price)} 
        
        <svg className="ms-1"width="15" height="15" xmlns="http://www.w3.org/2000/svg" >
                        <image
                          xlinkHref="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4b8.svg"
                          className="emoji"
                          width="15"
                          height="15"
                        />
                        <title>💸</title>
                      </svg>

        </span></h5>

                              
        </div>
        </div>
      </div>
    </MDBCardBody>
    <hr className='my-0' />
    <MDBCardBody className='pb-2'>
  <div className='d-flex justify-content-between align-items-center pb-2 mb-1' >
    <a href={product.pandabuy_url} target="_blank" className="w-full">
      <MDBBtn
        outline
        style={{ maxHeight: '47px', whiteSpace: 'nowrap', fontSize: "1rem", overflow: 'hidden' }} // Imposta white-space su nowrap e overflow su hidden
        type="button"
        className="w-full pandabuy"
        color='success'
      >
        Vai su pandabuy
      </MDBBtn>
    </a>
  </div>
  {customUrl && (  // Condizione: Mostra il pulsante solo se customUrl esiste
    <div className='d-flex justify-content-between align-items-center pb-2 mb-4'>
      <a href={customUrl} target="_blank" className="w-full">
        <MDBBtn
          outline
          style={{ maxHeight: '47px', whiteSpace: 'nowrap', fontSize: "1rem", overflow: 'hidden' }} // Imposta white-space su nowrap e overflow su hidden
          type="button"
          className="w-full text-center"
          color='dark'
        >
          Quality Check
        </MDBBtn>
      </a>
    </div>
  )}
</MDBCardBody>

  </MDBCard>


  );
};

export default ProductCard;
