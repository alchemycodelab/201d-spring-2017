'use strict';

var externalValues = [8 ,6, 7, 4];

var dataforChart = [
  {
    value: externalValues[0],
    label: 'document.getElementById()',
    color: '#811BD6',
    highlight: '#811B33'
  },
  {
    value: externalValues[1],
    label: 'Math.random()',
    color: '#9CBABA',
    highlight: '#9CBA99'
  },
  {
    value: externalValues[2],
    label: '"for" loops',
    color: '#D18177',
    highlight: '#D18133'
  },
  {
    value : externalValues[3],
    label: 'constructor functions',
    color: '#6AE128',
    highlight: '#6AE199'
  },
  {
    value : 2,
    label: 'function expressions',
    color: '#5A0028',
    highlight: '#6A0099'
  },
  {
    value : 5,
    label: 'appendChild()',
    color: '#6AE1FF',
    highlight: '#6AE19F'
  },
  {
    value : 8,
    label: 'setTimeout()',
    color: '#1010DD',
    highlight: '#101077'
  },
  {
    value : 1,
    label: 'this',
    color: '#90909D',
    highlight: '#909000'
  }
];

var context = document.getElementById('popularity').getContext('2d');

var popularityChart = new Chart(context).PolarArea(dataforChart, {
  //Number - Amount of animation steps
  animationSteps : 10000,
  //String - Animation easing effect
  animationEasing : 'easeOutBounce',
  //Boolean - Whether we animate the rotation of the Doughnut
  animateRotate : false,
  //Boolean - Whether we animate scaling the Doughnut from the centre
  animateScale : true,
  scaleShowLabelBackdrop : true
});

popularityChart.scale.yLabels = ['useless', 'incomprehensible', 'buggy', 'senseless', 'tolerable', 'good', 'awesome', 'amazesauce'];
