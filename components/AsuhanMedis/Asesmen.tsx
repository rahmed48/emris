import { faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import PainScale from "../Items/PainScale";
import PainScale2 from "../Items/PainScale";
import GambarManusia from "../Items/Tes";

type NumberType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

interface CheckboxState {
  name: string;
  isChecked: boolean;
}

const Asesmen = () => {
  // useEffect(() => {
  //   window.addEventListener("beforeunload", function (e) {
  //     e.preventDefault();
  //     e.returnValue = "";
  //   });
  // }, []);
  const backClick = () => {
    setChildren(<ListAsesmen onClick={lihatDetail} />);
  };

  const lihatDetail = () => {
    setChildren(<DetailAsesmen backClick={backClick} />);
  };
  const [children, setChildren] = useState<React.ReactNode>(
    <ListAsesmen onClick={lihatDetail} />
  );

  return <div>{children}</div>;
};

export default Asesmen;

const ListAsesmen = ({ onClick }: { onClick: () => void }) => {
  return (
    <div>
      <div className="bg-neutral-content p-4 rounded-2xl shadow-md">
        <h1 className="text-xl font-bold text-neutral">Semua PPA</h1>
      </div>
      <div className="divider" />
      <div className="grid grid-cols-2 gap-4 text-neutral">
        <div className="shadow-xl rounded-2xl outline-2 outline outline-neutral/5 p-2">
          <div className="flex flex-row">
            <div className="basis-1/5">
              <div className="justify-center items-center">
                <div className="avatar">
                  <div className="w-full rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <h1 className="text-neutral text-sm text-center text-nowrap">
                  03
                </h1>
                <h1 className="text-neutral text-sm text-center text-nowrap">
                  Januari
                </h1>
                <h1 className="text-neutral text-sm text-center text-nowrap">
                  2024
                </h1>
              </div>
            </div>
            <div className="pl-2 overflow-hidden">
              <h1 className="text-neutral font-semibold truncate">
                Asesmen Awal Keperawatan-Umum/Dewasa
              </h1>
              <div className="flex-1 flex-row flex justify-between">
                <h1 className="text-neutral font-light text-sm truncate">
                  Ns. Aleyndra, S.Kep
                </h1>
                <h1 className="text-neutral font-light text-sm truncate">
                  Perawat Klinik Internis
                </h1>
              </div>
              <h1 className="text-neutral font-light text-sm">
                Pasien datang dengan keluhan nyeri perut sebelah kanan. TD:
                100/90 mmHg, RR: 100 x/mnt, Suhu: -
              </h1>
              <div className="grid grid-cols-3 gap-6 mt-2">
                <button
                  className="btn btn-sm btn-success rounded-2xl"
                  onClick={onClick}
                >
                  Lihat
                </button>
                <button
                  className="btn btn-sm btn-info rounded-2xl"
                  onClick={onClick}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-error rounded-2xl"
                  onClick={onClick}
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl outline-2 outline outline-neutral/5 p-2 bg-neutral/15">
          <div className="flex flex-row">
            <div className="basis-1/5">
              <div className="justify-center items-center">
                <div className="avatar">
                  <div className="w-full rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <h1 className="text-neutral text-sm text-center text-nowrap">
                  03
                </h1>
                <h1 className="text-neutral text-sm text-center text-nowrap">
                  Januari
                </h1>
                <h1 className="text-neutral text-sm text-center text-nowrap">
                  2024
                </h1>
              </div>
            </div>
            <div className="pl-2 overflow-hidden">
              <h1 className="text-neutral font-semibold truncate">
                Asesmen Awal Keperawatan-Umum/Dewasa
              </h1>
              <div className="flex-1 flex-row flex justify-between">
                <h1 className="text-neutral font-light text-sm truncate">
                  Ns. Aleyndra, S.Kep
                </h1>
                <h1 className="text-neutral font-light text-sm truncate">
                  Perawat Klinik Internis
                </h1>
              </div>
              <h1 className="text-neutral font-light text-sm">
                Pasien datang dengan keluhan nyeri perut sebelah kanan. TD:
                100/90 mmHg, RR: 100 x/mnt, Suhu: -
              </h1>
              <div className="grid grid-cols-3 gap-6 mt-2">
                <button
                  className="btn btn-sm btn-success rounded-2xl"
                  onClick={onClick}
                >
                  Lihat
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl outline-2 outline outline-neutral/5 p-2 bg-neutral/15">
          <div className="flex flex-row">
            <div className="basis-1/5">
              <div className="justify-center items-center">
                <div className="avatar">
                  <div className="w-full rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <h1 className="text-neutral text-sm text-center text-nowrap">
                  03
                </h1>
                <h1 className="text-neutral text-sm text-center text-nowrap">
                  Januari
                </h1>
                <h1 className="text-neutral text-sm text-center text-nowrap">
                  2024
                </h1>
              </div>
            </div>
            <div className="pl-2 overflow-hidden">
              <h1 className="text-neutral font-semibold truncate">
                Asesmen Awal Keperawatan-Umum/Dewasa
              </h1>
              <div className="flex-1 flex-row flex justify-between">
                <h1 className="text-neutral font-light text-sm truncate">
                  Ns. Aleyndra, S.Kep
                </h1>
                <h1 className="text-neutral font-light text-sm truncate">
                  Perawat Klinik Internis
                </h1>
              </div>
              <h1 className="text-neutral font-light text-sm">
                Pasien datang dengan keluhan nyeri perut sebelah kanan. TD:
                100/90 mmHg, RR: 100 x/mnt, Suhu: -
              </h1>
              <div className="grid grid-cols-3 gap-6 mt-2">
                <button
                  className="btn btn-sm btn-success rounded-2xl"
                  onClick={onClick}
                >
                  Lihat
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl outline-2 outline outline-neutral/5 p-2 bg-neutral/15">
          <div className="flex flex-row">
            <div className="basis-1/5">
              <div className="justify-center items-center">
                <div className="avatar">
                  <div className="w-full rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <h1 className="text-neutral text-sm text-center text-nowrap">
                  03
                </h1>
                <h1 className="text-neutral text-sm text-center text-nowrap">
                  Januari
                </h1>
                <h1 className="text-neutral text-sm text-center text-nowrap">
                  2024
                </h1>
              </div>
            </div>
            <div className="pl-2 overflow-hidden">
              <h1 className="text-neutral font-semibold truncate">
                Asesmen Awal Keperawatan-Umum/Dewasa
              </h1>
              <div className="flex-1 flex-row flex justify-between">
                <h1 className="text-neutral font-light text-sm truncate">
                  Ns. Aleyndra, S.Kep
                </h1>
                <h1 className="text-neutral font-light text-sm truncate">
                  Perawat Klinik Internis
                </h1>
              </div>
              <h1 className="text-neutral font-light text-sm">
                Pasien datang dengan keluhan nyeri perut sebelah kanan. TD:
                100/90 mmHg, RR: 100 x/mnt, Suhu: -
              </h1>
              <div className="grid grid-cols-3 gap-6 mt-2">
                <button
                  className="btn btn-sm btn-success rounded-2xl"
                  onClick={onClick}
                >
                  Lihat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailAsesmen = ({ backClick }: { backClick: () => void }) => {
  const [keluhanUtama, setKeluhanUtama] = useState<string>("");

  const [skalaNyeri, setSkalaNyeri] = useState(0 as NumberType);
  const [color, setColor] = useState("bg-[#649f44]");
  const [text, setText] = useState("No Pain");

  return (
    <div>
      <div className="bg-neutral-content p-4 rounded-2xl shadow-md flex justify-between items-center">
        <div className="flex flex-row gap-4 items-center">
          <button className="btn btn-sm btn-neutral" onClick={backClick}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <div className="">
            <h1 className="text-sm text-neutral">
              Catatan Perkembangan Pasien Terintegrasi
            </h1>
            <h1 className="text-sm text-neutral">
              PPA: Ns. Aleyndra, S.Kep | 03-Apr-2024 10:45
            </h1>
          </div>
        </div>
      </div>
      <div className="divider" />
      <form>
        <div className="grid-cols-2 grid gap-2 text-neutral">
          <div className="gap-2 grid-cols-1 grid">
            <div className="bg-neutral-content p-2 rounded-xl shadow-md"></div>
            <div className="bg-neutral-content p-2 rounded-xl shadow-md"></div>
            <div className="bg-neutral-content p-2 rounded-xl shadow-md"></div>
          </div>

          <div className="bg-neutral-content p-2 rounded-xl shadow-md">
            <label className="form-control mb-4">
              <div className="label">
                <span className="label-text font-semibold">
                  Tingkat Kesadaran (AVPU)
                </span>
              </div>
              <input
                type="number"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <span className="label-text font-semibold">Tekanan Darah</span>
            <div className="grid grid-cols-2 gap-x-2">
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-sm">Sitole</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered rounded-xl input-sm"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-sm">Diastole</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered rounded-xl input-sm"
                />
              </label>
              <div className="col-span-2"></div>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-sm">Nadi / mnt</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered rounded-xl input-sm"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-sm">Resp / mnt</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered rounded-xl input-sm"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-sm">Suhu (C)</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered rounded-xl input-sm"
                />
              </label>
              <div className="col-span-2"></div>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-sm">TB</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered rounded-xl input-sm"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-sm">BB</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered rounded-xl input-sm"
                />
              </label>
              <label className="form-control ">
                <div className="label">
                  <span className="label-text text-sm">
                    SpO2 - tanpa bantuan O2(%)
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered rounded-xl input-sm"
                />
              </label>
              <label className="form-control ">
                <div className="label">
                  <span className="label-text text-sm">
                    SpO2 - dengan bantuan O2(%)
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered rounded-xl input-sm"
                />
              </label>
            </div>

            <label className="form-control basis-1/2 mt-4">
              <div className="label">
                <span className="label-text font-semibold">Skala Nyeri</span>
              </div>
              <div className="join">
                {/* <input
                disabled
                type="number"
                className="input input-bordered rounded-xl input-sm w-1/2 join-item text-primary"
                min="0"
                max="10"
                value={skalaNyeri}
              /> */}
                <div className="join-item w-1/2 pr-2">
                  <div
                    className={`p-1 px-4 rounded-l-xl text-neutral bg-base-200 outline outline-1`}
                  >
                    {skalaNyeri}
                  </div>
                </div>
                <input type="hidden" value={skalaNyeri} />
                <div className="join-item w-1/2 pl-2">
                  <div
                    className={`${color} p-1 px-2 rounded-r-xl outline outline-1`}
                  >
                    {text}
                  </div>
                </div>
              </div>
            </label>
            <div className="my-2 w-full">
              <PainScale
                onClick={(val, text, color) => {
                  setSkalaNyeri(val == skalaNyeri ? 0 : (val as NumberType));
                  setText(text);
                  setColor(color);
                }}
                val={skalaNyeri}
              />
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-sm">Lokasi</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered rounded-xl input-sm"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-sm">Durasi</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered rounded-xl input-sm"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-sm">Pemberat</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered rounded-xl input-sm"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-sm">Peringan</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered rounded-xl input-sm"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-sm">Kualitas</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered rounded-xl input-sm"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-sm">Frekuensi</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered rounded-xl input-sm"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-sm">Menjalar</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered rounded-xl input-sm"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-sm">Jenis</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered rounded-xl input-sm"
                />
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary rounded-lg mt-6">
          Submit
        </button>
      </form>
    </div>
  );
};

const Tab1 = ({ onSubmit }: { onSubmit: any }) => {
  const [keluhanUtama, setKeluhanUtama] = useState("");
  const [riwayatPenyakit, setRiwayatPenyakit] = useState("");

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const formData = {
      keluhanUtama,
      riwayatPenyakit,
    };

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="grid-cols-2 grid gap-2 text-neutral">
        <div className="bg-neutral-content p-2 rounded-xl shadow-md">
          <label className="form-control">
            <div className="label">
              <span className="label-text font-semibold">Keluhan Utama</span>
            </div>
            <textarea
              className="textarea textarea-bordered rounded-xl"
              id="keluhan_utama"
              name="keluhan_utama"
              placeholder="keluhan utama"
              value={keluhanUtama}
              onChange={(val) => setKeluhanUtama(val.target.value)}
            ></textarea>
          </label>
        </div>
        <div className="bg-neutral-content p-2 rounded-xl shadow-md">
          <label className="label-text font-semibold">
            Riwayat Pengunaan Obat
          </label>
          <div className="grid grid-cols-8 gap-2">
            <label className="form-control col-span-2">
              <div className="label">
                <span className="label-text text-sm">Nama Obat</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control col-span-2">
              <div className="label">
                <span className="label-text text-sm">Dosis</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control col-span-3">
              <div className="label">
                <span className="label-text text-sm">Waktu Pengunaan</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <button className="btn btn-sm btn-primary rounded-xl mt-9 col-span-1">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
        <div className="bg-neutral-content p-2 rounded-xl shadow-md">
          <label className="form-control">
            <div className="label">
              <span className="label-text font-semibold">
                Riwayat Penyakit Pasien
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered rounded-xl h-full"
              id="riwayat_penyakit"
              name="riwayat_penyakit"
              placeholder="riwayat penyakit pasien"
              value={riwayatPenyakit}
              onChange={(val) => setRiwayatPenyakit(val.target.value)}
            ></textarea>
          </label>
        </div>
        <div className="bg-neutral-content p-2 rounded-xl shadow-md">
          <label className="label-text font-semibold">Riwayat Alergi</label>
          <div className="grid grid-cols-8 gap-2">
            <label className="form-control col-span-2">
              <div className="label">
                <span className="label-text text-sm">Jenis Alergi</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control col-span-2">
              <div className="label">
                <span className="label-text text-sm">Alergen</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control col-span-3">
              <div className="label">
                <span className="label-text text-sm">Reaksi</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <button className="btn btn-sm btn-primary rounded-xl mt-9 col-span-1">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary rounded-lg mt-6">
        Submit
      </button>
    </form>
  );
};

const Tab2 = () => {
  const [skalaNyeri, setSkalaNyeri] = useState(0 as NumberType);
  const [color, setColor] = useState("bg-[#649f44]");
  const [text, setText] = useState("No Pain");

  return (
    <form action="">
      <div className="grid-cols-2 grid gap-2 text-neutral">
        <div className="bg-neutral-content p-2 rounded-xl shadow-md">
          <h1 className="text-neutral font-semibold">Tanda-Tanda Vital</h1>
          <label className="form-control">
            <div className="label">
              <span className="label-text font-semibold">
                Tingkat Kesadaran (AVPU)
              </span>
            </div>
            <input
              type="number"
              className="input input-bordered rounded-xl input-sm"
            />
          </label>
          <div className="label">
            <span className="label-text font-semibold">Tekanan Darah</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <label className="form-control">
              <div className="label">
                <span className="label-text text-sm">Sitole</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text text-sm">Diastole</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text text-sm">Nadi / mnt</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text text-sm">Resp / mnt</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text text-sm">Suhu (C)</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <div className="col-span-1"></div>
            <label className="form-control">
              <div className="label">
                <span className="label-text text-sm">TB</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text text-sm">BB</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control col-span-3">
              <div className="label">
                <span className="label-text text-sm">
                  SpO2 - tanpa bantuan O2(%)
                </span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control col-span-3">
              <div className="label">
                <span className="label-text text-sm">
                  SpO2 - dengan bantuan O2(%)
                </span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
          </div>
        </div>
        <div className="bg-neutral-content p-2 rounded-xl shadow-md">
          <label className="form-control basis-1/2">
            <div className="label">
              <span className="label-text text-sm">Skala Nyeri</span>
            </div>
            <div className="join">
              {/* <input
                disabled
                type="number"
                className="input input-bordered rounded-xl input-sm w-1/2 join-item text-primary"
                min="0"
                max="10"
                value={skalaNyeri}
              /> */}
              <div className="join-item w-1/2 pr-2">
                <div
                  className={`p-1 px-4 rounded-l-xl text-neutral bg-base-200 outline outline-1`}
                >
                  {skalaNyeri}
                </div>
              </div>
              <input type="hidden" value={skalaNyeri} />
              <div className="join-item w-1/2 pl-2">
                <div
                  className={`${color} p-1 px-2 rounded-r-xl outline outline-1`}
                >
                  {text}
                </div>
              </div>
            </div>
          </label>
          <div className="my-2 w-full">
            <PainScale2
              onClick={(val, text, color) => {
                setSkalaNyeri(val == skalaNyeri ? 0 : (val as NumberType));
                setText(text);
                setColor(color);
              }}
              val={skalaNyeri}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <label className="form-control">
              <div className="label">
                <span className="label-text text-sm">Lokasi</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text text-sm">Durasi</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text text-sm">Pemberat</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text text-sm">Peringan</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text text-sm">Kualitas</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text text-sm">Frekuensi</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text text-sm">Menjalar</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text text-sm">Jenis</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

const Tab3 = () => {
  const [checkboxes, setCheckboxes] = useState<CheckboxState[]>([
    { name: "Kepala", isChecked: false },
    { name: "Mata", isChecked: false },
    { name: "Telinga", isChecked: false },
    { name: "Hidung", isChecked: false },
    { name: "Rambut", isChecked: false },
    { name: "Bibir", isChecked: false },
    { name: "Gigi Geligi", isChecked: false },
    { name: "Lidah", isChecked: false },
    { name: "Langit-langit", isChecked: false },
    { name: "Leher", isChecked: false },
    { name: "Tenggorokan", isChecked: false },
    { name: "Tonsil", isChecked: false },
    { name: "Dada", isChecked: false },
    { name: "Payudara", isChecked: false },
    { name: "Punggung", isChecked: false },
    { name: "Perut", isChecked: false },
    { name: "Genital", isChecked: false },
    { name: "Anus", isChecked: false },
    { name: "Lengan Atas", isChecked: false },
    { name: "Lengan Bawah", isChecked: false },
    { name: "Jari Tangan", isChecked: false },
    { name: "Kuku Tangan", isChecked: false },
    { name: "Sendi Tangan", isChecked: false },
    { name: "Tungkai Atas", isChecked: false },
    { name: "Tungkai Bawah", isChecked: false },
    { name: "Jari Kaki", isChecked: false },
    { name: "Kuku Kaki", isChecked: false },
    { name: "Sendi Kaki", isChecked: false },
  ]);

  const handleCheckboxChange = (index: number, checked: boolean) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox, i) =>
        i === index ? { ...checkbox, isChecked: checked } : checkbox
      )
    );
  };

  return (
    <form action="">
      <div className="grid-cols-3 grid gap-2 text-neutral">
        <div className="bg-neutral-content p-2 rounded-xl shadow-md col-span-1">
          <Image src="/images/body.png" width={350} height={500} alt="body" />
          {/* <GambarManusia /> */}
        </div>
        <div className="bg-neutral-content p-2 rounded-xl shadow-md col-span-2">
          <div className="grid-cols-2 gap-2 grid">
            <div className="">
              {checkboxes
                .slice(0, Math.ceil(checkboxes.length / 2))
                .map((checkbox, index) => (
                  <label key={checkbox.name} className="form-control mb-2">
                    <span className="label-text font-semibold">
                      {checkbox.name}
                    </span>
                    <div className="flex flex-row">
                      <span className="label-text text-sm">Normal</span>
                      <input
                        type="checkbox"
                        id={`checkbox-${index}`}
                        name={`checkbox-${index}`}
                        className="toggle toggle-sm mx-4 mb-2"
                        onChange={(e) => {
                          handleCheckboxChange(index, e.target.checked);
                        }}
                      />
                      <span className="label-text text-sm">Abnormal</span>
                    </div>
                    {checkbox.isChecked && (
                      <textarea
                        id={`text-${index}`}
                        name={`text-${index}`}
                        className="input input-bordered rounded-xl input-sm h-16"
                        placeholder="Masukkan keluhan"
                      />
                    )}
                  </label>
                ))}
            </div>
            <div className="">
              {checkboxes
                .slice(Math.ceil(checkboxes.length / 2))
                .map((checkbox, index) => (
                  <label key={checkbox.name} className="form-control mb-2">
                    <span className="label-text font-semibold">
                      {checkbox.name}
                    </span>
                    <div className="flex flex-row">
                      <span className="label-text text-sm">Normal</span>
                      <input
                        type="checkbox"
                        id={`checkbox-${index + 14}`}
                        name={`checkbox-${index + 14}`}
                        className="toggle toggle-sm mx-4 mb-2"
                        onChange={(e) => {
                          handleCheckboxChange(index + 14, e.target.checked);
                        }}
                      />
                      <span className="label-text text-sm">Abnormal</span>
                    </div>
                    {checkbox.isChecked && (
                      <textarea
                        id={`text-${index + 14}`}
                        name={`text-${index + 14}`}
                        className="input input-bordered rounded-xl input-sm h-16"
                      />
                    )}
                  </label>
                ))}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const Tab4 = () => {
  // const [checkboxes, setCheckboxes] = useState<CheckboxState[]>([
  //   { name: "Kesulitan pemenuhan kebutuhan dasar", isChecked: false },
  // ]);
  const [adatChecked, setAdatChecked] = useState(false);
  const [pandanganChecked, setPandanganChecked] = useState(false);
  const adatInputRef = useRef<HTMLInputElement>(null);
  const pandanganInputRef = useRef<HTMLInputElement>(null);

  return (
    <form action="">
      <div className="grid-cols-2 grid gap-2 text-neutral">
        <div>
          <div className="bg-neutral-content p-2 rounded-xl shadow-md">
            <h1 className="text-neutral font-semibold ">Status Psikologis</h1>
          </div>
          <div className="bg-neutral-content p-2 rounded-xl shadow-md mt-4">
            <h1 className="text-neutral font-semibold ">
              Status Ekonomi, Sosial & Budaya
            </h1>
            <div className="px-2 gap-2 grid-cols-1 grid">
              <label className="form-control gap-1">
                <span>Pendidikan</span>
                <div className="flex flex-row items-center">
                  <div className="basis-1/3 p-1 flex flex-row items-center">
                    <span className="label-text text-sm">SMA</span>
                  </div>
                </div>
              </label>
              <label className="form-control gap-1">
                <span>Pekerjaan</span>
                <div className="flex flex-row items-center">
                  <div className="basis-1/3 p-1 flex flex-row items-center">
                    <span className="label-text text-sm">PNS</span>
                  </div>
                </div>
              </label>

              <label className="form-control cursor-pointer select-none gap-1">
                <span>Kesulitan pemenuhan kebutuhan dasar</span>
                <div className="flex flex-row items-center">
                  <div className="basis-1/3 p-1 flex flex-row items-center justify-around">
                    <span className="label-text text-sm">Tidak</span>
                    <input
                      type="checkbox"
                      id={`checkboxKesulitan`}
                      name={`checkboxKesulitan`}
                      className="toggle toggle-sm mx-2"
                    />
                    <span className="label-text text-sm">Ya</span>
                  </div>
                </div>
              </label>

              <label className="form-control cursor-pointer select-none gap-1">
                <span>Hubungan dengan anggota keluarga</span>
                <div className="flex flex-row items-center">
                  <div className="basis-1/3 p-1 flex flex-row items-center justify-around">
                    <span className="label-text text-sm">Baik</span>
                    <input
                      type="checkbox"
                      id={`checkboxHubungan`}
                      name={`checkboxHubungan`}
                      className="toggle toggle-sm mx-2"
                    />
                    <span className="label-text text-sm">Tidak</span>
                  </div>
                </div>
              </label>

              <label className="form-control cursor-pointer select-none">
                <span>Adat/budaya yang dipercayai pasien</span>
                <div className="flex flex-row items-center">
                  <div className="basis-1/3 flex flex-row items-center justify-around">
                    <span className="label-text text-sm">Tidak</span>
                    <input
                      type="checkbox"
                      id={`checkboxAdat`}
                      name={`checkboxAdat`}
                      className="toggle toggle-sm mx-2"
                      onChange={(e) => {
                        setAdatChecked(e.target.checked);
                        if (adatInputRef.current) {
                          adatInputRef.current.focus();
                        } else {
                          console.log("ref is null");
                        }
                      }}
                    />
                    <span className="label-text text-sm">Ya</span>
                  </div>
                  <div className="basis-2/3 flex flex-row pl-2">
                    <input
                      ref={adatInputRef}
                      type="text"
                      className={`input input-bordered rounded-xl input-sm w-full ${
                        adatChecked ? "focus:" : "invisible"
                      }`}
                      placeholder="Adat/budaya yang dipercayai pasien"
                    />
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div className="bg-neutral-content p-2 rounded-xl shadow-md mt-4">
            <h1 className="text-neutral font-semibold ">Status Spiritual</h1>
            <div className="px-2 gap-2 grid-cols-1 grid">
              <label className="form-control gap-1">
                <span>Agama</span>
                <div className="flex flex-row items-center">
                  <div className="basis-1/3 p-1 flex flex-row items-center">
                    <span className="label-text text-sm">Islam</span>
                  </div>
                </div>
              </label>
              <label className="form-control cursor-pointer select-none">
                <span>Pandangan spiritual pasien terhadap penyakitnya</span>
                <div className="flex flex-row items-center">
                  <div className="basis-1/3 flex flex-row items-center justify-around">
                    <span className="label-text text-sm">Tidak</span>
                    <input
                      type="checkbox"
                      id={`checkboxPandangan`}
                      name={`checkboxPandangan`}
                      className="toggle toggle-sm mx-2"
                      onChange={(e) => {
                        setPandanganChecked(e.target.checked);
                        if (pandanganInputRef.current) {
                          pandanganInputRef.current.focus();
                        } else {
                          console.log("ref is null");
                        }
                      }}
                    />
                    <span className="label-text text-sm">Ya</span>
                  </div>
                  <div className="basis-2/3 flex flex-row pl-2">
                    <input
                      ref={pandanganInputRef}
                      type="text"
                      className={`input input-bordered rounded-xl input-sm w-full ${
                        pandanganChecked ? "focus:" : "invisible"
                      }`}
                      placeholder="Pandangan spiritual pasien terhadap penyakitnya"
                    />
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-neutral-content p-2 rounded-xl shadow-md">
            <h1 className="text-neutral font-semibold ">Skrining Jatuh</h1>
            <div className="px-2 gap-2 grid-cols-1 grid">
              <ol className="list-decimal list-outside ml-4 gap-10">
                <li className="mb-4">
                  <label className="form-control cursor-pointer select-none gap-1">
                    <span>Pasien &lt; 2 Tahun</span>
                    <div className="flex flex-row items-center">
                      <div className="basis-1/3 p-1 flex flex-row items-center justify-around">
                        <span className="label-text text-sm">Tidak</span>
                        <input
                          type="checkbox"
                          id={`checkboxJatuh1`}
                          name={`checkboxJatuh1`}
                          className="toggle toggle-sm mx-2"
                        />
                        <span className="label-text text-sm">Ya</span>
                      </div>
                    </div>
                  </label>
                </li>
                <li className="mb-4">
                  <label className="form-control cursor-pointer select-none gap-1">
                    <span>
                      Dalam kondisi pasien sebagai geriatri, dizzines, vertigo,
                      gangguan keseimbangan, gangguan penglihatan, penggunaan
                      obat sedasi, status kesadaran dan atau kejiwaan, konsumsi
                    </span>
                    <div className="flex flex-row items-center">
                      <div className="basis-1/3 p-1 flex flex-row items-center justify-around">
                        <span className="label-text text-sm">Tidak</span>
                        <input
                          type="checkbox"
                          id={`checkboxJatuh2`}
                          name={`checkboxJatuh2`}
                          className="toggle toggle-sm mx-2"
                        />
                        <span className="label-text text-sm">Ya</span>
                      </div>
                    </div>
                  </label>
                </li>
                <li className="mb-4">
                  <label className="form-control cursor-pointer select-none">
                    <span>Didiagnosis dengan penyakit parkinson?</span>
                    <div className="flex flex-row items-center">
                      <div className="basis-1/3 flex flex-row items-center justify-around">
                        <span className="label-text text-sm">Tidak</span>
                        <input
                          type="checkbox"
                          id={`checkboxJatuh3`}
                          name={`checkboxJatuh3`}
                          className="toggle toggle-sm mx-2"
                        />
                        <span className="label-text text-sm">Ya</span>
                      </div>
                    </div>
                  </label>
                </li>
                <li className="mb-4">
                  <label className="form-control cursor-pointer select-none">
                    <span>
                      Situasi pasien sedang mendapatkan obat sedasi, riwayat
                      tirah baring lama, perubahan posisi yang akan meningkatkan
                      risiko jatuh?
                    </span>
                    <div className="flex flex-row items-center">
                      <div className="basis-1/3 flex flex-row items-center justify-around">
                        <span className="label-text text-sm">Tidak</span>
                        <input
                          type="checkbox"
                          id={`checkboxJatuh4`}
                          name={`checkboxJatuh4`}
                          className="toggle toggle-sm mx-2"
                        />
                        <span className="label-text text-sm">Ya</span>
                      </div>
                    </div>
                  </label>
                </li>
                <li className="mb-4">
                  <label className="form-control cursor-pointer select-none">
                    <span>
                      Pasien saat ini sedang berada pada salah satu lokasi ini:
                      rehab medik, ruangan dengan penerangan kurang dan
                      bertanggga:
                    </span>
                    <div className="flex flex-row items-center">
                      <div className="basis-1/3 flex flex-row items-center justify-around">
                        <span className="label-text text-sm">Tidak</span>
                        <input
                          type="checkbox"
                          id={`checkboxJatuh5`}
                          name={`checkboxJatuh5`}
                          className="toggle toggle-sm mx-2"
                        />
                        <span className="label-text text-sm">Ya</span>
                      </div>
                    </div>
                  </label>
                </li>
              </ol>
              <label className="input input-bordered rounded-xl input-md flex items-center gap-2">
                Kesimpulan :
                <input
                  type="text"
                  className="grow"
                  disabled
                  value="Pasien Beresiko Jatuh"
                />
              </label>
              <label className="input input-bordered rounded-xl input-md bg-white flex items-center gap-2">
                Tindak Lanjut :
                <input type="text" className="grow" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const Tab5 = () => {
  return (
    <form action="">
      <div className="grid-cols-2 grid gap-2 text-neutral">
        <div className="bg-neutral-content p-2 rounded-xl shadow-md">
          <label className="form-control">
            <div className="label">
              <span className="label-text font-semibold">Keluhan Utama</span>
            </div>
            <textarea
              className="textarea textarea-bordered rounded-xl"
              id="keluhan_utama"
              name="keluhan_utama"
              placeholder="keluhan utama"
            ></textarea>
          </label>
        </div>
        <div className="bg-neutral-content p-2 rounded-xl shadow-md">
          <label className="label-text font-semibold">
            Riwayat Pengunaan Obat
          </label>
          <div className="grid grid-cols-8 gap-2">
            <label className="form-control col-span-2">
              <div className="label">
                <span className="label-text text-sm">Nama Obat</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control col-span-2">
              <div className="label">
                <span className="label-text text-sm">Dosis</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control col-span-3">
              <div className="label">
                <span className="label-text text-sm">Waktu Pengunaan</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <button className="btn btn-sm btn-primary rounded-xl mt-9 col-span-1">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
        <div className="bg-neutral-content p-2 rounded-xl shadow-md">
          <label className="form-control">
            <div className="label">
              <span className="label-text font-semibold">
                Riwayat Penyakit Pasien
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered rounded-xl h-full"
              id="riwayat_penyakit"
              name="riwayat_penyakit"
              placeholder="riwayat penyakit pasien"
            ></textarea>
          </label>
        </div>
        <div className="bg-neutral-content p-2 rounded-xl shadow-md">
          <label className="label-text font-semibold">Riwayat Alergi</label>
          <div className="grid grid-cols-8 gap-2">
            <label className="form-control col-span-2">
              <div className="label">
                <span className="label-text text-sm">Jenis Alergi</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control col-span-2">
              <div className="label">
                <span className="label-text text-sm">Alergen</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control col-span-3">
              <div className="label">
                <span className="label-text text-sm">Reaksi</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <button className="btn btn-sm btn-primary rounded-xl mt-9 col-span-1">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

const Tab6 = () => {
  return (
    <form action="">
      <div className="grid-cols-2 grid gap-2 text-neutral">
        <div className="bg-neutral-content p-2 rounded-xl shadow-md">
          <label className="form-control">
            <div className="label">
              <span className="label-text font-semibold">Keluhan Utama</span>
            </div>
            <textarea
              className="textarea textarea-bordered rounded-xl"
              id="keluhan_utama"
              name="keluhan_utama"
              placeholder="keluhan utama"
            ></textarea>
          </label>
        </div>
        <div className="bg-neutral-content p-2 rounded-xl shadow-md">
          <label className="label-text font-semibold">
            Riwayat Pengunaan Obat
          </label>
          <div className="grid grid-cols-8 gap-2">
            <label className="form-control col-span-2">
              <div className="label">
                <span className="label-text text-sm">Nama Obat</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control col-span-2">
              <div className="label">
                <span className="label-text text-sm">Dosis</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control col-span-3">
              <div className="label">
                <span className="label-text text-sm">Waktu Pengunaan</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <button className="btn btn-sm btn-primary rounded-xl mt-9 col-span-1">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
        <div className="bg-neutral-content p-2 rounded-xl shadow-md">
          <label className="form-control">
            <div className="label">
              <span className="label-text font-semibold">
                Riwayat Penyakit Pasien
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered rounded-xl h-full"
              id="riwayat_penyakit"
              name="riwayat_penyakit"
              placeholder="riwayat penyakit pasien"
            ></textarea>
          </label>
        </div>
        <div className="bg-neutral-content p-2 rounded-xl shadow-md">
          <label className="label-text font-semibold">Riwayat Alergi</label>
          <div className="grid grid-cols-8 gap-2">
            <label className="form-control col-span-2">
              <div className="label">
                <span className="label-text text-sm">Jenis Alergi</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control col-span-2">
              <div className="label">
                <span className="label-text text-sm">Alergen</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <label className="form-control col-span-3">
              <div className="label">
                <span className="label-text text-sm">Reaksi</span>
              </div>
              <input
                type="text"
                className="input input-bordered rounded-xl input-sm"
              />
            </label>
            <button className="btn btn-sm btn-primary rounded-xl mt-9 col-span-1">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
