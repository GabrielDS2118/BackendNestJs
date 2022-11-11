import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Holaa Mundo';
  }

  @Get('nuevo')
  newEndPoint() {
    return 'Nuevo endpoint';
  }

  @Get('products/:productiId')
  getProduct(@Param('productiId') productId: string) {
    return `product ${productId}`;
  }

  @Get('categories/:categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ) {
    return `categoria ${categoryId} y producto ${productId}`;
  }
}
