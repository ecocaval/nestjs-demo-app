import { Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { ClientService } from './client.service';
import { Client, CreateClient, UpdateClient } from './entities/client.entity';

@Controller('client')
export class ClientController {

    constructor(private readonly clientService: ClientService) {}

    @Get()
    findAll() {
        return this.clientService.findAll();
    }

    @Get(":id")
    findById(@Param('id') id: string) {
        return this.clientService.findById(id); 
    }

    @Post()
    create(@Body() client: CreateClient) {
        this.clientService.create(client);
    }

    @Patch(":id")
    updateById(@Param('id') id: string, @Body() updatedClient: UpdateClient) {                
        this.clientService.updateById(updatedClient, id);
    }

    @Delete(":id")
    @HttpCode(HttpStatus.OK)
    removeById(@Param('id') id: string) {
        this.clientService.removeById(id);
    }
}
