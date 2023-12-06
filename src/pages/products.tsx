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
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import {
  MDBIcon,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import DefaultLayout from '../components/layouts/default-layout';
import ProductCard from '../components/product-card';
import Paginate from '../components/UI/paginate';
import { useAppDispatch, useAppSelector } from '../redux';
import { getFilterProducts } from '../redux/products/search-list';




const Products = () => {
  const history = useNavigate();
  const location = useLocation();
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
    const urlSearchParams = new URLSearchParams(location.search);
    const q = urlSearchParams.get('q') || '';
    const page = urlSearchParams.get('page') || 1;
    const brand = urlSearchParams.get('brand') || '';
    const category = urlSearchParams.get('category') || '';

    dispatch(getFilterProducts({ n: page, b: brand, c: category, q: q }));
  }, [dispatch, location.search]);

  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const toggleDropdown = () =>{ setOpen(!isOpen);}
  
  //set and reset delle categorie
  const handleCat = (categoria: any) => {
    setCategory(categoria.target.value)
    history(`?q=${search}&page=${pageNumber}&brand=${brand}&category=${category}`);
  }
  const handleResetCat = () => {
    setCategory("")
    history(`?q=${search}&page=${pageNumber}&brand=${brand}&category=${category}`);
  }

  //set brand
  const handleItemClick = (id: any) => {
    setSelectedItem(id === selectedItem ? null : id);
    
    const newBrand = id === 'Tutti' ? '' : id;
    
    setBrand(newBrand);
  
    // Verifica se i valori sono cambiati prima di aggiornare l'URL
    if (brand !== newBrand) {
      // Aggiorna l'URL con i nuovi parametri
      history(`?q=${search}&page=${pageNumber}&brand=${newBrand}&category=${category}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // Esegui la logica di aggiornamento della ricerca o chiama la tua funzione
      setSearch(e.target.value)
      //dispatch(getFilterProducts({ n: pageNumber, b: brand, c: category, q: search }));
      history(`?q=${search}&page=${pageNumber}&brand=${brand}&category=${category}`);

    }
  };
  //bottone di ricerca
  const handleSearchBTN = (e: React.KeyboardEvent<HTMLInputElement>) => {
      setSearch(document.getElementById("floatingInput").value);
      history(`?q=${search}&page=${pageNumber}&brand=${brand}&category=${category}`);
  };


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
        onChange={handleResetCat}
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
          onChange={handleCat}
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
                <MDBInputGroup className="mb-3">
                <FloatingLabel
                    controlId="floatingInput"
                    label="Cerca"
                  >
                  <Form.Control
                    onKeyDown={handleKeyDown}
                    onChange={(e: any) => setSearch(e.target.value)}
                    className=' w-100'
                    placeholder=''
                    value={search}
                    style={{border:"none"}}
                  />
                  </FloatingLabel>
                    <Button variant="dark" onClick={handleSearchBTN}>
                      <i className="bi bi-search"></i>
                    </Button>
                  </MDBInputGroup>
                </div>
               
              </div>
            </Row>
            <Row md={6} className='d-flex justify-content-center mb-5' style={{ minHeight: '80vh', margin:"auto" }} >
              {products.map((product) => (
                <Col lg={4} md={6} xs={10} key={product._id} >
                  <ProductCard product={product} />
                </Col>
              ))}
              <style>
                {`
                  .page-item.active .page-link {
                    color: white !important;
                    background-color: #16192c !important;
                    border-color: #16192c !important;
                  }
                  .page-item {
                    padding-top:15px;
                    padding-bottom:15px;
                  }
                  .page-link {
                    font-size: 1.2rem !important;
                  }
                `}
              </style>
              <Col md={6} className='mt-2'>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Paginate
                  pages={pages}
                  page={page}
                  keyword={keyword ? keyword : ''}
                  search={search}
                  brand={brand}
                  category={category}
                />
                </div>
              </Col>
            </Row>
            
          </Col>

        </Row>

      </Container>
    </DefaultLayout>
  );
};

export default Products;
