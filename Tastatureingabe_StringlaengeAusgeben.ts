/*
 * TypeScript-Programm für Deno, das ein NPM-Paket verwendet.
 * Das npm-Paket muss NICHT mit "npm install" heruntergeladen werden.
 * Es wird von Deno bei Bedarf zur Laufzeit automatisch heruntergeladen,
 * oder kann mit "deno cache <Programmname.ts>" vorab in den Cache
 * heruntergeladen werden.
 */

import readlineSync from "npm:readline-sync";

const eingabeStr : string = readlineSync.question( "\nBitte geben Sie eine Zeichenkette ein!\n> " );

console.log( `\nEs wurde eine Zeichenkette mit ${eingabeStr.length} Zeichen eingegeben.\n` );
