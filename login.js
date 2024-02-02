function login(username, password) {

    if(username === "admin" && password === "admin") {
        console.log("Login successfull")
    } else {
        console.log("Wrong username or password")
    }
}

login("admin", "admin")