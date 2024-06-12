 
      var text = "Hallo... my name is Henoch Dalope. I am currently a student in the informatics engineering study program at Sam Ratulangi University. My hobby is playing music, and at the same time I am interested in automotive. ";
      var speed = 100; // milliseconds per character

      function typeWriter() {
        if (text.length > 0) {
          document.getElementById("typewriter").innerHTML += text.charAt(0);
          text = text.substring(1);
          setTimeout(typeWriter, speed);
        }
      }

      typeWriter();
   