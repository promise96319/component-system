import { Test, TestingModule } from '@nestjs/testing';
import { ApiDocService } from './api-doc.service';

describe('ApiDocService', () => {
  let service: ApiDocService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiDocService],
    }).compile();

    service = module.get<ApiDocService>(ApiDocService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
