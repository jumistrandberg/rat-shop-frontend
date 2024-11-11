import type { Config } from 'jest';

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "jest-environment-jsdom",
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "ts-jest", 
    },
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.app.json', 
        },
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'], 
};

export default config;
