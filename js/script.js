const setBackground = () => {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.second');
    
    p1.classList.add('bg_red');
    p2.classList.add('bg_yellow')
}
let btnSwitchColor = document.getElementById('switch_color');

btnSwitchColor.addEventListener('click', setBackground)