/**
 * 300x250
 */

var foam = document.getElementById('foam'),
    razor = document.getElementById('razor'),
    cover = document.getElementById('cover'),
    creamC = document.getElementById('creamC'),
    creamCImg = document.getElementById('creamCImg'),
    creamL = document.getElementById('creamL'),
    creamR = document.getElementById('creamR'),
    creamGap = 145,
    creamHeight = 391,
    razorStartX = 122,
    razorPullY = -23,
    razorEndY = 320;

var tl = new TimelineLite({delay: 0});
    tl
        .to(razor,          2.0,    {y: -590})

        .to(razor,          1.0,    {y: razorEndY, ease:Power0.easeIn})
        .to(cover,         0.0,    {opacity:0}, 2.6)
        .to(creamC,         0.4,    {top:creamHeight, ease:Power0.easeIn}, 2.6)
        .to(creamCImg,      0.4,    {top:-creamHeight, ease:Power0.easeIn}, 2.6)

        .to(razor,          0.4,    {x: razorStartX - creamGap, y: razorPullY, ease:Power0.easeIn})
        .to(razor,          0.5,    {y: razorEndY, ease:Power0.easeIn}, '+=0.125')
        .to(creamL,         0.4,    {top:creamHeight, ease:Power0.easeIn}, 3.6)
        .to(creamLImg,      0.4,    {top:-creamHeight, ease:Power0.easeIn}, 3.6)

        .to(razor,          0.4,    {x: razorStartX + creamGap, y: razorPullY, ease:Power0.easeIn})
        .to(razor,          0.5,    {y: razorEndY, ease:Power0.easeIn}, '+=0.125')
        .to(creamR,         0.4,    {top:creamHeight, ease:Power0.easeIn}, 4.6)
        .to(creamRImg,      0.4,    {top:-creamHeight, ease:Power0.easeIn}, 4.6);
