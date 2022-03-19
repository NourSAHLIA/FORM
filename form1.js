icon = '<svg version="1.1" class="Layer_1" width="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"><style type="text/css">.st0{fill:none;stroke:#DD0A0E;stroke-width:2.3;stroke-miterlimit:10;}</style><g><line class="st0" x1="9.5" y1="40.5" x2="40.5" y2="9.5"/></g><line class="st0" x1="9.5" y1="9.5" x2="40.5" y2="40.5"/></svg>'
const f_name = document.getElementById("frist_name");
const l_name = document.getElementById("last_name");
const e_mail = document.getElementById("email");
const  phone = document.getElementById("phone_number");
const gender = document.getElementsByName("gender");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const date_of_birth = document.getElementById("date_of_birth");
function alpha(ch)
{
    for (i=0;i<ch.length;i++)
    {
        if(ch[i].toUpperCase()<"A"||ch[i].toUpperCase()>"Z")
        {
            return false;
        }
    }
    return true;
}
function num(ch)
{
    for (i=0;i<ch.length;i++)
    {
        if(ch[i]<"0"||ch[i]>"9")
        {
            return false;
        }
    }
    return true;
}
function PW(ch)
{
    var low=false,up=false,special=false,number=false;
    for (i=0;i<ch.length;i++)
    {
        if(ch[i]>="0"&&ch[i]<="9")
        {
            number=true;  
        }
        else if(ch[i]>="a"&&ch[i]<="z")
        {
            low=true;
        }
        else if(ch[i]>="A"&&ch[i]<="Z")
        {
            up=true;
        }
        else 
        {
            special=true;
        }
    }
    return number&&low&&up&&special;  

}


function verif() 
{  var error=false;
if(alpha(f_name.value)==false||f_name.value=="")
{
    document.getElementById("error1").innerHTML="message d'erreur prénom";
    error=true;
}


if(alpha(l_name.value)==false||l_name.value=="")
{
    document.getElementById("error2").innerHTML="message d'erreur nom";
    error=true;
}


var e=e_mail.value;
if((e=="")||(e.indexOf("@")==-1)||(e.indexOf(".")==-1)||(e.indexOf(".")<e.indexOf("@")))
{
document.getElementById("error3").innerHTML="message d'erreur mail";
error=true;
}
if(num(phone.value)==false||phone.value.length!=8)
{
 document.getElementById("error4").innerHTML="message d'erreur phone";
error=true; 
}

if(PW(password.value)==false)
{
 document.getElementById("error5").innerHTML="message d'erreur mot de passe";
error=true; 
}

if(password.value!=password2.value)
{
    document.getElementById("error6").innerHTML=" message d'erreur :vérifiez mot de passe";
error=true; 
}
var d= new Date(date_of_birth.value);
if(2022-d.getFullYear()<18)
{
    document.getElementById("error7").innerHTML="mineur";
    error=true;
}
if (error==false)
{
    const x = gender[0].checked ? "male" : "female";
    const data = [f_name.value,l_name.value,e,phone.value,x,date_of_birth.value];
    add_element(data);
    document.getElementById("form").reset();
}
return false;

}
const tab = document.getElementById("tab");
function add_element(data)
{
    tr = document.createElement("tr");
    data.forEach((item) => {
        th = document.createElement("th");
        th.innerHTML = item;
        tr.appendChild(th);
        
    });
    a = document.createElement("a");
    a.innerHTML=icon;
    a.addEventListener("click", deleteRow(a+1) );
    a_edit = document.createElement("a");
    a_edit.innerHTML ="edit";
    a_edit.classList.add("edit");
    a_edit.addEventListener("click",edit_element);
    th = document.createElement("th");
    th.appendChild(a);
    th.appendChild(a_edit);
    tr.appendChild(th);
    tab.appendChild(tr);
}
function edit_element()
{
    var parent = this.parentNode.parentNode;
    var childs = parent.children;
    f_name.value = childs[0].innerHTML;
    l_name.value = childs[1].innerHTML;
    e_mail.value = childs[2].innerHTML;
    phone.value = childs[3].innerHTML;
    if(childs[4].innerHTML=="male")
    {
        gender[0].click();
    }
    else
    {
        gender[1].click();
    }
    date_of_birth.value = childs[5].innerHTML;
    parent.remove();

}