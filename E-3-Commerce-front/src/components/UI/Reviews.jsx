import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews, postReview } from '../../store/reviewSlice';
import Swal from 'sweetalert2';
import { RatingInput } from './RatingInput';
import { FaStar } from 'react-icons/fa';


const Review = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.reviews);
  const users = useSelector((state) => state.user.users);
  const loggedInUser = useSelector((state) => state.user.loggedin);
  const hasPurchased = useSelector((state) => state.user.hasPurchased);

  
  //console.log('esto es reviews:',reviews);

  const [newReviewData, setNewReviewData] = useState({
    comment: '',
    rating: 0,
    id_user: loggedInUser ? loggedInUser.id : null,
  });

  const handleInputChange = (e) => {
    setNewReviewData({
      ...newReviewData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePostReview = useCallback(async () => {
    if (!loggedInUser) {
      Swal.fire('El usuario debe estar conectado para dejar su experiencia', "Click para continuar", "error");
    }
    if (!hasPurchased) {
      Swal.fire('Debes realizar una compra antes de dejar una revisión', 'Click para continuar', 'error');
      return;
    }
    try {
      await dispatch(postReview(newReviewData));
      dispatch(getReviews());
      setNewReviewData({
        comment: '',
        rating: newReviewData.rating,
        id_user: loggedInUser.id,
      });
    } catch (error) {
      Swal.fire('Error al agregar una nueva revisión:', "Click para continuar", "info", error.message);
    }
  }, [dispatch, loggedInUser, hasPurchased, newReviewData]);

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
          className="border p-2 w-full mb-4 focus:outline-none focus:border-purple-500"
        />
      </label>
      <RatingInput rating={newReviewData.rating} handleInputChange={handleInputChange} />
      <button
        className="mt-5 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={handlePostReview}
      >
        Compartir
      </button>
      {!newReviewData.comment && (
        <p className="text-purple-500 text-lg mt-6 animate-pulse">
          ¡Ayúdanos a mejorar tu experiencia dejándonos tu comentario!
        </p>
      )}
      {newReviewData.comment && (
        <p className="text-green-500 text-sm mt-4">
          ¡Gracias por compartir tu experiencia!
        </p>
      )}
    </div>
    <div className="w-2/3 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 rounded-lg bg-purple-200">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="border rounded-md p-4 transition-transform transform hover:scale-105 bg-purple-100 hover:bg-purple-300"
        >
          <div>
            <p className="text-lg font-bold mb-2">Comentario: {review.comment}</p>
            <p className="text-sm mb-2">
              Le doy {review.rating} estrellas a esta página{' '}
              <span style={{ display: 'flex' }}>
                {Array.from({ length: review.rating }, (_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </span>
            </p>
            <p className="text-xs mb-2">Usuario: {review.user ? review.user.username : 'Usuario no disponible'}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  );
};

export default Review;
