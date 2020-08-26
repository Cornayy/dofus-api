import { Module } from '@nestjs/common';
import { MountResolver } from './resolvers/mount.resolver';
import { MountService } from './mount.service';

@Module({ providers: [MountResolver, MountService] })
export class MountModule {}
