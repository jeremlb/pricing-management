import { Module } from '@nestjs/common';
import { controllers } from './controllers';
import { services } from './services';
import { pipes } from './pipes';


@Module({
  imports: [],
  controllers: [...controllers],
  providers: [...services, ...pipes],
})
export class AppModule {}
