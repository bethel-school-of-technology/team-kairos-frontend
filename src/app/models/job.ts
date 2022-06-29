export class JobPost {
    id: Number;
    jobCompany: string;
    jobTitle?: string;
    jobDescription?: string;
    jobLocation?: string;
    jobURL: string;
    minPayRange: Number;
    maxPayRange?: Number;
}