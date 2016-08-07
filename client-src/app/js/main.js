function emitLog(event) {
    console.log('log ', event);
}
function addItem() {
    const items = document.querySelector('.items');
    const item = renderItem(Math.random(10000));
    items.innerHTML += item;
}
function getData() {
    fetch('/getTestData').then((res) => {
        const itemDataHtml = renderData(res.json());
        document.querySelector('.items').innerHTML = itemDataHtml; 
    });
}
function renderData(data) {
    return `<div class="data__item">
                ${data}
            </div>`;
}
function renderItem(name) {
    return `<div class="item">
                ${name}
            </div>`;
}

document.addEventListener('DOMContentLoaded', (event) => {
    const actionControls = document.querySelector('.action-control');
    actionControls.querySelectorAll('.btn-error').forEach((element) => {
        element.addEventListener('click', (event) => {
            emitLog(event);
        });
    });
    actionControls.querySelectorAll('.btn-default').forEach((element) => {
        element.addEventListener('click', (event) => {
            addItem();
        });
    });
    actionControls.querySelectorAll('.btn-warn').forEach((element) => {
        element.addEventListener('click', (event) => {
            getData();
        });
    });
});