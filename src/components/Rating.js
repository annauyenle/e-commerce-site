import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Rating = ({ rating, onClick }) => {
  return (
    <div>
      {[...Array(5)].map((_, i) =>
        <div key={i} onClick={() => { onClick(i+1) }}>
          {rating > i ? <AiFillStar fontSize="15px" /> : <AiOutlineStar fontSize="15px" />}
        </div>
      )}
    </div>
  );
};

export default Rating;
