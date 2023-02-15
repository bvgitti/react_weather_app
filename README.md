
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

2022-08-24
----------
Ez az első saját készítésű Weather React projektem.

Az app a https://weather.visualcrossing.com/ oldalról ingyenesen beszerezhető API kulccsal az aktuális
időjárási adatokat jeleníti meg.
Jelenleg úgy van átalakítva, hogy API kulcs nélkül, fix adatokkal, egy adott nap időjárási adatait mutatja.
Friss adatok megjelenítéséhez és API kulcs használatához apróbb módosítások szükségesek. Ezeket a módosításokat
kommentben jeleztem a kódon belül.

2023-02-15
----------
(update)

Kissebb-nagyobb átalakítások az oldal működésében:
    - useState helyett/mellett useReducert használok a state kezelésére,
    - hozzáadtam egy Popup ablakot (prompt box), ahol saját API kulcs adható meg.
        * API kulcs használatával az oldal friss időjárási adatok jelenít meg,
        * a -mégse- gombra kattintva az oldal tárolt adatokkal működik,
        * a megadott API kulcsot az oldal state-ben tárolja nem menti el és nem
            küldi el sehova!!!
    - helyadat(ok) megjelenítésének módosítása: az input mezőbe beírt helyadat helyett,
        a letöltött időjárási adatokból vett helyadatot jeleníti meg az oldal, így a
        beviteli mező felett biztosan az időjárási adatokhoz tartozó hely látható,
    - időadatok megjelenítésének módosítása (hh:mm:ss -> hh:mm),

folyamatban: hibaüzenetek kezelése, megjelenítése
