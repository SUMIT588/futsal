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
  }}

  const deleteManagerNotice = async (_id) => {
  try {
    const { data } = await api.delete(`/api/manager/deleteNotice/${_id}` );
    return data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

 const updateManagerNotice = async (id, notice) => {
  console.log(id, 'id, notice')
   try {
     const { data } = await api.patch(`/api/manager/updateNotice/${id}`, notice);
     
     return data;
   } catch (err) {
     throw new Error(err.response.data.error);
   }
 };

  const getManagerNoticeId = async (id) => {
    try {
      const { data } = await api.get(`/api/manager/getNotice/${id}`);
      return data;
    } catch (err) {
      throw new Error(err.response.data.error);
    }
  };


 

const noticeService = {
  addNotice,
  getUserNotice,
  deleteManagerNotice,
  getManagerNotice,
  updateManagerNotice,
  getManagerNoticeId
};

export default noticeService;
