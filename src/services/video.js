import { clientInstance } from "@/utils/axios";

export const getVideo = async (videoId) => {
  const response = await clientInstance.get(`/video/${videoId}`);
  console.log(response);
};
