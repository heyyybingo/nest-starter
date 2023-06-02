import { ApiProperty } from '@nestjs/swagger';

export default class AppDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  version: string;
}
