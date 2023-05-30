<template>
  <!-- Bottom Navbar -->
<nav class="navbar navbar-dark bg-dark navbar-expand fixed-bottom d-md-none d-lg-none d-xl-none p-0">
    <ul class="navbar-nav nav-justified w-100">
        <li class="nav-item">
            <NuxtLink to="/" class="nav-link text-center">
              <Icon name="ph:house" />
                <span class="small d-block">Beranda</span>
            </NuxtLink>
        </li>
        <li class="nav-item dropup">
            <a href="#" class="nav-link text-center" role="button" id="dropdownMenuProfile" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
              <Icon name="icomoon-free:folder" />
                <span class="small d-block">Profile</span>
            </a>
            <!-- Dropup menu for profile -->
            <div class="dropdown-menu" aria-labelledby="dropdownMenuProfile">
                <NuxtLink class="dropdown-item" to="/profil/selayang-pandang">Selayang Pandang</NuxtLink>
                <a class="dropdown-item" href="#">Notification</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Logout</a>
            </div>
        </li>
        <li class="nav-item">
            <NuxtLink to="/berita" class="nav-link text-center">
              <Icon name="fa:newspaper-o" />
              <span class="small d-block">Berita</span>
            </NuxtLink>
        </li>
        <li class="nav-item">
            <NuxtLink to="/gallery" class="nav-link text-center">
              <Icon name="fa:camera" />
              <span class="small d-block">Gallery</span>
            </NuxtLink>
        </li>
        <li class="nav-item">
            <NuxtLink to="/pengumuman" class="nav-link text-center">
              <Icon name="ic:twotone-fiber-new" />
              <span class="small d-block">Pengumuman</span>
            </NuxtLink>
        </li>
        <li class="nav-item dropup">
            <a href="#" class="nav-link text-center" role="button" id="dropdownMenuData" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true" >
              <Icon name="icomoon-free:folder" />
                <span class="small d-block">Data</span>
            </a>
            <!-- Dropup menu for profile -->
            <div class="dropdown-menu" aria-labelledby="dropdownMenuData">
              <NuxtLink class="dropdown-item" to="/data/download-area">Download Area</NuxtLink>
                <a class="dropdown-item" href="#">Notification</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Logout</a>
            </div>
        </li>
    </ul>
</nav>
</template>