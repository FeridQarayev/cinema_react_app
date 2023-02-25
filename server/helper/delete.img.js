const fs = require("fs");
const { promisify } = require("util");
const readFileAsync = promisify(fs.unlink);

module.exports = async (filename) => {
  const deltedfile = await readFileAsync(
    __dirname + "../../../client/src/images/movies/" + filename
  );
  if (deltedfile) return true;
  return false;
};
