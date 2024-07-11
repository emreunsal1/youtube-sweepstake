import { bffInstance } from "@/services/youtube";

 
const getComments = async (req, res) => {
  const { id } = req.query;
  try {
    const response = await bffInstance.get("/commentThreads", {
      params: {
        videoId: id,
        maxResults: 100,
        part: "snippet",
      },
    });

    const { data } = response;
    
    const comments = data.items.map((item) => {
      const {
        snippet: {
          topLevelComment: {
            id,
            snippet: {
              textDisplay,
              textOriginal,
              authorDisplayName,
              authorProfileImageUrl,
            },
          },
        },
      } = item;
      

      return {
        id,
        textDisplay,
        textOriginal,
        authorDisplayName,
        authorProfileImageUrl,
      };
    });

    res.send(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Failed to fetch comments" });
  }
};

export default getComments;