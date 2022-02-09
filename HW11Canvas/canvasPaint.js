const canvas = document.getElementById("drawingCanvas");
const context = canvas.getContext("2d");
const colorWell = document.getElementById("color");
let isDrawing;


window.addEventListener("load", startup, false);
addListener("color", 'change', changeColor);
addListener("thickness", 'change', changeLineWidth);
addListener("clear", 'click', clearCanvas)
addListener("save", 'click', saveCanvas);


function addListener(id, eventType, callback) {
    const node = document.getElementById(id);
    if (node) {
        node.addEventListener(eventType, callback);
    }
}

window.onload = function () {
    // Подключаем требуемые для рисования события
    canvas.onmousedown = startDrawing;
    canvas.onmouseup = stopDrawing;
    canvas.onmouseout = stopDrawing;
    canvas.onmousemove = draw;
}

function startDrawing(e) {
    // Начинаем рисовать
    isDrawing = true;
    // Создаем новый путь (с текущим цветом и толщиной линии)
    context.beginPath();
    // Нажатием левой кнопки мыши помещаем "кисть" на холст
    context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}

function draw(e) {
    if (isDrawing === true) {  // Определяем текущие координаты указателя мыши
        const x = e.pageX - canvas.offsetLeft;
        const y = e.pageY - canvas.offsetTop;
        // Рисуем линию до новой координаты
        context.lineTo(x, y);
        context.stroke();
    }
}

function stopDrawing() {
    isDrawing = false;
}

function startup() {
    const defaultColor = "#0000ff";
    colorWell.value = defaultColor;
    colorWell.select();
}

function changeColor(event) {
    // 	Меняем текущий цвет рисования
    context.strokeStyle = event.target.value;
}

function changeLineWidth() {
    const linThick = document.getElementById('thickness');
    context.lineWidth = linThick.value;
    const p = document.getElementById('lineVal');
    p.innerHTML = context.lineWidth;
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function saveCanvas() {
    const dataURL = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = dataURL;
    link.download = "my-image-name.json";
    link.click();
    document.body.removeChild(link);
};





