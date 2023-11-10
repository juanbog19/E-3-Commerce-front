import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews, postReview, editReview, banReview} from '../../store/reviewSlice';
import { getUsers } from '../../store/userSlice';
import { RatingInput } from './RatingInput';
import { FaStar } from 'react-icons/fa';

const Review = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.reviews);
  const users = useSelector((state) => state.user.users);
  const [editingReview, setEditingReview] = useState(null);
  const [newReviewData, setNewReviewData] = useState({
    comment: '',
    rating: 0,
    id_user: users ? users[0]?.id : 1,
  });

  const handleEditReview = (id) => {
    setEditingReview(id);
  };

  const handleInputChange = (e) => {
    setNewReviewData({
      ...newReviewData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePostReview = useCallback(async () => {
    try {
      await dispatch(postReview(newReviewData));
      dispatch(getReviews());
      setNewReviewData({
        comment: '',
        rating: newReviewData.rating,
        id_user: users ? users[0]?.id : 1,
      });
    } catch (error) {
      console.error('Error al agregar una nueva revisión:', error.message);
    }
  }, [dispatch, newReviewData, users]);

  const handleEditInputChange = (e) => {
    setNewReviewData({
      ...newReviewData,
      comment: e.target.value,
    });
  };

  const handleSaveEditReview = async (id) => {
    try {
      const prevReview = reviews.find((review) => review.id === id);
      await dispatch(banReview(prevReview.id));
      await dispatch(
        editReview({
          id,
          comment: newReviewData.comment,
          rating: newReviewData.rating,
        })
      );
      setEditingReview(null);
    } catch (error) {
      console.error('Error al editar la revisión:', error.message);
    }
  };

  return (
    <div className="flex justify-center mt-20 border-black">
      <div className="w-1/3 p-4">
        <label className="block mb-2 text-lg font-bold">
          Comentanos tu experiencia:
          <input
            type="text"
            name="comment"
            value={newReviewData.comment}
            onChange={handleInputChange}
            className="border p-2 w-full mb-4"
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
      <div className="w-2/3 p-4 border rounded-md">
      <ul>
        {reviews.map((review) => (
          <li key={review.id} className="mb-4">
            {editingReview === review.id ? (
              <div>
                <label>
                  Comentanos tu experiencia:
                  <input
                    type="text"
                    name="comment"
                    value={newReviewData.comment}
                    onChange={(e) => handleEditInputChange(e, review.id)}
                  />
                </label>
                <button
                  className="mt-5 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  onClick={() => handleSaveEditReview(review.id)}
                >
                  Guardar
                </button>
              </div>
            ) : (
              <div>
                 <p className="text-lg font-bold mb-2">Comentario: {review.comment}</p>
                 <p className="text-sm mb-2">Le doy {review.rating} estrellas a esta página</p>
                 <p className="text-xs mb-2">Usuario: {review.id_user}</p>
                <button
                  className="mt-5 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  onClick={() => handleEditReview(review.id)}
                >
                  Editar
                </button>
              </div>
            )}
          </li>
          ))}
      </ul>
    </div>
  </div>
  );
};

export default Review;