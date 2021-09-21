module.exports = {
    runtimeCaching: [
        {
            urlPattern: /this\\.is\\.a\\.regex/,
            handler: 'networkFirst',
        }
    ],
};