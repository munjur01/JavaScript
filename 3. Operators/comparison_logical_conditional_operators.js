// Comparison operator
4==4
4==6
var a = 4;
var b = 5;
a==b
4=="4"
4==="4"// Type soho comparison
4!=5
4!=4

4!==4 // Type soho comparison
4!=="4" // Type soho comparison
5>4
4>5
3<5
4<1
5>=10
5>=5
5>=1
1<=3
1<=1
1<=-3
var a = (1>10)
var b = (5>4)


// Logical operator
true || true //return ture
true || false //return ture
false || true //return ture
false || false //return false

true && true //return ture
true && false //return false
false && true //return false
false && false //return false

!false //return ture
!true //return false
(4>6) || (1<7) //return ture
(4>6) || (1<-9) //return false
(4>6) && (1<7) //return false
(4<6) && (1>-9) //return ture
true || true || true //return ture
(4<6) && !(1>-9) //return false



// Conditional operator 
var a = (1<8)? "Hello": "World";
a // print Hello

var a = (1>8)? "Hello": "World";
a // print World