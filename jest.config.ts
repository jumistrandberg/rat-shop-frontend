import type { Config } from 'jest';

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
    }
}

export default config;