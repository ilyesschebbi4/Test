var Area=document.getElementById("text")
var size=document.getElementById("select1")
var police=document.getElementById("select2")

function bold (){
   
   if (Area.style.fontWeight!="bold") {
        Area.style.fontWeight="bold";
    }
    else{
        Area.style.fontWeight="normal";
    }
}

function italic (){
if (Area.style.fontStyle!="italic"){
    Area.style.fontStyle="italic";
}
else {
    Area.style.fontStyle="normal";
}
}

function underline (){
    if (Area.style.textDecoration!="underline"){
        Area.style.textDecoration="underline";
    }
else{
    Area.style.textDecoration="none";
}
}

function fontsize () {
  Area.style.fontSize=size.value;
}

function fontstyle () {
    Area.style.fontFamily=police.value;
}

$('document').ready(function() {
    $('.image-container').hover(function () {
        $('#hide').toggle()
    })
    })

$('document').ready(function() {
    $('.image-container2').hover(function () {
        $('#hide2').toggle()
  })
  })
$('document').ready(function() {
    $('.image-container3').hover(function () {
        $('#hide3').toggle()
  })
  })
  $('document').ready(function() {
      $('.image-container4').hover(function(){
          $('#hide4').toggle()
      })
  })
  $('document').ready(function() {
    $('.image-container5').hover(function () {
        $('#hide5').toggle()
  })
  })
  $('document').ready(function() {
    $('.image-container6').hover(function () {
        $('#hide6').toggle()
  })
  })
  $('document').ready(function() {
    $('.image-container7').hover(function () {
        $('#hide7').toggle()
  })
  }) 
  $('document').ready(function() {
    $('.image-container8').hover(function () {
        $('#hide8').toggle()
  })
  })
  $('document').ready(function() {
    $('.image-container9').hover(function () {
        $('#hide9').toggle()
  })
  })  
  $('document').ready(function() {
    $('.pic1').hover(function () {
        $('#hide10').toggle()
    })
})
$('document').ready(function() {
    $('.pic2').hover(function () {
        $('#hide11').toggle()
    })
})
$('document').ready(function() {
    $('.pic3').hover(function () {
        $('#hide12').toggle()
    })








  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD0JmUW7DtmbYG0Ehc0-HPJoftElWksJPA",
    authDomain: "gomycode-ff753.firebaseapp.com",
    databaseURL: "https://gomycode-ff753.firebaseio.com",
    projectId: "gomycode-ff753",
    storageBucket: "",
    messagingSenderId: "818299629807",
    appId: "1:818299629807:web:8ef64e06a3ee9585"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var msg = firebase.database().ref('awesome-71dfe')

  function submit(e) {
    e.preventDefault();
    var name = $('#name').val();
    var track = $('#track').val();
    var email=  $('#email').val();
    var phoneNumber = $('#phone-number').val();
    msg.push().set({name,track,email,phoneNumber})
  }

  document.getElementById('contactForm').addEventListener('submit', submit)



})