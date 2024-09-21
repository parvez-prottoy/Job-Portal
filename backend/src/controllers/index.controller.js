/**
 * @route GET /
 * @description get home page
 * @access public
 */
export const getHome = (_req, res) => {
  try {
    res.status(200).send(`<h1>👋 Welcome To Job Portal Server.</h1>`);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error?.message,
    });
  }
};
/**
 * @route GET /health
 * @description get health page
 * @access public
 */
export const getHealth = (_req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Okay👍",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error?.message,
    });
  }
};
