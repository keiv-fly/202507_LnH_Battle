export default {
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/../../src', '<rootDir>/../core'],
    testMatch: [
        '<rootDir>/../../src/**/__tests__/**/*.{js,jsx}',
        '<rootDir>/../../src/**/*.{test,spec}.{js,jsx}',
        '<rootDir>/../core/**/*.{test,spec}.{js,jsx}'
    ],
    moduleNameMapping: {
        '^@core/(.*)$': '<rootDir>/../../src/core/$1',
        '^@phaser/(.*)$': '<rootDir>/../../src/phaser/$1',
        '^@shared/(.*)$': '<rootDir>/../../src/core/shared/$1',
        '^@assets/(.*)$': '<rootDir>/../../src/phaser/assets/$1'
    },
    collectCoverageFrom: [
        'src/core/**/*.js',
        '!src/core/**/*.test.js',
        '!src/core/**/__tests__/**',
        '!src/phaser/assets/**'
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov', 'html'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {},
    extensionsToTreatAsEsm: ['.js']
};