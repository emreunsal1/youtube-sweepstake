const { bffInstance } = require("@/services/youtube");

const startSweepStak = async (req, res) => {
  const { id } = req.query;
  const {
    topCount,
    containsWord,
    winnerCount,
    spareCount,
    ticketCount,
    uniqueUsers,
    uniqueComments,
  } = req.body;
};

const getComments = async (videoId) => {
  const response = await bffInstance.get("/comments", {
    params: {
      part: "snippet",
      id: videoId,
    },
  });
  return response.data;
};
