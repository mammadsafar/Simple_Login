const fs = require('fs');

function check_user(json) {

    let username = JSON.parse(json);
    // console.log(username.userName, username.password);
    let users = JSON.parse(fs.readFileSync("./tools/file/user.txt", "utf8"));

    for (let i = 0; i < users.length; i++) {
        if(users[i].userName === username.userName && users[i].password === username.password){
            // console.log(users[i].userName);
            return true
        }
    }return false

}

module.exports = check_user;
