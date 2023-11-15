import { CreateClientDto } from "../dto/create-client.dto";
import { UpdateClientDto } from "../dto/update-client.dto";

export class Client {
    id: string;
    name: string;
    age: number;
    ocupations: string[];

    constructor(id: string, name: string, age: number, ocupations: string[]) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.ocupations = ocupations;
    }

    public static fromIdAndCreateClientDto(id: string, client: CreateClientDto) {
        return new Client(id, client.name, client.age, client.ocupations)
    }

    public static fromIdAndUpdateClientDto(id: string, client: UpdateClientDto) {
        return new Client(id, client.name, client.age, client.ocupations)
    }
}