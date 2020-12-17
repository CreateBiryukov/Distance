var like=document.querySelector('.like-button');
var count=0;

like.addEventListener('click',function likeClicked(){
    var newDiv = document.createElement("div");
    newDiv.innerHTML = count;
like.appendChild(newDiv);
console.log(count++);
})
