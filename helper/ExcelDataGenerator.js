import { utils, writeFile } from "xlsx";

function generateExcelData(data) {
  const worksheet = utils.json_to_sheet(data);
  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, worksheet, "Sheet1");
  const excelData = writeFile(workbook, "products.xlsx", {
    compression: true,
  });
  return excelData;
}

function downloadExcelFile(data) {
  const excelData = generateExcelData(data);
  const blob = new Blob([excelData], { type: "application/octet-stream" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "data.xlsx");
  document.body.appendChild(link);
  link.click();
}

export default downloadExcelFile;
