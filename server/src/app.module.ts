import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { BasketsController, ProductsController, VouchersController } from './controllers';

@Module({
  imports: [],
  controllers: [BasketsController, ProductsController, VouchersController],
  providers: [AppService],
})
export class AppModule {}
