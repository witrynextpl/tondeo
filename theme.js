(function(){
  var d=document.documentElement;
  var btn=document.querySelector('.theme-toggle');
  function label(){ if(btn){var dark=d.getAttribute('data-theme')==='dark';btn.setAttribute('aria-label',dark?'Włącz tryb jasny':'Włącz tryb ciemny');btn.setAttribute('aria-pressed',dark);} }
  label();
  if(btn){btn.addEventListener('click',function(){
    var next=d.getAttribute('data-theme')==='dark'?'light':'dark';
    d.classList.add('theme-anim');
    d.setAttribute('data-theme',next);
    try{localStorage.setItem('theme',next)}catch(e){}
    label();
    setTimeout(function(){d.classList.remove('theme-anim')},600);
  });}
  var h=document.querySelector('header');
  function onScroll(){ if(h)h.classList.toggle('scrolled',window.scrollY>10); }
  onScroll(); window.addEventListener('scroll',onScroll,{passive:true});
  var els=[].slice.call(document.querySelectorAll('[data-reveal]'));
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return;}
  var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}})},{threshold:.15,rootMargin:'0px 0px -40px 0px'});
  els.forEach(function(e){io.observe(e)});
})();
