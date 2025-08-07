const reviews = [
{
    id:1,
    name:'Estefania Lucero',
    job: 'Assistant Director',
    img: '075fc01e1ea24225cf9ee36d40e11e62.jpg',
    text: 'The Co-founder of Jaloka Cream& Spice Lorraine Dunbar has shown incredible talent and dedication in creating and selling her own ',
},

{
    id:2,
    name:'Celeste Kim',
    job: 'Periodontist',
    img: '#',
    text: 'The Co-founder of JaLoKa Cream & Spice Lorrraine Dunbar has shown incredible talent and dedication in creating and selling her own skincare products. She attended a young adult work event to showcase her products. At The JJP Veteran Medical Center. Her formulas are high-quality-quality, beautifully packaged, and cleary made with care. Its inspring to see such passion from someone so  young!'
    
},          

{
    id:3,
    name:'Peter Jones',
    job: 'Intern',
    img: '#',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?',
},

];
//select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

function showPerson(person){
    const item = reviews[person];
     img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click',function (){
    currentItem++;
    if (currentItem >reviews.length- 1) {
        currentItem= 0;
    }
    showPerson(currentItem);
    
});

prevBtn.addEventListener('click',function (){
    currentItem--;
    if (currentItem < 0) {
        currentItem= reviews.length -1;
    }
    showPerson(currentItem);
});




















// console.log("Hello World!");

// let myString = "a2b3c";
// console.log(myString);

// let myNumVar = 123;
// console.log(typeof myNumVar);

// console.log(10 + " eggs");
// console.log(10 + 7 + " eggs");
// console.log("eggs" + 10 + 7);

// console.log(3>=2);

// //Both Conditions Need to be true
// console.log(7>3)&&(5<10);

// // Only One condition must be true
// console.log(10>3)||(10>12);

// //If the statement is logical or not
// console.log(!5>3);

// function introduction(name, age){
//     console.log("Hello, my name is " + name + " and I am " + age + " years old.")
// }

// introduction("Lorraine", 16)

// const hour = new Date().getHours();
// let greeting = "";

// if (hour<12){
//     greeting = "Good Morning";
// }else if (hour<18){
//     greeting = "Good Afternoon";
// }else {
//     greeting = "Good Evening";
// }

// document.getElementById("greeting").innerText = greeting;