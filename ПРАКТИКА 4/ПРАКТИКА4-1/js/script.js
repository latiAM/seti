    raketa.onclick = function() {
      let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        raketa.style.bottom = timePassed / 1 + 'px';

        if (timePassed > 2340) {clearInterval(timer); alert("Ракета долетела!");}
        
      }, 20);
      
    }
 