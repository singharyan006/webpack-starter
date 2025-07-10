# ⚡ Webpack Starter Template

A minimal, production-ready Webpack 5 starter template with Babel, CSS loader, asset support, and a development server — perfect for vanilla JavaScript projects.

![Code Style: ESLint](https://img.shields.io/badge/code_style-eslint-blue)
![Code Formatter: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4)
![License: MIT](https://img.shields.io/badge/license-MIT-green)

---

## 🚀 Features

- ✅ ES6+ support with Babel
- ✅ Live reload with Webpack Dev Server
- ✅ CSS and static asset bundling
- ✅ Linting with ESLint + Flat Config
- ✅ Auto-formatting with Prettier
- ✅ Node.js ESM-ready config files
- ✅ Clean, production-ready build
- ✅ Simple and extensible setup

---

## 📁 Folder Structure

```
webpack-template/
├── dist/
├── src/
│ ├── index.html
│ ├── index.js
│ └── style.css
├── .babelrc
├── .prettierrc
├── .prettierignore
├── .gitignore
├── eslint.config.js
├── package.json
├── webpack.config.js
```

---

## 🛠️ Getting Started

### 1. Clone this repo

```bash
git clone https://github.com/singharyan006/webpack-template.git
cd webpack-template
```

### 2. Install dependencies

```
npm install
```
### 3. Start development server

```
npm run start
```
- Run on: http://localhost:8080

### 4. Build for production

```
npm run build
```
- Ouputs files into dist/

---

## 🧼 Linting & Formatting

Keep your code clean and consistent with ESLint and Prettier.

### 🧪 Lint JavaScript (via ESLint)

```
npm run lint
```
- Uses modern [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new)
- `eslint.config.js` is fully configured for:
  - ✅ ES modules (`"type": "module"`)
  - ✅ Browser JavaScript (for code inside `src/`)
  - ✅ Node.js ESM config files (like `webpack.config.js`)
### 🎨 Format Code (via Prettier)
```
npm run format
```
- Formats all `.js`, `.css`, `.html`, and `.json` files inside `src/`
- Uses rules defined in `.prettierrc`

---

## 🧰 Built With
- Webpack 5
- Babel
- HTML Webpack Plugin
- ESLint with Flat Config
- Prettier

---

## 📄 License
Licensed under the [MIT License](LICENSE).
