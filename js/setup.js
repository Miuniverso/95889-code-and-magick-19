'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

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

var wizardTemplate = document.querySelector('#similar-wizard-template');
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
