import { api } from "../../helpers/axios";

const getBooking = async (date) => {
  try {
    const { data } = await api.get(`/api/user/getBooking/:${date}`);
    return data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

const addBooking = async (bookingData) => {
  try {
    console.log(bookingData, 'jels')
    const { data } = await api.post("/api/user/addBooking", bookingData);
    return data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

const bookingService = {
  getBooking,
  addBooking,
};

export default bookingService;
