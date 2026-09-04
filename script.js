const header=document.querySelector('.header');
const toggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('.menu');

window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>20));
toggle?.addEventListener('click',()=>{
  const open=menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded',open);
});
document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));

const observer=new IntersectionObserver((entries)=>{
  entries.forEach((entry,i)=>{
    if(entry.isIntersecting){
      entry.target.style.transitionDelay=`${Math.min(i*40,180)}ms`;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
