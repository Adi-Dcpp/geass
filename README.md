# Geass

Security and code hygiene gate for Git repositories.

Geass is a CLI tool that helps developers detect security risks and common code hygiene issues before code is pushed to a remote repository.

## Features

- Secret detection
- Token and credential scanning
- Environment file detection
- Debug statement detection
- Git hook integration
- JSON and Markdown reporting

## Installation

```bash
npm install -g geass
```

## Usage

```bash
geass scan
```

## Development

```bash
npm install
npm run check
npm run build
npm run start -- scan
```

## Status

Early development. The CLI foundation and command routing are implemented. Repository scanning functionality is under development.

## License

MIT