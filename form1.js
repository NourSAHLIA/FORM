const f_name = document.getElementById("frist_name");
const l_name = document.getElementById("last_name");
const e_mail = document.getElementById("email");
const  phone = document.getElementById("phone_number");
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
return !error;

}
