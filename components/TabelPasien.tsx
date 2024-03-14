"use client";
import {
  PasienType,
  StatusPelayananType,
} from "@/app/home/pelayanan/[unit]/[list]/page";
import {
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
import { useState } from "react";

const TabelPasien = ({
  listPasien,
  onPressPanggil,
  onPressTunda,
  onPressDetail,
}: {
  listPasien: PasienType[];
  onPressPanggil?: (pasien: PasienType) => void;
  onPressTunda?: (pasien: PasienType) => void;
  onPressDetail?: (pasien: PasienType) => void;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [usersPerPage, setUserPerPage] = useState(10);

  const handleSearchChange = (event: any) => {
    setCurrentPage(1); // Kembali ke halaman pertama ketika kata kunci pencarian berubah
    setSearchTerm(event.target.value);
  };
  const totalPasien = listPasien.length;
  const pasienSelesai = listPasien.filter((data: PasienType) => {
    return data.status.kd_status.includes("1");
  }).length;
  const pasienBelumSelesai = listPasien.filter((data: PasienType) => {
    return data.status.kd_status.includes("0");
  }).length;

  // Filter data berdasarkan kata kunci pencarian
  const filteredUsers = listPasien.filter((data: PasienType) => {
    return data.pasien.nama.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  return (
    <div className="mt-6">
      <div className="flex items-end justify-between">
        <div className="flex mt-2 gap-4">
          <div className="px-6 py-2 bg-accent/65 rounded-xl">
            <h1 className="text-accent-content text-lg">Total Pasien</h1>
            <div className="flex flex-row gap-4 justify-center items-center">
              <FontAwesomeIcon
                icon={faUserInjured}
                size="xl"
                className="text-accent-content"
              />
              <h1 className="text-accent-content font-bold text-xl">
                {totalPasien}
              </h1>
            </div>
          </div>
          <div className="px-6 py-2 bg-success/65 rounded-xl">
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
              <h1 className="text-success-content font-bold text-xl">
                {pasienSelesai}
              </h1>
            </div>
          </div>
          <div className="px-6 py-d bg-error/65 rounded-xl">
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
              <h1 className="text-error-content font-bold text-xl">
                {pasienBelumSelesai}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex gap-4 w-1/4">
          <input
            type="text"
            className="input input-bordered text-base-content rounded-xl w-full"
            placeholder="Cari Pasien"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {/* <button
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
          </button> */}
        </div>
      </div>
      <div className="overflow-x-auto mt-4 text-neutral bg-neutral/5 rounded-xl">
        <table className="table border-collapse">
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
            {currentUsers
              .sort((a: PasienType, b: PasienType) =>
                a.antrian.no_antrian.localeCompare(
                  b.antrian.no_antrian,
                  undefined,
                  { numeric: true }
                )
              )
              .map((data: PasienType, index) => {
                return (
                  <tr className="hover:bg-neutral/10">
                    <td className="justify-center text-nowrap">
                      {data.antrian.no_antrian}
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
                            onPressDetail && onPressDetail(data);
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
                      <span className="font-semibold">
                        {data.pasien.kd_pasien}
                      </span>
                      <br />
                      <span className="font-semibold text-lg">
                        {data.pasien.nama}
                      </span>
                      <br />
                      Laki-Laki / {data.pasien.usia.usia_formatted}
                      <br />
                      NIK : {data.pasien.nik}
                      <br />
                      Reg : {data.antrian.kode_booking_bpjs}
                      <br />
                      {data.pasien.alamat}
                    </td>
                    <td>
                      {data.asuransi.penjamin}
                      <br />
                      {data.asuransi.asuransi}
                      <br />
                      {data.asuransi.no_sep}
                    </td>
                    <td>
                      <div className="grid grid-cols-3 gap-2">
                        {data.status_pelayanan.map((status, index) => {
                          return (
                            <div
                              key={index}
                              className={`${
                                status.kode_status == 1
                                  ? "bg-success/65"
                                  : "bg-error/65"
                              } rounded-lg p-2 tooltip`}
                              data-tip={`${status.name} - ${status.status}`}
                            >
                              <FontAwesomeIcon
                                icon={
                                  status.id == 1
                                    ? faUserDoctor
                                    : status.id == 2
                                    ? faMicroscope
                                    : status.id == 3
                                    ? faPills
                                    : status.id == 4
                                    ? faXRay
                                    : faCapsules
                                }
                                size="lg"
                                className={`${
                                  status.kode_status == 1
                                    ? "text-success-content"
                                    : "text-error-content"
                                }`}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </td>
                    <td className={`max-w-80`}>{data.status.deskripsi}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {listPasien.length > usersPerPage && (
        <div className="flex items-center gap-6 p-4">
          <div className="w-full grid">
            <div className="join place-content-end rounded-xl">
              <button
                onClick={() => setCurrentPage(1)}
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
                { length: Math.ceil(listPasien.length / usersPerPage) },
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
                      Math.ceil(listPasien.length / usersPerPage)
                    )
                  )
                }
                disabled={
                  currentPage === Math.ceil(listPasien.length / usersPerPage)
                }
                className="join-item btn"
              >
                <FontAwesomeIcon icon={faChevronRight} size="sm" />
              </button>
              <button
                onClick={() =>
                  setCurrentPage((lastPage) =>
                    Math.ceil(listPasien.length / usersPerPage)
                  )
                }
                disabled={
                  currentPage === Math.ceil(listPasien.length / usersPerPage)
                }
                className="join-item btn"
              >
                <FontAwesomeIcon icon={faAnglesRight} size="sm" />
              </button>
            </div>
          </div>
          <select
            className="select max-w-xs bg-neutral/20 rounded-lg "
            defaultValue="10"
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
