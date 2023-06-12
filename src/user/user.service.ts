import { Injectable, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    await this.usersRepository.save({
      name: '王二233',
    });
    return this.usersRepository.find();
  }

  async findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: string) {
    console.log('id', id, new ObjectId(id));
    const res = await this.usersRepository.findOne({
      where: {
        // _id: new ObjectId(id),
        id: new ObjectId(id),
        // id,
      },
    });
    console.log('res', res);
    return res ? res : '没有找到该用户';
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }
}
