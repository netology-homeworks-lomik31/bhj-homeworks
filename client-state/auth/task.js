let userId = localStorage.getItem("user_id");


if (userId) {
    successLogin();
}

document.querySelector("#signin__btn").onclick = function(e) {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    let formData = new FormData(document.querySelector("#signin__form"));
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 201 && xhr.responseText) {
                let response = JSON.parse(xhr.responseText);
                if (response.success) {
                    localStorage.setItem("user_id", response.user_id);
                    userId = response.user_id;
                    successLogin();
                } else {
                    alert("Неверный логин/пароль");
                }
            }
            else {
                alert("Ошибка авторизации");
            }
        }
    }
    xhr.send(formData);
    clearForm();
}

document.querySelector("#signout__btn").onclick = function() {
    logOut();
}





function logOut() {
    localStorage.removeItem("user_id");
    document.querySelector("#welcome").classList.remove("welcome_active");
    document.querySelector("#signin").classList.add("signin_active");
}

function clearForm() {
    document.querySelector("#signin__form").reset();
}

function successLogin() {
    document.querySelector("#signin").classList.remove("signin_active");
    document.querySelector("#user_id").textContent = userId;
    document.querySelector("#welcome").classList.add("welcome_active");
}
