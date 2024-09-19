document.addEventListener("scroll", function()
{
   let menu = document.querySelector('.menu');
   
   if (window.scrollY > 0)
      menu.classList.add('active');
   else
      menu.classList.remove('active');
});