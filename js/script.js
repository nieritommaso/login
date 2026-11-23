const utenti = ["ciccioGamer", "icardi", "khaby", "rocco", "anna"];
const passwordLista = ["ciccio1", "wandanara", "tiktok", "siffredi33", "tatangelo"];

function togglePassword() {
    let iPass = document.getElementById("iPass");
    let passType = document.getElementById("passType");
    iPass.classList.toggle("bi-eye-slash-fill");
    iPass.classList.toggle("bi-eye-fill");
    if (pass.type == "password") {
        pass.type = "text";
    }
    else {
        pass.type = "password";
    }


}

function login() {

    document.getElementById("popUpLogin").classList.add("d-none");
    document.getElementById("popUpLogin").classList.remove("bg-success");
    document.getElementById("popUpLogin").classList.remove("bg-danger");

    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;
    let userIndex = utenti.indexOf(username);

    if (!utenti.includes(username)) {
        document.getElementById("popUpLogin").classList.remove("d-none");
        document.getElementById("popUpLogin").classList.add("bg-danger");
        document.getElementById("messaggioLogin").innerHTML = "Login failed. User not registered";
    }
    else {
        if (passwordLista.indexOf(password) != userIndex) {
            document.getElementById("popUpLogin").classList.remove("d-none");
            document.getElementById("popUpLogin").classList.add("bg-danger");
            document.getElementById("messaggioLogin").innerHTML = "Login failed. Password incorrect";
        }
        else {
            document.getElementById("popUpLogin").classList.remove("d-none");
            document.getElementById("popUpLogin").classList.add("bg-success");
            document.getElementById("messaggioLogin").innerHTML = "Login Succesful";
        }
    }

}

function mostraSignup() {
    document.getElementById("signup").classList.toggle("d-none");
}

function registra() {

    let userReg = document.getElementById("userReg").value;
    let passwReg = document.getElementById("passwoReg").value;

    document.getElementById("popUpReg").classList.remove("bg-danger");
    document.getElementById("popUpReg").classList.remove("bg-success");

    if (!utenti.includes(userReg)) {
        if (passwReg.length >= 6) {
            document.getElementById("popUpReg").classList.remove("d-none");
            document.getElementById("popUpReg").classList.add("bg-success");
            document.getElementById("messaggioReg").innerHTML = "Utente registrato con successo";
            utenti.push(userReg);
            passwordLista.push(passwReg);
        }
        else {
            document.getElementById("popUpReg").classList.remove("d-none");
            document.getElementById("popUpReg").classList.add("bg-danger");
            document.getElementById("messaggioReg").innerHTML = "Password più corta di 6 caratteri";

        }
    }

    else {
        document.getElementById("popUpReg").classList.remove("d-none");
        document.getElementById("popUpReg").classList.add("bg-danger");
        document.getElementById("messaggioReg").innerHTML = "Utente già registrato";
    }

}

