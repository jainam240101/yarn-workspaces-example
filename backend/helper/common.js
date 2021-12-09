/** @format */


export const sendSuccessResponse = (res ,data) => {
  res.status(200).send({
    message: "Success",
    data: data,
  });
};

export const sendErrorResponse = (res, error) => {
  res.status(406).send({
    message: "Something Went Wrong",
    error: error,
  });
};
