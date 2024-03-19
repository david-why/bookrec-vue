# bookrec-vue

This is the website Book Recommendations, wrote for my high school BASIS International School Nanjing. You can find the website here: https://binj.webook.club

## Building this website

Unfortunately, you can't build this website directly from source. Two key files are missing from the `public` folder: `data.json` and `books.json`, as well as the entire `covers` folder (because it is too large). If you obtain these files and place them there though, you can build the website by running:

```sh
npm install
npm run build
```

The `dist` folder will then contain your built website.
