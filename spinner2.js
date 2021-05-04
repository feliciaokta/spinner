// the loop is not automated
// notice that inside the const spinner you write it 2x
const spinner = "|/-\\|/-\\|";
for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write("\r" + spinner[i]);
  }, 200 * i)
}
setTimeout(() => {
  console.log("");
}, 200 * spinner.length)




// if you want the loop automated
let count = 0;
let i = 0;
const spinner = "|/-\\|/-\\|";
while (count < 4) {
  for (let item of spinner) {
    setTimeout(() => {
      process.stdout.write("\r" + item);
    }, 200 * i)
    i++         // this is to iterate for loop one more time
  } count ++    // this is part of the while count
};
setTimeout(() => {
  console.log("");
}, 200 * i)






// spinner1.js

// // 2
// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// // 3
// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// // 4
// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// // 5
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// // 6
// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// // 7
// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// //8
// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 1500);