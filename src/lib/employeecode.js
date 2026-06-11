export function generateEmpCode(lastCode) {
  if (!lastCode) return "EMP001";

  const number = parseInt(lastCode.replace("EMP", "")) + 1;
  return `EMP${number.toString().padStart(3, "0")}`;
}