function home(){
    gsap.set(".slidesm",{ scale:5})
t1 =  gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        start:"top top",
        end:"bottom bottom",
        scrub:1,
    }
})

t1.to(".vidiodiv",{
    '--clip':"0%",
    ease:Power2,
    duration:2
},"a")
t1.to(".slidesm",{
    scale:1,
    ease:Power2,
    duration:2
},"a")
t1.to(".lft",{
    xPercent:-15,
    ease:Power2
},"b")
t1.to(".rgt",{
    xPercent:15,
    ease:Power2
},"b")
 }
function real(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger:".real",
            scrub:1,
            start:"top top",
            end:"bottom bottom",
      
        },
        xPercent:-230,
        ease:Power4
     })
    
}

function para(){
    var clutter =""
document.querySelector(".textpara").textContent.split("").forEach(function(e){
    if(e===" "){
        clutter+="&nbsp;"
    }
    clutter+=`<span>${e}</span>`
})

document.querySelector(".textpara").innerHTML = clutter
gsap.set(".textpara span",{opacity:.1})
gsap.to(".textpara span",{
    scrollTrigger:{
        start:"top 50%",
        trigger:".para",
        scrub:1,
        end:"bottom bottom",
        
    },
    stagger:.3,
    opacity:1,
    ease:Power4
})
}
function colorChange(){
    document.querySelectorAll(".section").forEach(function(e){
        ScrollTrigger.create({
         trigger:e,
         start:"top 50%",
         end:"bottom 50%",
         onEnter:function(){
             document.querySelector("body").setAttribute("theme",e.dataset.color) },
         onEnterBack: function(){
             document.body.setAttribute("theme",e.dataset.color)
         }    
        })
        
     })
}
function loco(){
    (function () {
        var scroll = new LocomotiveScroll();
    })();
}
function craftCards(){
    document.querySelectorAll(".top").forEach(function(e){
        ScrollTrigger.create({
            trigger:e,
            start:"top 50%",
            end:"top 50%",
            onEnter: function(){
                gsap.to(e,{ width:"100%",backgroundColor:"#000",color:"#fff",ease:Power2,duration:.3})
            },
            onEnterBack: function(){
                gsap.to(e,{ width:"80%",backgroundColor:"transparent",color:"#000",ease:Power4,duration:.5})
            }
        })
    })
}




loco()
home()
real()
para()
colorChange()
craftCards()













