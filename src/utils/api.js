import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.airbnb-clone.com/api'
});

export const fetchPlaces = async (filters) => {
  try {
    const response = await api.get('/places', {
      params: filters
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching places:', error);
    throw error;
  }
};

export const fetchListing = async (id) => {
  try {
    const response = await api.get(`/listings/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching listing:', error);
    throw error;
  }
};

export const bookListing = async (listingId, bookingData) => {
  try {
    const response = await api.post(`/bookings/${listingId}`, bookingData);
    return response.data;
  } catch (error) {
    console.error('Error booking listing:', error);
    throw error;
  }
};

export const getUserProfile = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

export default api;