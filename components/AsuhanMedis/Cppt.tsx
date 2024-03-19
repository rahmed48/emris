import { faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import PainScale from "../Items/PainScale";
type NumberType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

const Cppt = () => {
  // useEffect(() => {
  //   window.addEventListener("beforeunload", function (e) {
  //     e.preventDefault();
  //     e.returnValue = "";
  //   });
  // }, []);

  const backClick = () => {
    setChildren(<ListCPPT onClick={lihatDetail} />);
  };

  const lihatDetail = () => {
    setChildren(<DetailCPPT backClick={backClick} />);
  };
  const [children, setChildren] = useState<React.ReactNode>(
    <ListCPPT onClick={lihatDetail} />
  );

  return <div>{children}</div>;
};

export default Cppt;

const ListCPPT = ({ onClick }: { onClick: () => void }) => {
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
                Catatan Perkembangan Pasien Terintegrasi
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
                Catatan Perkembangan Pasien Terintegrasi
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
                Catatan Perkembangan Pasien Terintegrasi
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
                Catatan Perkembangan Pasien Terintegrasi
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

const DetailCPPT = ({ backClick }: { backClick: () => void }) => {
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
            <label className="form-control">
              <div className="label">
                <span className="label-text font-semibold">
                  Pemeriksaan Fisik
                </span>
              </div>
              <div className="join w-full">
                <select className="select select-bordered join-item select-sm">
                  <option disabled selected>
                    Pilih Bagian Tubuh
                  </option>
                  <option>Kaki</option>
                  <option>Kepala</option>
                  <option>Tangan</option>
                </select>
                <div className="w-full">
                  <input
                    className="input input-bordered join-item input-sm w-full"
                    placeholder="Search"
                  />
                </div>
                <button className="btn join-item btn-sm">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </label>
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
          <div className="gap-2 grid-cols-1 grid">
            <div className="bg-neutral-content p-2 rounded-xl shadow-md"></div>
            <div className="bg-neutral-content p-2 rounded-xl shadow-md"></div>
            <div className="bg-neutral-content p-2 rounded-xl shadow-md"></div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary rounded-lg mt-6">
          Submit
        </button>
      </form>
    </div>
  );
};
