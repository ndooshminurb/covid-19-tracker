<h1 align='center'>Vite + React + TypeScript + Eslint + Prettier Template + Mui + Chart.js + React-Query ⚡</h1>

## **Some Features 📋**

Alias Import

![image](https://user-images.githubusercontent.com/70432453/170644457-ede03cca-44e9-4543-94d3-412c9d317063.png)

Hook Warning

![image](https://user-images.githubusercontent.com/70432453/170638708-23a20ffd-156e-494a-84be-b1e1cfdb5c93.png)

Prettier Warning

![image](https://user-images.githubusercontent.com/70432453/170639043-24423ed1-73cc-4730-b270-2acea1ae0c74.png)

Etc...

## **Using 📦**

1. Install Packages

```
npm install
```

2. Start Project

```
npm run dev
```

3. If you using git, delete the existing folder .git after cloning (open `git bash` or other terminal)

```
rm -rf .git
```

## **Deploy Github 📦**

1. Build

```
npm run build
```

2. Add /dist folder into your repo. By running.

```
git add dist -f
```

3. Push to gh-pages

```
git subtree push --prefix dist origin gh-pages
```

## **Options ✍️**

1. Check lint

```
npm run lint
```

2. Fix lint

```
npm run lint:fix
```

3. Check prettier

```
npm run prettier
```

4. Fix prettier

```
npm run prettier:fix
```

5. Fix lint and prettier

```
npm run format
```
