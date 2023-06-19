import { Test, TestingModule } from '@nestjs/testing';
import { MajorVersionController } from './major-version.controller';
import { MajorVersionService } from './major-version.service';

describe('MajorVersionController', () => {
  let controller: MajorVersionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MajorVersionController],
      providers: [MajorVersionService],
    }).compile();

    controller = module.get<MajorVersionController>(MajorVersionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
