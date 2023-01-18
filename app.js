const expandBtn = document.querySelector('button');
const roboticText = document.querySelector('#roboticText')
expandBtn.addEventListener('click', function () {
    roboticText.classList.remove('disappear')
})