import { api } from "../../helpers/axios";

const closeBooking = async (date) => {
  try {
    const { data } = await api.post(`/api/manager/addBlockedDate`, date);
    return data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

const managerCloseBooking = async () => {
  try {
    const { data } = await api.get(`/api/manager/getBlockedDates`);
    return data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

const closeBookingService = {
  closeBooking,
  managerCloseBooking
};

export default closeBookingService;
