import * as chalk from 'chalk';
import * as redis from 'redis';

import config from '../../config';

export class Redis {
  private static instance: Redis;

  private static readonly HOSTNAME: string = config.redis.hostname;
  private static readonly PORT: number = +config.redis.port;

  private redisClient: redis.RedisClient;

  private constructor() {
    this.redisClient = redis.createClient(Redis.PORT, Redis.HOSTNAME);

    this.redisClient.on('connect', () => {
      console.log(chalk.blue(`Connected to redis server successfully on ${Redis.HOSTNAME}:${Redis.PORT}`));
    });

    this.redisClient.on('error', (err) => {
      console.log(chalk.red(err));
    });
  }

  static getInstance(): Redis {
    if (!Redis.instance) {
      Redis.instance = new Redis();
    }

    return Redis.instance;
  }

  get<T>(key: string): Promise<T | null> {
    return new Promise((resolve, reject) => {
      if (!this.redisClient.connected) {
        return resolve(null);
      }

      this.redisClient.get(key, (error: Error | null, result: string | null) => {
        if (error) {
          reject(error);
        } else {
          resolve(result ? JSON.parse(result) : null);
        }
      });
    });
  }

  set<T>(key: string, value: T): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!this.redisClient.connected) {
        return reject('Can not set key value redis is connected yet');
      }

      this.redisClient.set(key, JSON.stringify(value), (error: Error | null, result: string) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  expire(key: string, time = 86400): Promise<number> {
    return new Promise((resolve, reject) => {
      if (!this.redisClient.connected) {
        return reject('Can not expire key redis is connected yet');
      }

      this.redisClient.expire(key, time, (error: Error | null, result: number) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
}
