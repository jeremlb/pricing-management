import { Module } from '@nestjs/common';
import { BasketsController, ProductsController, VouchersController } from './controllers';
import { providers } from './services';

@Module({
  imports: [],
  controllers: [BasketsController, ProductsController, VouchersController],
  providers: [...providers],
})
export class AppModule {}
