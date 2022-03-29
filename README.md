<div id="top"></div>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
---

<p align="center"><b> 🏆 HooHacks 2022 Best Art and Gaming Hack 💰🔑 </b></p>

---
<div align="center">
  <a href="https://github.com/hwuiwon/artchive">
    <img src="assets/logo_a.png" alt="Logo" width="90" height="90">
  </a>

  <h3 align="center">Artchive</h3>

  <p align="center">
    Democratize Art Showcase for Everyone
    <br />
    (Art + Archive)
    <br />
    <br />
    <a href="https://github.com/hwuiwon/artchive"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://www.artchive.tech">View Demo</a>
    ·
    <a href="https://github.com/hwuiwon/artchive/issues">Report Bug</a>
    ·
    <a href="https://github.com/hwuiwon/artchive/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

**Bring attention to lesser known artistic communities**

Many new and existing artists are deliberately working to express their art
universe and publicize their work. However, it’s always challenging to catch
people’s attention, and only a few succeed. To address and solve this problem,
we aim to bring attention to lesser-known artists and artistic communities
through giving equal opportunities to showcase everyone's artwork and even
funding them directly through our platform Artchive.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- Frontend
  - [React](https://reactjs.org/)
  - [Sass](https://sass-lang.com/)

- Backend
  - [Google Cloud Platform](https://cloud.google.com/)
  - [Google Cloud API Gateway](https://cloud.google.com/api-gateway)
  - [Google Cloud Functions](https://cloud.google.com/functions)
- Hosting
  - [Google Cloud App Engine](https://cloud.google.com/appengine)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- [npm](https://www.npmjs.com/)
  ```sh
  npm install -g npm@latest
  ```

### Installation

#### Frontend

1. Clone the repo
   ```sh
   git clone https://github.com/hwuiwon/artchive
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start your own local server and run in web browser
   ```sh
   npm start
   ```

#### Backend

1. Clone the repo && Go into backend directory
   ```sh
   git clone https://github.com/hwuiwon/artchive
   cd backend
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start your own local server serving cloud functions
   ```sh
   npm start
   ```
   Make http request to [http://localhost:8080/](http://localhost:8080/)

4. When the api is ready to be deployed, run
   ```sh
   npm run deploy:api
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- FEATURES -->

## Features
Artchive has 2 pages.

The main page is a gallery of the latest artworks by artists with diverse
backgrounds and histories. Every artwork shown is randomly ordered so that
every artist can have an equal opportunity to be showcased. The artworks are
scraped from other websites that has trending artworks. We intentionally left
out all of the information except the artwork itself, which might help identify
the artist to prevent people from having any assumptions before looking at the
information of the art by clicking it.

The information page shows the artwork and its descriptions. People can see
which artist created this artwork and see other artwork created by the same
artist that may interest them. This way, artists have a chance to feature their
other artworks and concepts that they have been working on. On the other hand,
the audience can find out the genres that they are potentially interested in
and find any other existing artworks that may interest them, like Spotify’s
song recommendation algorithm.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Design App structure & workflow
- [x] Frontend (React & Sass)
  - [x] Main
    - [x] Home Screen
    - [x] Information
    - [x] Related Artworks
- [x] Backend (GCP)
  - [x] API Gateway
  - [x] Cloud Functions
- [x] Hosting (Google Cloud App Engine)

See the [open issues](https://github.com/hwuiwon/artchive/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

- Hwuiwon Kim - [hueyk](http://linkedin.com/in/hueyk/) - hkim@gatech.edu
- Sehoan Choi - [sehoanchoi](https://www.linkedin.com/in/sehoanchoi/) - sehoanchoi0124@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/hwuiwon/artchive.svg?style=for-the-badge
[contributors-url]: https://github.com/hwuiwon/artchive/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/hwuiwon/artchive.svg?style=for-the-badge
[forks-url]: https://github.com/hwuiwon/artchive/network/members
[stars-shield]: https://img.shields.io/github/stars/hwuiwon/artchive.svg?style=for-the-badge
[stars-url]: https://github.com/hwuiwon/artchive/stargazers
[issues-shield]: https://img.shields.io/github/issues/hwuiwon/artchive?style=for-the-badge
[issues-url]: https://github.com/hwuiwon/artchive/issues
[license-shield]: https://img.shields.io/badge/license-MIT-green?style=for-the-badge
[license-url]: https://github.com/hwuiwon/artchive/blob/main/LICENSE.md
[product-screenshot]: assets/artchive_showcase.jpeg
