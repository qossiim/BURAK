export enum HttpCode {
  OK = 200,
  CREATED = 201,
  NOT_MODIFIED = 304,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export enum Messege {
  SOMETHING_WENT_WRONG = "Something went wrong!",
  NO_DATA_FOUND = "No data is found",
  CREATE_FAILED = "Cereate is failed",
  UPDATE_FAILED = "Update is failed",
}

class Errors extends Error {
  public code: HttpCode;
  public messege: Messege;

  constructor(statusCode: HttpCode, statusMessege: Messege) {
    super();
    this.code = statusCode;
    this.messege = statusMessege;
  }
}

export default Errors;
