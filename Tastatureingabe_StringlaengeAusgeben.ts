/**
 * TypeScript-Programm für Deno, das ein NPM-Paket verwendet.
 * Das npm-Paket muss NICHT mit "npm install" heruntergeladen werden.
 * Es wird von Deno bei Bedarf zur Laufzeit automatisch heruntergeladen,
 * oder kann mit "deno cache <Programmname.ts>" vorab in den Cache
 * heruntergeladen werden.
 *
 *
 * Ausführung Programm (Abfrage für Berechtigungen):
 * ```
 * deno run Tastatureingabe_StringlaengeAusgeben.ts
 * ```
 *
 * Ausführungen Programm, alle Berechtigungen erteilen:
 * ```
 * deno run --allow-all Tastatureingabe_StringlaengeAusgeben.ts
 * ```
 */

import readlineSync from "npm:readline-sync";

const eingabeStr: string = readlineSync.question(
  "\nBitte geben Sie eine Zeichenkette ein!\n> ",
);

console.log(
  `\nEs wurde eine Zeichenkette mit ${eingabeStr.length} Zeichen eingegeben.\n`,
);
