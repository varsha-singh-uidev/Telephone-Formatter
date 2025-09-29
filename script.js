let input = document.querySelector(".input_field");

input.addEventListener("input", function(){
    let value = input.value.replace(/\D/g,"");
    if(value.length >= 4)
    input.value = `+(${value.slice(0,3)}) - ${value.slice(3)} `;
    else
    input.value = value;
});