document.addEventListener('DOMContentLoaded',function(){
  var btn=document.getElementById('scrollTop');
  if(!btn) return;
  btn.addEventListener('click',function(){
    window.scrollTo({top:0,behavior:'smooth'});
  });
});
