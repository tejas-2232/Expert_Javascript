// simple javascript
// author: tejas
//document.write("This is best site to learn Javascript");

//document.getElementById('th').innerHTML ="This is paragraph";

// variables

// var a1=22;
// var a11=8;
// var a2= "beautiful"

// document.write("<br>",a1+a11);
// document.write("<br>",a1+a2);

// console.log("this is console running")

// var age = prompt("Tell me your age");
// document.write("<br>","your age is ",age);

// simple app

/*var foodcost = prompt("what is total amount?");
var no = prompt("enter number of your friends");

document.write("The total cost of food was"," ",foodcost,"<br>");

document.write("Each one of you has to pay"," ",(foodcost/no).toFixed(2),"<br>");  //toFixed(2) converts it to string nd then rounds up to 2 decimal digits

*/

//relational operator :  ==, !=, <,  > , <= , >=
//logical operator: && || 

var age = prompt("what is your age?");


if(age<20 && age>=10)
{
    document.write("You go to school");

}
else if(age<10 && age>3)
{
    document.write("You also go to school");
}
else if(age>20 && age<=30)
{
    document.write("Focus on career");   
}
else if(age>30 && age<=40)
{
    document.write("Focus on Financial status");
}
else if(age>40 && age<=50)
{
    document.write("Focus on health");
}
else if(age>50 && age<=70)
{
    document.write("Focus on Your mind");
}
else if(age>70 && age<=100){
    document.write("Nurture your grand childrens");
}
else if(age>100 && age<=200)
{document.write("You are entering in new mode of life");}

else{
    document.write("Have you taken weed?? sillyman");
}