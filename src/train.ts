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

// O - Task
function calculateSumOfNumbers(arr: any[]): number {
  // calculateSumOfNumbers — funksiya nomi
  // arr: any[] — har xil type (number, string, object, boolean va h.k.) bo‘lgan array qabul qiladi
  // : number — funksiya oxirida number qaytarishini bildiradi

  let sum: number = 0;
  // sum — sonlar yig‘indisini saqlash uchun o‘zgaruvchi
  // boshlanishida 0 ga teng qilib olinadi

  for (let i = 0; i < arr.length; i++) {
    // for loop — array ichidan boshidan oxirigacha yuradi
    // i = 0 — birinchi elementdan boshlaydi
    // i < arr.length — array tugaguncha davom etadi

    if (typeof arr[i] === "number") {
      // typeof arr[i] — hozirgi elementning type’ini tekshiradi
      // agar element number bo‘lsa, shart true bo‘ladi

      sum += arr[i];
      // agar number bo‘lsa, shu son sum ga qo‘shiladi
      // masalan: sum = sum + arr[i]
    }
  }

  return sum;
  // loop tugagandan keyin faqat sonlar yig‘indisini qaytaradi
}

calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]);
