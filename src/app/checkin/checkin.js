let currentDate = new Date().getDay();
//let currentDate = 3;
let divsDay = document.getElementsByClassName('day');
let days = [];

for (let i = 0; i < divsDay.length; i++) {
    days.push(divsDay[i].dataset.day);
}

console.log(days.length)

for (let i = 0; i < days.length; i++) {
    if (days[i] - currentDate == 0) {
        showInput(divsDay[i]);
    }

    if (currentDate - days[i] > 0) {
        showBefore(divsDay[i]);
    }

    if (currentDate - days[i] < 0) {
        showAfter(divsDay[i]);
    }

}
let btnConfirm = document.getElementById('btnConfirm');

btnConfirm.addEventListener('click', () => {
    let divTime = document.getElementById('time');
    let divDay = divTime.parentElement;
    divDay.removeChild(divTime);

    let newDivTime = document.createElement('div');
    newDivTime.setAttribute('class', 'time');
    newDivTime.style.display = 'flex';
    divDay.appendChild(newDivTime);

    let check = document.createElement('p');
    check.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    check.style.fontSize = '32px';
    newDivTime.appendChild(check);
})


function showInput(div) {
    let divTime = document.createElement('div');
    divTime.setAttribute('class', 'time');
    divTime.setAttribute('id', 'time');
    divTime.style.display = 'flex';
    div.appendChild(divTime);

    let inputTime = document.createElement('input');
    inputTime.setAttribute('type', 'time');
    divTime.appendChild(inputTime);

    let btnConfirm = document.createElement('button');
    btnConfirm.setAttribute('class', 'btnConfirm');
    btnConfirm.setAttribute('id', 'btnConfirm');
    btnConfirm.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    divTime.appendChild(btnConfirm);
}

function showBefore(div) {
    console.log(div);

    let divTime = document.createElement('div');
    divTime.setAttribute('class', 'time');
    divTime.style.display = 'flex';
    div.appendChild(divTime);

    let before = document.createElement('p');
    before.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    before.style.fontSize = '32px';
    divTime.appendChild(before);
}

function showAfter(div) {
    console.log(div);

    let divTime = document.createElement('div');
    divTime.setAttribute('class', 'time');
    divTime.style.display = 'flex';
    div.appendChild(divTime);

    let after = document.createElement('p');
    after.innerHTML = '<i class="fa fa-clock-o" aria-hidden="true"></i>';
    after.style.fontSize = '32px';
    divTime.appendChild(after);
}