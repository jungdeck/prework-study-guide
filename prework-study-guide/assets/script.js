var topics =["HTML", "CSS", "Git", "JavaScript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
function listTopic(){
for(var y=0;y < topics.length; y++){
    console.log(topics[y]) 
}
}
function selecttopics(){
  if (randomTopic === 'HTML') {
  console.log("Let's study HTML!");
} else if (randomTopic === 'CSS') {
  console.log("Let's study CSS!");
} else if (randomTopic === 'Git') {
  console.log("Let's study Git!");
} else if (randomTopic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}
}
console.log('Here are the concepts we studied during the pre-work!')
listTopic(topics)
console.log('Hey you know what to celebrate completing the pre-work:')
selecttopics()