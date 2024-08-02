let s1 = document.getElementById("sq1");
    s1.addEventListener("mouseenter",function(){

        let r= Math.floor(Math.random()*100);
        s1.innerHTML = `<h1>${r}</h1>`;
    })
    s1.addEventListener("mouseleave",function(){
        s1.innerHTML="<h1>1</h1>";
    })

    s1.addEventListener("dblclick",function(){
        let r = Math.ceil(Math.random()*255); 
        let g = Math.ceil(Math.random()*255);
        let b = Math.ceil(Math.random()*255);
        s1.style.backgroundColor = `rgb(${r},${g},${b})`
    })

    let s2 = document.getElementById("sq2");
        let clr ="green";
    s2.addEventListener("mouseenter",function(){
        if(clr=="green"){
            s2.style.backgroundColor = "green";
            clr= "red";
        }else if(clr=="blue"){
            s2.style.backgroundColor = "Blue"
            clr ="green";
        }
        
        else {// clr=="red"
        s2.style.backgroundColor = "red"
        clr ="blue";
        }
    })

    s2.addEventListener("mouseleave",function(){
        s2.style.backgroundColor = "white";
    })

    let s3= document.getElementById("sq3");
    s3.addEventListener("mouseenter",function(){
        let r = Math.ceil(Math.random()*255);
        let g = Math.ceil(Math.random()*255);
        let b = Math.ceil(Math.random()*255);
        s3.style.backgroundColor = `rgb(${r},${g},${b})`
    })

    s3.addEventListener("mouseleave",function(){
        s3.style.backgroundColor = "white";
    })

    let s4 = document.getElementById("sq4");
    s4.addEventListener("click",function(){
        let r = Math.ceil(Math.random()*255);
        let g = Math.ceil(Math.random()*255);
        let b = Math.ceil(Math.random()*255);
        s1.style.backgroundColor = `rgb(${r},255,255)`
        s2.style.backgroundColor = `rgb(255,${g},255)`
        s3.style.backgroundColor = `rgb(255,255,${b})`
        

    })

    s4.addEventListener("mouseleave",function(){
        s1.style.backgroundColor = "white";
        s2.style.backgroundColor = "white";
        s3.style.backgroundColor = "white";
    })

    let main=document.getElementById("main");
    let crsr = document.getElementById("cursor");
    main.addEventListener("mousemove",function(details){
        console.log(details.x,details.y);

        crsr.style.left = details.x + "px";
        crsr.style.top = details.y + "px";

    })

  
  
    