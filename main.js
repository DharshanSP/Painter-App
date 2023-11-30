const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

let drawing = false;

canvas.addEventListener('mousedown', (e) => {
 drawing = true;
 ctx.beginPath();
 ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
});

canvas.addEventListener('mousemove', (e) => {
 if (!drawing) return;

 const colorPicker = document.getElementById('colorPicker');
 const brushSizePicker = document.getElementById('brushSizePicker');

 ctx.strokeStyle = colorPicker.value;
 ctx.lineWidth = brushSizePicker.value;

 ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
 ctx.stroke();
});

canvas.addEventListener('mouseup', () => {
 drawing = false;
});