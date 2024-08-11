function rollDice()
{
    return Math.ceil((Math.random()*6));
}

function playGame()
{
    // console.log("inside playGame");
    let randomNumber1 = rollDice();
    let randomNumber2 = rollDice();
    switch(randomNumber1)
    {
        case 1:
            document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
            break;
        case 2:
            document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
            break;
        case 3:
            document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
            break;
        case 4:
            document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
            break;
        case 5:
            document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
            break;
        case 6:
            document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
            break;
        default:
            console.log("Wrong number");
    }

    switch(randomNumber2)
    {
        case 1:
            document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
            break;
        case 2:
            document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
            break;
        case 3:
            document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
            break;
        case 4:
            document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
            break;
        case 5:
            document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
            break;
        case 6:
            document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
            break;
        default:
            console.log("Wrong number");
    }
    if(randomNumber1 == randomNumber2)
    {
        document.querySelector(".resultArea").innerHTML = "Draw";
    }
    else if(randomNumber1 > randomNumber2)
    {
        document.querySelector(".resultArea").innerHTML = "Player 1 Won";
    }
    else
    {
        document.querySelector(".resultArea").innerHTML = "Player 2 Won";
    }
}


// window.addEventListener("load", playGame());

playGame();

// console.log("Hello World");







