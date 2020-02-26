let List = [];
let i = 0;
let table = "<table border='1px' style='border-collapse: collapse;table-layout: fixed;text-align:center'>" +
    "<tr><th>STT</th><th>Tên học viên</th><th>Edit</th></tr>";
document.getElementById('table').innerHTML = table;

function addStudent() {
    while (i > List.length) i--;
    List[i] = document.getElementById('textInput').value;
    table += "<tr><td>" + (i + 1) + "</td>" + "<td>" + List[i] + "</td>" +
        "<td><input type='button'value='x' onclick='delName(this.id)'id=" + "'" + i + "'" + "></td></tr>";
    i++;
    document.getElementById('table').innerHTML = table;
}

function delName(n) {
    List.splice(n, 1);
    table = "<table border='1px' style='border-collapse: collapse;table-layout: fixed;text-align:center'>" +
        "<tr><th>STT</th><th>Tên học viên</th><th>Edit</th></tr>";
    for (let j = 0; j < List.length; j++) {
        table += "<tr><td>" + (j + 1) + "</td>" + "<td>" + List[j] + "</td>" +
            "<td><input type='button'value='x' onclick='delName(this.id)'id=" + "'" + j + "'" + "></td></tr>";
    }
    document.getElementById('table').innerHTML = table;
}