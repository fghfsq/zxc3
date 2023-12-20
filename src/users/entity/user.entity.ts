import {Entity,PrimaryGeneratedColumn,Column} from 'typeorm'

@Entity('users')
export class UserEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    fullName:string

    @Column()
    email:string

    @Column()
    password:string

    @Column('boolean',{default:false})
    banned:boolean = false

    @Column({nullable:true})
    banReason:string
}