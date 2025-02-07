import Query from './resolvers/Query';
import { Resolvers } from './resolvers-types.generated';
import Db, { DbTweet, DbUser } from './db';
import User from './resolvers/User';
import Tweet from './resolvers/Tweet';
import Mutation from './resolvers/Mutation';
import Trend from './resolvers/Trend';

export interface TwitterResolverContext {
  db: Db;
  dbTweetCache: Record<string, DbTweet>;
  dbTweetToFavoriteCountMap: Record<string, number>;
  dbUserCache: Record<string, DbUser>;
}

const resolvers: Resolvers<TwitterResolverContext> = {
  Query,
  User,
  Mutation,
  Tweet,
  Trend,
};

export default resolvers;
