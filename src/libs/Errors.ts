export enum HttpCode {
  OK = 200,
  CREATED = 201,
  NOT_MODIFIED = 304,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export enum Messege {
  SOMETHING_WENT_WRONG = "Nimadir xatolik bor!",
  NO_DATA_FOUND = "Hech qanday malumot topilmadi",
  CREATE_FAILED = "Jarayon amalga oshmadi",
  UPDATE_FAILED = "Yangilash amalga oshmadi",

  USED_NICK_PHONE = "Siz ro'yxatdan o'tgan tel raqam kiritdingiz!",
  NO_MEMBER_NICK = "Bu member mavjud emas!",
  WRONG_PASSWORD = "Parol noto'g'ri, iltimos qaytib urinib ko'ring!",
  NOT_AUTHENTICATED = "Siz login bolmagansiz login boling iltimos!",
}

class Errors extends Error {
  public code: HttpCode;
  public messege: Messege;

  static standard = {
    code: HttpCode.INTERNAL_SERVER_ERROR,
    messege: Messege.SOMETHING_WENT_WRONG,
  };

  constructor(statusCode: HttpCode, statusMessege: Messege) {
    super();
    this.code = statusCode;
    this.messege = statusMessege;
  }
}

export default Errors;
