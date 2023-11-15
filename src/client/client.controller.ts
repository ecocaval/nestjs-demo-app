import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

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
    create(@Body() createClientDto: CreateClientDto) {
        this.clientService.create(createClientDto);
    }

    @Patch(":id")
    updateById(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {                
        this.clientService.updateById(updateClientDto, id);
    }

    @Delete(":id")
    removeById(@Param('id') id: string) {
        this.clientService.removeById(id);
    }
}
