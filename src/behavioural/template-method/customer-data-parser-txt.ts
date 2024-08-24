import { promises } from "node:fs";
import { CustomerData } from "./customer-data";
import { CustomerDataParser } from "./customer-data-parser";

export class CustomerDataParserTxt extends CustomerDataParser {
  protected async parseData(): Promise<CustomerData[]> {
    const rawData = await promises.readFile(this.filePath);

    const data = rawData.toString();
    // Windows: \r\n
    // Linux: \n
    const lines = data.split("\n");

    const customerData: CustomerData[] = [];

    for (const line of lines) {
      const [name, age, cpf] = line.split("\t");
      customerData.push({ name, age, cpf });
    }

    return customerData;
  }
}
