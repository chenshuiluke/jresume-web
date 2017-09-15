import { Subject } from './subject.model';
import { BaseEducationItem } from './base-education-item.model';
import { Type } from "class-transformer";
export class Examination extends BaseEducationItem{
    @Type(() => Subject)
    subjects:Subject[];
}