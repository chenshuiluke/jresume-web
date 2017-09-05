import { Subject } from './subject.model';
import { BaseEducationItem } from './base-education-item.model';
export class Examination extends BaseEducationItem{
    subjects:Subject[];
}