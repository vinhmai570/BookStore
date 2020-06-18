var x=document.getElementsByClassName('card-title');
for(var i in x){
    x[i].innerHTML='Xin chào'+i;
    // console.log(x[i].innerHTML);
}
document.addEventListener("DOMContentLoaded",function(){
    var a=document.getElementsByClassName('card-title');
    var temp=1;
    a[0].onclick=function(){
        temp++;
        a[0].classList.add('btn');
        if(temp%2==0){
            a[0].classList.add('btn-primary');
            a[0].classList.remove('btn-danger');
            console.log('Button primary')
        }
        else{
            a[0].classList.add('btn-danger');
            a[0].classList.remove('btn-primary');
            console.log('button danger')
        }
    }
},false)