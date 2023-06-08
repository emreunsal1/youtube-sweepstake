import { bffInstance } from "@/services/youtube";

require("dotenv").config();

const getVideo = async (req, res) => {
  const { id } = req.query;
  try {
    const videoResponse = await bffInstance.get("/videos", {
      params: {
        part: "snippet,statistics",
        id: id,
      },
    });
    const { channelId } = videoResponse.data.items[0].snippet;
    const channelData = getChannel(channelId);
    res.send(videoResponse.data);
  } catch (error) {
    res.status(400).send("error");
    console.log("video response", error.response.data.error.errors);
  }
};
const getChannel = async (channelId) => {
  const response = await bffInstance.get("/channels", {
    params: {
      part: "snippet",
      id: channelId,
    },
  });
  return response.data;
};

export default getVideo;
