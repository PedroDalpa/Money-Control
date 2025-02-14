import { Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'

export const getTypeOrmModuleOptions = (): TypeOrmModuleOptions =>
  ({
    type: 'postgres',
    host: 'localhost',
    port: parseInt(process.env.DATABASE_PORT || '5432'),
    username: 'postgres',
    password: 'postgres',
    database: 'money-control',
    entities: [__dirname + './../../**/*.entity{.ts,.js}'],
    synchronize: true,
    schema: process.env.DATABASE_SCHEMA,
    migrationsRun: true,
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/migrations'
    }
  }) as TypeOrmModuleOptions

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: getTypeOrmModuleOptions
    })
  ]
})
export class TypeOrmConfigModule {}
