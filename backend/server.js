import app from "./app.js";
import colors from "colors";
import dev from "./config/config.js";
const PORT = dev.port;
app.listen(PORT, () => {
  console.log(
    colors.bgGreen.black(`Server is running on http://localhost:${PORT}`)
  );
});
