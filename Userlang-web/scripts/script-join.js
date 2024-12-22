var pwd = document.getElementById('repassword');
var span = document.querySelector('.message');
pwd.onblur = function(){
    if (pwd != pwd){
        span.className = 'message wrong';
        span.innerHTML = 'This password is wrong!';
    }else{
        span.className = 'message right';
        span.innerHTML = 'This password is safe';
    }
}