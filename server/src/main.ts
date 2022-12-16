import { VersioningType } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import * as cookieParser from "cookie-parser"

import { AppModule } from "./models/app/app.module"

const PORT = process.env.PORT || 5000

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: "*" // TODO FIX
  })

  app.use(cookieParser())
  app.enableVersioning({
    type: VersioningType.URI
  })
  app.setGlobalPrefix("api")

  const config = new DocumentBuilder()
    .setTitle("App example")
    .setDescription("The app API description")
    .setVersion("1.0")
    .addTag("app")
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("api", app, document)

  await app.listen(PORT)
}

bootstrap()
