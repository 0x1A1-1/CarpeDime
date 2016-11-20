// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });

  // Most methods of the Chrome extension APIs are asynchronous. This means that
  // you CANNOT do something like this:
  //
  // var url;
  // chrome.tabs.query(queryInfo, function(tabs) {
  //   url = tabs[0].url;
  // });
  // alert(url); // Shows "undefined", because chrome.tabs.query is async.
}

/**
 * @param {string} searchTerm - Search term for Google Image search.
 * @param {function(string,number,number)} callback - Called when an image has
 *   been found. The callback gets the URL, width and height of the image.
 * @param {function(string)} errorCallback - Called when the image is not found.
 *   The callback gets a string that describes the failure reason.
 */

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

var classes = [];
document.addEventListener('DOMContentLoaded', function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "http://localhost:8000", true);
  xhr.send();

  xhr.onreadystatechange = processRequest;

  function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        // var response = JSON.parse(xhr.responseText);
        var events = JSON.parse(xhr.responseText).items;
        console.log(events);

        events.forEach( function(arrayItem){
            if(arrayItem.description == "Class"){
              classes.push(arrayItem);
            }
        });
        console.log(classes);
        fillDays();
    }
  }
});

var monday = {};
var tuesday = {};
var wednesday = {};
var thursday = {};
var friday = {};
var totalTime = 0;

function fillDays(){ //fill dictionary, add to totalTime
  classes.forEach( function(event){
		var startTime = new Date(event.start.dateTime);
		var endTime = new Date(event.end.dateTime);
		var duration = Math.abs(endTime.getTime() - startTime.getTime())/60000;
		totalTime += duration;

    if(startTime.getDay() == 1){
      monday[startTime.getHours()] = duration;
    } else if(startTime.getDay() == 2){
      tuesday[startTime.getHours()] = duration;
    } else if(startTime.getDay() == 3){
      wednesday[startTime.getHours()] = duration;
    } else if(startTime.getDay() == 4){
      thursday[startTime.getHours()] = duration;
    } else if(startTime.getDay() == 5){
      friday[startTime.getHours()] = duration;
    }
	});

  getRate();
}

function getRate(){
  console.log(1285/totalTime);
	return 1285/totalTime;
}
