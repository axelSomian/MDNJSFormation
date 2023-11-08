const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText="It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
let insertX=['Willy the Goblin', 'Big Daddy', 'Father Christmas'] 
let insertY=['the soup kitchen', 'Disneyland', 'the White House'] 
let insertZ=['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']
let newStory=storyText


randomize.addEventListener('click', result);

function result() {
  newStory=storyText
  if(customName.value !== '') {
    const name = customName.value;
    newStory=newStory.replace('Bob',name)


  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + ' Stone';
    const temperature =  Math.round((94-32)/1.8)+' centigarde';
    newStory=newStory.replace('94 fahrenheit',temperature)
    newStory=newStory.replace('300 pounds',weight)

  }

  
  let xItem=randomValueFromArray(insertX)
  let yItem=randomValueFromArray(insertY)
  let zItem=randomValueFromArray(insertZ)
 

 newStory= newStory.replace(':insertx:',xItem)
 console.trace(newStory)
 newStory=newStory.replace(':inserty:',yItem)
 newStory= newStory.replace(':insertz:',zItem)
 newStory= newStory.replace(':insertx:',xItem)
 story.textContent =newStory ;
story.style.visibility = 'visible';
}
// document.querySelector("html").style.backgroundColor = "red";

  