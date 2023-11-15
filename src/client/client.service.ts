import { Injectable } from '@nestjs/common';
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
        return this.clients.filter(client => client.id == id)[0];
    }

    create(client: CreateClient) {
        this.clients.push(new Client(uuidv4(), client.name, client.age));
    }

    updateById(updatedClient: UpdateClient, id: string) {
        this.clients = this.clients.map(client => {
            if(client.id !== id) {
                return client;
            }
            return new Client(id, updatedClient.name, updatedClient.age);
        });
    }

    removeById(id: string) {
        this.clients = this.clients.filter(client => client.id !== id ? true : false);
    }
}
