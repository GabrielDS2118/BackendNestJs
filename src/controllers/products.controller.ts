import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products  limit => ${limit} offset ${offset} brand => ${brand}`;
  }

  @Get('filter')
  getProductFilter() {
    return 'yo soy un filtro';
  }

  @Get(':productiId')
  getProduct(@Param('productiId') productId: string) {
    return `product ${productId}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'acccion para crear',
      payload,
    };
  }
}
