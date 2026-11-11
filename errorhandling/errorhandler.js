//export default function (err, req, res, next) => {
export default (err, req, res, next) => {
  //   console.log(err.message);
  let error = "Internal Server";
  if (err.statusCode == 404) {
    error = "Not Found";
  } else if (err.statusCode == 400) {
    error = "Bad Request";
  }

  //Lav alle de andre error navne her!

  res.status(err.statusCode).json({
    message: "something went wrong",
    error: "Internal Server",
    statusCode: 500,
  });
};
