safari.self.addEventListener('message', function(event) {
  if (event.name === 'searchResult') {
    console.log(event.message);
    return;
  }

  if (event.name === 'searchError') {
    console.error(event.message);
    return;
  }
});

safari.self.tab.dispatchMessage('search', 'design');
