const Footer = () => {
  return (
    <div className='container d-md-flex py-4 '>
      <div className='me-md-auto text-center text-md-start mt-4 mb-4'>
        <div className='copyright'>
          © Copyright{' '}
          <strong>
            <span>W2C.SPACE</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className='credits'>
          Designed by <a href='#'>W2C.SPACE</a>
        </div>
        <div className='credits'>
          Contattaci su <a href='mailto:info@w2c.space'>info@w2c.space</a>
        </div>
        <div className='credits'>
          <a href='https://stats.uptimerobot.com/1O51ktnOZg' target='_blank'>Status Page</a>
        </div>
      </div>
      
      {/*
      <div className='social-links text-center text-md-end pt-3 pt-md-0'>
        <a href='#' className='twitter'>
          <i className='bx bxl-twitter' />
        </a>
        <a href='#' className='facebook'>
          <i className='bx bxl-facebook' />
        </a>
        <a href='#' className='instagram'>
          <i className='bx bxl-instagram' />
        </a>
        <a href='#' className='google-plus'>
          <i className='bx bxl-skype' />
        </a>
        <a href='#' className='linkedin'>
          <i className='bx bxl-linkedin' />
        </a>
      </div>
  */}
    </div>
  );
};

export default Footer;
