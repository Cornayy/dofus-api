import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pet.entity';
import { PetResolver } from './resolvers/pet.resolver';
import { PetService } from './pet.service';

@Module({ imports: [TypeOrmModule.forFeature([Pet])], providers: [PetResolver, PetService] })
export class PetModule {}
