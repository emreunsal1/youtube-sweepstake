import { clientInstance } from "@/utils/axios"


export const getChannelInfo = async (id)=>{
const response = await clientInstance.get(`/channel/${id}`);
return response.data;
}