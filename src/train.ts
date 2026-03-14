//TASK G
// function getHighestIndex(arr: number[]): number {
//   if (arr.length === 0) return -1;

//   return arr.reduce(
//     (maxIndex, current, i) => (current > arr[maxIndex] ? i : maxIndex),
//     0
//   );
// }

// console.log(getHighestIndex([5, 21, 12, 21, 8]));

// H-TASK
// function getPositive(arr) {
//   // function bu javascrupda funksila elon qilish uchun getPositive funcsiya nomi qiymatlarni olish
//   return arr // Funksiya natija qaytaradi.return bo‘lmasa funksiya undefined qaytaradi.
//     .filter((num) => num > 0) //FILTER-Array method.hartga mos kelgan elementlarni ajratib oladi.num > 0.true → element olinadi.false → tashlab yuboriladi
//     .join(""); //Array elementlarini stringga aylantiradi .."" (bo‘sh string)Elementlar orasiga hech narsa qo‘shmaydi
// }
// getPositive([1, -4, 2]);

// getPositive([1, -4, 2]);        // "12"
// getPositive([-1, -3, 5, 7]);   // "57"
// getPositive([0, 2, 3]);        // "23"
// getPositive([-5, -6]);         // ""
// 0 positive hisoblanmaydi, shuning uchun olinmaydi
// Agar musbat son bo‘lmasa, bo‘sh string "" qaytadi

// // H2-qoshimcha
// function getPositive(arr: number[]): string {
//   let result: string = "";

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       result += arr[i];
//     }
//   }

//   return result;
// }

// I-taks
// function majorityElement(arr: number[]): number {
//   const count: Record<number, number> = {};

//   let maxNum: number = arr[0];
//   let maxCount: number = 0;

//   for (const num of arr) {
//     count[num] = (count[num] || 0) + 1;

//     if (count[num] > maxCount) {
//       maxCount = count[num];
//       maxNum = num;
//     }
//   }

//   return maxNum;
// }

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));

// J-task

// function findLongestWord(str: string): string {
//   const words: string[] = str.split(" ");
//   let longest: string = "";

//   for (const word of words) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }

//   return longest;
// }

// console.log(findLongestWord("I come from Uzbekistan"));

/* project Standarts
- Logging standanrts
- Naming standarts
function, method, variable, => Camel
class: pascal
folder => file: Kebab
css:  snake
*/

// function countVowels(text: string): number {
//   const vowels: string = "aeiouAEIOU";
//   let count: number = 0;

//   for (let i = 0; i < text.length; i++) {
//     if (vowels.includes(text[i])) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countVowels("string"));
// console.log(countVowels("Uzbekistan"));
// console.log(countVowels("Hello World"));

// L-TASK

// function reverseSentence(str: string): string {
//   return str
//     .split(" ")
//     .map((word: string) => word.split("").reverse().join(""))
//     .join(" ");
// }

// console.log(reverseSentence("we like coding!"));

// M-TASK
// function getSquareNumbers(arr: number[]): { number: number; square: number }[] {
//   const result: { number: number; square: number }[] = [];

//   for (let i = 0; i < arr.length; i++) {
//     result.push({
//       number: arr[i],
//       square: arr[i] * arr[i],
//     });
//   }

//   return result;
// }
// console.log(getSquareNumbers([1, 2, 3]));

/*
 Request:                          // Klient (browser/app) serverga yuboradigan so‘rov turi (request tushunchasi)
 Traditional Api                   // Oddiy (klassik) API: ko‘pincha server HTML yoki oddiy javob qaytaradi (SSR bilan ko‘p ishlatiladi)
 Rest Api                          // REST API: URL + HTTP method (GET/POST/PUT/DELETE) orqali resurslar bilan ishlash uslubi
 GraphQL Api                       // GraphQL API: bitta endpoint, kerakli datani aynan so‘rab olish (overfetch/underfetch kamayadi)
 ...                               // Boshqa turlar ham bor degani (masalan: gRPC, SOAP, WebSocket va h.k.)
*/

/*
 Frontend Development:             // Frontend yozish uslublari yo‘nalishi
 Traditional FD   => SSR   => EJS   // Traditional FE: SSR (Server Side Render) -> HTML serverda render bo‘ladi, EJS template bilan sahifa chiqadi
 Modern FD        => SPA   => REACT // Modern FE: SPA (Single Page App) -> sahifa bir marta yuklanadi, keyin JS bilan yangilanadi, React bilan quriladi
*/

/*
 Cookies:                          // Cookie — browserda saqlanadigan kichik data (asosan session/token uchun)
 request join                      // Request bilan “birga yuradi”: har so‘rovda cookie avtomatik serverga yuboriladi (sessionni tanitadi)
 self destroy                      // O‘zi yo‘q bo‘lib ketadi: muddati tugasa (maxAge/expire) yoki browser yopilsa o‘chishi mumkin
*/

/*
 Validation:                       // Validation — kiritilgan data to‘g‘riligini tekshirish
 Frontend validation               // Frontendda tekshiruv: tez feedback (bo‘shmi, format to‘g‘rimi), UX yaxshi bo‘ladi
 Backend validation                // Backendda tekshiruv: majburiy xavfsizlik (frontendni aldash mumkin), noto‘g‘ri datani qabul qilmaydi
 Database validation               // DB-level tekshiruv: schema/constraint (masalan Mongoose schema validation, unique, required) bilan himoya
*/

// N-Task
// function palindromCheck(word: string): boolean {
// // palindromCheck — palindrom ekanligini tekshiruvchi funksiya
// // word: string — tekshiriladigan so‘z
// // : boolean — natijada true yoki false qaytaradi

//   let reversed: string = "";
//   // reversed — so‘zning teskari variantini yig‘ish uchun bo‘sh string

//   for (let i = word.length - 1; i >= 0; i--) {
//   // for loop — so‘zning oxirgi harfidan (length - 1) boshlab yuradi
//   // i >= 0 — birinchi harfgacha kelguncha davom etadi
//   // i-- — har safar indeksni bittaga kamaytiradi

//     reversed += word[i];
//     // word[i] — so‘zning i-indexdagi harfi
//     // += — shu harfni reversed oxiriga qo‘shadi
//   }

//   if (word === reversed) {
//   // agar original so‘z va teskari yozilgan so‘z bir xil bo‘lsa

//     return true;
//     // palindrom bo‘lsa true qaytaradi
//   } else {
//     return false;
//     // palindrom bo‘lmasa false qaytaradi
//   }
// }
// console.log(palindromCheck("dad")); // true
// console.log(palindromCheck("son")); // false

// // O - Task
// function calculateSumOfNumbers(arr: any[]): number {
//   // calculateSumOfNumbers — funksiya nomi
//   // arr: any[] — har xil type (number, string, object, boolean va h.k.) bo‘lgan array qabul qiladi
//   // : number — funksiya oxirida number qaytarishini bildiradi

//   let sum: number = 0;
//   // sum — sonlar yig‘indisini saqlash uchun o‘zgaruvchi
//   // boshlanishida 0 ga teng qilib olinadi

//   for (let i = 0; i < arr.length; i++) {
//     // for loop — array ichidan boshidan oxirigacha yuradi
//     // i = 0 — birinchi elementdan boshlaydi
//     // i < arr.length — array tugaguncha davom etadi

//     if (typeof arr[i] === "number") {
//       // typeof arr[i] — hozirgi elementning type’ini tekshiradi
//       // agar element number bo‘lsa, shart true bo‘ladi

//       sum += arr[i];
//       // agar number bo‘lsa, shu son sum ga qo‘shiladi
//       // masalan: sum = sum + arr[i]
//     }
//   }

//   return sum;
//   // loop tugagandan keyin faqat sonlar yig‘indisini qaytaradi
// }

// calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]);

// N-Task

// function objectToArray(obj: Record<string, any>): [string, any][] {
//   // objectToArray — function nomi
//   // obj — qabul qilinayotgan object
//   // Record<string, any> — key: string, value: ixtiyoriy type degani
//   // [string, any][] — qaytadigan natija: array ichida array (["a", 10])

//   const result: [string, any][] = [];
//   // result — bo‘sh array
//   // bu yerda oxirida hosil bo‘ladigan juftliklar saqlanadi

//   for (const key in obj) {
//     // for...in — object ichidagi har bir key ni ketma-ket oladi
//     // masalan: "a", keyin "b"

//     if (obj.hasOwnProperty(key)) {
//       // hasOwnProperty — faqat object’ning o‘ziga tegishli property’larni oladi
//       // prototypedan kelganlarini tashlab yuboradi

//       result.push([key, obj[key]]);
//       // result.push — array ichiga qo‘shadi
//       // [key, obj[key]] — masalan ["a", 10]
//     }
//   }

//   return result;
//   // tayyor bo‘lgan array qaytariladi
// }
// console.log(objectToArray({ a: 10, b: 20 }));

// Q-task

//  function hasProperty(obj: Record<string, any>, key: string): boolean {
//   // hasProperty nomli function e’lon qilinyapti.
//   // obj → tekshiriladigan object
//   // key → qidirilayotgan property nomi (string)
//   // function natijasi boolean (true yoki false) bo‘ladi

//   return key in obj;
//   // "in" operatori ishlatilayapti
//   // Agar key obj ichida property sifatida mavjud bo‘lsa → true
//   // Agar mavjud bo‘lmasa → false qaytaradi
// }

// hasProperty({ name: "BMW", model: "M3" }, "model");
// // "model" degan property object ichida bor
// // natija: true

// hasProperty({ name: "BMW", model: "M3" }, "year");
// // "year" degan property object ichida yo‘q
// // natija: false

// R - Task

// function calculate(value: string): number {
//   // calculate nomli funksiya, string qabul qiladi va number qaytaradi

//   const parts: string[] = value.split("+");
//   // "1+3" kelganda split("+") uni ["1", "3"] array ga ajratadi

//   let sum: number = 0;
//   // Yig‘indini saqlash uchun boshlang‘ich qiymat 0

//   for (let i = 0; i < parts.length; i++) {
//   // Array ichidagi har bir element bo‘yicha aylanish

//     sum += Number(parts[i]);
//     // parts[i] → string ("1")
//     // Number(parts[i]) → number (1)
//     // sum ga qo‘shib boradi
//   }

//   return sum;
//   // Oxirida barcha sonlar yig‘indisini qaytaradi
// }
// calculate("1+3");
// calculate("10+20+5");

// S- task

// function missingNumber(nums: number[]): number {
//   const n = nums.length; // Array uzunligi
//   let expectedSum = 0; // 0 dan n gacha bo‘lgan sonlar yig‘indisi
//   let actualSum = 0; // Array ichidagi sonlar yig‘indisi

//   // 0 dan n gacha bo‘lgan sonlarni qo‘shamiz
//   for (let i = 0; i <= n; i++) {
//     expectedSum += i;
//   }

//   // Array ichidagi sonlarni qo‘shamiz
//   for (let i = 0; i < n; i++) {
//     actualSum += nums[i];
//   }

//   return expectedSum - actualSum; // Farqi = tushib qolgan son
// }

// console.log(missingNumber([3, 0, 1]));

// T-task

// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   // arr1: number[] → birinchi array faqat numberlardan iborat
//   // arr2: number[] → ikkinchi array faqat numberlardan iborat
//   // : number[] → function oxirida number array qaytaradi

//   const result: number[] = [];
//   // result degan yangi bo‘sh array yaratildi
//   // barcha tartiblangan sonlar shu yerga saqlanadi

//   let i: number = 0;
//   // arr1 uchun index (ko‘rsatkich)

//   let j: number = 0;
//   // arr2 uchun index (ko‘rsatkich)

//   while (i < arr1.length && j < arr2.length) {
//     // ikkala array ham tugamaguncha loop ishlaydi

//     if (arr1[i] <= arr2[j]) {
//       // agar arr1 dagi son kichik yoki teng bo‘lsa

//       result.push(arr1[i]);
//       // arr1 dagi son result ga qo‘shiladi

//       i++;
//       // arr1 index 1 taga oshadi
//     } else {
//       // aks holda arr2 dagi son kichik bo‘ladi

//       result.push(arr2[j]);
//       // arr2 dagi son result ga qo‘shiladi

//       j++;
//       // arr2 index 1 taga oshadi
//     }
//   }

//   while (i < arr1.length) {
//     // agar arr1 da element qolgan bo‘lsa

//     result.push(arr1[i]);
//     // qolgan element result ga qo‘shiladi

//     i++;
//     // index oshadi
//   }

//   while (j < arr2.length) {
//     // agar arr2 da element qolgan bo‘lsa

//     result.push(arr2[j]);
//     // qolgan element result ga qo‘shiladi

//     j++;
//     // index oshadi
//   }

//   return result;
//   // tartiblangan yangi array qaytariladi
// }

// const merged: number[] = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);

// console.log(merged);

// S-Task

// function sumOdds(n: number): number {
//   let count: number = 0;

//   for (let i: number = 1; i < n; i += 2) {
//     count++;
//   }

//   return count;
// }
// console.log(sumOdds(9));
// console.log(sumOdds(11));
// console.log(sumOdds(1));
// console.log(sumOdds(2));

// V-task

// function countChars(str: string): { [key: string]: number } {
//   const result: { [key: string]: number } = {};

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     if (result[char]) {
//       result[char] = result[char] + 1;
//     } else {
//       result[char] = 1;
//     }
//   }

//   return result;
// }
// console.log(countChars("hello"));

// W - Task

// function chunkArray(arr: number[], size: number): number[][] {
//   const result: number[][] = [];

//   for (let i = 0; i < arr.length; i += size) {
//     const chunk = arr.slice(i, i + size);
//     result.push(chunk);
//   }

//   return result;
// }
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// X-TASK

//  function countOccurrences(obj: any, key: string): number {
//   let count = 0;

//   for (const prop in obj) {
//     if (prop === key) {
//       count++;
//     }

//     if (typeof obj[prop] === "object" && obj[prop] !== null) {
//       count += countOccurrences(obj[prop], key);
//     }
//   }

//   return count;
// }

// const car = {
//   model: "Bugatti",
//   steer: {
//     model: "HANKOOK",
//     size: 30
//   }
// };

// console.log(countOccurrences(car, "model"));

// Y-Task

// function findIntersection(arr1: number[], arr2: number[]): number[] {
//   const result: number[] = [];

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
//       result.push(arr1[i]);
//     }
//   }

//   return result;
// }
// console.log(findIntersection([1, 2, 3], [3, 2, 0]));

// X - Task

// function sumEvens(arr: number[]): number {
//   let sum: number = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum += arr[i];
//     }
//   }

//   return sum;
// }
// sumEvens([1, 2, 3]);
// sumEvens([2, 4, 5, 6]);

// ZA -Task

// function sortByAge(arr: { age: number }[]): { age: number }[] {
//   return arr.sort((a, b) => a.age - b.age);
// }
// const data = [{ age: 23 }, { age: 21 }, { age: 13 }];

// console.log(sortByAge(data));

// ZB - Task

// function randomBetween(min: number, max: number): number {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// // Math.random() 0 dan 1 gacha tasodifiy son beradi
// // (max - min + 1) berilgan oraliq uzunligini hisoblaydi
// // Math.floor butun songa aylantiradi
// // + min qilib natijani min va max orasiga tushiradi
// // Natija: min va max orasidan random butun son qaytadi

// // MASALAN:
// randomBetween(30, 50);

// // ZC - Task
// function celsiusToFahrenheit(celsius: number): number {
//   // celsiusToFahrenheit nomli function, bitta number (celsius) qabul qiladi va number qaytaradi

//   const fahrenheit: number = (celsius * 9) / 5 + 32;
//   // Selsiy qiymatini Fahrenheitga aylantiradi
//   // formula: (C × 9/5) + 32

//   return fahrenheit;
//   // hisoblangan Fahrenheit qiymatini qaytaradi
// }
// console.log(celsiusToFahrenheit(0));

// ZD - Task

// function changeNumberInArray(index: number, arr: number[], newNumber: number): number[] {
// // function yaratildi
// // 3 ta parametr oladi:
// // index → qaysi index o‘zgartiriladi
// // arr → array
// // newNumber → yangi qo‘yiladigan son

//   arr[index] = newNumber;
// // array ichida berilgan index topiladi
// // va shu joydagi qiymat newNumber bilan almashtiriladi

//   return arr;
// // yangilangan array qaytariladi
// }
// console.log(changeNumberInArray(1, [1,3,7,2], 2));

// ZE - Task

function removeDuplicate(word: string): string {
  // removeDuplicate nomli function ochilyapti
  // word: string -> function bitta string parametr qabul qiladi
  // : string -> function oxirida string qaytaradi

  let result = "";
  // result degan bo‘sh string ochilyapti
  // takrorlanmagan harflarni shu yerga yig‘amiz

  for (let i = 0; i < word.length; i++) {
    // string ichidagi har bir harfni bitta-bitta aylanib chiqadi

    if (!result.includes(word[i])) {
      // agar result ichida hozirgi harf yo‘q bo‘lsa true bo‘ladi

      result += word[i];
      // takrorlanmagan harfni result ga qo‘shadi
    }
  }

  return result;
}

console.log(removeDuplicate("stringg"));
