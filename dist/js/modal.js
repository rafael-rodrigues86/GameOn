// function editNav() {
//   var x = document.getElementById('myTopnav');
//   if (x.className === 'topnav') {
//     x.className += ' responsive';
//   } else {
//     x.className = 'topnav';
//   }
// }

// // DOM Elements
// const modalbg = document.querySelector('.bground');
// const modalBtn = document.querySelectorAll('.modal-btn');
// const formData = document.querySelectorAll('.formData');
// const modalBody = document.querySelector('.modal-body');
// const modalClose = document.querySelector('.close');
// const modalCloseSucessful = document.querySelector('.close-successful');
// const modalContent = document.querySelector('.content');
// const contentSuccessful = document.querySelector('.content-successful');
// const buttonSubmit = document.querySelector('.btn-submit');
// const textControls = document.querySelectorAll('.text-control');
// const checkboxIcons = document.querySelectorAll('.checkbox-icon');
// const firstName = document.getElementById('first');
// const lastName = document.getElementById('last');
// const email = document.getElementById('email');
// const birthDate = document.getElementById('birthdate');
// const numberOfTournaments = document.getElementById('quantity');
// const radioButtons = document.querySelectorAll('.checkbox-input-radio');
// const checkbox = document.querySelector('.checkbox-input-checkbox');
// let isRadioChecked;

// // launch modal event
// modalBtn.forEach(btn => btn.addEventListener('click', launchModal));
// modalClose.addEventListener('click', function (e) {
//   e.stopPropagation();
//   closeContent(modalClose.parentElement);
//   // console.log(modalClose.parentElement);
// });

// modalCloseSucessful.addEventListener('click', function (e) {
//   e.stopPropagation();
//   closeContent(modalCloseSucessful.parentElement);
// });

// // Launch modal form
// function launchModal() {
//   modalbg.classList.remove('hidden');
// }

// // Close modal form
// function closeContent(close) {
//   modalContent.classList.remove('stay');
//   close.classList.add('close-content');
//   closeBackground(close);
// }

// // Hide background
// function closeBackground(closeB) {
//   setTimeout(function () {
//     closeB.classList.remove('close-content');
//     modalbg.classList.add('hidden');
//     resetForm();
//   }, 700);
// }

// // Close form when esc key is pressed
// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modalbg.classList.contains('hidden')) {
//     closeContent();
//   }
// });

// // Form validation

// // Looping over text inputs

// for (let i = 0; i < textControls.length; i++) {
//   textControls[i].addEventListener('blur', function () {
//     checkInput(textControls[i].id);
//   });
// }

// // Function to validate text inputs

// function checkInput(textControl) {
//   switch (textControl) {
//     case 'first':
//       firstName.value.length < 2
//         ? setErrorFor(
//             firstName,
//             'This field must contain at least 2 characters'
//           )
//         : setSucessFor(firstName);
//       break;
//     case 'last':
//       lastName.value.length < 2
//         ? setErrorFor(lastName, 'This field must contain at least 2 characters')
//         : setSucessFor(lastName);
//       break;
//     case 'email':
//       email.value.length === 0
//         ? setErrorFor(email, 'E-mail cannot be blank')
//         : !isEmail(email.value)
//         ? setErrorFor(email, 'This is not a valid e-mail')
//         : setSucessFor(email);
//       break;
//     case 'birthdate':
//       !birthDate.value
//         ? setErrorFor(birthDate, 'Please insert a valid date')
//         : setSucessFor(birthDate);
//       break;
//     case 'quantity':
//       !numberOfTournaments.value
//         ? setErrorFor(numberOfTournaments, 'This field cannot be blank')
//         : setSucessFor(numberOfTournaments);
//       break;
//   }
// }

// // Function that tells what happen in case of a validation error
// function setErrorFor(input, message) {
//   const formControl = input.parentElement;
//   formControl.classList.remove('success');
//   formControl.classList.add('error');
//   const small = formControl.querySelector('.error-message');
//   small.innerText = message;
// }

// // Function that tells what happen in case of a validation success

// function setSucessFor(input) {
//   const formControl = input.parentElement;
//   formControl.classList.remove('error');
//   formControl.classList.add('success');
// }

// // Function to test wheter it's a valid e-mail or not - RegEx

// function isEmail(emailValue) {
//   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     emailValue
//   );
// }

// // Function to reset the form

// function resetForm() {
//   formData.forEach(formDatum => {
//     formDatum.classList.remove('success');
//     formDatum.classList.remove('error');
//   });
//   firstName.value = '';
//   lastName.value = '';
//   email.value = '';
//   birthDate.value = '';
//   numberOfTournaments.value = '';
//   formData[5].classList.remove('error');
//   checkboxIcons.forEach(checkboxIcon => {
//     checkboxIcon.classList.remove('checkbox-icon--error');
//   });
//   formData[6].classList.remove('error');
//   modalContent.classList.remove('stay');

//   checkbox.classList.remove('checkbox-icon--error');
//   contentSuccessful.classList.remove('animation');
//   modalContent.classList.remove('content-disappear');
// }

// // Event Listener for when the submit button is clicked

// buttonSubmit.addEventListener('click', function (e) {
//   // Looping over text inputs again
//   for (let i = 0; i < textControls.length; i++) {
//     checkInput(textControls[i].id);
//   }

//   // In case of error in one of the inputs, prevent Default

//   const test1 = checkErrorOnTextInput(e);

//   // In case of error in one of the radio buttons, prevent default

//   const test2 = checkRadio(e);

//   const test3 = checkTermsAndConditions(e);
//   console.log(test1, test2, test3);

//   if (test1 && test2 && test3) {
//     e.preventDefault();
//     modalContent.classList.add('content-disappear');
//     contentSuccessful.classList.add('animation');
//     modalContent.classList.remove('stay');

//     // modalContent.classList.add('content-fadeout');
//     // const contentFadeOut = document.querySelector('.content-fadeout');
//     // contentFadeOut.addEventListener('animationstart', function () {
//     //   contentSuccessful.classList.add('animation');
//     // });
//     // contentFadeOut.addEventListener('animationend', function () {
//     //   modalContent.classList.add('close-content-sucessful');

//     //   // console.log('ok');
//     // });
//   }
// });

// function checkErrorOnTextInput(e) {
//   // formData.forEach(formDatum => {
//   //   if (formDatum.classList.contains('error')) {
//   //     e.preventDefault();
//   //     shake();
//   //     return false;
//   //   }
//   // });
//   for (const formDatum of formData) {
//     if (formDatum.classList.contains('error')) {
//       e.preventDefault();
//       shake();
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

// function checkRadio(e) {
//   for (const rb of radioButtons) {
//     if (rb.checked) {
//       isRadioChecked = true;
//       checkboxIcons.forEach(checkboxIcon => {
//         checkboxIcon.classList.remove('checkbox-icon--error');
//       });
//       formData[5].classList.remove('error');
//       return true;
//       // break;
//     }
//   }
//   if (!isRadioChecked) {
//     e.preventDefault();
//     checkboxIcons.forEach(checkboxIcon => {
//       checkboxIcon.classList.add('checkbox-icon--error');
//     });
//     formData[5].classList.add('error');
//     const small = formData[5].querySelector('.error-message');
//     small.innerText = 'You must choose at least one location!';
//     shake();
//     return false;
//   } else {
//     return true;
//   }
// }

// function checkTermsAndConditions(e) {
//   if (!checkbox.checked) {
//     e.preventDefault();
//     checkbox.classList.add('checkbox-icon--error');
//     formData[6].classList.add('error');
//     const small = formData[6].querySelector('.error-message');
//     small.innerText = 'You must agree with the terms and conditions!';
//     shake();
//     return false;
//   } else {
//     checkbox.classList.remove('checkbox-icon--error');
//     formData[6].classList.remove('error');
//     return true;
//   }
// }

// function shake() {
//   modalContent.classList.add('shake');
//   modalContent.classList.remove('stay');
//   setTimeout(function () {
//     modalContent.classList.remove('shake');
//     modalContent.classList.add('stay');
//   }, 700);
// }

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
const modalBody = document.querySelector('.modal-body');
const closeBtn = document.querySelector('.close');
const closeBtnSuccessful = document.querySelector('.close-successful');
const modalContent = document.querySelector('.content');
const contentSuccessful = document.querySelector('.content-successful');
const buttonSubmit = document.querySelector('.btn-submit');
const buttonSubmitSuccessful = document.querySelector('.btn-submit-successful');
const textControls = document.querySelectorAll('.text-control');
const checkboxIcons = document.querySelectorAll('.checkbox-icon-radio');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const numberOfTournaments = document.getElementById('quantity');
const radioButtons = document.querySelectorAll('.checkbox-input-radio');
const checkbox = document.querySelector('.checkbox-input-checkbox');
const checkboxSpan = document.querySelector('.checkbox-icon-checkbox');
let isRadioChecked = false;

// launch modal event

function launchModalEvent() {
  modalBtn.forEach(btn => btn.addEventListener('click', launchModal));

  function launchModal() {
    modalbg.classList.remove('hidden'); // on _bgground.scss
    window.scrollTo(0, 0);
  }
}

// Close modal

function closeModalEvent() {
  // Close form when close button is pressed
  closeBtnPressed(closeBtn);
  closeBtnPressed(closeBtnSuccessful);

  // Close form when esc key is pressed
  closeEscPressed();

  // Close form when submit button is pressed after form validation
  closeBtnPressed(buttonSubmitSuccessful);
}

function closeBtnPressed(btn) {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    closeContent(btn.parentElement);
    console.log(btn.parentElement);
  });
}

function closeEscPressed() {
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modalbg.classList.contains('hidden')) {
      closeContent(modalContent);
    }
  });
}

// Close modal form
function closeContent(mContent) {
  contentSuccessful.classList.remove('content-appear');
  mContent.classList.remove('stay');
  mContent.classList.add('close-content');
  closeBackground(mContent);
}

// Hide background
function closeBackground(closeB) {
  setTimeout(function () {
    closeB.classList.remove('close-content');
    modalbg.classList.add('hidden');
    resetForm();
  }, 700);
}

// Form validation

// Looping over text inputs

function loopOverTextInputs(eventName) {
  for (let i = 0; i < textControls.length; i++) {
    if (eventName === 'blur') {
      textControls[i].addEventListener(eventName, function () {
        checkInput(textControls[i].id);
      });
    } else {
      checkInput(textControls[i].id);
    }
  }
}

// Validate text inputs

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

// Function that tells what happen in case of a validation error
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  formControl.classList.remove('success');
  formControl.classList.add('error');
  const small = formControl.querySelector('.error-message');
  small.innerText = message;
}

// Function that tells what happen in case of a validation success

function setSucessFor(input) {
  const formControl = input.parentElement;
  formControl.classList.remove('error');
  formControl.classList.add('success');
}

// Function to test wheter it's a valid e-mail or not - RegEx

function isEmail(emailValue) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    emailValue
  );
}

// Function to reset the form

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
  modalContent.classList.remove('stay');

  checkbox.classList.remove('checkbox-icon--error');
  // contentSuccessful.classList.remove('content-appear');
  // contentSuccessful.style.display = 'none';
  modalContent.classList.remove('content-disappear');
  for (const rb of radioButtons) {
    rb.checked = false;
  }
  isRadioChecked = false;
}

// Event Listener for when the submit button is clicked

function handlesSubmitButtonClicked() {
  buttonSubmit.addEventListener('click', function (e) {
    loopOverTextInputs();

    const errorOnTextInput = checkErrorOnTextInput(e);
    const errorOnRadio = checkErrorOnRadio(e);
    const errorOnTermsAndConditions = checkErrorOnTermsAndConditions(e);
    console.log(errorOnTextInput, errorOnRadio, errorOnTermsAndConditions);

    if (errorOnTextInput && errorOnRadio && errorOnTermsAndConditions) {
      validationSuccessful(e);
    }
  });
}

function checkErrorOnTextInput(e) {
  for (const formDatum of formData) {
    if (formDatum.classList.contains('error')) {
      e.preventDefault();
      shake();
      return false;
    } else {
      return true;
    }
  }
}

function checkErrorOnRadio(e) {
  for (const rb of radioButtons) {
    if (rb.checked) {
      isRadioChecked = true;
      break;
    }
  }

  if (!isRadioChecked) {
    handleRadioButtonError(
      'You must choose at least one location!',
      checkboxIcons,
      e
    );
    return false;
  } else {
    handleRadioButtonSuccess(checkboxIcons);
    return true;
  }
}

function checkErrorOnTermsAndConditions(e) {
  if (!checkbox.checked) {
    handleCheckboxError(
      'You must agree with the terms and conditions!',
      checkboxSpan,
      e
    );
    return false;
  } else {
    handleCheckboxSuccess(checkboxSpan);
    return true;
  }
}

function handleRadioButtonError(message, element, event) {
  element.forEach(checkboxIcon => {
    checkboxIcon.classList.add('checkbox-icon--error');
  });
  const formTest = element[0].parentElement.parentElement;
  formTest.classList.add('error');
  const small = formTest.querySelector('.error-message');
  small.innerText = message;
  event.preventDefault();
  shake();
}

function handleRadioButtonSuccess(element) {
  element.forEach(checkboxIcon => {
    checkboxIcon.classList.remove('checkbox-icon--error');
  });
  const formTest = element[0].parentElement.parentElement;
  formTest.classList.remove('error');
}

function handleCheckboxError(message, element, event) {
  const formTest = element.parentElement.parentElement;
  formTest.classList.add('error');
  const small = formTest.querySelector('.error-message');
  small.innerText = message;
  event.preventDefault();
  shake();
}

function handleCheckboxSuccess(element) {
  const formTest = element.parentElement.parentElement;
  formTest.classList.remove('error');
}

function validationSuccessful(e) {
  e.preventDefault();
  modalContent.classList.add('content-disappear');
  contentSuccessful.classList.add('content-appear');
  modalContent.classList.remove('stay');
}

// Shake visual effect in case of error in form validation

function shake() {
  modalContent.classList.add('shake');
  modalContent.classList.remove('stay');
  setTimeout(function () {
    modalContent.classList.remove('shake');
    modalContent.classList.add('stay');
  }, 700);
}

function init() {
  launchModalEvent();
  closeModalEvent();
  loopOverTextInputs('blur');
  handlesSubmitButtonClicked();
}

init();
