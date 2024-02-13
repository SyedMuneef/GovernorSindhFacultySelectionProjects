//This will Generate and return Random Data based on IUserData
import { faker } from "@faker-js/faker";
const dataFunc = () => {
    //This array will store generated data
    let userData = [];
    //This loop will generate random data and push it in userData
    for (let i = 0; i < 6; i++) {
        let user = {
            id: i,
            name: faker.person.fullName(),
            accoutNumber: Math.floor(i * (Math.random() * 10000000)),
            pin: 1000 + i,
            blance: 2000000 * i,
        };
        userData.push(user);
    }
    return userData;
};
export default dataFunc;
