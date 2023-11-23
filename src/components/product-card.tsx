import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { formatCurrencry } from '../utils/helper';
import { ReviewTypes } from '../utils/interfaces';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple, MDBIcon } from 'mdb-react-ui-kit';
import { SiFoodpanda } from 'react-icons/si';
import { AiOutlineLink } from 'react-icons/ai';
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
  <a href={`/products/${product._id}`} target='_blank'>
      <MDBCardImage
        src={product.image}
        fluid
        className='w-100 rounded'
        style={{
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px',
          objectFit: 'cover', // Imposta l'objectFit su 'cover'
          width: '100%',
          height: '30vh', 
        }}
      />
      
      </a>
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
        View on pandabuy
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
