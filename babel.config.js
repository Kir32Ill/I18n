module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
        '@babel/preset-react',
    ],
    plugins: [
        ['formatjs', {
            idInterpolationPattern: '[sha512:contenthash:base64:6]',
            ast: true,
            removeDefaultMessage: process.env.NODE_ENV === 'production',
        }],
    ],
};