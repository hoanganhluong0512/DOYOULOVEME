var  select = function(s) {
    return document.querySelector(s);
  },
  container = select('.container'),
  mainSVG = select('.mainSVG')

//center the container cos it's pretty an' that
TweenMax.set(container, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  xPercent: -50,
  yPercent: -50
})

TweenMax.set('svg', {
  visibility: 'visible'
})

var faceTl = new TimelineMax({paused:true});
faceTl.to('#face', 1, {
  morphSVG:{shape:'#square'},
  ease:Elastic.easeInOut
})
.to('#happy', 1, {
  morphSVG:{shape:'#sad'},
  y:10,
  ease:Elastic.easeInOut
}, '-=1')
.to('#eyeGroup', 1, {
  y:10,
  ease:Elastic.easeInOut
}, '-=1')
.to(document.body, 1, {
  backgroundColor:'#1d1d1d',
  ease:Power2.easeInOut
}, '-=1')


mainSVG.addEventListener('click', function() {
  if (faceTl.time() > 0) {
    faceTl.reverse();
    
  } else {
    faceTl.play(0);

  }
})

