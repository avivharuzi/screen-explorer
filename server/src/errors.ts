import { StatusCodes } from 'http-status-codes';

export default Object.freeze({
  notFound: {
    statusCode: StatusCodes.NOT_FOUND,
    message: 'Not found the resource you requested for',
  },
  unknown: {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'An error has occurred, please try again later',
  },
});
