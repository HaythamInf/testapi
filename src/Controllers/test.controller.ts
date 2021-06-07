import {Controller,Get, Param} from '@nestjs/common';

@Controller('test')
export class TestController{
    @Get(':id')
    retornarRespuesta(@Param() params ):string{
        return JSON.stringify(params); 
    }
}