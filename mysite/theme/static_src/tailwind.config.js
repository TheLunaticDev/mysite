module.exports = {
    content: [
        '../templates/**/*.html',
        '../../templates/**/*.html',
        '../../**/templates/**/*.html',
        './node_modules/flowbite/**/*.js',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
