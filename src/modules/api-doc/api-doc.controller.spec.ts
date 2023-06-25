import { Test, TestingModule } from '@nestjs/testing';
import { ApiDocController } from './api-doc.controller';
import { ApiDocService } from './api-doc.service';

describe('ApiDocController', () => {
  let controller: ApiDocController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiDocController],
      providers: [ApiDocService],
    }).compile();

    controller = module.get<ApiDocController>(ApiDocController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
