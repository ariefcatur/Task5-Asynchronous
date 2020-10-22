// 1. Ubah studi kasus di modul pakai Promise.all
// - Pelajari Promise.all
// - https://medium.com/coderupa/panduan-komplit-asynchronous-programming-pada-javascript-part-3-promise-819ce5d8b3c
// - https://www.youtube.com/watch?v=-Gbb8H3Dy08&t=3s
//
// 2. Convert ke:
// - Promise Chaining
// - Promise.all
// - Async-await
// 
// deadline: jumat, 23 okt 2020, 23:59 wib
// kirim alamat repo ke fnoviandha@binar.co.id

//promise.all===============================================

// const getFirstName = Promise.resolve("Binar")

// const getLastName = new Promise((resolve,reject) => { setTimeout(resolve,2000, "Academy")
// })

// // Promise.all(`${getFirstName} ${getLastName}`) .then(values => {document.querySelector("#hasil").innerText = values
// // })

// const handleOnClick = () => {
//   console.log("Clicked...")
//   Promise.all([getFirstName , getLastName]).then(values => {document.querySelector("#hasil").innerText = values
// })
// }

//Promise-chaining=================================================

// const getFirstName = Promise.resolve((resolve,reject) => { setTimeout(resolve,2000, "Binar")
// })

// const getLastName = new Promise((resolve,reject) => { setTimeout(resolve,2000, "Academy")
// })

// const fullName = new Promise((resolve,reject) => {  setTimeout
// (resolve,2000, "Binar Academy")
// })

function step1() {
  const getFirstName = Promise.resolve((resolve,reject) => { setTimeout(resolve,1000, "Binar")}
  )
}

function step2() {
  const getLastName = Promise.resolve((resolve,reject) => { setTimeout(resolve,1000, "Academy")}
  )
}

function step3() {
  const getFullName = Promise.resolve((resolve,reject) => { setTimeout(resolve,1000, "Binar Academy")}
  )
}

// function step2([getFirstName, getLastName]) {
//   console.log(getFirstName)
//   console.log(getLastName)
//   return Promise.resolve("done")
// }
// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => resolve("binar"), 1000);
// });

const handleOnClick = () => {
  console.log("Clicked...")
  step1()
  .then(step2)
  .then(step3)
  .then(values => {document.querySelector("#hasil").innerText = values})
}

// getFirstName.then(function(result) {
//   alert(result); // 1
//   return result * 2;
// });

// getLastName.then(function(result) {
//   alert(result); // 1
//   return result * 2;
// });

// fullName.then(function(result) {
//   alert(result); // 1
//   return result * 2;
// });