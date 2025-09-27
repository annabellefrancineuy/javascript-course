'use strict';

console.log('=== MODAL DEVELOPMENT: FOUNDATION & CLASS TOGGLING');
console.log('Modal Project ready!');

// DOM Element Selection & Caching
const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnCloseModalEl = document.querySelector('.close-modal');
const btnOpenModalEl = document.querySelectorAll('.show-modal');

// Open/Close Helpers with Class Toggling

let lastFocusedElement = null;

const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');

  modalEl.focus();
  lastFocusedElement = document.activeElement;
};

const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
};

// Connecting everything with Event Listeners
btnOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

// keyboard events
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});

// Accessibility attributes
modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');
btnCloseModalEl.setAttribute('aria-label', 'Close modal');
