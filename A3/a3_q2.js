function validator(){
    let pass = true;
    pass = validate(document.getElementById("book0").value);
    pass = validate(document.getElementById("book1").value);
    pass = validate(document.getElementById("book2").value);
    if (pass === true){
        document.getElementById("p0").innerHTML = "Basic XHTML (Quantity = " + document.getElementById("book0").value + "): $" + (document.getElementById("book0").value * 19.99);
        document.getElementById("p1").innerHTML = "Intro to PHP (Quantity = " + document.getElementById("book1").value + "): $" + (document.getElementById("book1").value * 86.00);
        document.getElementById("p2").innerHTML = "Advanced JQuery (Quantity = " + document.getElementById("book2").value + "): $" + (document.getElementById("book2").value * 55.00);
        document.getElementById("ptotal").innerHTML = "Final Total: $" + (document.getElementById("book0").value * 19.99 + document.getElementById("book1").value * 86.00 + document.getElementById("book2").value * 55.00);
    }
}

function validate(x){
    if (Number.isNaN(x) || (x < 0)){
        alert("Invalid input(s), must be a non-negative integer.")
        return false;
    }
    return true;
}