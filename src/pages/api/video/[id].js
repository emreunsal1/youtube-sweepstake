const getVideo = (req, res) => {
  const { id } = req.query;
  console.log("selam");
  res.send("selam");
};

export default getVideo;
