# Responova

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/azandabot/Responova/blob/main/LICENSE.md)

> Responova is a powerful CLI tool for responsive design testing. It simplifies the process of testing how your website looks on different devices and screen sizes.

![Responova Demo](demo.gif)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Interactive command-line interface for testing responsive design.
- Choose from a range of device viewports to test.
- Automatically capture and save screenshots of your website for comparison.
- Easily integrate into your development workflow.

## Installation

```bash
npm install -g responova
```

## Usage
-----

```bash
responova --url https://example.com --devices "iPhone 11, iPad Pro" --output-dir screenshots
```
### Options

-   `--url`: The URL of the website you want to test.
-   `--devices`: Specify the devices or screen sizes you want to test (comma-separated).
-   `--output-dir`: Set the directory where screenshots will be saved.

Contributing
------------

We welcome contributions from the community. To get started, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bugfix: `git checkout -b feature/awesome-feature`.
3.  Make your changes and commit them: `git commit -m 'Add awesome feature'`.
4.  Push to the branch: `git push origin feature/awesome-feature`.
5.  Create a pull request.

Please read our [Contribution Guidelines] for more details.

License
-------

This project is licensed under the [MIT License].