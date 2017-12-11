safari.self.addEventListener('message', function(event) {
  if (event.name === 'searchResult') {
    var container = document.getElementById('rhs_block');
    if (container == null) {
      return;
    }

    var header = document.createElement('div');
    header.innerHTML = '<h2>Esa Results:</h2>';
    container.insertBefore(header, container.children[0])

    var result_list = document.createElement('ul');
    result_list.setAttribute('width', '200px');
    result_list.setAttribute('height', '640px');

    var results = JSON.parse(event.message).posts;
    results.forEach(p => {
      var item = document.createElement('li');
      item.innerHTML = '<a href=' + p.url + '>' + p.full_name + '</a>';
      result_list.appendChild(item);
    });

    container.insertBefore(result_list, container.children[1]);

    return;
  }

  if (event.name === 'searchError') {
    console.error(event.message);
    return;
  }
});

var input = document.getElementById('lst-ib');

safari.self.tab.dispatchMessage('search', input.value);
