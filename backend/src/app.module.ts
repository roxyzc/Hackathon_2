import { Module } from '@nestjs/common';
import { ConfigModule } from './infrastructure/config/config.module';
import { CommonModule } from './infrastructure/common/common.module';
import { UsecaseModule } from './usecases/usecase.module';

@Module({
  imports: [CommonModule, ConfigModule, UsecaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
