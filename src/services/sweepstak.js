const { clientInstance } = require("@/utils/axios");

export const startSweepStak = async (videoId) => {
  const response = await clientInstance.get(`/sweepstak/${videoId}`, {
    topCount: false,
    containsWord: null,
    winnerCount: 1,
    spareCount: false,
    ticketCount: false,
    uniqueUsers: true,
    uniqueComments: false,
  });
  return response.data;
};
