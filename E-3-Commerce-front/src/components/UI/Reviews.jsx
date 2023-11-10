// Review.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews, postReview, editReview } from '../../store/reviewSlice';
import { selectUserById } from '../../store/userSlice';
import {RatingInput} from './RatingInput';


const Review = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.reviews);
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  const [newReviewData, setNewReviewData] = useState({
    comment: '',
    rating: 0,
    id_user: 1, // Reemplaza con el ID de usuario correcto
    id_product: 1,
    id_order: 1,
  });

  const handlePostReview = async () => {
    try {
      await dispatch(postReview(newReviewData));
      dispatch(getReviews());
      setNewReviewData({
        comment: '',
        rating: 0,
        id_user: 1,
        id_product: 1,
        id_order: 1,
      });
    } catch (error) {
      console.error('Error al agregar una nueva revisión:', error.message);
    }
  };

  const handleInputChange = (e) => {
    setNewReviewData({
      ...newReviewData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditReview = async (id) => {
    console.log('Editar Review', id);
    await dispatch(
      editReview({
        id,
        comment: 'Comentario editado',
        rating: 4,
      })
    );
  };

  return (
    <div className="flex justify-center mt-20 border-black">
    <div>
      <label>
        Comentario:
        <input
          type="text"
          name="comment"
          value={newReviewData.comment}
          onChange={handleInputChange}
        />
      </label>
      <RatingInput rating={newReviewData.rating} handleInputChange={handleInputChange} />
      <button
        className="mt-5 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={handlePostReview}
      >
        Agregar Review
      </button>
    </div>
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <p>Comentario: {review.comment}</p>
          <p>Rating: {review.rating}</p>
          <p>
            Usuario: {selectUserById(users, review.id_user)?.username || 'Desconocido'}
          </p>
          <button
            className="mt-5 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => handleEditReview(review.id)}
          >
            Editar
          </button>
        </li>
      ))}
    </ul>
  </div>
);
};

export default Review;
