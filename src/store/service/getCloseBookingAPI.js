import { api } from "../../helpers/axios";

const getCloseBooking = async (date) => {
  console.log(date, "booking Close date");
  try {
    const { data } = await api.get(`/api/user/checkAvailability/${date}`, date);
    return data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

const getCloseBookingService = {
  getCloseBooking,
};

export default getCloseBookingService;
