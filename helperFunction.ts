import fs from 'fs'

export function sanitize(obj: any): any {
  try {
   //empty as different sites will require different sanitation


  } catch (e) {
    console.log("sanitize");
    console.error(e);
  }
}

const writeFile = (title: string) => {
      
  fs.writeFileSync(`${title}.csv`, "");
};

const appendFile = (title: string, data: any) =>  {
    const cleanData = sanitize(data);
    const formattedData: string = cleanData.join(";");
 fs.appendFileSync(title, formattedData.join(";") + "\n");
}    

