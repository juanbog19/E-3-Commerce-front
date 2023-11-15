import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews, postReview } from '../../store/reviewSlice';
import Swal from 'sweetalert2';
import { RatingInput } from './RatingInput';
import { FaStar } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const Review = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.reviews);
  const users = useSelector((state) => state.user.user);
  const loggedInUser = useSelector((state) => state.user.loggedin);
  //const hasPurchased = useSelector((state) => state.user.hasPurchased);
  const compraExitosa = useSelector((state) => state.orders.loading)

  const validateOrders = useSelector(state => state.orders.orders)
  console.log(':::::::::', validateOrders.length >= 1)

  //console.log('esto es reviews:',reviews);
  const { register, handleSubmit, getValues, setValue, formState: { errors } } = useForm();

  const [newReviewData, setNewReviewData] = useState({
    comment: '',
    rating: 0,
    id_user: loggedInUser ? users.id : null,
  });

  const handleInputChange = (e) => {
    setNewReviewData({
      ...newReviewData,
      [e.target.name]: e.target.value,
    });
  };

  // const handlePostReview = useCallback(async () => {
  //   try {
  //     await dispatch(postReview(newReviewData));
  //     dispatch(getReviews());
  //     setNewReviewData({
  //       comment: '',
  //       rating: 0,
  //       id_user: loggedInUser.id,
  //     });      
  //   } catch (error) {
  //     Swal.fire('Error al agregar una nueva revisión:', "Click para continuar", "info", error.message);
  //   }
  // }, [dispatch, newReviewData]);

  const onSubmit = async (data) => {
    console.log('ESTO ES DATA',data)
    //console.log(loggedInUser)
    data.id_user = users.id;
    try {
      await dispatch(postReview(data))
      dispatch(getReviews());

      setValue('comment', '')
      setValue('rating', '')
      setValue('id_user', '')

      console.log('ESTO ES DATA VACIADO', data)
    } catch (error) {
      console.log(error)
    }
  }

  const formatDateString = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Los meses son base 0
    const year = date.getFullYear().toString().slice(2, 4);

    return `${day}/${month}/${year}`;
  };

  //console.log(newReviewData)
  return (
    <div className="flex flex-col justify-center items-center mt-20 border-black">
      {validateOrders.length >= 1 ? (
        <div className="w-1/3 p-4 border-gray-200 rounded-lg shadow mb-5">
          <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block mb-2 text-lg font-bold">
            Coméntanos tu experiencia:
            <input
              type="text"
              name="comment"
              {...register('comment', { required: 'Este campo es obligatorio.' })}
              value={newReviewData.comment}
              onChange={handleInputChange}
              placeholder='Escribe un comentario sobre tu experiencia...'
              className="border p-2 w-full mb-4 focus:outline-none focus:border-purple-500"
            />
            {errors.comment && <p className="text-red-500 text-xs">{errors.comment.message}</p>}
          </label>
          <RatingInput
              rating={newReviewData.rating}
              onChange={(value) => setValue('rating', value)} // Establecer el valor del rating usando setValue
            />
            {errors.rating && <p className="text-red-500 text-xs">{errors.rating.message}</p>}
          <p>Realiza una compra para poder dar una review</p>
          {!newReviewData.comment && (
            <p className="text-purple-500 text-lg mt-6 animate-pulse">
              ¡Ayúdanos a mejorar tu experiencia dejándonos tu comentario!
            </p>
          )}
          <button type='submit'
            className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            Compartir
          </button>
          </form>
        </div>
      ) : (
        ''
      )}

      <div className="mb-10 w-2/3 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 rounded-lg bg-purple-200">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border rounded-md p-4 transition-transform transform hover:scale-105 bg-purple-100 hover:bg-purple-300"
          >
            <section>
              <div className='flex items-center mb-4'>
                <div className='font-medium '>
                  <p>{review.user ? review.user.username : 'Usuario no disponible'}</p>
                  <p className='block text-sm text-gray-500'>{formatDateString(review.date)}</p>
                </div>
              </div>
              <div className='flex items-center mb-1 space-x-1 rtl:space-x-reverse'>
                <span style={{ display: 'flex' }}>
                  {Array.from({ length: review.rating }, (_, index) => (
                    <FaStar key={index} className="text-yellow-500" />
                  ))}
                </span>
              </div>
              <p className="mb-2 text-gray-500">{review.comment}</p>
              {/* <p className="text-sm mb-2">
                Le doy {review.rating} estrellas a esta página{' '}

              </p> */}
            </section>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Review;