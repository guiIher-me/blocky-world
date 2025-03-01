/* eslint-disable import/no-extraneous-dependencies */
const Redis = require('ioredis');
const { Logger } = require('../logger/Logger');

class RedisClient {
    static instance = null; // Singleton instance

    constructor() {
        if (!RedisClient.instance) {
            this.client = new Redis({
                host: 'blockyworld-backend-redis',
                port: 6379,
            });

            this.client.on('connect', () => Logger.log('Redis connected.'));
            this.client.on('error', (err) => console.error('Redis Error:', err));

            RedisClient.instance = this;
        }
    }

    connect() {
        if (!this.client) {
            this.client = new Redis({
                host: this.host,
                port: this.port,
                password: this.password,
            });

            this.client.on('connect', () => {
                this.isConnected = true;
            });

            this.client.on('error', (err) => Logger.error('Redis error:', err));

            // Captura sinais para shutdown seguro
            process.on('SIGINT', () => this.gracefulShutdown());
            process.on('SIGTERM', () => this.gracefulShutdown());
        }
    }

    async set(key, value, ttl = null) {
        if (ttl) {
            await this.client.set(key, value, 'EX', ttl);
        } else {
            await this.client.set(key, value);
        }
    }

    async get(key) {
        return this.client.get(key);
    }

    async delete(key) {
        if (!this.isConnected) this.connect();
        return this.client.del(key);
    }

    async disconnect() {
        await this.client.quit();
    }

    async gracefulShutdown() {
        await this.disconnect();
        process.exit(0);
    }
}

module.exports = { RedisClient };
