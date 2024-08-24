import { MyDatabaseFunction } from "./db/my-database-function";

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: "Anderson", age: 20 });
myDatabaseClassic.add({ name: "Guilherme", age: 34 });
myDatabaseClassic.add({ name: "Eduardo", age: 38 });
myDatabaseClassic.remove(1);

export { myDatabaseClassic };
