# Responova

> Responova is a powerful CLI tool for responsive design testing. It simplifies the process of testing how your website looks on different devices and screen sizes.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

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
