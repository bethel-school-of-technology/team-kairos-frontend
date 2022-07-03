export class JobPost {
    id: Number;
    jobCompany: string;
    jobTitle?: string;
    jobDescription?: string;
    jobLocation?: string;
    urlToJobApp: string;
    minPayRange: Number;
    maxPayRange?: Number;
}