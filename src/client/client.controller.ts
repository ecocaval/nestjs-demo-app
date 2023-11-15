import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('client')
export class ClientController {

    constructor(private readonly clientService: ClientService) {}

    @Get()
    async findAll() {
        return await this.clientService.findAll();
    }

    @Get(":id")
    async findById(@Param('id') id: string) {
        return await this.clientService.findById(id); 
    }

    @Post()
    async create(@Body() createClientDto: CreateClientDto) {
        return await this.clientService.create(createClientDto);
    }

    @Patch(":id")
    async updateById(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {                
        return await this.clientService.updateById(updateClientDto, id);
    }

    @Delete(":id")
    async removeById(@Param('id') id: string) {
        await this.clientService.removeById(id);
    }
}
