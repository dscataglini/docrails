(function(){
  var $ = function(id){return document.getElementById(id)};
  window.onload=function(){
    if($('guides') && $('guidesMenu')){
      $('guides').style.display = "none";
      $('guidesMenu').onclick = function(){
        $('guides').style.display = ($('guides').style.display == "none") ? "block" : "none";
      }; 
    }
  };
})();
