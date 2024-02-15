"use client";
import {
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
  faCapsules,
  faCheck,
  faChevronLeft,
  faChevronRight,
  faMicroscope,
  faPenAlt,
  faPills,
  faUserDoctor,
  faUserInjured,
  faVolumeHigh,
  faVolumeXmark,
  faXRay,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";

// type Pasien = {
//   noRM: string;
//   nama: string;
//   jenisKelamin: string;
//   umur: number;
//   noIdentitas: string;
//   noReg: string;
//   asuransi: string;
//   penjamin: string;
//   noSEP: string;
//   statusPelayanan: {
//     id: number;
//     kodeStatus: number;
//     name: string;
//     status: string;
//   }[];
//   keterangan: string;
//   statusSelesai: string;
//   alamat: string;
// };

type Pasien = {
  kd_pasien: string;
  no_pengenal: string;
  nama: string;
  tgl_lahir: string;
};

const TabelPasien = ({
  pasien,
  onPressPanggil,
  onPressTunda,
  onPressDetail,
}: {
  pasien: Pasien[];
  onPressPanggil?: (pasien: Pasien) => void;
  onPressTunda?: (pasien: Pasien) => void;
  onPressDetail?: (pasien: Pasien) => void;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [usersPerPage, setUserPerPage] = useState(10);
  // const usersPerPage = 10;

  const handleSearchChange = (event: any) => {
    setCurrentPage(1); // Kembali ke halaman pertama ketika kata kunci pencarian berubah
    setSearchTerm(event.target.value);
  };

  // Filter data berdasarkan kata kunci pencarian
  const filteredUsers = pasien.filter((pasien: Pasien) =>
    pasien.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  const calculateAge = (birthday: any) => {
    // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <div className="mt-6">
      <div className="flex items-end justify-between">
        <div className="flex mt-2 gap-4">
          <div className="px-6 py-2 rounded bg-accent/65">
            <h1 className="text-accent-content text-lg">Total Pasien</h1>
            <div className="flex flex-row gap-4 justify-center items-center">
              <FontAwesomeIcon
                icon={faUserInjured}
                size="xl"
                className="text-accent-content"
              />
              <h1 className="text-accent-content font-bold text-xl">70</h1>
            </div>
          </div>
          <div className="px-6 py-2 rounded bg-success/65">
            <h1 className="text-success-content text-lg">Sudah Selesai</h1>
            <div className="flex flex-row gap-4 justify-center items-center">
              <FontAwesomeIcon
                icon={faCheck}
                size="xl"
                className="text-success-content"
              />
              <FontAwesomeIcon
                icon={faUserInjured}
                size="xl"
                className="text-success-content"
              />
              <h1 className="text-success-content font-bold text-xl">70</h1>
            </div>
          </div>
          <div className="px-6 py-2 rounded bg-error/65">
            <h1 className="text-error-content text-lg">Belum Selesai</h1>
            <div className="flex flex-row gap-4 justify-center items-center">
              <FontAwesomeIcon
                icon={faXmark}
                size="xl"
                className="text-error-content"
              />
              <FontAwesomeIcon
                icon={faUserInjured}
                size="xl"
                className="text-error-content"
              />
              <h1 className="text-error-content font-bold text-xl">70</h1>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            className="input input-bordered text-base-content"
            placeholder="Cari Pasien"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              console.log("Panggil Pasien");
            }}
          >
            Panggil Pasien
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              console.log("Tunda Pasien");
            }}
          >
            Tunda Pasien
          </button>
        </div>
      </div>
      <div className="overflow-x-auto mt-4 text-neutral bg-neutral/5 rounded-xl">
        <table className="table border-collapse">
          {/* head */}
          <thead className="bg-neutral text-neutral-content">
            <tr className="rounded-lg">
              <th>No</th>
              <th>Aksi</th>
              <th>Pasien</th>
              <th>asuransi</th>
              <th>Status Pelayanan</th>
              <th>Status Selesai</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((pasien: Pasien, index) => {
              return (
                <tr className="hover:bg-neutral/10" key={pasien.kd_pasien}>
                  <td className="justify-center text-nowrap">
                    A-00{index + 1}
                  </td>
                  <td>
                    <div className="flex flex-row gap-2">
                      <button
                        className="bg-accent/65 rounded-lg p-2 tooltip"
                        data-tip="Tunda Panggil"
                        onClick={() => {
                          console.log("Tunda Pasien");
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faVolumeXmark}
                          size="lg"
                          className="w-4"
                        />
                      </button>
                      <button
                        className="bg-accent/65 rounded-lg p-2 tooltip"
                        data-tip="Panggil Pasien"
                        onClick={() => {
                          console.log("Panggil Pasien");
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faVolumeHigh}
                          size="lg"
                          className="w-4"
                        />
                      </button>
                      <button
                        className="bg-accent/65 rounded-lg p-2 tooltip"
                        data-tip="Detail Pasien"
                        onClick={() => {
                          onPressDetail && onPressDetail(pasien);
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faPenAlt}
                          size="lg"
                          className="w-4"
                        />
                      </button>
                    </div>
                  </td>
                  <td className=" min-w-80">
                    <span className="font-semibold">{pasien.kd_pasien}</span>
                    <br />
                    <span className="font-semibold text-lg">{pasien.nama}</span>
                    <br />
                    {/* {pasien.jenisKelamin} / {pasien.umur} Tahun */}
                    Laki-Laki / {calculateAge(new Date(pasien.tgl_lahir))} Tahun
                    <br />
                    NIK : {pasien.no_pengenal}
                    <br />
                    Reg : {pasien.no_pengenal}
                    <br />
                    {/* {pasien.alamat} */}
                    Jalan Kenangan No 1
                  </td>
                  <td>
                    Nama Asuransi (BPJS / Umum)
                    <br />
                    Jenis Penjamin (BPJS Kesehatan / BPJS Ketenagakerjaan /
                    Umum)
                    <br />
                    SEP: No SEP
                  </td>
                  <td>
                    <div className="grid grid-cols-3 gap-2">
                      <div
                        key={index}
                        className="bg-success/65 rounded-lg p-2 tooltip"
                        data-tip="Pemeriksaan Dokter - Selesai"
                      >
                        <FontAwesomeIcon
                          icon={faUserDoctor}
                          size="lg"
                          className="text-success-content"
                        />
                      </div>
                      <div
                        key={index}
                        className="bg-success/65 rounded-lg p-2 tooltip"
                        data-tip="Radiologi - Selesai"
                      >
                        <FontAwesomeIcon
                          icon={faXRay}
                          size="lg"
                          className="text-success-content"
                        />
                      </div>
                      <div
                        key={index}
                        className="bg-success/65 rounded-lg p-2 tooltip"
                        data-tip="Laboratorium - Selesai"
                      >
                        <FontAwesomeIcon
                          icon={faMicroscope}
                          size="lg"
                          className="text-success-content"
                        />
                      </div>
                      <div
                        key={index}
                        className="bg-error/65 rounded-lg p-2 tooltip"
                        data-tip="Farmasi - Proses"
                      >
                        <FontAwesomeIcon
                          icon={faPills}
                          size="lg"
                          className="text-error-content"
                        />
                      </div>
                      {/* {pasien.statusPelayanan.map((pasien, index) => {
                      const icon =
                        pasien.id == 1
                          ? faUserDoctor
                          : pasien.id == 2
                          ? faMicroscope
                          : pasien.id == 3
                          ? faPills
                          : pasien.id == 4
                          ? faXRay
                          : faCapsules;

                      return (
                        <div
                          key={index}
                          className={`${
                            pasien.kodeStatus == 1
                              ? "bg-success/65"
                              : "bg-error/65"
                          } rounded-lg p-2 tooltip`}
                          data-tip={`${pasien.name} - ${pasien.status}`}
                        >
                          <FontAwesomeIcon
                            icon={icon}
                            size="lg"
                            className={`${
                              pasien.kodeStatus == 1
                                ? "text-success-content"
                                : "text-error-content"
                            }`}
                          />
                        </div>
                      );
                    })} */}
                    </div>
                  </td>
                  <td
                    className={`max-w-80`}
                    // className={`max-w-80 ${
                    //   isHover == pasien.noIdentitas
                    //     ? "text-wrap"
                    //     : "max-w-80 truncate ..."
                    // }`}
                  >
                    Order Tindakan dari: dr Gunardi, Sp.PD Selesai Order
                    Tindakan dari: dr Gunardi, Sp.PD Selesai Order Tindakan
                    dari: dr Gunardi, Sp.PD Selesai Selesai
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {pasien.length > usersPerPage && (
        <div className="flex items-center gap-6 p-4">
          <div className="w-full grid">
            <div className="join place-content-end rounded-xl">
              <button
                onClick={() =>
                  // setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
                  setCurrentPage(1)
                }
                disabled={currentPage === 1}
                className="join-item btn"
              >
                <FontAwesomeIcon icon={faAnglesLeft} size="sm" />
              </button>
              <button
                onClick={() =>
                  setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
                }
                disabled={currentPage === 1}
                className="join-item btn"
              >
                <FontAwesomeIcon icon={faChevronLeft} size="sm" />
              </button>
              {Array.from(
                { length: Math.ceil(pasien.length / usersPerPage) },
                (_, i) => {
                  // Menampilkan tombol hanya untuk halaman yang berdekatan dengan currentPage
                  if (
                    i + 1 === currentPage ||
                    i + 2 === currentPage ||
                    i === currentPage
                  ) {
                    return (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`join-item btn ${
                          currentPage === i + 1 ? "btn-active" : ""
                        }`}
                      >
                        {i + 1}
                      </button>
                    );
                  }
                  return null;
                }
              )}
              <button
                onClick={() =>
                  setCurrentPage((nextPage) =>
                    Math.min(
                      nextPage + 1,
                      Math.ceil(pasien.length / usersPerPage)
                    )
                  )
                }
                disabled={
                  currentPage === Math.ceil(pasien.length / usersPerPage)
                }
                className="join-item btn"
              >
                <FontAwesomeIcon icon={faChevronRight} size="sm" />
              </button>
              <button
                onClick={() =>
                  setCurrentPage((lastPage) =>
                    Math.ceil(pasien.length / usersPerPage)
                  )
                }
                disabled={
                  currentPage === Math.ceil(pasien.length / usersPerPage)
                }
                className="join-item btn"
              >
                <FontAwesomeIcon icon={faAnglesRight} size="sm" />
              </button>
            </div>
          </div>
          <select
            className="select max-w-xs bg-neutral/20 rounded-lg "
            onChange={(e) => {
              setCurrentPage(1);
              setUserPerPage(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((item, index) => {
              return (
                <option
                  key={index}
                  value={item}
                  className="text-neutral-content"
                  selected={usersPerPage == item ? true : false}
                >
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      )}
    </div>
  );
};

export default TabelPasien;
