function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const modalClose = document.querySelector('.close');
const modalContent = document.querySelector('.content');
const buttonSubmit = document.querySelector('.btn-submit');
const textControls = document.querySelectorAll('.text-control');
const checkboxIcons = document.querySelectorAll('.checkbox-icon');

// launch modal event
modalBtn.forEach(btn => btn.addEventListener('click', launchModal));
modalClose.addEventListener('click', function (e) {
  e.stopPropagation();
  closeContent();
});

// launch modal form
function launchModal() {
  modalbg.classList.remove('hidden');
}

// close modal form
function closeContent() {
  // modalbg.classList.add('hidden');
  modalContent.classList.add('close-content');
  closeBackground();
}

function closeBackground() {
  setTimeout(function () {
    modalContent.classList.remove('close-content');
    modalbg.classList.add('hidden');
    resetForm();
  }, 700);
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalbg.classList.contains('hidden')) {
    closeContent();
  }
});

// Form validation
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const numberOfTournaments = document.getElementById('quantity');
const radioButtons = document.querySelectorAll('.checkbox-input-radio');
const checkbox = document.querySelector('.checkbox-input-checkbox');

let isRadioChecked;

for (let i = 0; i < textControls.length; i++) {
  // console.log(textControl[i].id);
  textControls[i].addEventListener('blur', function () {
    checkInput(textControls[i].id);
  });
}

function checkInput(textControl) {
  switch (textControl) {
    case 'first':
      firstName.value.length < 2
        ? setErrorFor(
            firstName,
            'This field must contain at least 2 characters'
          )
        : setSucessFor(firstName);
      break;
    case 'last':
      lastName.value.length < 2
        ? setErrorFor(lastName, 'This field must contain at least 2 characters')
        : setSucessFor(lastName);
      break;
    case 'email':
      email.value.length === 0
        ? setErrorFor(email, 'E-mail cannot be blank')
        : !isEmail(email.value)
        ? setErrorFor(email, 'This is not a valid e-mail')
        : setSucessFor(email);
      break;
    case 'birthdate':
      !birthDate.value
        ? setErrorFor(birthDate, 'Please insert a valid date')
        : setSucessFor(birthDate);
      break;
    case 'quantity':
      !numberOfTournaments.value
        ? setErrorFor(numberOfTournaments, 'This field cannot be blank')
        : setSucessFor(numberOfTournaments);
      break;
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  formControl.classList.remove('success');
  formControl.classList.add('error');
  const small = formControl.querySelector('.error-message');
  small.innerText = message;
}

function setSucessFor(input) {
  const formControl = input.parentElement;
  formControl.classList.remove('error');
  formControl.classList.add('success');
}

function isEmail(emailValue) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    emailValue
  );
}

function resetForm() {
  formData.forEach(formDatum => {
    formDatum.classList.remove('success');
    formDatum.classList.remove('error');
  });
  firstName.value = '';
  lastName.value = '';
  email.value = '';
  birthDate.value = '';
  numberOfTournaments.value = '';
  formData[5].classList.remove('error');
  checkboxIcons.forEach(checkboxIcon => {
    checkboxIcon.classList.remove('checkbox-icon--error');
  });
  formData[6].classList.remove('error');
  checkbox.classList.remove('checkbox-icon--error');
}

buttonSubmit.addEventListener('click', function (e) {
  for (let i = 0; i < textControls.length; i++) {
    checkInput(textControls[i].id);
  }

  formData.forEach(formDatum => {
    if (formDatum.classList.contains('error')) {
      e.preventDefault();
      shake();
    }
  });

  checkRadio(e);

  console.log('ok');
});

function checkRadio(e) {
  for (const rb of radioButtons) {
    if (rb.checked) {
      isRadioChecked = true;
      checkboxIcons.forEach(checkboxIcon => {
        checkboxIcon.classList.remove('checkbox-icon--error');
      });
      formData[5].classList.remove('error');
      break;
    }
  }
  if (!isRadioChecked) {
    e.preventDefault();
    checkboxIcons.forEach(checkboxIcon => {
      checkboxIcon.classList.add('checkbox-icon--error');
    });
    formData[5].classList.add('error');
    const small = formData[5].querySelector('.error-message');
    small.innerText = 'You must choose at least one location!';
    shake();
  }

  if (!checkbox.checked) {
    e.preventDefault();
    checkbox.classList.add('checkbox-icon--error');
    formData[6].classList.add('error');
    const small = formData[6].querySelector('.error-message');
    small.innerText = 'You must agree with the terms and conditions!';
    shake();
  } else {
    checkbox.classList.remove('checkbox-icon--error');
    formData[6].classList.remove('error');
  }
}

function shake() {
  modalContent.classList.add('shake');
  modalContent.classList.remove('stay');
  modalContent.addEventListener('animationend', function () {
    modalContent.classList.remove('shake');
    modalContent.classList.add('stay');
  });
}

// TO DO

// Fazr o check do radio button. Pensar na melhor maneira de fazer
// Coloco na função CheckRadio ou na função checkInput?
// Fazer o check do terms and conditions
// Mesma dývida do anterior
