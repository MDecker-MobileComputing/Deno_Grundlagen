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
 *
 * JavaScript-Version dieser Datei, die von deno in seinem Cache-Verzeichnis
 * abgelegt wird:
 * https://gist.github.com/MDecker-MobileComputing/9be05d066805976e58f83a7fd003be35
 */

import readlineSync from "npm:readline-sync";

const eingabeStr: string = readlineSync.question(
  "\nBitte geben Sie eine Zeichenkette ein!\n> ",
);

console.log(
  `\nEs wurde eine Zeichenkette mit ${eingabeStr.length} Zeichen eingegeben.\n`,
);
