(function(){
      var item = document.querySelector('#item'),
          form = document.querySelector('form'),
          list = document.querySelector('#list');
        form.addEventListener('submit', function(ev) {
          list.innerHTML += '<li>' + item.value + '</li>';
          store();
          ev.preventDefault();
        }, false);
        list.addEventListener('click', function(ev) {
          var t = ev.target,
              classList = t.classList;
          if (classList.contains('done') && classList.contains('checked')) {
            t.parentNode.removeChild(t);
            store();
          } else {
            if (classList.contains('checked')) {
              classList.add('done');
            } else {
              classList.add('checked');
            }
        }
        ev.preventDefault();
      }, false);
      function store (){
        window.localStorage.setItem("myitems","");
        window.localStorage.myitems = list.innerHTML;
      }
      function retrieve() {
        list.innerHTML = window.localStorage.myitems;
      }
      retrieve();
    })();

$(function() {
    $( "#list" ).sortable();
    $( "#list" ).disableSelection();
  });
