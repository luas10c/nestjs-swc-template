import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import path from 'node:path'

import { CustomerModule } from '#/customer/customer.module.js'

import { constants } from '#/config/constants.js'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      entities: [path.join(constants.BASE_URL, '**', '*.entity.{ts,js}')]
    }),
    CustomerModule
  ]
})
export class AppModule {}
