import { Household, Person, Age } from "../models/household";

const ageGroupsArray: Age[] = ["Under 15 years", "15-29 years", "30-64 years", "65 and over"];

export function evolveHouseholdsOverYears(households: Household[], initialPopulationYear: any, year: any) {
    let evolvedHouseholds = households;

    for (let currentYear = initialPopulationYear; currentYear < year; currentYear++) {
        evolvedHouseholds = evolvePopulationOneYear(evolvedHouseholds);
    }
    return evolvedHouseholds;
}

function evolvePopulationOneYear(households: Household[]): Household[] {
    return households
        .map((household) => {
            const evolvedPersons = household.persons
                .map(evolvePersonOneYear)
                .filter((p): p is Person => p !== null);

            return {
                ...household,
                persons: evolvedPersons,
            };
        })
        .filter((household) => household.persons.length > 0);
}

function evolvePersonOneYear(person: Person): Person | null {
    if (isDeceased(person)) {
        return null;
    }
    person = addOneYearToAge(person);
    return person;
}

function addOneYearToAge(person: Person): Person {
    const currentAgeIndex = ageGroupsArray.indexOf(person.age);
    if (currentAgeIndex === ageGroupsArray.length - 1) {
        return person;
    }
    const isPeopleInTheNextAgeGroup = Math.random() < 0.01;
    return isPeopleInTheNextAgeGroup ? {
        ...person,
        age: ageGroupsArray[currentAgeIndex + 1],
    } : person;
    
}
function isDeceased(person: Person): Boolean {
    const currentAgeIndex = ageGroupsArray.indexOf(person.age);
    const deathRate = [0.001, 0.01, 0.05, 0.1][currentAgeIndex];
    return Math.random() < deathRate;
}

