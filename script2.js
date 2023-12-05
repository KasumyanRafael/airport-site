let a=document.querySelector(".personnel_entrance");
    a.addEventListener('click',function(){
        document.querySelector(".personnel_reg").style.display="block";
    })
    function hideForm() {
        document.querySelector(".personnel_reg").style.display = "none";
     }
    document.querySelector("#info_reg_personnel").addEventListener("click",function(){
        alert("Самостоятельная регистрация невозможна. Попросите коллег, имеющих право добавлять пользователей в систему. ")
    })