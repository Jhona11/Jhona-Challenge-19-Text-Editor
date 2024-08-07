# PWA Text Editor
Week 19 Challenge

## Table of Contents

- [Description](#description)
- [Live-URL](#live-url)
- [Installation](#installation)
- [Usage-Information](#usage-information)
- [Contribution-Guidelines](#contribution-guidelines)

## Description

This application was specifically developed to showcase and enhance skills in progressive web application development. Its main goal was to gain a deeper understanding of the inner workings of the React JavaScript library. The application focuses on four key areas:
* Configuration: Setting up the webpack.config.js file with essential workbox plugins for service worker and manifest files, along with CSS and babel loader for compatibility with older code.
* Offline functionality: Implementing asset caching in the src-sw.js file to enable the application to work offline.
* Database integration: Configuring the database to facilitate data management, including addition, updating, and retrieval from the IndexedDB.
* User-friendly installation: Adding event handlers to the install button for easy installation on personal application stacks and offline usage.

## Live URL

Live Application on Render: https://jhona-challenge-19-text-editor.onrender.com

## Installation

Users can view and utilize the application through the use of the browser by visiting the deployed application at https://jhona-challenge-19-text-editor.onrender.com.

Viewing the application in the browser will also give users the ability to download the application allowing it to be used offline.

To make any further additions, start by cloning the repo in the command line git clone https://github.com/Jhona11/Jhona-Challenge-19-Text-Editor.git, or forking the repo.

## Usage Information

Usage of this application is very intuitive, just visit the live URL () and start adding notes right away! Users will also notice an install button in the nav bar allowing for the application to be downloaded and used offline. Saving of notes occurs automatically through the IndexedDB; the only thing required is for the user to click out of the window and notes will be persisted whether using the application online or offline.