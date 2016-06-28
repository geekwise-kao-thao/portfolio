var sticky_header = function (){
    
    window.addEventListener('scroll',function(event){
        
        var window_top = this.scrollY;
        var logo_element = document.getElementById('name');
        var blurry_star = document.getElementById('blurry_star');
        var front_star = document.getElementById('front_star');
        
        logo_element.style.transform = 'translate(0px,' + window_top /3 + '%)';
        blurry_star.style.transform = 'translate(0px,' + window_top /5 + '%)';
        front_star.style.transform = 'translate(0px,-' + window_top /10 + '%)';
        
        /* ================== nav bar sticky header ================================= */
        
        var nav_bar = document.getElementById('sticky_head');
        
        var nav_bar_top = nav_bar.getBoundingClientRect().top;

        if(nav_bar_top <= 0){
            nav_bar.style.position = 'fixed';
            nav_bar.style.top = '0';
            nav_bar.style.width = '100%';
            nav_bar.style.backgroundColor = '#636363';
            //document.getElementById('header').style.marginTop = '7rem';
        }else{};
        
    });
};


document.addEventListener('DOMContentLoaded',function(event){
    sticky_header();
});