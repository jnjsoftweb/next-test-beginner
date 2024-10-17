## material-icon-theme

- https://github.com/material-extensions/vscode-material-icon-theme


> `project.code-workspace`

```json
{
  "material-icon-theme.folders.associations": {
    "_containers": "Container",
    "_components": "Components",
    "_constants": "Constant",
    "_hooks": "Hook",
    "_service": "Api",
    "_store": "Container",
    "_types": "Typescript",
    "_utils": "Utils",
    "(pages)": "Routes",
    "(admin)": "Admin",
    "(auth)": "Auth",
    "(markdown)": "Markdown",
    "(posts)": "Post",
    "(test)": "Test",
    "(_custom)": "Custom",
  }
}
```

## editor

> `.vscode/settings.json`

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "prettier.configPath": ".prettierrc",
  "[markdown]": {
    "editor.formatOnSave": false,
    "editor.wordWrap": "off",
    "files.trimTrailingWhitespace": false,
    "editor.defaultFormatter": null
  },
  "[powershell]": {
    "editor.tabSize": 2,
    "editor.insertSpaces": true,
    "editor.formatOnSave": true,
    "files.trimTrailingWhitespace": true
  },
  "material-icon-theme.folders.associations": {
    "domain": "container"
  }
}
```
