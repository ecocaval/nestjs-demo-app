import { Injectable, NotFoundException } from '@nestjs/common';
import { Client } from './entities/client.entity';
import { v4 as uuidv4 } from 'uuid';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {

    constructor(
        @InjectRepository(Client)
        private readonly clientRepository: Repository<Client>
    ) {}

    async findAll() {
        return await this.clientRepository.find();
    }

    async findById(id: string) {
        const client = await this.clientRepository.findOne({ 
            where: { id } 
        });

        if(!client) {
            throw new NotFoundException(`The user with id ${id} was not found.`);
        }
        
        return client;
    }

    async create(createClientDto: CreateClientDto) {
        return await this.clientRepository.save(Client.fromIdAndCreateClientDto(uuidv4(), createClientDto));
    }

    async updateById(updateClientDto: UpdateClientDto, id: string) {
        await this.findById(id);

        return await this.clientRepository.save(Client.fromIdAndUpdateClientDto(id, updateClientDto));
    }

    async removeById(id: string) {
        const client = await this.findById(id);

        await this.clientRepository.remove(client);
    }
}
