# Expert_Javascript
Javascript lessons #100daysofcode


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
