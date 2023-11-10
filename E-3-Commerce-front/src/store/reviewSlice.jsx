import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosURL from '../tools/axiosInstance';



export const getReviews = createAsyncThunk("reviews/getReviews", async () => {
    try {
      const request = await axiosURL.get('/reviews');
      const response = await request.data;
      return response;
    } catch (error) {
      throw error.response.data.error;
    }
  });

export const getReviewById = createAsyncThunk(
'reviews/getReviewById', 
  async (id) => {
  try {
    const response = await axiosURL.get(`/api/reviews/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

  
  export const postReview = createAsyncThunk("reviews/postReview", async (reviewData) => {
    try {
      const request = await axiosURL.post('/reviews', reviewData);
      const response = await request.data;
      return response;
    } catch (error) {
      throw error.response.data.error;
    }
  });
  
export const editReview = createAsyncThunk(
'reviews/editReview', 
  async (reviewData) => {
  try {
    const response = await axiosURL.put(`/api/reviews/${reviewData.id}`, reviewData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const banReview = createAsyncThunk(
'reviews/banReview', 
   async (id) => {
  try {
    await axiosURL.delete(`/api/reviews/${id}`);
    return id;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});


//////////////////////////////////////////////////////////////////////////////////////////////

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviews: [],
    review: null,
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.reviews = action.payload;
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      })
      .addCase(getReviewById.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(getReviewById.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.review = action.payload;
      })
      .addCase(getReviewById.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      })
      .addCase(editReview.fulfilled, (state, action) => {
        const updatedReview = action.payload;
        const index = state.reviews.findIndex((review) => review.id === updatedReview.id);
        if (index !== -1) {
          state.reviews[index] = updatedReview;
        }
      })
      .addCase(banReview.fulfilled, (state, action) => {
        const reviewId = action.payload;
        state.reviews = state.reviews.filter((review) => review.id !== reviewId);
      });
  },
});

export default reviewsSlice.reducer;
