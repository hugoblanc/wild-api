import { Module, HttpModule } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [HttpModule],
})
export class CoreModule {}
