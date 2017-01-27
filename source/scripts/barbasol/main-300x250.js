/**
 * 300x250
 */

var foam = document.getElementById('foam'),
    razor = document.getElementById('razor'),
    creamGap = 145,
    razorStartX = 74,
    razorPullY = -23,
    razorEndY = 320;

var tl = new TimelineLite({delay: 2});
    tl
        // .to(razor,        2.0,    {y: -590})
        .to(razor,        1.0,    {y: razorEndY, ease:Power0.easeIn})
        .to(razor,        0.4,    {x: razorStartX - creamGap, y: razorPullY, ease:Power0.easeIn})
        .to(razor,        0.5,    {y: razorEndY, ease:Power0.easeIn}, '+=0.125')
        .to(razor,        0.4,    {x: razorStartX + creamGap, y: razorPullY, ease:Power0.easeIn})
        .to(razor,        0.5,    {y: razorEndY, ease:Power0.easeIn}, '+=0.125');
