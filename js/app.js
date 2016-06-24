var sticky_header = function (){
    
    window.addEventListener('scroll',function(event){
        
        var header = document.getElementById('sticky_head');
        var hero = document.getElementById('header');
        
        
        var hero_top = hero.getBoundingClientRect().top;
        console.log(hero_top);
        
        if(hero_top <= -40){
            header.style.position = 'fixed';
            header.style.top = '0';
            header.style.width = '100%';
            document.getElementById('header').style.marginTop = '7rem';
        }else{};
    });
};


document.addEventListener('DOMContentLoaded',function(event){
    sticky_header();
});