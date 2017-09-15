import { Examination } from './examination.model';
import { School } from './school.model';
import { Type } from "class-transformer";

export class Education{
    @Type(() => Examination)
    examinations:Examination[];
    @Type(() => School)
    schools:School[];
}