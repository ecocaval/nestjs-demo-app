import { Injectable, NotFoundException } from '@nestjs/common';
import { Client, CreateClient, UpdateClient } from './entities/client.entity';
import {v4 as uuidv4} from 'uuid';
import { log } from 'console';

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

    create(client: CreateClient) {
        this.clients.push(new Client(uuidv4(), client.name, client.age));
    }

    updateById(updatedClient: UpdateClient, id: string) {
        this.checkForClientExistenceById(id);

        this.clients = this.clients.map(client => {
            if(client.id !== id) {
                return client;
            }
            return new Client(id, updatedClient.name, updatedClient.age);
        });
    }

    removeById(id: string) {
        this.checkForClientExistenceById(id);

        this.clients = this.clients.filter(client => client.id !== id ? true : false);
    }

    checkForClientExistenceById(id: string) {
        const client = this.clients.filter(client => client.id == id)[0];

        if(!client) {
            throw new NotFoundException("The user with this id was not found.");
        }
        
        return client;
    }
}
