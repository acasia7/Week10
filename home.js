const myBtn = document.getElementById('myBtn'); //reference button

myBtn.addEventListener('click', addItem); //attach event listener to button 

function addItem(event) { //function inside event listener
    event.preventDefault();
    //get input values from form
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    //get HTML table
    var parentTbl = document.getElementsByTagName('table')[0];
    //add new empty row to end of table
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell (0);
    var cell2 = newRow.insertCell (1);
    var cell3 = newRow.insertCell (2);

    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = email;
}
