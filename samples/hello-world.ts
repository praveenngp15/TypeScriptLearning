import {buildPersonData} from "./buildPersonData";

const partialAddress = ["Street Name",
    "Street Number", "Po Box"];

const firstName = 'Kobe',
    lastName = 'Bryankt';

const personData = {
    firstName,
    lastName
};

const address = [...partialAddress, 'Staples Center'];

console.log(buildPersonData(personData, address));
