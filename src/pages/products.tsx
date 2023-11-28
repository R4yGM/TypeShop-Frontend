import { useEffect, useState } from 'react';
import {
  Row,
  Container,
  Col,
  Card,
  Form,
  ListGroup,
  FloatingLabel
} from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import {
  MDBIcon,
} from "mdb-react-ui-kit";
import { useParams } from 'react-router-dom';
import DefaultLayout from '../components/layouts/default-layout';
import ProductCard from '../components/product-card';
import Paginate from '../components/UI/paginate';
import { useAppDispatch, useAppSelector } from '../redux';
import { getFilterProducts } from '../redux/products/search-list';




const Products = () => {
  const params = useParams();
  const { products, categories, brands, page, pages } = useAppSelector(
    (state) => state.productFilter
  );
  const dispatch = useAppDispatch();
  const [brand, setBrand] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const keyword = params.keyword;

  const pageNumber = params.pageNumber || 1;

  const resetBrand = () => {
    setBrand('');
  };
  const resetCategory = () => {
    setCategory('');
  };

  useEffect(() => {
    dispatch(
      getFilterProducts({ n: pageNumber, b: brand, c: category, q: search })
    );
  }, [dispatch, pageNumber, brand, search, category]);

  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const toggleDropdown = () =>{ setOpen(!isOpen);}
  
  const handleItemClick = (id: any) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    if(id == "Tutti"){
      resetBrand();
      setOpen(false);
    }else{
      setBrand(id);
      setOpen(false);
    }

  }


  return (
    <DefaultLayout>
      <Helmet>
        <title>Cerca prodotti | w2c.space</title>
        <meta name="description" content="Cerca prodotti aggiunti quotidianamente validi e fidati già acquistati da altri utenti italiani su pandabuy!" />
        <meta name="keywords" content="Prodotti, categorie, brands, ricerca, marca" />
        <meta name="author" content="w2c.space" />
        <meta property="og:title" content="Cerca prodotti" />
        <meta property="og:description" content="Cerca prodotti aggiunti quotidianamente validi e fidati già acquistati da altri utenti italiani su pandabuy!" />
        <meta property="og:image" content="src/round.png" />
        <meta property="og:url" content="src/round.png" />
        <meta name="twitter:card" content="src/round.png" />
        <meta name="twitter:title" content="Products Page" />
        <meta name="twitter:description" content="Cerca prodotti aggiunti quotidianamente validi e fidati già acquistati da altri utenti italiani su pandabuy!" />
        <meta name="twitter:image" content="src/round.png" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Container className='mt-5'>
        <Row>
          <Col lg={3}>
            <h2 className='py-4' style={{fontWeight:"500"}}>Filtro <i className="bi bi-sort-alpha-down" style={{fontSize:"2rem"}}></i></h2>
            <Card className='shadow mb-5' style={{border:"none"}}>
              <ListGroup variant='flush' >
                <ListGroup.Item className='p-6' >
                <h3 className='mb-3' style={{fontWeight:"700"}}>Categoria 
                </h3>
      <Form.Check
        type='radio'
        label='Tutti'
        name='category'
        value='Tutti'
        checked={category === ''}
        onChange={resetCategory}
        className='form-check-lg ms-3'   
        
        style={{fontWeight:"200", fontSize:"17px", color:"#332D2D"}}
      />
      {categories.map((categorie: any) => (
        <Form.Check
          type='radio'
          label={categorie}
          name='category'
          value={categorie}
          checked={category === categorie}
          onChange={() => setCategory(categorie)}
          key={categorie}
          className='form-check-lg ms-3'
          style={{fontWeight:"200", fontSize:"17px"}}
        />
      ))}
                </ListGroup.Item>
                <ListGroup.Item className='p-6'>
                <h3 className='mb-3' style={{fontWeight:"700"}}>Brand</h3> 
      {/*   
      <Dropdown>
      <Dropdown.Toggle variant="dark" id="brand-dropdown">
        Select Brand
      </Dropdown.Toggle>
      <Dropdown.Menu style={{ minWidth: 'auto', maxWidth: 'none' }}>
        <Dropdown.Item onClick={resetBrand}>All</Dropdown.Item>
        {brands.map((brand: any) => (
          <Dropdown.Item key={brand} onClick={() => setBrand(brand)} style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', maxWidth: '100%' }}>
            {brand}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  */}
    <div className='dropdownn w-100'>
      <div className='dropdownn-header' onClick={toggleDropdown}>
      {selectedItem === "" ? "Seleziona un brand" : selectedItem === "Tutti" ? "Tutti" : (brands.includes(selectedItem) ? selectedItem : "Seleziona un brand")}

        <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
      </div>
      <div className={`dropdownn-body ${isOpen && 'open'}`}>
      <div className={`dropdownn-item ${"Tutti" == selectedItem && 'selected-item'}`} id="Tutti" onClick={e => handleItemClick((e.target as HTMLDivElement).id)}>
            <span className={`dropdownn-item-dot ${"Tutti" == selectedItem && 'selected'}`}>• </span>
            Tutti
      </div>
        {brands.map(item => (
          <div className={`dropdownn-item ${item == selectedItem && 'selected-item'}`} id={item} onClick={e => handleItemClick((e.target as HTMLDivElement).id)}>
            <span className={`dropdownn-item-dot ${item == selectedItem && 'selected'}`}>• </span>
            {item}
          </div>
        ))}
      </div>
    </div>
                  
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col lg={9}>
            <Row>
              <div className=' pb-4'>
                <div className=''>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Search"
                    className="mb-3"
                  >
                  <Form.Control
                    onChange={(e: any) => setSearch(e.target.value)}
                    className='me-2 w-100'
                    placeholder=''
                    value={search}
                    style={{border:"none"}}
                  />
                  </FloatingLabel>
                </div>
               
              </div>
            </Row>
            <Row md={6} className='d-flex justify-content-center mb-5' style={{ minHeight: '80vh', margin:"auto" }} >
              {products.map((product) => (
                <Col lg={4} md={6} xs={10} key={product._id} >
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Paginate
          pages={pages}
          page={page}
          keyword={keyword ? keyword : ''}
          isAdmin={false}
        />
      </Container>
    </DefaultLayout>
  );
};

export default Products;
