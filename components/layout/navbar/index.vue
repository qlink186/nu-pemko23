<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light container">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Pemko TPI</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink class="nav-link" aria-current="page" to="/"><Icon name="ph:house" /> Beranda</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/berita"><Icon name="fa:newspaper-o" /> Berita</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/gallery"><Icon name="fa:camera" /> Gallery</NuxtLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <Icon name="icomoon-free:folder" /> Data
            </a>
            <ul class="dropdown-menu">
              <li><NuxtLink class="dropdown-item" to="/data/download-area">Download Area</NuxtLink></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <!-- <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
      </div>
    </div>
</nav></template>