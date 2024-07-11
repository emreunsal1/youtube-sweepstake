import { clientInstance } from "@/utils/axios";

export const getVideo = async (url) => {
  const urlObj  = new URL(url);
  const videoId = urlObj.searchParams.get("v");
  const response = await clientInstance.get(`/video/${videoId}`);
  return response.data;
};


export const getCommands =  async (id) =>{
  const response = await clientInstance.get(`/commands/${id}`);
  return response.data;
}
