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
function majorityElement(arr: number[]): number {
  const count: Record<number, number> = {};

  let maxNum: number = arr[0];
  let maxCount: number = 0;

  for (const num of arr) {
    count[num] = (count[num] || 0) + 1;

    if (count[num] > maxCount) {
      maxCount = count[num];
      maxNum = num;
    }
  }

  return maxNum;
}

console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));
