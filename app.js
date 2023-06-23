"use strict";

let participants = [];

let vacantSeats;

window.addEventListener("load", start);

function start() {
  console.log("JS kører");

// Hent antallet af ledige pladser fra localStorage
  vacantSeats = localStorage.getItem("NumberOfVacantSeats", vacantSeats);
  if (vacantSeats === null) {
    vacantSeats = 50; // Standardværdi, hvis der ikke er noget gemt i localStorage
  } else {
    vacantSeats = parseInt(vacantSeats); // Konverter værdien til et tal
  }

  document.querySelector("#sign-up-form").addEventListener("submit", addParticipantToArray);
  // Store
  localStorage.setItem("NumerOfVacantSeats", vacantSeats)
}

function addParticipantToArray(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const age = Number(form.age.value);
  const email = form.email.value;
  const phone = form.phone.value;
  const comments = form.comments.value;
  const newParticipant = createParticipant(name, age, email, phone, comments);
  console.log(newParticipant);
  participants.push(newParticipant);
  console.log(participants);
  form.reset();
  showNumerOfVacantSeats();
  document.querySelector("#thank-you-note").showModal();
  document.querySelector("#close-thank-you-message").addEventListener("click", closeThankYouMessage);
}

function createParticipant(name, age, email, phone, comments) {
  const participant = {
    name: name,
    age: age,
    email: email,
    phone: phone,
    comments: comments,
  };
  return participant;
}

function showNumerOfVacantSeats() {
  if (vacantSeats > 0) {
    vacantSeats--;
    document.querySelector("#vacant-seats").textContent = vacantSeats;
    console.log(vacantSeats);
  } else {
  }
}

function closeThankYouMessage() {
  document.querySelector("#thank-you-note").close();
}
