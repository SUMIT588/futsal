import { api } from "../../helpers/axios";

const getBookingHistory = async (contact) => {
  try {
    const { data } = await api.get(`/api/user/getUserBookingHistory/${contact}`);
    return data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};


const bookingHistory = {
  getBookingHistory
};

export default bookingHistory;
