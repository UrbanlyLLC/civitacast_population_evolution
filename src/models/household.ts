export type Age = 
    | "Under 15 years"
    | "15-29 years"
    | "30-64 years"
    | "65 and over";

export type Ethnicity = 
    | "European"
    | "Māori"
    | "Pacific Peoples"
    | "Asian"
    | "Melaa"
    | "Other Ethnicity"
    | "Three or more ethnic groups";

export type Gender = "M" | "F";

export type Income =
    | "$20,000 or less"
    | "$20,001-$30,000"
    | "$30,001-$50,000"
    | "$50,001-$70,000"
    | "$70,001-$100,000"
    | "$100,001-$150,000"
    | "$150,001 or more";

export type FamilyType =
    | "Couple only"
    | "Couple with child(ren)"
    | "One parent with child(ren)"
    | "One-person household";


export interface Person {
    person_id: string;
    age: Age;
    gender: Gender;
    ethnicity: Ethnicity;
}

export interface Household {
    household_id: string;
    family_type: FamilyType;
    income: Income;
    building_id: number;
    area: string;
    persons: Person[];
}