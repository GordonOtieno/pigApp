//console.log('hello world!!!');
//var firstName='gordon';
//console.log(firstName);
//var job;
//console.log(job);
//var x,y;
//x=9;
//y=8;
//var sum=x+y;
//sum=sum++;
//console.log(sum);
//var age=30;
//var name='Onyango';
//console.log('Your name is:'+name+ '  Age '+age);
//var second= prompt('Enter your First name');
//console.log('Your name is:'+second+" "+name+ '  Age '+age);
//var compare=x<x;
//console.log(typeof compare);
//
////operator precedence


//codding challange

//var markMass, JohnMass, markHight, johnhight;
//jonhMass=90;
//johnhight=1.7;
//markHight=2.8;
//markMass=90;
//
//
//var marksBMI=markMass/(markHight*markHight);
//
//var johnBMI=JohnMass/(johnhight*johnhight);
//
//if (marksBMI>johnBMI){
//    console.log('Mark\'s age is higher than Jonh\'s age ');
//}else
//    console.log('Jonh\'s age is higher than M\'s age ');
//
//console.log(marksBMI,johnBMI);

//if else if


//var fName='Gordon';
//var age=30;
//if (age<13){
//    console.log(fName +' is a Boy');
//    
//}else if(age>13 && age<20){
//    console.log(fName +' is a Teenager');
//}
//else if (age>=20 && age<30){
//    console.log(fName +' is a young man');
//    
//} else {
//    console.log(fName +' is a Man');
//}



//console.log(this); 
// this keyword on regular function call returns windows object.

var john ={
    name:'John Smith',
    yearOfBirth:1990,
    calculateAge:function(){
        console.log(this)
        console.log(2019-this.yearOfBirth);
    }
}
john.calculateAge();

var mike={
    name:'Mike Brown',
    yearOfBirth:1997
    
};
//function borrowing
mike.calculateAge=john.calculateAge;
mike.calculateAge();
console.log()


























//ternary operator

//var fname='Gordon';
//var age=16;

//age>=18 ? console.log(fname+ ' drinks bear')
//: console.log(fname+ ' drinks juice');

//var drink= age>18? 'beer':'juice';
//console.log(drink);


//var job='cop';
//switch(job){
//    case 'teacher':
//        console.log(fname='teachs to program');
//   break;
//}



// truthy and falsy values and equality operators
//falsy value: They include undefined, null,0,'' NaN.

//var hight;
//hight=0;
//if(hight || hight===0){
//    console .log('variable is defined');
//}
//else console.log('Variable has not been defined');


//functions

//function calculateAge(birthYear){
//    return 2018-birthYear;
//    
//}
//var johnAge=calculateAge(1990);
//var mikeAge=calculateAge(1948);
//var janeAge=calculateAge(1969);
//console.log(johnAge,mikeAge,janeAge);
//
//function yearsToRetire(year,firstName){
//    var age =calculateAge(year);
//    var retirement=65-age;
//    
//    if (retirement>0){
//        console.log(firstName+'retires in '+ retirement +' Years to come');
//    }else 
//    console.log  (firstName+'already retired');  
//    
//}
//
//yearsToRetire(1990,'John ');
//yearsToRetire(1948,'Mark ');
//yearsToRetire(1969,'jane ');

//Function declaration and 

//function calcAge(year){
//}
//
//function expresion
//var calcAge=function(year){
//    
//}


//arrays

//var names=['john', 'mark', 'jane'];
//var year=new Array(1990,1969,1948);
//names[0]='Gordon';
//names[5]='Kennedy';
//
//names[names.length]='joseph';
//console.log(names);
//console.log(names.length);
//
////different data types
//var john=['john','Smith', 1990,'Teacher',false,'Designer'];
//john.push('blue');// add the element to the end of array.
//john.unshift('Mr'); // add the element at the beggining of an array.
//john.pop(); //remove an element from the end of an array.
//john.shift(); //remove an element at the beginning of an array.
//console.log(john.indexOf(1990)); // returns the index of the element being refered.
//john.unshift('Mr');
//console.log(john);
//var isDesigner= john.indexOf('Designer')===-1? 'John is NOT a designer': 'John is a Designer';
//console.log(isDesigner);


//function tipCalculator(bill){
//    var percent;
//    if (bill<50){
//    percent=0.2;
//    }
//    else if(bill>=50 && bill<200)
//    {
//       percent=0.15; 
//    }
//    else percent=0.1;
//   return percent*bill; 
//}
//var bill=[124, 48, 268];
//var tips=[tipCalculator(bill[0]),
//         tipCalculator(bill[1]),
//         tipCalculator(bill[2])
//        ];
//var finalValues=[
//    bill[0]+tips[0],
//    bill[1]+tips[1],
//    bill[2]+tips[2]
//];
//console.log(tips,finalValues);
//

//object and property

//var john={
//    firstName:'John',
//    lastName:'Smith',
//    birthYear:1990,
//    family:['Mark','bob','Emily'],
//    job:'Teacher',
//    isMarried: false
//    
//};
//john.isMarried=true;
//console.log(john.isMarried);
//
////object syntax
//var jane =new Object();
//jane.firstName='Jane';
//jane.birthYear=1969;
//jane['lastname']='Smith';
//console.log(jane);
//

//var john={
//    firstName:'John',
//    lastName:'Smith',
//    birthYear:1990,
//    family:['Mark','bob','Emily'],
//    job:'Teacher',
//    isMarried: false,
//    calcAge:function(){
//    this.age=2019-this.birthYear;
//    }
//
//};
//john.calcAge();
//console.log(john);
//
//var mark={
//    fullName:'Mark',
//    mass:150,
//    height:1.7,
//    calculateBMI:function(){
//    this.marksBMI=this.mass/(this.height*this.height);
//        return this.marksBMI;
//    }
//    
//};
//
//
//
//var john={
//    fullName:'John',
//    mass:10,
//    height:1.7,
//    calculateBMI:function(){
//    this.johnBMI=this.mass/(this.height*this.height);
//        return this.johnBMI;
//    }
//    
//};
//
//
//
//if(mark.calculateBMI()>john.calculateBMI()){
// console.log(mark.fullName+' has the highest BMI of  '+mark.marksBMI );   
//}else if(john.johnBMI>mark.marksBMI){
//  console.log(john.fullName+' has the highest BMI of  '+john.johnBMI );    
//}else{ 
//    console.log('They have the same BMI');
//}
//
//
//
//var names=['john', true, 'jane', 'mark', 1990];
//for(i=0;i<names.length;i++){
//    console.log(names[i]);
//}
//
////continue and break
////continue execute the next iteration.
//
//for (var i=0;i<names.length;i++){
//    if (typeof names[i]!=='string') continue;
//       
//    console.log(names[i]);
//}
//// break exit the loop once a false value is met.
//for (var i=0;i<names.length;i++){
//    if (typeof names[i]!=='string') break;
//       
//    console.log(names[i]);
//}
//
//var names=['john', true, 'jane', 'mark', 1990];
//for(i=names.length;i>=0;i--){
//    console.log(names[i]);
//}


//advanced tips calculator

var john={
    fullName: 'John Smith',
    bills:[124,48,268,180,42],
    calcTips: function(){
        this.tips=[];
            this.finalValues=[];
        
        //determine % based on tipping rules
    
        var percentage;
        
        var bill=this.bills[i];
        
        
        for (var i=0; i<this.bills.length; i++){
            if(this.bills[i]<50){
                percentage=.2;
            }else if(this.bills[i]>=50 && this.bills[i]<200){
                percentage=.15;
            }else {
                percentage=.1;
            }
            this.tips[i]=this.bills[i]*percentage;
            this.finalValues[i]=this.tips[i]+ this.bills[i];
        }
    }
}
john.calcTips();
console.log(john);


// marks tip calculator

var mark={
    fullName:'Mark Miller',
    bills:[77,475,110,45],
    calcTips:function(){
        this.tips=[];
        this.finalValues=[];
        
     for (var i=0;i<this.bills.length;i++){    
    var percentage;
        var bill= this.bills[i];
       
            if (bill<100){
                percentage=.2;
                
            }else if(bill>=100 && bill<300){
                percentage=.1;
            }else {
                percentage=.25;
            }
            this.tips[i]=bill*percentage;
            this.finalValues[i]=bill+bill*percentage;
        }
        
    }
    
}
function calcAverage(tips){
    var sum=0;
   for (var i=0;i < tips.length;i++){
       sum=sum+tips[i];
   } 
    return sum/tips.length;
}


mark.calcTips();
john.calcTips();

john.average=calcAverage(john.tips);
mark.average=calcAverage(mark.tips);


if (john.average>mark.average){
    console.log(john.fullName+ '\'s family pays higher tips with average of $' +john.average);
}else{
    
    console.log(mark.fullName+ '\'s family pays higher tips with average of $' + mark.average);
}







































