var polling = window.setInterval(function() {
  var container = document.getElementById('rhs_block');
  if (container == null) {
    return;
  }

  window.clearInterval(polling);
  
  var result_list = document.createElement('div');
  result_list.innerHTML = "<ul>" + 
    "<li>ONE</li>" +
    "<li>TWO</li>" +
    "<li>THREE</li>" +
    "</ul>";
  
  console.log(container);
  container.insertBefore(result_list, container.children[0]);
}, 100);
