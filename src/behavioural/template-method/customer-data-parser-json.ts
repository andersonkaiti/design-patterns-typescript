import { promises } from "node:fs";
import { CustomerData } from "./customer-data";
import { CustomerDataParser } from "./customer-data-parser";

export class CustomerDataParserJson extends CustomerDataParser {
  protected async parseData(): Promise<CustomerData[]> {
    const rawData = await promises.readFile(this.filePath);

    const customerData: CustomerData[] = JSON.parse(rawData.toString());

    return customerData;
  }

  hook(): void {
    console.log("O hook foi executado.");
  }
}
