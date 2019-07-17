// @Route            >   GET  /api/test
// @Description      >   Testing Route
// @Access Control   >   Public
export default (req, res, next) => res.status(200).send("App working!");
