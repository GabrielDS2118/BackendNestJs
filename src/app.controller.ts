import { Controller, Get, Param, Query } from '@nestjs/common';
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

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products  limit => ${limit} offset ${offset} brand => ${brand}`;
  }

  @Get('products/filter')
  getProductFilter() {
    return 'yo soy un filtro';
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
