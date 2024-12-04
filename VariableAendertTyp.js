
/*
 * Die Datei kann auch mit Deno ausgeführt werden, obwohl
 * der Variable `variable` erst ein `number`-Wert und dann
 * ein `string`-Wert zugewiesen wird.
 */


let variable = 42;
console.log("\nInhalt der Variable: " + variable + ".");

variable = "hallo";
console.log(`Inhalt der Variable: ${variable}.\n`);

