import * as httpStatusCodes from 'http-status-codes';

export default Object.freeze({
  unknown: {
    statusCode: httpStatusCodes.INTERNAL_SERVER_ERROR,
    message: 'An error has occurred, please try again later',
  },
});
