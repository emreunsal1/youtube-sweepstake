const { instance } = require("@/utils/axios");

export const getVideo = async (videoId) => {
  const response = await instance.get(`/video/${videoId}`);
  console.log(response);
};
