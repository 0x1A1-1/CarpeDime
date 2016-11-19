
  // 2. Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': 'AIzaSyDFhMAdx8G9lNLIiDiHDeOJrgFWbmTwv54',
    'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
    // clientId and scope are optional if auth is not required.
    'clientId': '543830113534-gqeiqp8i686rpk3vvm7vnavqqt6m23h1.apps.googleusercontent.com',
    'scope': 'profile',
  }).then(function() {
    // 3. Initialize and make the API request.
    return gapi.client.people.people.get({
      resourceName: 'people/me'
    });
  }).then(function(resp) {
    console.log(resp.result);
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
// 1. Load the JavaScript client library.
gapi.load('client', start);
