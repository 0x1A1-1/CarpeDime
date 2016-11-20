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
    var tab = tabs[0];
    var url = tab.url;

    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });


}


function renderStatus(statusText) {
  console.log("renderStatus is loading");
  //document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    //COUNTUP SETUP



    // Put the image URL in Google search.
    var currURL = extractDomain(url);
    document.getElementById("currURL").innerHTML = currURL;
    console.log(currURL);
    for (var i=0; i < data.length; i++) {
      var item = data[i];

      if(currURL == item) {
        renderStatus('THIS IS ON THE BLACKLIST');
        break;
      }
      else {
        renderStatus('the url is: ' + url);
      }
    }
  });
});
function extractDomain(url) {
    var domain;
    //find & remove protocol (http, ftp, etc.) and get domain
    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    }
    else {
        domain = url.split('/')[0];
    }

    //find & remove port number
    domain = domain.split(':')[0];

    return domain;
}

