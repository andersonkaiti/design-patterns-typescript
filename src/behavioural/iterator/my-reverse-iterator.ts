import { MyDataStructure } from "./my-data-structure";
import { MyIteratorProtocol } from "./my-iterator-protocol";

export class MyReverseIterator implements MyIteratorProtocol<string> {
  private index: number = this.dataStructure.size();

  constructor(private readonly dataStructure: MyDataStructure) {}

  reset(): void {
    this.index = this.dataStructure.size();
  }

  next(): IteratorResult<string> {
    this.index--;
    const returnValue = this.makeValue(this.dataStructure.items[this.index]);
    returnValue.done = this.index < 0;
    return returnValue;
  }

  private makeValue(value: string): IteratorResult<string> {
    return {
      value,
      done: false,
    };
  }
}
