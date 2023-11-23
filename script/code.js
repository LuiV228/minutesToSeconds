// Declare button variable called btn
let btn = document.querySelector('[data-btn]')

// Declare function object called calculateTimeInSeconds
function calculateTimeInSeconds() {
    // Declare input variable called minutes(don't forget to make it an integer value instead of a string)
    let minutes = document.getElementById(`minutes`).value
    // declare output variable called seconds
    let seconds = minutes * 60
    // Use if else statement to display only positive values(if negative use else to display a message of your choice)
    if (minutes < 0) {
        alert(`Don't be stuck in the past`)
        document.getElementById(`result`).textContent = `Try Again?`
    }
    else {
        document.getElementById(`result`).textContent = seconds.toFixed(2) + ` seconds`   
    }
}
// Add an event listener to give button functionality(don't use onclick!)
btn.addEventListener(`click`, calculateTimeInSeconds)