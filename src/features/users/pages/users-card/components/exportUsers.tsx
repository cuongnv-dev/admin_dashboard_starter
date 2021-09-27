import { Button } from "components/common";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { userApi } from "api";
import { useState } from "react";

export const ExportUsers = () => {
  const [loading, setLoading] = useState(false);
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportData = async () => {
    setLoading(true);
    const users = await userApi.getFullData();
    setLoading(false);
    const ws = XLSX.utils.json_to_sheet(users);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, "UsersReport" + fileExtension);
  };
  return (
    <Button
      preset="outline"
      label="Export Excel"
      onClick={exportData}
      loading={loading}
    />
  );
};
