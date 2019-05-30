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
var modalBtn = document.querySelectorAll('.edit-button');
var modalCloseBtn = document.querySelectorAll('.delete.delete-edit');
var modalCancel = document.querySelectorAll('.button.cancel');

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

function toggleModal(evt) {
   // Sets modal target to specific secret using id variable
   if (evt.target.id) { id = evt.target.id };
   document.querySelector(`.${id}`).classList.toggle('is-active');
}

// ----------- Trade Modal Toggle -----------------
var tradeModalBtn = document.querySelectorAll('.trade-button');
var tradeModalCloseBtn = document.querySelectorAll('.delete.delete-trade');
var tradeModalCancel = document.querySelectorAll('.trade-cancel');

if (tradeModalBtn.length) tradeModalBtn.forEach((button) => {
   button.addEventListener('click', toggleTradeModal)
});
if (tradeModalCloseBtn.length) tradeModalCloseBtn.forEach((button) => {
   button.addEventListener('click', toggleTradeModal)
});
if (tradeModalCancel.length) tradeModalCancel.forEach((button) => {
   button.addEventListener('click', toggleTradeModal)
});

function toggleTradeModal(evt) {
   if (evt.target.id) { id = evt.target.id };
   document.querySelector(`.${id}`).classList.toggle('is-active');
}


