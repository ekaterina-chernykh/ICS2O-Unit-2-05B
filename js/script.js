// Copyright (c) 2022 Ekaterina All rights reserved
//
// Created by: Ekaterina
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

/**
 * This function displays an alert.
 */
function calculate() {
  // input
  const worked = parseFloat(document.getElementById("number-of-hours").value)
  const rate = parseFloat(document.getElementById("hourly-rate").value)

  // process
  const pay = worked * rate * (1 - 0.18)
  const tax = worked * rate * 0.18

  // output
  document.getElementById("pay").innerHTML =
    "Your pay will be $" + pay.toFixed(2)
  document.getElementById("tax").innerHTML =
    "The govenment will take $" + tax.toFixed(2)
}
