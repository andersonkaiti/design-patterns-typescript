import { MyDatabaseFunction } from "./db/my-database-function";
import { myDatabaseClassic as myDatabaseFromModuleA } from "./module_a";

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: "Roberto", age: 20 });
myDatabaseClassic.add({ name: "Joana", age: 34 });
myDatabaseClassic.add({ name: "Luíza", age: 38 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
