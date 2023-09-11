function myFunction(x) {
    x.classList.toggle("change");
  }
  
  const themeToggler = document.querySelector(".theme-toggler");
  let counter = 1;
  themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    
    let video = document.getElementById('background');
    let image = document.getElementById('upa_logo');
    let images = document.getElementById('iete_logo');
    console.log(video.src);
    counter++;
    if(counter==1)
    {
      video.src = './Images/background1.mp4';
      image.src = './Images/main-logo1.png';
      images.src = './Images/main-logo1.png';
    }

    else if(counter==2)
    {
      video.src = './Images/background2.mp4';
      image.src = './Images/main-logo2.png';
      images.src = './Images/main-logo2.png';
    }

    else
    {
      video.src = './Images/background1.mp4';
      image.src = './Images/main-logo1.png';
      images.src = './Images/main-logo1.png';
      counter =1;
    }
    console.log(counter);

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
  })

  const toTop = document.querySelector(".to-top");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      toTop.classList.add("active");
    }
    else{
      toTop.classList.remove("active");
    }
  })

  var loader = document.getElementById("preloader");
      window.addEventListener("load", function () {
        loader.style.display = "none";
      });



      var countDownDate = new Date("Oct 13,2023 00:00:00:00").getTime();
      console.log(countDownDate);
      var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
  
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        console.log(days);
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
       
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
  
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("days").innerHTML = "00";
          document.getElementById("hours").innerHTML = "00";
          document.getElementById("minutes").innerHTML = "00";
          document.getElementById("seconds").innerHTML = "00";
        }
      }, 1000);
  
      (function () {
        "use strict";
      
        // define variables
        var items = document.querySelectorAll(".timeline li");
      
        function isElementInViewport(el) {
          var rect = el.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
              (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
        }
      
        function callbackFunc() {
          for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
              items[i].classList.add("in-view");
            }
          }
        }
      
        // listen for events
        window.addEventListener("load", callbackFunc);
        window.addEventListener("resize", callbackFunc);
        window.addEventListener("scroll", callbackFunc);
      })();
      


      ScrollReveal({
        reset: true,
        distance: "60px",
        duration: 2500,
        delay: 400,
      });

      ScrollReveal().reveal("#reg-container", {
        delay: 200,
        origin: "left",
      });
      ScrollReveal().reveal(".logoed", {
        delay: 100,
        origin: "left",
      });
      ScrollReveal().reveal(".main_container, table", {
        delay: 200,
        origin: "bottom",
        interval: 100,
      });
      ScrollReveal().reveal("#abt-container", {
        delay: 400,
        origin: "bottom",
        interval: 100,
      });
      ScrollReveal().reveal(".card", {
        delay: 100,
        origin: "bottom",
        interval: 100,
      });


      const counts = document.querySelectorAll('.count')
const speed = 15

counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) 
            setTimeout(upDate, 100)
        }else{
            counter.innerText = target
        }
    }
    upDate()
})




    