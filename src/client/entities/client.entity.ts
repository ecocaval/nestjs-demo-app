import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CreateClientDto } from "../dto/create-client.dto";
import { UpdateClientDto } from "../dto/update-client.dto";

@Entity()
export class Client {

    @PrimaryGeneratedColumn('uuid', { primaryKeyConstraintName: "client-pk" })
    id: string;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column('json', { nullable: true })
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