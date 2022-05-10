window.addEventListener('load', () => {
    document.querySelector('.lds-ellipsis').style.display="none";
    document.querySelector('.body').style.display="block";
});

window.onload = function() {
    window.zoom = svgPanZoom('#draggable', {
      zoomEnabled: true,
      controlIconsEnabled: true,
      fit: true,
      center: true,
    });
};

document.getElementById('close-2').addEventListener('click', () => {
  var audio2 = document.getElementById('audio-2');
  var url2 = audio2.getAttribute('src');
  audio2.setAttribute('src', '');
  audio2.setAttribute('src', url2);
});

document.getElementById('close-3').addEventListener('click', () => {
  var audio1 = document.getElementById('audio-1');
  var url3 = audio1.getAttribute('src');
  audio1.setAttribute('src', '');
  audio1.setAttribute('src', url3);
});

document.getElementById('close-4').addEventListener('click', () => {
  var video2 = document.getElementById('video-2');
  var url4 = video2.getAttribute('src');
  video2.setAttribute('src', '');
  video2.setAttribute('src', url4);
});

document.getElementById('close-5').addEventListener('click', () => {
  var audio3 = document.getElementById('audio-3');
  var url5 = audio3.getAttribute('src');
  audio3.setAttribute('src', '');
  audio3.setAttribute('src', url5);
});

document.getElementById('c1').addEventListener('click', () => {
  document.getElementById('popup1').style.display="block";
});

document.getElementById('close-1').addEventListener('click', () => {
  document.getElementById('popup1').style.display="none";
});

document.getElementById('c2').addEventListener('click', () => {
  document.getElementById('popup2').style.display="block";
});

document.getElementById('close-2').addEventListener('click', () => {
  document.getElementById('popup2').style.display="none";
});

document.getElementById('c3').addEventListener('click', () => {
  document.getElementById('popup3').style.display="block";
});

document.getElementById('close-3').addEventListener('click', () => {
  document.getElementById('popup3').style.display="none";
});

document.getElementById('c4').addEventListener('click', () => {
  document.getElementById('popup4').style.display="block";
});

document.getElementById('close-4').addEventListener('click', () => {
  document.getElementById('popup4').style.display="none";
});

document.getElementById('c5').addEventListener('click', () => {
  document.getElementById('popup5').style.display="block";
});

document.getElementById('close-5').addEventListener('click', () => {
  document.getElementById('popup5').style.display="none";
});

document.getElementById('c6').addEventListener('click', () => {
  document.getElementById('popup6').style.display="block";
});

document.getElementById('close-6').addEventListener('click', () => {
  document.getElementById('popup6').style.display="none";
});

document.getElementById('c7').addEventListener('click', () => {
  document.getElementById('popup7').style.display="block";
});

document.getElementById('close-7').addEventListener('click', () => {
  document.getElementById('popup7').style.display="none";
});

document.getElementById('c8').addEventListener('click', () => {
  document.getElementById('popup8').style.display="block";
});

document.getElementById('close-8').addEventListener('click', () => {
  document.getElementById('popup8').style.display="none";
});