//Read https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
// https://www.w3schools.com/js/js_string_templates.asp

let student = {
    name: "John Doe",
    age: 24,
    id: "123456789",
    gender: "male",
    address: {
        number: "56",
        street: "Main St.",
        city: "Brooklyn",
        zip: "12345",
        state: "NY"
    },
    courses: ['CS497','CS291','CS172','CS461'],
    getAddress: function(){
        return this.address.number + " " + this.address.street + " "+ this.address.city + " "+ this.address.zip + this.address.state ;
    }
};
document.getElementById("txtName").innerHTML = student.name;
document.getElementById("txtID").innerHTML = student.id;
document.getElementById("txtAddress").innerHTML = student.getAddress();
document.getElementById("txtAge").innerHTML = student.age;
document.getElementById("txtCourses").innerHTML = student.courses;


let empList =[
{
    "fname": "Sharad",
    "lname": "Volz"
},
{
    "fname": "Constance",
    "lname": "Dech"
},
{
    "fname": "Myra",
    "lname": "Comeau"
},
{
    "fname": "Noriess",
    "lname": "Dabbs"
},
{
    "fname": "Esperanza",
    "lname": "Shrestha"
},
{
    "fname": "Eugene",
    "lname": "Barron"
},
{
    "fname": "Petr",
    "lname": "Ravenelle"
},
{
    "fname": "Cristina",
    "lname": "Terry"
},
{
    "fname": "Victoria",
    "lname": "Aresti"
},
{
    "fname": "Byron",
    "lname": "Yarber"
},
];
//10 rows of the table
// let strInnerHtml ='';
// for(let i=0;i<4;i++){
//     strInnerHtml += "<tr><td>row" + i + "</td><td>row" + i + "</td></tr>";

// }
//creat more raws                                //tr the column

//JavaScript Template Literals

// let strInnerHtml ='';
// for(let i =0; i<empList.length; i++){
//     strInnerHtml += `
//     <tr>
//         <td> ${empList[i].fname}</td> 
//         <td> ${empList[i].lname}</td>
//         </tr>`}

//     
//*map and (JS, React)

empList.map((obj) => {
    document.getElementById("empData").innerHTML +=`
    <tr>
        <td> ${obj.fname}</td> 
        <td> ${obj.lname}</td>
        </tr>`;
    
});

    

 //document.getElementById('empData').innerHTML =strInnerHtml ;
