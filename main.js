var state = true;

$("#menu-icon").click(function() {
    console.log();
    document.getElementById('div-1').classList.toggle('delay');
    document.getElementById('div-3').classList.toggle('delay');
    document.getElementById('div-1').classList.toggle('menu-icon-div1-after');
    document.getElementById('div-2').classList.toggle('menu-icon-div2-after');
    document.getElementById('div-3').classList.toggle('menu-icon-div3-after');
    if(state){
        $("#vh-100").animate({
            right: 0
        }, 10);

        $("#layer-2").animate({
            left: -89
        }, 1450, "easeOutElastic");

        $("#layer-1").delay(270).animate({
            left: -46
        }, 1450, "easeOutElastic");

        $("nav ul li").each(function (index) { 
            $(this).delay(50*index + 250).animate({
                left: 0
            }, 350, "easeInOutQuad"); 
        });
    } else {
        $("nav ul li").each(function (index) { 
            $(this).delay(50*index).animate({
                left: 145
            }, 350, "easeInOutQuad"); 
        });

        $("#layer-1").delay(350).animate({
            left: 145
        }, 250, "swing");

        $("#layer-2").delay(500).animate({
            left: 145
        }, 250, "swing");

        $("#vh-100").delay(645).animate({
            right: -235
        }, 10);     
    }
    state = !state;
    
})
