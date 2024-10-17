// #uyga vazifa takrorlash

// let products = [
//     {
//         id: 6,
//         name: "Smarthpone",
//         price: 12000,
//         rating: 4.5,
//         discount: 20,
//     },
//     {
//         id: 2,
//         name: "Acer",
//         price: 10000,
//         rating: 4.3,
//         discount: 10,
//     },
//     {
//         id: 1,
//         name: "Mac book",
//         price: 17000,
//         rating: 4.7,
//         discount: 40,
//     },
//     {
//         id: 4,
//         name: "HP",
//         price: 21000,
//         rating: 4.1,
//         discount: 30,
//     },
//     {
//         id: 5,
//         name: "Dell",
//         price: 35000,
//         rating: 4.9,
//         discount: 30,
//     },
// ];


// 1
// products.sort((a, b) => b.rating - a.rating);

// console.log(products);

// 2
// console.log(products.reduce((a, b) => a + b.price,0));

// 4

// console.log(products.find(products =>products.id == 5));

// 5 (Siz aytgandaka qilipay ishlay olmadim)
// let matn = 'George Raymond Richard Martin';
// console.log(matn.match(/[A-Z]/g));


// 6
// let son = [1, -4, 12, 0, -3, 29, -150];
// let musbat = son.filter(son => son > 0)
// console.log(musbat.reduce((accumlator, currentValue) => accumlator + currentValue, 0));

// 7
// const students = [
//     { name: "Quincy", percent: 96, grade: 5 },
//     { name: "Jason", percent: 84, grade: 4 },
//     { name: "Alexis", percent: 100, grade: 5 },
//     { name: "Sam", percent: 65, grade: 3 },
//     { name: "Katie", percent: 90, grade: 5 },
//     { name: "Anna", percent: 75, grade: 4 },
// ];

// let beshHarf = students.filter(students => students.name.length === 5)
// console.log(beshHarf);

// 8
// let son = [1,-3,4,0,-2,9]
// console.log(son.filter(son => son >0));

// 9
// let son = [5, 2, 8, 1, 9]
// console.log(son.sort((a, b)=> a - b));


// 10

// let son = [1, 2, 3, 4]
// console.log(son.map(son => son * son));

// 11
// let son = [1, 2, 2, 3, 3, 1]
// let ajratish = son.filter((number,index) =>{
//     return son.indexOf(number) === index
// });
// console.log(ajratish);

// 12 Arrayni n bo'lakka bo'lishnini qila olmadim

// 13
// let arr = ['apple', 'banana', 'cherry', 'date', 'elserberry'];
// console.log(arr.splice(2,4));

// 14
// let fruts = ['apple','banana','cherry','deate']
// fruts.splice(2,'kiwi','mango')
// console.log(fruts);

// 15
// let arr = ['apple','banana','cherry','deate']

// console.log(arr.slice(1,3));

// 16
// let arr = ['apple', 'banana', 'cherry', 'deate']
// console.log(arr.filter(arr =>arr.length >5));

// 17
// let son = [5, 2, 8, 1, 9]
// console.log(son.sort((a, b)=> a - b));

// 18
// let son = [5, 2, 8, 1, 9]
// console.log(son.sort((a, b) => b - a));

// 19
// let arr = [1, 2, 3, 4, 5]
// let sonlarniKopaytirish = [];
// for (let i = 0; i < arr.length; i++) {
//     sonlarniKopaytirish[i] = arr[i] * 10;
// }
// console.log(sonlarniKopaytirish);


// 20 (shartdagidek qila olmadim)
// let arr = [1, -2, 3, -4, 5];
// let result = arr.map(function(num){
//     return num > 0;
// })
// console.log(result);

// 21 ()

// 22
// let arr = ['apple', 'banana', 'cherry', 'deate'];
// arr[1] = arr[3]
// console.log(arr);


// 23
// let arr = ['apple', 'banana', 'cherry', 'deate'];
// arr.unshift('gilos')
// arr.push('shaftoli')
// console.log(arr);
