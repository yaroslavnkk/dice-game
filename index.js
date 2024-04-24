function changeImage(){
    let randomNumber = Math.floor(Math.random() * 6);
    let arrImages = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
    let arrButtonNames = ["Wow", "Genius", "Nice", "Good", "Super", "Amazing"]
    document.getElementById("image").setAttribute("src", arrImages[randomNumber]);
    document.getElementById("button").innerHTML = arrButtonNames[randomNumber];
}