import { Pagination } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';

type Props = {
  pages: number;
  page: number;
  isAdmin?: boolean;
  keyword: string;
  brand: string;
  category: string;
  search: string;
};

const Paginate = ({ pages, page, isAdmin = false, keyword = '', search, brand, category }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      {pages > 1 && (
        <Pagination>
          {[...Array(pages).keys()].map((x) => (
            <Pagination.Item
              key={x + 1}
              active={x + 1 == page}
              onClick={() => {
                if (!isAdmin) {
                  if (keyword) {
                    navigate(`/search/${keyword}/page/${x + 1}`);
                  } else {
                    navigate(`/home?q=${search}&page=${x + 1}&brand=${brand}&category=${category}`);
                  }
                } else {
                  navigate(`/dashboard/product-list/${x + 1}`);
                }
              }}
            >
              {x + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      )}
    </>
  );
};

export default Paginate;
