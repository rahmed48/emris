import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

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
  const [tab, setTab] = useState(1);

  const onSubmit1 = (formData: any) => {
    console.log(formData);
    setTab(2);
  };

  return (
    <div>
      <div className="bg-neutral-content p-4 rounded-2xl shadow-md flex justify-between items-center">
        <div className="flex flex-row gap-4 items-center">
          <button className="btn btn-sm btn-neutral" onClick={backClick}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <div className="">
            <h1 className="text-sm text-neutral">
              Asesmen Awal Keperawatan Dewasa/Umum
            </h1>
            <h1 className="text-sm text-neutral">
              PPA: Ns. Aleyndra, S.Kep | 03-Apr-2024 10:45
            </h1>
          </div>
        </div>
        <div className="join">
          <button
            onClick={() => {
              setTab(1);
            }}
            className={`join-item btn btn-sm ${tab == 1 ? "btn-active" : ""}`}
          >
            1
          </button>
          <button
            onClick={() => {
              setTab(2);
            }}
            className={`join-item btn btn-sm ${tab == 2 ? "btn-active" : ""}`}
          >
            2
          </button>
          <button
            onClick={() => {
              setTab(3);
            }}
            className={`join-item btn btn-sm ${tab == 3 ? "btn-active" : ""}`}
          >
            3
          </button>
          <button
            onClick={() => {
              setTab(4);
            }}
            className={`join-item btn btn-sm ${tab == 4 ? "btn-active" : ""}`}
          >
            4
          </button>
          <button
            onClick={() => {
              setTab(5);
            }}
            className={`join-item btn btn-sm ${tab == 5 ? "btn-active" : ""}`}
          >
            5
          </button>
          <button
            onClick={() => {
              setTab(6);
            }}
            className={`join-item btn btn-sm ${tab == 6 ? "btn-active" : ""}`}
          >
            6
          </button>
        </div>
      </div>
      <div className="divider" />
      {/* {tab == 1 ? <Tab1 onSubmit={onSubmit1} /> : null}
      {tab == 2 ? <Tab2 /> : null}
      {tab == 3 ? <Tab3 /> : null}
      {tab == 4 ? <Tab4 /> : null}
      {tab == 5 ? <Tab5 /> : null} */}
    </div>
  );
};
