function comparestring()
{
var input1=document.getElementById("String1").value;
var input2=document.getElementById("String2").value;
var input3=String(input1);
var input4=String(input2);
if(input3.length>=1 && input4.length>=1)
{
if(input1.indexOf(input2)!==-1)
{
  document.getElementById("validmssg").innerHTML="string match";
}
else
  {
    document.getElementById("String1").style.border="2px solid red";
    document.getElementById("errmssg").innerHTML="string does not match";
  }
}
else
  {
    alert('Fields can not be Empty');
  }
}
