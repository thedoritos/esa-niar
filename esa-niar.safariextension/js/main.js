

safari.application.addEventListener('message', function(event) {
  if (event.name === 'search') {
    var query = event.message;

    var apiKey = safari.extension.secureSettings.esaApiKey;
    var team = safari.extension.settings.esaTeam;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.esa.io/v1/teams/' + team + '/posts', true);
    xhr.setRequestHeader('Authorization', 'Bearer ' + apiKey);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          event.target.page.dispatchMessage('searchResult', xhr.responseText);
        } else {
          event.target.page.dispatchMessage('searchError', xhr.statusText);
        }
      }
    };
    xhr.onerror = function (e) {
      event.target.page.dispatchMessage('searchError', xhr.statusText);
    };
    xhr.send(null);
    return;
  }
});
