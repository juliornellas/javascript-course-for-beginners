/**
 * Assignment Operators
Operator	Example	    Same As
=	        x = y	    x = y
+=	        x += y	    x = x + y
-=	        x -= y	    x = x - y
*=	        x *= y	    x = x * y
/=	        x /= y	    x = x / y
%=	        x %= y	    x = x % y
**=	        x **= y	    x = x ** y
*/

let x = 10;
console.log('X value', x)

x += 3 // x = 10 + 3
console.log('New X value', x)

x -= 4 // x = 10 - 4
console.log('New X value', x)

x *= 2 // x = 9 * 2
console.log('New X value', x)

/**
* Arithmetic Operators
* +	Addition
* -	Subtraction
* *	Multiplication
* **	Exponentiation (ES2016)
* /	Division
* %	Modulus (Division Remainder)
* ++ Increment
* -- Decrement
*/

let result = 3+3;
console.log('Result', result)
result++;
console.log('Result increment', result)
result--;
console.log('Result decrement', result)