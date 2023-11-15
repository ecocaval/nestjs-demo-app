export class Client {
    id: string;
    name: string;
    age: number;

    constructor(id: string, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

export class CreateClient {
    name: string;
    age?: number;
}

export class UpdateClient {;
    name?: string;
    age?: number;
}