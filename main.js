
// var Input=document.getElementById("Input")
// var pi=document.getElementById("pi")
// Input.oninput = function(){
//    pi.innerHTML+=(Input.value)
// }
// ========================================1======================================
// var body=document.getElementById("body")
// body.onload= function(){
// console.log("Loaded");
// }
// ==========================================2====================================

// var inputi=document.getElementById("inputi")
// var pr=document.getElementById("pr")
// inputi.onchange=function(){
//     pr.innerHTML=inputi.value.toUpperCase()
// }
// ==========================================3====================================
// var inputt=document.getElementById("inputt")
// var pr=document.getElementById("prt")
// inputt.onchange=function(){
//     prt.innerHTML=inputt.value.toLowerCase()
// }
// ==========================================4====================================
// var inputnum=document.getElementById("num")
// var elem5=document.getElementById("elem5")
// inputnum.oninput=function(){
//     elem5.innerHTML=inputnum.value*5
// }
// ==========================================5====================================
// var inputfive = document.getElementById("inputfive")
// var buttonClick = document.getElementById("buttonClick")
// var para = document.getElementById("para")
// var counter = 0;
// buttonClick.onclick = function () {
//     if (counter == 0) {
//         buttonClick.style.background = "red"; counter++
//     }
//     else if (counter == 1) {
//         buttonClick.style.background = "green"; counter++
//     }
//     else if (counter == 2)
//         buttonClick.style.background = "pink"
// }

// inputfive.oninput = function () {
//     para.innerHTML = inputfive.value + Math.random()

// }
// =========================================6====================================
// var btnnn = document.getElementById("btnnn")
// var btn2 = document.getElementById("btn22")
// var btn3 = document.getElementById("btn3")
// var piska = document.getElementById("piska")
// var img = document.getElementById("img")

// btnnn.onclick=function(){
//     img.src ="https://media.istockphoto.com/photos/closeup-of-ruffled-ethiopia-flag-picture-id1031312966?b=1&k=6&m=1031312966&s=170667a&w=0&h=k4cQiqIMCPslVhqoi-Vz-F0fv2JDO4xm0QPVDVzvI2s="  
// }
// btn22.onclick=function(){
//    img.src ="https://media.istockphoto.com/photos/mother-and-daughter-using-digital-tablet-inside-illuminated-cozy-hut-picture-id1270068977?b=1&k=6&m=1270068977&s=170667a&w=0&h=bDnRuknMbq1WeC_pxKrOi70sZoEXXBUcMmIa7EvEltQ=" 
// }
// btn3.onclick=function(){
//     img.src = "https://media.istockphoto.com/photos/my-best-friend-picture-id1295441808?b=1&k=6&m=1295441808&s=170667a&w=0&h=msnoju_ke_ZfiMr1z2SrRZ2zJeAkMqPAKo1-86K7aWM=" 
// }
// =========================================7====================================

// var age=document.getElementById("age")
// var name=document.getElementById("name")
// var profil=document.getElementById("profil")
// var phone=document.getElementById("phone")
// var buttonme=document.getElementById("buttonme")

// buttonme.onclick=function(){
//     var objectFrom={
//         name:name.value,
//         age:age.value,
//         phone:phone.value,
//         profil:`<img src=${profil.value}>`
//     }
//    from1.innerHTML=`${objectFrom.name},${objectFrom.age},${objectFrom.profil},${objectFrom.phone}`

// }

// =========================================8====================================


// כל משתמשת מקליד: שם פרטי, שם משפחה, שנת לידה , תעודת זהות(מספרים בלבד), עיר.
// צור אובייקט של נבדקת עם השדות האלו.
// =============================================משימות בית 23.08.21============================================
// =========================1-2========================

var newArray=[]
var form1 = document.getElementById("form1")
form1.onsubmit = function (event) {
    event.preventDefault()
    var firstname = document.getElementById("firstname").value
    var lastname = document.getElementById("lastname").value
    var id = document.getElementById("id").value
    var city = document.getElementById("city").value
    var year = document.getElementById("year").value
    var newobject = {}
    newobject.firstname = firstname
    newobject.lastname = lastname
    newobject.city = city
    newobject.year = year
    newobject.id = id
    newobject.examday =new Date()

    if(hasId(newArray,id)){
alert("כבק קיים")
    }
    else{
        newArray.push(newobject)
    }console.log(newArray);

    displayData(newArray)
}


// ====================================3===============================
    function hasId(newArray, idUser){
        for (var i = 0; i < newArray.length; i++) {
          if (newArray[i].id == idUser) {
            return true;
          }
        }
        return false;
      }
    //   =================================4============================
      function displayData(newArray) {
        var phar=document.getElementById("phar")
        phar.innerHTML=" ";
        for (var i = 0; i < newArray.length; i++) {
            phar.innerHTML+=newArray[i].firstname
            phar.innerHTML+=newArray[i].lastname 
            phar.innerHTML+=newArray[i].year
            phar.innerHTML+=newArray[i].city
            phar.innerHTML+=newArray[i].id +"<br>"
    
        }
    }

    // =================================5============================
    














// להוסיף אותו למערך הנבדקים וודא שאין נבדק עם אותו תעודת הזהות עם קיים הצג הודעה מתאימה.
// הצג את הנתונים על המסך.
// הצג את הנתונים על המסך בצורת טבלה(כל נבדק בשורה).
// ברגע שהמשתמש מקליד הפוך את כל הקלט ל- UpperCase.
