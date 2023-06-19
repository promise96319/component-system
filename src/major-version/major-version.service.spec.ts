import { Test, TestingModule } from '@nestjs/testing';
import { MajorVersionService } from './major-version.service';

describe('MajorVersionService', () => {
  let service: MajorVersionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MajorVersionService],
    }).compile();

    service = module.get<MajorVersionService>(MajorVersionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
