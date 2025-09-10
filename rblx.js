const female = 
document.querySelector('.female');

const male = 
document.querySelector('.male');

const linkedTerms = 
document.querySelector('.the-linked');

const linkedPrivacy = 
document.querySelector('.linked-pri');

window.onload = () => {
    female.addEventListener('click',bgChange);
    male.addEventListener('click',bgChangeMale);

    linkedTerms.addEventListener('click',wnActive);
    linkedPrivacy.addEventListener('click',wnActivePri);
}

let bgChange = () => {
    female.classList.add('afterClickFe');

    setTimeout (()=>{
    female.classList.add('toOn');

    },400);

    if (male.classList.contains('afterClickMa','maToOn')){
        male.classList.remove('afterClickMa','maToOn');
    }
}

let bgChangeMale = () => {
    male.classList.add('afterClickMa');

    setTimeout (()=>{
    male.classList.add('maToOn');

    },400);

    if (female.classList.contains('afterClickFe','toOn')){
        female.classList.remove('afterClickFe','toOn');
    }
}

let wnActive = () => {
    linkedTerms.classList.add('toBold');
}

let wnActivePri = () => {
    linkedPrivacy.classList.add('toBold');
}