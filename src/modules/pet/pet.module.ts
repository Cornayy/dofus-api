import { Module } from '@nestjs/common';
import { PetResolver } from './resolvers/pet.resolver';
import { PetService } from './pet.service';

@Module({ providers: [PetResolver, PetService] })
export class PetModule {}
