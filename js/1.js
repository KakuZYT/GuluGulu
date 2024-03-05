
  var inc_add = 0;
  var rand;
  var imgroll=new Image();
  var h;
   var w;
   window.onload = function() {
    var box = document.getElementById("box");
    var w = window.width;
    box.style.width=w;
    imgroll.src = "img/heita/roll.gif";
  };
  //add 
  function add() {
    //create a DIV
    var newDiv = document.createElement("div");
    newDiv.className = "heita";
    newDiv.id = "moves" + inc_add;
    h = imgroll.height;
    w = imgroll.width;
    newDiv.style.width=w/2+"px";
    newDiv.style.height=h/2+"px";
    rand=Math.round(Math.random()*1);
    switch (rand) {
      case 0:
        imgroll.src = "img/heita/roll.gif";
        h = imgroll.height;
        w = imgroll.width;
        newDiv.style.backgroundImage="url("+"img/heita/roll.gif"+")";
        newDiv.style.width=w/2+"px";
        newDiv.style.height=h/2+"px";
        console.log(33);
        break;
      case 1:
        imgroll.src = "img/heita/roll3.gif";
        h = imgroll.height;
        w = imgroll.width;
        newDiv.style.backgroundImage="url("+"img/heita/roll3.gif"+")";
        newDiv.style.width=w/2+"px";
        newDiv.style.height=h/2 +"px";
        console.log(33);
        break;
      // case 2:
      //   newDiv.style.backgroundImage="url("+"img/heita/roll3.gif"+")";
      //   break;
      default:
        break;
    }
    inc_add++;
    return newDiv;
  }
  function audio_add()
  {
    var newad = document.createElement("audio");
    rand=Math.round(Math.random()*1);
    console.log(rand);
    switch (rand) {
      case 0:
        newad.src = "audio/kuru1.mp3";
        console.log(1);
        break;
      case 1:
        newad.src = "audio/kuru2.mp3";
        break;
      default:
        break;
    }
    newad.className = "kurukuru";
    newad.id = "audio"+inc_add;
    newad.play();
    return newad;
  }
  //remove item when animation finish
  function remove() {
    //Get all animetions
    var anilist = box.querySelectorAll('.heita');
    //all audio
    var adlist = box.querySelectorAll('.kurukuru');
    //traversal animation list
    anilist.forEach(function(ani){
       //get each animation and if the animation finished, remove it
        ani.addEventListener('animationend', function() {
            ani.remove();
            console.log(22);
          });
    });
    adlist.forEach(function(ad){
      ad.addEventListener('ended',function(){
        ad.remove();
      });
    });
  }
  //activity of clicking btn
  function click_b() {
    var newBox = add();
    var newad = audio_add();
    //add new child node to box
    box.append(newBox);
    box.append(newad);
    document.getElementById("count").innerHTML="Count: "+inc_add;
    remove();
  }

  