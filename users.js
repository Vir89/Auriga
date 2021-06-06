let faker = require('faker');

let generateUsers = () => {
    let users = [];

    for (let id = 0; id < 30; id++) {
        let userName = faker.internet.userName();
        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        let email = faker.internet.email();
        let password = faker.internet.password();
        

        users.push({
            "id": id,
            "userName": userName,
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password
        });
    }

    users.push({
        "id": "30",
        "userName": "Vir",
        "firstName": "Virginia",
        "lastName": "Herrera",
        "email": "virginia@gmail.com",
        "password": "1234",
        
    });

    return { "users": users }
}

module.exports = generateUsers