import fs from "fs";

export function sanitize(obj: any): any {
  try {
    //empty as different sites will require different sanitation
  } catch (e) {
    console.log("sanitize");
    console.error(e);
  }
}

export const createFile = (title: string) => {
  fs.writeFileSync(`${title}.csv`, "");
};

export const writeFile = (title: string, data: any) => {
  const cleanData = sanitize(data);
  const formattedData: any = cleanData.join(";");
  fs.appendFileSync(title, formattedData.join(";") + "\n");
};
