/*1. Promises/Asynchronous and callbacks
• Create a function that returns a value after 1 second (return inside a setTimeout).
• Pass a callback (function) to the function created in the previous step and execute that function inside the timeout by passing the value.
• Now return a promise instead of accepting the callback.
• Let’s try to chain these promises.*/

function getValue(callback)
{
    let value = 0;

    setTimeout(function(){

        value = 10;
        callback(value)

    },1000);
}

getValue(function(value){
    console.log(value);
})