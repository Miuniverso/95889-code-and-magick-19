'use strict';

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var setup = document.querySelector('.setup');
// setup.classList.remove('hidden');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// генерация случайного индекса
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// генерация сочетания имени и фамилии
function getRandomName(name, surname) {
  return (name[getRandomInRange(0, name.length - 1)] + ' ' + surname[getRandomInRange(0, surname.length - 1)]);
}

// список всех магов
var wizards = [
  {
    name: getRandomName(names, surnames),
    coatColor: coatColors[getRandomInRange(0, coatColors.length - 1)],
    eyesColor: eyesColors[getRandomInRange(0, eyesColors.length - 1)]
  },
  {
    name: getRandomName(names, surnames),
    coatColor: coatColors[getRandomInRange(0, coatColors.length - 1)],
    eyesColor: eyesColors[getRandomInRange(0, eyesColors.length - 1)]
  },
  {
    name: getRandomName(names, surnames),
    coatColor: coatColors[getRandomInRange(0, coatColors.length - 1)],
    eyesColor: eyesColors[getRandomInRange(0, eyesColors.length - 1)]
  },
  {
    name: getRandomName(names, surnames),
    coatColor: coatColors[getRandomInRange(0, coatColors.length - 1)],
    eyesColor: eyesColors[getRandomInRange(0, eyesColors.length - 1)]
  }
];

var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardsList = document.querySelector('.setup-similar-list');

// генерируем клон из шаблона
function renderWizard(wizard) {
  var wizardClone = wizardTemplate.cloneNode(true);

  wizardClone.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardClone.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardClone.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardClone;
}

var fragment = document.createDocumentFragment();

// добавляем волшебника в разметку
function addWizardToDOM() {
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  wizardsList.appendChild(fragment);
}

addWizardToDOM();

// показываем волшебников
var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

// открываем окно по нажатию на аватарку
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var wizardName = document.querySelector('.setup-user-name');
var setupButtonSubmit = document.querySelector('.setup-submit');
var wizardForm = document.querySelector('.setup-wizard-form');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

wizardName.addEventListener('click', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

setupButtonSubmit.addEventListener('click', function () {
  wizardForm.submit();
});

var coat = document.querySelector('.wizard-coat');
var eyes = document.querySelector('.wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');
var coatInput = document.querySelector('[name="coat-color"]');
var eyesInput = document.querySelector('[name="eyes-color"]');
var fireballInput = document.querySelector('[name="fireball-color"]');

coat.addEventListener('click', function () {
  var newCoatColor = coatColors[getRandomInRange(0, coatColors.length - 1)];
  coatInput.setAttribute('value', newCoatColor);
  coat.style.fill = newCoatColor;
});


coat.addEventListener('click', function () {
  var newCoatColor = coatColors[getRandomInRange(0, coatColors.length - 1)];
  coatInput.setAttribute('value', newCoatColor);
  coat.style.fill = newCoatColor;
});

eyes.addEventListener('click', function () {
  var newEyesColor = eyesColors[getRandomInRange(0, eyesColors.length - 1)];
  eyes.style.fill = newEyesColor;
  eyesInput.value = newEyesColor;
});

fireball.addEventListener('click', function () {
  var newFireballColor = fireballColors[getRandomInRange(0, fireballColors.length - 1)];
  fireball.style.background = newFireballColor;
  fireballInput.value = newFireballColor;
});
