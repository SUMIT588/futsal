import { api } from "../../helpers/axios";

const customerBooking = async (date) => {
  try {
    console.log(date, "hel");
    const { data } = await api.get(`/api/manager/getUserBooking/:${date}`);
    return data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

const customerBookingService = {
  customerBooking,
};

export default customerBookingService;
