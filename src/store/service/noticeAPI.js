import { api } from "../../helpers/axios";

const addNotice = async (notice) => {
  try {
    const { data } = await api.post(`/api/manager/addNotice `, notice);
    return data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

const getUserNotice = async () => {
  try {
    const { data } = await api.get(`/api/user/getNotice `);
    return data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

const getManagerNotice = async () => {
  try {
    const { data } = await api.get(`/api/manager/getNotice `);
    return data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

const noticeService = {
  addNotice,
  getUserNotice,
  getManagerNotice,
};

export default noticeService;
