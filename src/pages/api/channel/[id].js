import { bffInstance } from "@/services/youtube";


const getChannel = async (req,res)=>{
  const { id } = req.query;
  try {
    const response = await bffInstance.get(`/channels`,{
      params:{
        part:'snippet',
        id:id
      }
    })
    res.send(response.data);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Failed to fetch comments" });
  }
}



export default getChannel