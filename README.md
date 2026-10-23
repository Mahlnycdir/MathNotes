# Kladde

Handschriftliches Notizbuch fürs iPhone: mit dem Daumen in der Schreiblupe schreiben, auf Karopapier, mit Glättung, geraden Bruchstrichen, Dark Mode und PDF-Export. Läuft als App vom Home-Bildschirm, auch offline.

## Aufs iPhone bringen (über GitHub Pages)

1. Auf GitHub ein **öffentliches** Repository anlegen, zum Beispiel `kladde`.
2. Auf **„uploading an existing file“** klicken und den **Inhalt** dieses Ordners ins Browserfenster ziehen, also `index.html`, `sw.js`, `manifest.webmanifest`, `README.md` und die Ordner `fonts`, `icons` und `vendor`. Dann **Commit changes**.
3. **Settings → Pages**: unter „Branch“ `main` und `/ (root)` wählen, **Save**. Nach 1–2 Minuten ist die App unter `https://DEINNAME.github.io/MathNotes/` erreichbar.
4. Diese Adresse auf dem iPhone in **Safari** öffnen, dann **Teilen → Zum Home-Bildschirm**.
5. Kladde ab jetzt nur noch über das Symbol öffnen. Die App startet im Vollbild und funktioniert nach dem ersten Start auch ohne Netz.

## Bedienung

- **Schreiben:** unten im großen Feld (der Lupe). Oben zeigt der orange Rahmen, wo die Schrift auf der Seite landet.
- **Weiterrücken:** Hörst du im orangen Streifen rechts auf, rückt die Lupe weiter. ↵ springt in die nächste Zeile, die Pfeile verschieben die Lupe.
- **Gerade Linie:** Strich am Ende kurz halten. Fast waagerechte Linien werden exakt waagerecht.
- **Lupe versetzen:** auf die Seite tippen oder den Rahmen ziehen. 🔍− / 🔍+ ändern die Vergrößerung.
- **Ohne Lupe:** Lupen-Knopf aus, dann schreibst du direkt auf die Seite. Zwei Finger zoomen und schieben.
- **Stift nochmal antippen:** Strichstärke. **⋯:** Titel, Papier, Hell/Dunkel, PDF, Bild, Seite leeren.

## Speichern und Sichern

Alles wird automatisch **auf dem iPhone** gespeichert, ohne Konto und ohne Cloud.

Wichtig: Löschst du Kladde vom Home-Bildschirm, löscht iOS auch die Notizen. Tippe deshalb ab und zu in der Notizliste auf **„Sichern“** und lege die Datei zum Beispiel in iCloud Drive ab. Mit **„Laden“** holst du eine Sicherung zurück, auch auf ein neues iPhone.

## Updates

Neue Dateien einfach wieder hochladen und die alten ersetzen. Die App holt sich die neue Fassung beim nächsten Start mit Netz und zeigt sie ab dem übernächsten Start. Wenn sich andere Dateien als `index.html` ändern, in `sw.js` die Zeile `VERSION` hochzählen (z. B. `kladde-v2`).

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | die ganze App (Zeichenfläche, Lupe, Speicher, Export) |
| `sw.js` | Offline-Modus |
| `manifest.webmanifest` | Name, Symbol und Vollbild für den Home-Bildschirm |
| `icons/` | App-Symbole |
| `fonts/` | IBM Plex (lokal, damit es offline gleich aussieht) |
| `vendor/jspdf.umd.min.js` | PDF-Export (jsPDF 2.5.1, MIT-Lizenz) |
