let poster="", 
type="",
sale="",
title1="",
title2="",
price="",
sale_percent="",
currency="",
rating="",
button="",
promotion="";
s="";


let myCard = [
{
  poster: "poster.png",
  type: "bluray.png",
  sale: "sale.png",
  title1: "Тайная жизнь",
  title2: "домашних животных 2",
  price: 50,
  sale_percent: 10,
  currency: "руб.",
  rating: 2.5,
  button: "button.png",
  promotion: "товар на акции"
},
{
    poster: "ferd.jpg",
    type: "",
    sale: "sale.png",
    title1: "Фердинанд",
    title2: "Побег из коровника",
    price: 40,
    sale_percent: 10,
    currency: "руб.",
    rating: 3,
    button: "button.png",
    promotion: "товар на акции"
  },
  {
    poster: "toy4.jpg",
    type: "",
    sale: "sale.png",
    title1: "История игрушек 4",
    title2: "Приключения Вилкинса",
    price: 60,
    sale_percent: 10,
    currency: "руб.",
    rating: 4.5,
    button: "button.png",
    promotion: "нет акции"
  },
];


for (j=0; j<myCard.length; j++){
    poster = myCard[j].poster;
    type = myCard[j].type;
    sale = myCard[j].sale;
    title1 = myCard[j].title1;
    title2 = myCard[j].title2;
    price = myCard[j].price;
    sale_percent = myCard[j].sale_percent;
    currency = myCard[j].currency;
    rating = myCard[j].rating;
    button = myCard[j].button;
    promotion = myCard[j].promotion;
  
    
    //Полная цена
let fullPrice = `${price},00 ${currency}`;
//Акционная цена
let salePrice = `${Math.round(price *(1- sale_percent / 100))},00 ${currency}`;


// Рейтинг товара
function rating1(){
let rank = "";
let maxRank = 5;
for(i=1; i<=rating; i++) 
     rank += "star ";
 
if (rating % Math.floor(rating) == 0)
     rank += ""; 
else 
     rank += "star_half ";

for(i=1; i<=(maxRank-rating); i++)
     rank += "star_border ";

     return rank;
}

// Проверка на наличие товара на акции

if (promotion == "товар на акции") 
    sale = "sale.png";
else {
    sale = "";
    salePrice = fullPrice;
    fullPrice = "";
}

     s += `
<div class="card">
    <div class="poster">
        <img src="images/${poster}" alt="">
        <img src="images/${sale}" alt="">
        <img src="images/${type}" alt="">
    </div>

    <div class="title">
        <div>${title1}</div>
        <div>${title2}</div>
    </div>

    <div class="price">
        <div>${salePrice}</div>
        <div>${fullPrice}</div>
    </div>

    <div class="ranting">
        <div>
            <span class="material-icons">
            ${rating1()}
            </span>

        </div>
    </div>
    <div class="button">
        <div>
            <img src="images/${button}" alt="">
        </div>
    </div>
</div>
`;

}

cards.innerHTML = s;


