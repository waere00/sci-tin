import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Like } from './like.entity'
import { LikeResolver } from './like.resolver'
import { LikeService } from './like.service'
import { MatchModule } from '../match/match.module'
import { PubSupProvider } from '../../PubSubProvider'

@Module({
    imports: [TypeOrmModule.forFeature([Like]), MatchModule],
    providers: [LikeResolver, LikeService, PubSupProvider]
})
export class LikeModule {}
