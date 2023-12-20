import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

const start = async()=>{
    try{
        const PORT = process.env.PORT || 5001

        const app = await NestFactory.create(AppModule)

        app.listen(PORT,()=>console.log(`zxc ${PORT}`))
    }
    catch(err){
        console.log(err)
    }
}

start()