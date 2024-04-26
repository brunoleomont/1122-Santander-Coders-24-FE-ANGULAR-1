export class User {
    public username: string;
    public email: string;
    public country: string;
    public salary: number;
    public weight: number;
    constructor(username: string, email: string, country: string, salary: number, weight: number) {    
        this.username = username,
        this.email = email,
        this.country = country,
        this.salary = salary,
        this.weight = weight
    }
}