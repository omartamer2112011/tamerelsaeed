// Designer Modal
const designerBtn = document.getElementById('designerBtn');
const designerModal = document.getElementById('designerModal');
const closeModal = document.getElementById('closeModal');

designerBtn.addEventListener('click',()=>{ designerModal.classList.add('show'); });
closeModal.addEventListener('click',()=>{ designerModal.classList.remove('show'); });

// More Information Modal
const moreInfoBtn = document.getElementById('moreInfoBtn');
const infoModal = document.getElementById('infoModal');
const closeInfo = document.getElementById('closeInfo');

moreInfoBtn.addEventListener('click',()=>{ infoModal.classList.add('show'); });
closeInfo.addEventListener('click',()=>{ infoModal.classList.remove('show'); });

// Particles JS setup
particlesJS("particles-js",{
    particles:{
        number:{value:80,density:{enable:true,value_area:800}},
        color:{value:"#FFD700"},
        shape:{type:"circle"},
        opacity:{value:0.8},
        size:{value:4,random:true},
        line_linked:{enable:true,distance:150,color:"#FFD700",opacity:0.5,width:1},
        move:{enable:true,speed:2,direction:"none",out_mode:"out"}
    },
    interactivity:{
        detect_on:"canvas",
        events:{
            onhover:{enable:true,mode:"repulse"},
            onclick:{enable:true,mode:"push"}
        },
        modes:{repulse:{distance:120},push:{particles_nb:4}}
    },
    retina_detect:true
});
