import { Module, HttpModule } from '@nestjs/common';
import { OdysseyService } from './odyssey.service';

@Module({
  providers: [OdysseyService],
  imports: [HttpModule],
  exports: [OdysseyService]
})
export class OdysseyModule {}
