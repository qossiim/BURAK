export const AUTH_TIMER = 24;

export const MORGAN_FORMAT = `:method :url  :response-time [:status] \n`;

import mongoose from "mongoose";

export const shapeIntoMongooseObjectId = (target: any) => {
  return typeof target === "string"
    ? new mongoose.Types.ObjectId(target)
    : target;
};


// export const shapeIntoMongooseObjectId = (target: any) => {
//   // funksiya tashqariga export qilinmoqda
//   // target nomli bitta parametr qabul qiladi (har qanday type bo‘lishi mumkin)

//   return typeof target === "string"
//     // agar target ning type'i string bo‘lsa (masalan: "65f1a9c2...")

//     ? new mongoose.Types.ObjectId(target)
//     // string bo‘lgan ID ni MongoDB ObjectId formatiga o‘giradi

//     : target;
//     // aks holda (agar allaqachon ObjectId bo‘lsa)
//     // uni o‘zgartirmasdan qaytaradi
// };
