/** @type {import('tailwindcss').Config} */
module.exports = {
    //purge: ['./_site/**/*.html', './_layouts/**/*.html', './_posts/**/*.{md,markdown}', './**/*.html'],
  // rest of the config
  // once I do the above use this: npx tailwindcss -i ./assets/css/tailwind.css -o ./assets/css/style.css --minify

    content: [
        './layouts/*.html',           // Your HTML layout files
        './*.html',                   // HTML files at the root
        './_posts/*.{html,md}',       // If you use HTML or Markdown in your posts
        // './path/to/other/directories/with/tailwind/classes/**/*.html', // Any other places you use Tailwind classes
    ],
  theme: {
    extend: {},
  },
  plugins: [],
}

