import { Resume } from './models/resume.model';
import { ResumeResponse } from './models/resume-response.model';
export const shared = [
    {
        provide:Resume, useClass: Resume
    },
    {
        provide:ResumeResponse, useClass:ResumeResponse
    }
]