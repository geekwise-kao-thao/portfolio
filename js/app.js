var sticky_header = function (){
    
    window.addEventListener('scroll',function(event){
        
        var window_top = this.scrollY;
        var logo_element = document.getElementById('raven_logo');
        var blurry_bird = document.getElementById('blurry_bird');
        
        logo_element.style.transform = 'translte(0px,' + window_top /2 + '%)';
        console.log(logo_element.style.transform = 'translate(0px,' + window_top /2 + '%)');
        
        blurry_bird.style.transform = 'translate(-' + window_top /4 + '%,' + window_top /4 + '%)';
        console.log(blurry_bird.style.transform = 'translate(-' + window_top /4 + '%,' + window_top /4 + '%)');
        
        
    });
};


document.addEventListener('DOMContentLoaded',function(event){
    sticky_header();
});