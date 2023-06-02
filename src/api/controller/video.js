export const getvideo = (req, res) => {
  const { id } = req.query();
  res.send("completed", id);
};
