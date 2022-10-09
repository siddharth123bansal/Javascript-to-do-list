function addMore(){
    let name=document.getElementById('name').value;
    document.getElementById('error').innerHTML="";
    if(name==''){
        document.getElementById('error').innerHTML="Enter a valid Input";
    }
    else{
        let box =document.getElementById('box');
        let li =document.createElement('li');
        li.className="li";
        li.textContent=name;
        let a =document.createElement('a');
        let b=document.createElement('edit');
        b.textContent="edit";
        b.className="edit";
        a.textContent="X";
        a.href="javascript:void(0)";
        a.className="remove";
        li.appendChild(a);
        let pos =box.firstElementChild;
        if(pos==null){
            box.appendChild(li);
        }
        else{
             box.insertBefore(li,pos);
        }
    }
    document.getElementById('name').value="";
}
let btn=document.querySelector('ul');
btn.addEventListener('click',function(e){
    let box =document.getElementById('box');
    let li=e.target.parentNode;
    box.removeChild(li);   
});