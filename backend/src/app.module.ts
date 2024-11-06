import { Module } from '@nestjs/common';
import { ConfigModule } from './infrastructure/config/config.module';
import { CommonModule } from './infrastructure/common/common.module';
import { UsecaseModule } from './usecases/usecase.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'uploads'),
      serveRoot: '/uploads',
    }),
    CommonModule,
    ConfigModule,
    UsecaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
