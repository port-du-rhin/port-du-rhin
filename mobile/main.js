$( function() {
    $( "#draggable" ).draggable();
} );

window.addEventListener('load', () => {
    document.querySelector('.lds-ellipsis').style.display="none";
    document.querySelector('.body').style.display="block";
});

document.getElementById('c1').addEventListener('click', function(){
    window.location.href = "v1.html";
}); 

document.getElementById('c2').addEventListener('click', function(){
    window.location.href = "v2.html";
}); 

document.getElementById('c3').addEventListener('click', function(){
    window.location.href = "v3.html";
}); 

document.getElementById('c4').addEventListener('click', function(){
    window.location.href = "v4.html";
}); 

document.getElementById('c5').addEventListener('click', function(){
    window.location.href = "v5.html";
});

document.getElementById('c6').addEventListener('click', function(){
    window.location.href = "v6.html";
});

document.getElementById('c7').addEventListener('click', function(){
    window.location.href = "v7.html";
});

document.getElementById('c8').addEventListener('click', function(){
    window.location.href = "v8.html";
});