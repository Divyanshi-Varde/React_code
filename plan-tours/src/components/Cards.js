import { useState } from "react";

function Cards({ id, name, info, price, image, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  const description = readMore ? info : `${info.substring(0, 180)}...`;
  function readMoreHandler() {
    setReadMore(!readMore);
  }

  return (
    <div className="card">
      <img src={image} className="image" alt=""></img>
      <div>
        <div className="tour-details">
          <div className="tour-price">${price}</div>
          <div className="tour-name">{name}</div>
        </div>

        <div className="description">
          {description}
          <span className="readMore" onClick={readMoreHandler}>
            {readMore ? `Show Less` : `Read More`}
          </span>
        </div>
      </div>
      <button className="red-btn" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  )
}

export default Cards;
