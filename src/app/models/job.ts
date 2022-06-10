export class JobPost {
    id: Number;
    jobCompany: string;
    jobTitle?: string;
    jobDescription?: string;
    jobLocation?: string;
    minPayRange: Number;
    maxPayRange?: Number;
}