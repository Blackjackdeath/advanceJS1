const people = (function () {
    const db = ['Іван', 'Петро', 'Дмитро'];
    let tableB;
    let buttonAdd;
    let deleteImage;
    let inputUser;
    function privateAddPersonName() {
        cacheDOM();
        if (!inputUser == '') {
            db.push(inputUser);
            render();
            cacheDOM();
            bindEvent();
        }
        else {
            alert('Enter name');
        }
    };
    function privateDelPersonName() {
        db.splice(parseInt(this.parentNode.parentNode.firstChild.textContent) - 1, 1);
        render();
        cacheDOM();
        bindEvent();
    };
    function init() {
        cacheDOM();
        render();
        cacheDOM();
        bindEvent();
    };
    function cacheDOM() {
        tableB = document.getElementsByTagName('table')[0];
        buttonAdd = document.getElementsByTagName('button')[0];
        inputUser = document.getElementsByTagName('input')[0].value;
        deleteImage = document.querySelectorAll('.close');
    };
    function bindEvent() {
        buttonAdd.addEventListener('click', privateAddPersonName);
        for (let i = 0; i < deleteImage.length; i++) {
            deleteImage[i].addEventListener('click', privateDelPersonName);
        }
    };
    function render() {
        inputUser = '';
        document.getElementsByTagName('input')[0].value = '';
        if (!tableB.innerHTML == '') {
            tableB.innerHTML = '';
        }
        for (let i = 0; i < db.length; i++) {
            let row = tableB.insertRow();
            row.classList.add('row');
            let cell = row.insertCell();
            cell.classList.add('numCell');
            cell.textContent = i + 1;
            cell = row.insertCell();
            cell.classList.add('nameCell');
            cell.textContent = db[i];
            cell = row.insertCell();
            cell.classList.add('deleteCell');
            cell.innerHTML = `<img src="close.png" alt="" class="close">`;
        }
    }
    return {
        init: init,
        cacheDOM: cacheDOM,
        bindEvent: bindEvent,
        render: render
    }
})();
people.init();