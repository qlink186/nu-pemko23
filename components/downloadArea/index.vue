<template>
  <div class="table-responsive">
    <table class="table table-borderless align-middle tb_down">
      <thead class="tb_down_head">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Deskripsi File</th>
          <th scope="col">Tanggal File</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody class="tb_down_body">
        <tr class="tb_down_body_row">
          <td class="tb_down_body_row_ico"><img src="~/assets/img/icon/format/pdf.svg" class="img-fluid mx-auto d-block" alt="format"></td>
          <td class="tb_down_body_row_desk">
            <div class="tb_down_body_row_desk_namafile">Pengumuman Kelulusan Seleksi Administrasi Pemilihan Calon Anggota Badan Penyelesaian Sengketa Konsumen (BPSK) Kota Tanjungpinang Periode Tahun 2023 - 2028</div>
            <div class="tb_down_body_row_desk_meta">
              <div class="tb_down_body_row_desk_meta_desk">Nomor : 539/293/PANSEL/1.2.01/2023 & 539/294/PANSEL/1.2.01/2023</div>
              <span class="tb_down_body_row_desk_meta_opd pe-2">Diskominfo</span>
              <span class="tb_down_body_row_desk_meta_jenisdok pe-2">Pengumuman</span>
              <span class="tb_down_body_row_desk_meta_jenisinf pe-2">Serta Merta</span>
            </div>
          </td>
          <td class="tb_down_body_row_tgl">12 Desember 2023</td>
          <td class="tb_down_body_row_aksi">
            <div class="d-grid gap-2">
              <button class="btn btn-primary btn-sm" type="button">Download</button>
              <button class="btn btn-warning btn-sm" type="button">Selengkapnya</button>
            </div>
          </td>
        </tr>
        <tr class="tb_down_body_row">
          <td class="tb_down_body_row_ico"><img src="~/assets/img/icon/format/pdf.svg" class="img-fluid mx-auto d-block" alt="format"></td>
          <td class="tb_down_body_row_desk">
            <div class="tb_down_body_row_desk_namafile">Pengumuman Kelulusan Seleksi Administrasi Pemilihan Calon Anggota Badan Penyelesaian Sengketa Konsumen (BPSK) Kota Tanjungpinang Periode Tahun 2023 - 2028</div>
            <div class="tb_down_body_row_desk_meta">
              <div class="tb_down_body_row_desk_meta_desk">Nomor : 539/293/PANSEL/1.2.01/2023 & 539/294/PANSEL/1.2.01/2023</div>
              <span class="tb_down_body_row_desk_meta_opd pe-2">Diskominfo</span>
              <span class="tb_down_body_row_desk_meta_jenisdok pe-2">Pengumuman</span>
              <span class="tb_down_body_row_desk_meta_jenisinf pe-2">Serta Merta</span>
            </div>
          </td>
          <td class="tb_down_body_row_tgl">12 Desember 2023</td>
          <td class="tb_down_body_row_aksi">
            <div class="d-grid gap-2">
              <button class="btn btn-primary btn-sm" type="button">Download</button>
              <button class="btn btn-warning btn-sm" type="button">Selengkapnya</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
$hitam:   rgb(39, 41, 42);
$hitam2:  rgb(27, 28, 29);
$abumuda1:  lighten($hitam, 15);
$abumuda2:  lighten($hitam, 40);
$abumuda3:  lighten($hitam, 70);
$abumuda4:  lighten($hitam, 80);
$biru:    rgb(44,44,100);
$biru2:   rgb(23, 70, 162);
$oren:    rgb(243,171,28);
$hijau:   rgb(27, 156, 133);
$merah:   rgb(194, 16, 16);
$pink:    rgb(154, 22, 99);
$warnadefault: $biru;
$warnasecondary: $oren;

.tb{
  
  &_down{
    &_head{
    }
    &_body{
      &_row{
        td{
          &:first-child{
            background-color: red;
            border-top-left-radius: .7rem;
            border-bottom-left-radius: .7rem;
          }
          &:last-child{
            background-color: red;
            border-top-right-radius: .7rem;
            border-bottom-right-radius: .7rem;
          }
        }
        &_ico,
        &_desk,
        &_tgl,
        &_aksi{
          padding-top: .5rem;
          padding-bottom: .5rem;
          transition: all .5s ease-out;
          -moz-transition: all .5s ease-out;
          -webkit-transition: all .5s ease-out;
          -o-transition: all .5s ease-out;
        }
        &_ico{
          width: 4rem;
        }
        &_desk{
          &_namafile{
            font-weight: 600;
            max-width: 40rem;
            transition: all .5s ease-out;
            -moz-transition: all .5s ease-out;
            -webkit-transition: all .5s ease-out;
            -o-transition: all .5s ease-out;
          }
          &_meta{
            &_desk,
            &_opd,
            &_jenisdok,
            &_jenisinf{
              color: $abumuda2;
              transition: all .5s ease-out;
              -moz-transition: all .5s ease-out;
              -webkit-transition: all .5s ease-out;
              -o-transition: all .5s ease-out;
            }
            &_desk{
            }
            &_opd{
            }
            &_jenisdok{
            }
            &_jenisinf{
            }
          }
        }
        &_tgl{
          width: 7.5rem;
        }
        &_aksi{
          width: 7rem;
        }
        &:hover{
          .tb{
            &_down{
              &_body{
                &_row{
                  background-color: $abumuda4;
                  &_ico{
                  }
                  &_desk{ 
                    &_namafile{
                      color: $warnasecondary;
                    }
                    &_meta{
                      &_desk{
                      }
                      &_opd{
                        color: red;
                      }
                      &_jenisdok{
                      }
                      &_jenisinf{
                      }
                    }
                  }
                  &_tgl{
                  }
                  &_aksi{
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>