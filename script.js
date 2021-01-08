
function createAccount() {
    let userinfo = {};

    let username = document.getElementById("user_name").value;

    userinfo["username"] = username;
    //
    let email = document.getElementById("user_email").value;

    userinfo["email"] = email;
    //
    let password = document.getElementById("user_name_pw").value;

    userinfo["password"] = password;
    //
    let cell = document.getElementById("user_cell").value;

    userinfo["cell"] = cell;

    console.log(userinfo);
}

