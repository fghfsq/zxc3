import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm"
import { UsersModule } from './users/users.module'
import { UserEntity } from "./users/entity/user.entity"
import { AuthModule } from './auth/auth.module';

@Module({
    imports:[
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [UserEntity],
        synchronize: true,
      }),
        UsersModule,
        AuthModule,]
})

export class AppModule{}