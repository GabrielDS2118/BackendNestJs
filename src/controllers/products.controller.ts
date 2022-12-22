import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
  ParseIntPipe,
} from '@nestjs/common';

import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return `products  limit => ${limit} offset ${offset} brand => ${brand}`;
    return this.productsService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return 'yo soy un filtro';
  }

  @Get(':productiId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productiId', ParseIntPipe) productId: number) {
    // return `product ${productId}`;
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: any) {
    // return {
    //   message: 'acccion para crear',
    //   payload,
    // };

    return this.productsService.create(payload);
  }

  @Put(':productId')
  update(@Param('productId') productId: number, @Body() payload: any) {
    // return {
    //   productId,
    //   payload,
    // };

    return this.productsService.update(productId, payload);
  }

  @Delete(':productId')
  delete(@Param('productId') productId: any) {
    return this.productsService.remove(productId);
  }
}
