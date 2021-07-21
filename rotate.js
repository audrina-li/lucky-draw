var rotating = false;
var pointer = document.getElementsByClassName("pointer")[0];
var panel = document.getElementsByClassName("panel")[0];

pointer.addEventListener('click',function(){
    if (rotating) return;
    var item = Math.floor((Math.random() * 6) + 1);
    switch(item){
        case 1:
            rotate(1800, '恭喜您获得现金红包88元！');
            break;
        case 2:
            rotate(1740, '很遗憾您这次没有中奖。');
            break;
        case 3:
            rotate(1680, '恭喜您获得现金红包8.8元！');
            break;
        case 4:
            rotate(1620, '很遗憾您这次没有中奖。');
            break;
        case 5:
            rotate(1560, '恭喜您获得现金红包0.88元！');
            break;
        case 6:
            rotate(1500, '很遗憾您这次没有中奖。');
            break;
        }
    })

function rotate(angle, text){  
    if (rotating != true) {
        rotating = true;
        var neg_angle = angle * -1;

        const panel_rotate =  [
            {
                // transform: 'rotate(1800deg)'
                transform: 'rotate(' + angle + 'deg)'
            },
        ];

        const pointer_rotate =  [
            {
                // transform: 'rotate(-1800deg)'
                transform: 'rotate(' + neg_angle + 'deg)'
            },
        ];

        const timing = {
            duration: 5000,
            easing: "ease-out",
        };

        panel.animate(panel_rotate,timing);
        pointer.animate(pointer_rotate,timing);

        setTimeout(function(){
            alert(text);
        }, 5000);  
    }

    rotating = false;
}