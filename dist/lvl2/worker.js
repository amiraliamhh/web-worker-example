"use strict";

onmessage = function onmessage() {
  var url = 'https://api.coinmarketcap.com/v2/ticker/1/';
  fetchData(url).then(function (price) {
    self.postMessage(price, undefined);
  }).catch(function (err) {
    console.error(err);
  });
  setInterval(function () {
    fetchData(url).then(function (price) {
      self.postMessage(price, undefined);
    }).catch(function (err) {
      console.error(err);
    });
    console.log('is working');
  }, 10 * 1000);
};

function fetchData(url) {
  return new Promise(function (resolve, reject) {
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (response) {
      resolve(response.data.quotes.USD.price);
    }).catch(function (err) {
      reject(err);
    });
  });
}