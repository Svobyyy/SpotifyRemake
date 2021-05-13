let burger = document.querySelector(`.burger`);
let cara = document.querySelectorAll(`.cara`);
let menu = document.querySelector(`.menu`);
let body = document.querySelector(`body`);

burger.addEventListener(`click`, () => {
    body.classList.toggle(`scrollStop`)
    for(let i = 0; i < cara.length; i++)
    {
        cara[i].classList.toggle(`animace`);
    }

    if(menu.classList.contains(`hide`))
    {
        menu.classList.add(`fadeInMenu`);
        menu.classList.remove(`fadeOutMenu`);
        menu.classList.remove(`hide`);
    }
    else {
        menu.classList.remove(`fadeInMenu`);
        menu.classList.add(`fadeOutMenu`);
        menu.addEventListener(`animationend`, () => {
            if(menu.classList.contains(`fadeOutMenu`))
            {
                menu.classList.add(`hide`);
            }
        })
    }


})