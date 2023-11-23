import React, { useEffect, useState } from 'react';
import {
  Row,
  Container,
  Col,
  Card,
  Form,
  ListGroup,
  FloatingLabel,
  Dropdown,
} from 'react-bootstrap';

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

  const reset = () => {
    setBrand('');
    setCategory('');
    setSearch('');
  };
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
  const [items, setItem] = useState(brands);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const toggleDropdown = () =>{ setOpen(!isOpen);}
  
  const handleItemClick = (id: any) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    if(id == "All"){
      resetBrand();
      setOpen(false);
    }else{
      setBrand(id);
      setOpen(false);
    }

  }


  return (
    <DefaultLayout>
      <Container className='mt-5'>
        <Row>
          <Col lg={3}>
            <h2 className='py-4' style={{fontWeight:"500"}}>Filter <MDBIcon fas icon="sort-alpha-down-alt" /></h2>
            <Card className='shadow mb-5' style={{border:"none"}}>
              <ListGroup variant='flush' >
                <ListGroup.Item className='p-6' >
                <h3 className='mb-3' style={{fontWeight:"700"}}>Category 
                </h3>
      <Form.Check
        type='radio'
        label='All'
        name='category'
        value='All'
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
      {selectedItem === "" ? "Select a brand" : selectedItem === "All" ? "All" : (brands.includes(selectedItem) ? selectedItem : "Select a brand")}

        <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
      </div>
      <div className={`dropdownn-body ${isOpen && 'open'}`}>
      <div className={`dropdownn-item ${"All" == selectedItem && 'selected-item'}`} id="All" onClick={e => handleItemClick((e.target as HTMLDivElement).id)}>
            <span className={`dropdownn-item-dot ${"All" == selectedItem && 'selected'}`}>• </span>
            All
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
