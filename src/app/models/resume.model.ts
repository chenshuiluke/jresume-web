import { Person } from './person.model';
import { Education } from './education.model';
import { JobWork } from './job-work.model';
import { VolunteerWork } from './volunteer-work.model';

export class Resume{
    person:Person = new Person();
    accomplishments:string[];
    education:Education;
    jobWork:JobWork[];
    volunteerWork:VolunteerWork[];
    constructor(){

    }
}