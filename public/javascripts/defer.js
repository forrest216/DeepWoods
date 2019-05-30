/* --------------------This document must be deferred for event handlers to attach to dynamic elements------------------ */

// ----------------- Burger Toggle -------------------
var burger = document.querySelector('.navbar-burger');
var navItems = document.querySelectorAll('.navbar-item');

burger.addEventListener('click', toggleBurger);
navItems.forEach((item) => {
   item.addEventListener('click', toggleBurger);
});

function toggleBurger() {
   document.querySelector('.navbar-menu').classList.toggle('is-active');
};

// ----------- Secret Modal Toggle -----------------
var modalBtn = document.querySelectorAll('.modal-button');
var modalCloseBtn = document.querySelectorAll('.delete');
var modalCancel = document.querySelectorAll('.button.cancel');
var modalSubmit = document.querySelectorAll('.button.edit-submit');

var id;

if (modalBtn.length) modalBtn.forEach((button) => {
   button.addEventListener('click', toggleModal)
});
if (modalCloseBtn.length) modalCloseBtn.forEach((button) => {
   button.addEventListener('click', toggleModal)
});
if (modalCancel.length) modalCancel.forEach((button) => {
   button.addEventListener('click', toggleModal)
});
if (modalSubmit.length) modalSubmit.forEach((button) => {
   button.addEventListener('click', toggleModal)
});

function toggleModal(evt) {
   if (evt.target.id) { id = evt.target.id };
   document.querySelector(`.${id}`).classList.toggle('is-active');
}

// ----------- Trade Modal Toggle -----------------
var modalBtn = document.querySelectorAll('.modal-button');
var modalCloseBtn = document.querySelectorAll('.delete');
var modalCancel = document.querySelectorAll('.button.cancel');
var modalSubmit = document.querySelectorAll('.button.edit-submit');

var id;

if (modalBtn.length) modalBtn.forEach((button) => {
   button.addEventListener('click', toggleModal)
});
if (modalCloseBtn.length) modalCloseBtn.forEach((button) => {
   button.addEventListener('click', toggleModal)
});
if (modalCancel.length) modalCancel.forEach((button) => {
   button.addEventListener('click', toggleModal)
});
if (modalSubmit.length) modalSubmit.forEach((button) => {
   button.addEventListener('click', toggleModal)
});

function toggleModal(evt) {
   if (evt.target.id) { id = evt.target.id };
   document.querySelector(`.${id}`).classList.toggle('is-active');
}


