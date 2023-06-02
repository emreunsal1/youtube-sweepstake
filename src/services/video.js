import axios from "axios";

const { instance } = require("@/utils/axios");

export const getVideo = async (videoId) => {
  const response = await fetch(`/api/video/${videoId}`);
  console.log(response);
};
