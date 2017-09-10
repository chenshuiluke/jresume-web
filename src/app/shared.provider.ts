import { Resume } from './models/resume.model';
import { ResumeResponse } from './models/resume-response.model';
import { Utility } from './utility/utility.class';
export const shared = [
    {
        provide:Resume, useClass: Resume
    },
    {
        provide:ResumeResponse, useClass:ResumeResponse
    },
    {
        provide:'RESOLVE_OBJECT_STRING_KEY', useValue: Utility.resolve_object_string_key
    }
]