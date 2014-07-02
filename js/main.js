
// Touch-Punch JS

(function(b){b.support.touch="ontouchend" in document;if(!b.support.touch){return;}var c=b.ui.mouse.prototype,e=c._mouseInit,a;function d(g,h){if(g.originalEvent.touches.length>1){return;}g.preventDefault();var i=g.originalEvent.changedTouches[0],f=document.createEvent("MouseEvents");f.initMouseEvent(h,true,true,window,1,i.screenX,i.screenY,i.clientX,i.clientY,false,false,false,false,0,null);g.target.dispatchEvent(f);}c._touchStart=function(g){var f=this;if(a||!f._mouseCapture(g.originalEvent.changedTouches[0])){return;}a=true;f._touchMoved=false;d(g,"mouseover");d(g,"mousemove");d(g,"mousedown");};c._touchMove=function(f){if(!a){return;}this._touchMoved=true;d(f,"mousemove");};c._touchEnd=function(f){if(!a){return;}d(f,"mouseup");d(f,"mouseout");if(!this._touchMoved){d(f,"click");}a=false;};c._mouseInit=function(){var f=this;f.element.bind("touchstart",b.proxy(f,"_touchStart")).bind("touchmove",b.proxy(f,"_touchMove")).bind("touchend",b.proxy(f,"_touchEnd"));e.call(f);};})(jQuery);

(function(){
      var item = document.querySelector('#item'),
          form = document.querySelector('form'),
          list = document.querySelector('#list');
        form.addEventListener('submit', function(ev) {
          if (list.classList.contains ("new")) {
          list.innerHTML += '<li class="new">' + item.value + '</li>';
        } else {
          list.innerHTML += '<li>' + item.value + '</li>';
        }
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
          store();
        ev.preventDefault();
      }, false);
      function store (){
        window.localStorage.setItem("myitems","");
        window.localStorage.myitems = list.innerHTML;
      }
      function retrieve(){
        list.innerHTML = window.localStorage.myitems;
      }
      if(window.localStorage.length > 0){ retrieve();}
      $(function() {
        $( "#list" ).sortable({
          stop: function stop (){
            store();
          }
        });
      $( "#list" ).disableSelection();
      store();
    });

    $("button").click(function(){
      $("*").toggleClass("new");
    });
})();
