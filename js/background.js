// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a 'g' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: "facebook" },
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: "reddit" },
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: "twitter" },
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: "youtube" },
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: "netflix" },
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: "amazon" },
          })
        ],
        // And shows the extension's page action.
       actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

// chrome.identity.onSignInChanged.addListener(function(){
//   chrome.identity.getAuthToken();
// });
//
// //authorization
// var oauth = ChromeExOAuth.initBackgroundPage({
//   'request_url': 'https://www.google.com/accounts/OAuthGetRequestToken',
//   'authorize_url': 'https://www.google.com/accounts/OAuthAuthorizeToken',
//   'access_url': 'https://www.google.com/accounts/OAuthGetAccessToken',
//   'consumer_key': <OAuth consumer key>,
//   'consumer_secret': <OAuth consumer secret>,
//   'scope': 'https://www.googleapis.com/auth/calendar.readonly',
//   'app_name': 'Dollar School'
// });
