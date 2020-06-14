import * as httpStatusCodes from 'http-status-codes';

export default Object.freeze({
  notFound: {
    statusCode: httpStatusCodes.NOT_FOUND,
    message: 'Not found the resource you requested for',
  },
  unknown: {
    statusCode: httpStatusCodes.INTERNAL_SERVER_ERROR,
    message: 'An error has occurred, please try again later',
  },
});
