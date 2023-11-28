type Props = {
  value: number;
  text?: string;
  color?: string;
};

const Rating = ({ value, text, color = '#f8e825' }: Props) => {
  return (
    <div className='rating mx-3 mb-2'>
      <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? 'bi bi-star-fill'
              : value >= 0.5
              ? 'bi bi-star-half'
              : 'bi bi-star-fill'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? 'bi bi-star-fill'
              : value >= 1.5
              ? 'bi bi-star-half'
              : 'bi bi-star-fill'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 3
              ? 'bi bi-star-fill'
              : value >= 2.5
              ? 'bi bi-star-half'
              : 'bi bi-star-fill'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 4
              ? 'bi bi-star-fill'
              : value >= 3.5
              ? 'bi bi-star-half'
              : 'bi bi-star-fill'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? 'bi bi-star-fill'
              : value >= 4.5
              ? 'bi bi-star-half'
              : 'bi bi-star-fill'
          }
        ></i>
      </span>
      <span>{text && text}</span>
    </div>
  );
};

export default Rating;
