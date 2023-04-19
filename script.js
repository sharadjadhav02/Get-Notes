function myFunction() {
    var x = document.getElementById("mobile-menu");
    if (x.classList.contains("animation")) {
      x.classList.remove("animation");
    } else {
      x.classList.add("animation");    
  };

    var y = document.getElementById("body");
    if (y.classList.contains("overflow")){
      y.classList.remove("overflow");
    } else {
      y.classList.add("overflow");
    }
};


window.onload=function(){
  var theme = localStorage.getItem('data-theme');
  if(theme=='light'){
    document.documentElement.setAttribute('data-theme', 'light');
  }else if(theme==''){
    document.documentElement.setAttribute('data-theme', 'dark');
  }else if(theme=='dark'){
    document.documentElement.setAttribute('data-theme' , 'dark');
    document.getElementById("checkbox").checked = true;
  }
}
function toggle(a){
  if(a.checkbox.checked==true){
    document.documentElement.classList.add('transition');
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('data-theme','dark');
  }
  else if(a.checkbox.checked==false){
    document.documentElement.classList.add('transition');
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('data-theme','light');
  }
};