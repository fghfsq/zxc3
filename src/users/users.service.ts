import { Injectable } from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import { UserEntity } from './entity/user.entity'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private repository:Repository<UserEntity>){}

    async createUser(dto:CreateUserDto){
        return this.repository.save(dto)
    }

    async getAllUsers(){
        return this.repository.find()
    }

    async getUserByEmail(email:string){ 
        return this.repository.findOneBy({email})
    }

    async getUserById(id:number){
        return this.repository.findOneBy({id})
    }
}
