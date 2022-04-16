let div=document.createElement("div")
div.setAttribute("class","container")

let form=document.createElement("form")
form.setAttribute("id","form")

let r1=document.createElement("tr")
let f=document.createElement("textbox")
let fname=document.createElement("input")
fname.setAttribute("id","fname")
f.innerText="firstname:"
r1.append(f,fname)

let r2=document.createElement("tr")
let l=document.createElement("textbox")
let lname=document.createElement("input")
lname.setAttribute("id","lname")
l.innerText="lastname:"
r2.append(l,lname)

let r3=document.createElement("tr")
let add=document.createElement("textbox")
let add1=document.createElement("input")
add1.setAttribute("id","address")
add1.setAttribute("row","6")
add.innerText="address:"
r3.append(add,add1)

let r4=document.createElement("tr")
let p=document.createElement("textbox")
let pin=document.createElement("input")
pin.setAttribute("id","pin")
pin.setAttribute("type","pincode")
p.innerText="pincode:"
r4.append(p,pin)

let r5=document.createElement("tr")
let g=document.createElement("textbox")
g.innerText="gender:"
let radio1=document.createElement("input")
radio1.setAttribute("type","radio")
radio1.setAttribute("id","male")
radio1.setAttribute("name","gender")
let m=document.createElement("textbox")
m.innerText="male";
let radio2=document.createElement("input")
radio2.setAttribute("type","radio")
radio2.setAttribute("id","female")
radio2.setAttribute("name","gender")
let fe=document.createElement("textbox")
fe.innerText="female";
r5.append(g,radio1,m,radio2,fe)

let r6=document.createElement("tr")
let food=document.createElement("textbox")
food.innerText="choice of food:"
let dd=document.createElement("select")
let opt2=document.createElement("option")
opt2.innerHTML="dosa"
let opt3=document.createElement("option")
opt3.innerHTML="idli"
let opt4=document.createElement("option")
opt4.innerHTML="upma"
let opt5=document.createElement("option")
opt5.innerHTML="puri"
let opt6=document.createElement("option")
opt6.innerHTML="rava idli"
dd.setAttribute("id","food");
dd.multiple
dd.append(opt2,opt3,opt4,opt5,opt6)

r6.append(food,dd)

let r7=document.createElement("tr")
let state=document.createElement("textbox")
state.innerText="state:"
let s=document.createElement("input")
s.setAttribute("type","text")
s.setAttribute("id","state")
r7.append(state,s)

let r8=document.createElement("tr")
let c=document.createElement("textbox")
c.innerText="country:"
let country=document.createElement("input")
country.setAttribute("type","text")
country.setAttribute("id","country")
r8.append(c,country)

let r9=document.createElement("tr")
let submit=document.createElement("button")
submit.setAttribute("type","submit")
submit.innerHTML="submit"
r9.append(submit)

submit.addEventListener("click",(ev)=>{
    let table=document.createElement("table")
    let thead=document.createElement("thead");
    let tbody=document.createElement("tbody");

    ev.preventDefault()

let tr1=document.createElement("tr")
let th1=document.createElement("th")
th1.innerHTML="firstname";

let th2=document.createElement("th")
th2.innerHTML="lastname";

let th3=document.createElement("th")
th3.innerHTML="address";

let th4=document.createElement("th")
th4.innerHTML="pincode";
// let td5=document.createElement("td")
let th5=document.createElement("th")
th5.innerHTML="gender";
// let td6=document.createElement("td")
let th6=document.createElement("th")
th6.innerHTML="food";
// let td7=document.createElement("td")
let th7=document.createElement("th")
th7.innerHTML="state";
// let td8=document.createElement("td")
let th8=document.createElement("th")
th8.innerHTML="country";

tr1.append(th1,th2,th3,th4,th5,th6,th7,th8)
thead.append(tr1)
table.append(thead)

for(let i=1;i<form.length;i++){
    let tr2=document.createElement("tr")

    let td1=document.createElement("td")
    fname=document.getElementById("fname").value;
    td1.innerHTML=fname;

    let td2=document.createElement("td")
    lname=document.getElementById("lname").value;
    td2.innerHTML=lname;

    let td3=document.createElement("td")
    address=document.getElementById("address").value;
    td3.innerHTML=address;
    

    let td4=document.createElement("td")
    pincode=document.getElementById("pin").value;
    td4.innerHTML=pincode;
    

    let td5=document.createElement("td")
    gender1=document.getElementById("male").value
    // gender2=document.getElementById("female").value
    // gender=document.getElementsByName("gender")

    if(radio1,radio2){
        if(radio1){
    td5.innerHTML="male";
        }
else if(radio2)
{
    td5.innerHTML="female";
}}
// else{
//     td5.innerHTML="female";
// }

    // td5.innerHTML=gender1;
    // td5.innerHTML=form[i] ["gender"];

    let td6=document.createElement("td")
    foods=document.getElementById("food").value;
    // foods.forEach(function (el) {
    //     if (el.checked == true) {
    //       foods.push(el.value);
    //     }
    //   });

    // if (foods.length < 2) {
    //     alert("Select at least two food items");
    //     return;
    //   }
    td6.innerHTML=foods;


    let td7=document.createElement("td")
    state=document.getElementById("state").value;
    td7.innerHTML=state;

    let td8=document.createElement("td")
    country=document.getElementById("country").value;
    td8.innerHTML=country;


    

    tr2.append(td1,td2,td3,td4,td5,td6,td7,td8)
    tbody.append(tr2)
    table.append(tbody)
    
}
submit.append(table)
}
)



document.body.append(div)
div.append(form)
form.append(r1,r2,r3,r4,r5,r6,r7,r8,r9)
// form.append(fname,lname,add1)