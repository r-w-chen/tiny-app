console.log('hello world')
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.navbar li');
    let currentNavItemIdx = 0;
    /*
    I need to keep track of the current navitem i've clicked

    */
    let header = document.querySelector('.title h1');
    let rightButton = document.querySelector('.right-arrow');
    let leftButton = document.querySelector('.left-arrow');
    rightButton.addEventListener('click', e => {
        currentNavItemIdx++;
        console.log('clicked!', currentNavItemIdx)
        header.innerText = `tiny ${navItems[currentNavItemIdx].innerText}`
        
    })

    leftButton.addEventListener('click', e => {
        currentNavItemIdx--;
        console.log('clicked!', currentNavItemIdx)
    })
})



