const progressBar = document.querySelector('.indicator');
const buttons = document.querySelectorAll('button');
const confetti = document.querySelector('.confetti');

let currentStep = 1;
//function that update the current steps and update the DOM
const updateSteps = (e) => {
    //update current step based on the button clicked
    currentStep = e.target.id === "next" ? ++currentStep : --currentStep;

    //update progress bar width based on current step
    progressBar.style.width = `${(currentStep-1)  * 10}%`;

    //check if progress bar reach the full width and disable corrosponding buttons with confetti
    if (progressBar.style.width === `${100}%` ) {
        progressBar.classList.add('active');
        buttons[1].disabled = true;
        confetti.classList.add('active')
    } else if (progressBar.style.width === `${0}%`) {
        buttons[0].disabled = true;
        confetti.classList.remove('active')
    } else {
        buttons.forEach((button) => (button.disabled = false))
        progressBar.classList.remove('active');
        confetti.classList.remove('active')
    }

}

// add click event listeners to all buttons
buttons.forEach((button) => {
    button.addEventListener('click', updateSteps);
})