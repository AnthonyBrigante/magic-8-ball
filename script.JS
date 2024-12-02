//Get Username
let userName = prompt('Whats your name?')
//Put username in website
userName ? document.getElementById('greeting').innerText=`Hello, ${userName}` : document.getElementById('greeting').innerText=`Alright then I'll just call you Al, how are ya Al?`;
let responseImg = document.getElementById('response-img')
let responseText = document.getElementById('response-text')
;let greeting = document.getElementById('greeting')
function shakeMagicConch(){
//Get the question
let userQuestion = prompt('What would you like to ask the 8Ball?')


//DO NOTTA TOUCHA THIS CODE!!!
let randomNumber = Math.floor(Math.random() * 10)
let eightBall = ''
let imageChoice =''
//All possible answers
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    imageChoice = 'imgs/8ball-1.jpg'
    break;
  case 1:
    eightBall = 'It is decidedly so';
    imageChoice = 'imgs/8ball-2.jpg'
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    imageChoice = 'imgs/8ball-3.jpg'
    break;
  case 3:
    eightBall = 'Cannot predict now';
    imageChoice = 'imgs/8ball-4.jpg'
    break;
  case 4:
    eightBall = 'Do not count on it';
    imageChoice = 'imgs/8ball-5.jpg'
    break;
  case 5:
    eightBall = 'My sources say no';
    imageChoice = 'imgs/8ball-6.jpg'
    break;
  case 6:
    eightBall = 'Outlook not so good';
    imageChoice = 'imgs/8ball-7.jpg'
    break;
  case 7:
    eightBall = 'Signs point to yes';
    imageChoice = 'imgs/8ball-8.jpg'
    break;
    case 8:
      eightBall = 'definetly not'
      imageChoice = 'imgs/8ball-9.jpg'
      break;
      case 9:
        eightBall= 'look out for busses for the next two weeks'
        imageChoice = 'imgs/8ball-10.gif'
}

console.log('eightBall')

document.getElementById('response-text').innerText =`${userName} has asked ${userQuestion} to the almighty 8Ball. The 8Ball has replied ${eightBall}!`

responseImg.src = imageChoice
}
