# Computer Science Course Assistant Grading Application

## Introduction

This document outlines the requirements and development milestones for a desktop platform to assist Computer Science course TAs. The application will facilitate the downloading, uncompressing, and running of student assignments, starting with Django projects.

## Requirements

### Software and Tools

-   Node.js and npm
-   Electron.js
-   Docker
-   Monaco Editor
-   Python (for Django)
-   Additional language environments (Node.js, Java, C++, etc.)
-   Git and GitHub (for version control)
-   React
-   Vite
-   electron-vite

### Functionality

-   [ ] User Interface for managing assignments
-   [ ] Integration with Monaco Editor for code display and editing
-   [ ] Docker integration for running code in isolated environments
-   [ ] Support for Django projects
-   [ ] Expandable to support other languages and frameworks
-   [ ] Security measures for safe execution of code
-   [ ] Canvas LMS API integration for downloading submissions

## Milestones

### Milestone 1: Project Setup

-   [ ] Initialize Electron.js application
-   [ ] Set up basic project structure (folders, basic files)
-   [x] Version control setup with Git

### Milestone 2: User Interface Development

-   [ ] Design and implement the main UI layout
-   [ ] Integrate Monaco Editor
-   [ ] Implement file management system (download, unzip, etc.)

### Milestone 3: Docker Integration

-   [ ] Create Dockerfile for Django environment
-   [ ] Implement Docker container management in Electron app
-   [ ] Test running Django projects in Docker

### Milestone 4: Canvas LMS API Integration

-   [ ] Research Canvas LMS API for submission downloads
-   [ ] Implement API integration in Electron app
-   [ ] Test downloading and unzipping submissions

### Milestone 5: Additional Language Support

-   [ ] Add Docker environments for Node.js, Java, C++, etc.
-   [ ] Test running projects in these environments

### Milestone 6: Security and Testing

-   [ ] Implement security measures for code execution
-   [ ] Thorough testing of all features
-   [ ] Bug fixing and optimization

### Milestone 7: Documentation and Deployment

-   [ ] Create user documentation
-   [ ] Package and deploy the application for use

## Canvas LMS API Integration

To access the Canvas backend API for downloading student submissions, you will need to:

1. **Obtain API Access**: Register for developer access on Canvas LMS to get an API key.
2. **Understand the API**: Familiarize yourself with the Canvas LMS API endpoints, particularly those related to assignments and submissions.
3. **Implement API Calls**: In your Electron app, implement functionality to authenticate with the Canvas API and retrieve submission data.
4. **Handle File Downloads**: Implement logic to download and manage zip files of student submissions.

### References

-   Canvas LMS API Documentation: [Link to Canvas API Docs](https://canvas.instructure.com/doc/api/)

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

## Conclusion

This document outlines the key requirements and milestones for the development of the Computer Science Course Assistant Application. Each milestone represents a significant step towards the completion of the project.

---

[Kade Angell](mailto:kade.angell@usu.edu), supervised by [Joseph Ditton](mailto:joseph.ditton@usu.edu) <br />
document generated by ChatGPT
