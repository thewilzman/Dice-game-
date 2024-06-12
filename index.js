var randomNumber1 = Math.floor(Math.random() * 6) +1; //generate number 1 to 6

var randomDiceImage = "dice" + randomNumber1 +".png"; // randomize from dice1.png to dice6.png

var randomImgSource = "./images/" + randomDiceImage; // linking to the images folder

var image1 = document.querySelectorAll("img")[0];// select image1

image1.setAttribute("src", randomImgSource); // set the source attribute to a new value 



var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImgSource2 = "./images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImgSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML ="Player 1 Wins!!🚩";
}
else if( randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins!!🚩";

}else{
    document.querySelector("h1").innerHTML = "it's a draw!!🏳️";
}

