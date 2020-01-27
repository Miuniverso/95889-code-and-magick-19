'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var X_POSITION = 100;
var Y_POSITION = 10;

var PADDING = 10;
var PADDING_BAR = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

// // рисуем облака и гистограмму

var drawCanvas = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// чтобы определить высоту каждого элемента гистограммы, надо создать пропорцию
// максимальное количество времени ==> самая высокая часть гистограммы ==> 150px

function foundMaxElement(arr) {
  var maxElement = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
    return maxElement;
  }
}

// генерация прозрачности заливки
//
function getRandom() {
  return (Math.random() * 100) + '%';
}

window.renderStatistics = function (ctx, names, times) {
  drawCanvas(ctx, X_POSITION + 10, Y_POSITION + 10, 'rgba(0, 0, 0, 0.7)'); // shadow
  drawCanvas(ctx, X_POSITION, Y_POSITION, '#fff'); // cloud
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', X_POSITION + 20, Y_POSITION + 20);
  ctx.fillText('Список результатов:', X_POSITION + 20, Y_POSITION + 40);

  var maxTime = foundMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], X_POSITION + PADDING_BAR + (BAR_WIDTH + PADDING_BAR) * i, CLOUD_HEIGHT - PADDING - 5); // имена игроков
    ctx.fillText(Math.round(times[i]), X_POSITION + PADDING_BAR + (BAR_WIDTH + PADDING_BAR) * i, (Y_POSITION + CLOUD_HEIGHT - PADDING_BAR - PADDING) - (BAR_HEIGHT * times[i]) / maxTime); // время

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + getRandom().toString() + ',50%)';
    }

    ctx.fillRect(X_POSITION + PADDING_BAR + (BAR_WIDTH + PADDING_BAR) * i, CLOUD_HEIGHT - PADDING - 15 - (BAR_HEIGHT * times[i] / maxTime), BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);

  }

  // Y_POSITION + (BAR_HEIGHT * times[i] / maxTime)
};
