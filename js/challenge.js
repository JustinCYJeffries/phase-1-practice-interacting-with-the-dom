//timer
function timer(){
    let counter = document.getElementById('counter');
    var sec = 0;
    let interval = setInterval(() => {
        counter.innerText = sec++;
        if (sec < 1000) {
            clearInterval(counter);
        }    
    }, 1000);
    //increment Timer
    const plus = document.querySelector('#plus');
plus.addEventListener("click", () => {
    counter.textContent = sec++;
})
// decrement timer
const minus = document.querySelector('#minus');
minus.addEventListener("click", () => {
    counter.textContent = sec--;
})
//like number
const heart = document.getElementById('heart')
const likes = document.querySelector('.likes')
let likedNumbers = {} 
heart.addEventListener("click", liked)
function liked(){
    let number = counter.innerText
    likedNumbers[number] = likedNumbers[number] || 0 
    likedNumbers[number] += 1
    likeList()
}
//display number
function likeList(){
    for(let key in likedNumbers){
        const li = document.createElement("li")
        li.innerText = `${key} has been liked ${likedNumbers[key]} times.`
        likes.append(li)
    }
}
//pause
const pause = document.querySelector('#pause')
pause.addEventListener("click", pausedButton)
let paused = false
function pausedButton(){
    paused = !paused
    if (paused) {
        //disable buttons
        document.getElementById('heart').disabled = true
        document.querySelector('#minus').disabled = true
        document.querySelector('#plus').disabled = true
        document.querySelector('#submit').disabled = true
      clearInterval(interval)
      //switch label
      pause.innerText = "resume"
    } else {
        //enable buttons
        document.getElementById('heart').disabled = false
        document.querySelector('#minus').disabled = false
        document.querySelector('#plus').disabled = false
        document.querySelector('#submit').disabled = false
       //restart
        interval = setInterval(() => {
        counter.innerText = sec++;}, 1000)
      //switch label
        pause.innerText = "pause"
    }
  }
//comments

const submittedComment = document.getElementById('submit')
const list =  document.getElementById('list')
submittedComment.addEventListener("click", comments)
function comments(info){
    info.preventDefault()
    const comment = document.getElementById('comment-input')
    const li = document.createElement("li")
    li.innerText = comment.value
    list.append(li)
    comment.value.reset()

}

}


timer()














