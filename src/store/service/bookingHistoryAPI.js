import { api } from "../../helpers/axios";

const getBookingHistory = async () => {
  try {
    const { data } = await api.get(`/api/user/getUserBookingHistory`);
    return data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};


const bookingHistory = {
  getBookingHistory
};

export default bookingHistory;
