"use strict";

const isPrimeNumber = (number) => {
    let isPrime = (number < 2) ? false: true;  // set default return value
    for (let i = 2; i < number; i++) {
        if ( number % i === 0 ) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
};

$(document).ready( () => {
    
    $("#determine").click( () => {
        $("#message2").text("");
        const number = parseInt( $("#number").val() );
        if ( isNaN(number) || number < 1 ) {
            $("#message1").text( "Please enter a number and greater than 1." );
        } else {
            const isPrime = isPrimeNumber( number );

            if ( isPrime === true ) {
                $("#message1").text( number + " is a prime number." );
            } else {
                $("#message1").text( number + " is NOT a prime number." );
            }
        }
    });
    $("#calculate").click( () => {
        const number = parseInt( $("#number").val() );
            $("#message2").text("");
        for (let i = 1 ; i <= number; i++) {
            const isPrime = isPrimeNumber(i);
            if ( isPrime === true ) {
                $("#message2").text($("#message2").text() + i + " " );
            } else {
                continue;
            } 
    }
        $("#number").focus();
        $("#number").select();
    });
    
    $("#number").focus();
});