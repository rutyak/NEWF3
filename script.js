
let option = {
        method: 'POST',
        body: JSON.stringify(
            [{
              "id": 1,
              "name": "Cheeseburger",
              "price": 5.99,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?cheeseburger"
            },
            {
              "id": 2,
              "name": "Pizza",
              "price": 8.99,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?pizza"
            },
            {
              "id": 3,
              "name": "Tacos",
              "price": 3.99,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?tacos"
            },
            {
              "id": 4,
              "name": "Sushi",
              "price": 11.99,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?sushi"
            },
            {
              "id": 5,
              "name": "Pasta",
              "price": 9.99,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?pasta"
            },
            {
              "id": 6,
              "name": "Fried Chicken",
              "price": 7.99,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?fried_chicken"
            },
            {
              "id": 7,
              "name": "Grilled Cheese Sandwich",
              "price": 4.99,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?grilled_cheese_sandwich"
            },
            {
              "id": 8,
              "name": "Steak",
              "price": 15.99,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?steak"
            },
            {
              "id": 9,
              "name": "Caesar Salad",
              "price": 6.99,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?caesar_salad"
            },
            {
              "id": 10,
              "name": "Fish and Chips",
              "price": 8.49,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?fish_and_chips"
            },
            {
              "id": 11,
              "name": "Ramen",
              "price": 9.49,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?ramen"
            },
            {
              "id": 12,
              "name": "Burrito",
              "price": 7.49,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?burrito"
            },
            {
              "id": 13,
              "name": "Pho",
              "price": 8.99,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?pho"
            },
            {
              "id": 14,
              "name": "Pad Thai",
              "price": 9.99,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?pad_thai"
            },
            {
              "id": 15,
              "name": "Gyro",
              "price": 6.49,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?gyro"
            },
            {
              "id": 16,
              "name": "Ice Cream",
              "price": 3.99,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?ice_cream"
            },
            {
              "id": 17,
              "name": "Smoothie",
              "price": 4.99,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?smoothie"
            },
            {
              "id": "18",
              "name": "Apple Pie",
              "price": 4.49,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?apple_pie"
            },
            {
              "id": 19,
              "name": "Chocolate Cake",
              "price": 5.49,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?chocolate_cake"
            },
            {
              "id": 20,
              "name": "Pancakes",
              "price": 4.99,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?pancakes"
            },
            {
              "id": 21,
              "name": "Cupcake",
              "price": 2.99,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?cupcake"
            },
            {
              "id": 22,
              "name": "Crepes",
              "price": 5.99,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?crepes"
            },]
          
        ),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }


async function  getMenu(){
    let api = await fetch('https://jsonplaceholder.typicode.com/posts', option);
    let data = await api.json();
    console.log(data);
    renderData(data);
}

function renderData(data){
    let container = document.getElementById("main-container");
    inhtml = "";

    for(i in data){
        // console.log(data[i]);
        inhtml +=`
        <div class="items">
        <img src="${data[i].imgSrc}" onclick="TakeOrder()" alt="">
        <div class="details">
        <div>
        <p onclick="TakeOrder()" >${data[i].name}</p>
        <p onclick="TakeOrder()" >$${data[i].price}</p>
        </div>
        <div><img src="./NewImages/Group 4.png" alt=""></div>
        </div>
        </div>`;
    }
    container.innerHTML = inhtml;
}

getMenu();



function TakeOrder(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const burger = ['VegBurger', 'ChickenBurger', 'ChizzBurger'];
            const randomBurger =  [];
            for(let i=0;i<burger.length;i++){
                let index = Math.floor(Math.random() * burger.length);
                randomBurger.push(burger[index]);
            }
            const order = {
                burgers: randomBurger
            }
            resolve(order);
        },2500)
        orderPrep()
    })  
}

function orderPrep(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const preparstion = {
                orderStatus : true,
                Paid : false
            }
            resolve(preparstion);
        },1500)
    })
}
