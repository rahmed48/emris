import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";

type Pasien = {
  kd_pasien: string;
  no_pengenal: string;
  nama: string;
  tgl_lahir: string;
};

const PasienDataTable = ({ data, column }: { data: Pasien[]; column: any }) => {
  return <DataTable title="Pasien" columns={column} data={data} />;
};

export default PasienDataTable;
