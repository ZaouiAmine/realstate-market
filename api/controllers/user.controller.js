export const test = (req, res) => {
  console.log("/api/user/");
  res.json({
    message: "get / route",
  });
};
