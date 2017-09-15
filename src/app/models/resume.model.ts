import { Person } from './person.model';
import { Education } from './education.model';
import { JobWork } from './job-work.model';
import { VolunteerWork } from './volunteer-work.model';
import { Project } from './project.model';
import { Type } from "class-transformer";
export class Resume{
    @Type(() => Person)
    person:Person = new Person();
    accomplishments:string[];
    @Type(() => Education)
    education:Education;
    @Type(() => JobWork)
    jobWork:JobWork[];
    @Type(() => VolunteerWork)
    volunteerWork:VolunteerWork[];
    @Type(() => Project)
    projects:Project[];
    constructor(){

    }
}