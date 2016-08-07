function emitLog(event) {
    console.log('log ', event);
}
function addItem() {
    const items = document.querySelector('.items');
    const item = renderItem(Math.random(10000));
    items.innerHTML += item;
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

});