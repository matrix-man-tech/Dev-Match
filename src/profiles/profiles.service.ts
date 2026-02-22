import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  create(createProfileDto: CreateProfileDto) {
    return {
       name: createProfileDto.name,
       location: createProfileDto.location,
       age: createProfileDto.age,
    }
  }

  findAll(location?: string) {
    return `This action returns a profile at location ${location}`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profile`;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
