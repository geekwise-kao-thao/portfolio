var sticky_header = function (){
    
    window.addEventListener('scroll',function(event){
        
        var header = document.getElementById('sticky_head');
        var header_top = header.getBoundingClientRect().top;
        console.log(header_top);
        
        if(header_top <= 1){
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