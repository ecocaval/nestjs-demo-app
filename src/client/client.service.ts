import { Injectable, NotFoundException } from '@nestjs/common';
import { Client } from './entities/client.entity';
import { v4 as uuidv4 } from 'uuid';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientService {

    private clients: Client[] = [];

    findAll() {
        return this.clients;
    }

    findById(id: string) {
        const client = this.checkForClientExistenceById(id);

        return client;
    }

    create(createClientDto: CreateClientDto) {
        this.clients.push(Client.fromIdAndCreateClientDto(uuidv4(), createClientDto));
    }

    updateById(updateClientDto: UpdateClientDto, id: string) {
        this.checkForClientExistenceById(id);

        this.clients = this.clients.map(client => {
            if(client.id !== id) {
                return client;
            }
            return Client.fromIdAndUpdateClientDto(id, updateClientDto);
        });
    }

    removeById(id: string) {
        this.checkForClientExistenceById(id);

        this.clients = this.clients.filter(client => client.id !== id ? true : false);
    }

    checkForClientExistenceById(id: string) {
        const client = this.clients.filter(client => client.id == id)[0];

        if(!client) {
            throw new NotFoundException(`The user with id ${id} was not found.`);
        }
        
        return client;
    }
}
