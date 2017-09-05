import { Person } from './person.model';
import { Education } from './education.model';
export class Resume{
    person:Person = new Person();
    accomplishments:string[];
    education:Education;
    constructor(){

    }
}