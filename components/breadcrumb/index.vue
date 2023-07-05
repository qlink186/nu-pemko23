<template>
  <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
  <ol class="breadcrumb mb-0">
    <li class="breadcrumb-item"><NuxtLink to="/">Beranda </NuxtLink></li>
    <li class="breadcrumb-item"><NuxtLink to="/data">Data</NuxtLink></li>
    <li class="breadcrumb-item"><NuxtLink to="/data/download-area">Download Area</NuxtLink></li>
    <li class="breadcrumb-item" aria-current="page">1</li>
  </ol>
</nav>
</template>

<style lang="scss" scoped>

$hitam:   rgb(39, 41, 42);
$hitam2:  rgb(27, 28, 29);
$abumuda1:  lighten($hitam, 15);
$abumuda2:  lighten($hitam, 40);
$abumuda3:  lighten($hitam, 70);
$abumuda4:  lighten($hitam, 80);
// $biru:    rgb(31, 70, 144);
$biru:    rgb(31, 70, 144);
$biru2:   rgb(23, 70, 162);
// $oren:    rgb(243,171,28);
$oren:    rgb(255, 178, 0);
$hijau:   rgb(27, 156, 133);
$merah:   rgb(194, 16, 16);
$pink:    rgb(154, 22, 99);
$warnadefault: $biru;
$warnasecondary: $oren;
.breadcrumb{
  background: $abumuda4;
  padding: .5rem;
  &-item{
    font-size: .7rem;
    a{
      color: $abumuda2;
      text-decoration: none;
      transition: all .5s ease-out;
      -moz-transition: all .5s ease-out;
      -webkit-transition: all .5s ease-out;
      -o-transition: all .5s ease-out;
      &:hover{
        color: $warnasecondary;
      }
    }
    &:last-child{
      display: block;
      width: 25rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: $warnadefault;
      font-style: italic;
    }
  }
}
</style>