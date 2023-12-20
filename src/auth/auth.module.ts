import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import {JwtModule} from '@nestjs/jwt'
import { UsersModule } from 'src/users/users.module'
import {ConfigModule} from '@nestjs/config'

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports:[UsersModule,
    ConfigModule.forRoot(),
    JwtModule.register({
      secret:process.env.JWT_SECRET,
      signOptions:{
        expiresIn:'24h'
      }
    })]
})
export class AuthModule {}
