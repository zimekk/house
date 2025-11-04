import parse from "./utils/parse";

// Object.assign(window, {__markers: (window.__markers||'').concat((v=>([(t => `\n${Math.round(t/60)}:${String(Math.floor(t%60)/100).split('.')[1]} ${prompt('marker')}`)(v.currentTime)]))($('video:not([data-no-fullscreen])')))}),copy({title:$('h1.ytd-watch-metadata').innerText,url:document.location.href,markers:window.__markers})

export const videos = [
  {
    // Domy w najlepszym wydaniu minimalistycznym: betonowy luksus spotyka się z wymarzonym domem w styl...
    url: "https://www.youtube.com/watch?v=_2qBe9S1ecY",
    markers: parse(`
0:05 jadalnia
0:15 kuchnia
2:46 konsola
2:54 korytarz
3:32 salon
3:18 ogród
4:03 kuchnia
5:5 jadalnia
6:35 taras
6:2 sypialnia
7:06 łazienka
8:53 gabinet
11:55 korytarz
13:11 salon
18:46 kuchnia
19:26 okap
20:03 jadalnia
25:38 sypialnia
27:55 łazienka
29:15 gabinet
32:3 salon
32:24 kuchnia
33:1 jadalnia
34:08 sypialnia
35:08 łazienka
36:54 gabinet
37:3 salon
37:58 korytarz
       `),
  },
  {
    // Własny dom architekta zaprojektowany dla jej trzyosobowej rodziny (zwiedzanie domu)
    url: "https://www.youtube.com/watch?v=cKCupN1gVtU",
    markers: parse(`
1:12 wejście +
1:46 kuchnia
2:12 salon
2:23 kuchnia ogrodowa
2:42 elewacja +
2:51 sypialnia
2:58 toaleta
3:03 łazienka
3:56 kącik
      `),
  },
  {
    // Własna minimalistyczna oaza architekta na wewnętrznych przedmieściach (wycieczka po domu)
    url: "https://www.youtube.com/watch?v=Ti71fevr_ws",
    markers: parse(`
0:30 wejście +
0:33 kuchnia +
0:49 rzut
1:15 salon
1:34 jadalnia +
3:27 toaleta +
3:50 łazienka +
4:25 sypialnia
      `),
  },
  {
    // INSIDE 2 OF THE MOST INNOVATIVE LUXURY HOMES THAT CHANGED THE GAME FOR 2026
    url: "https://www.youtube.com/watch?v=UMS3jzbdkgE",
    markers: parse(`
      0:58 podjazd +
      2:22 wejście
      2:35 rzut
3:15 konsola +
3:22 gabinet
4:20 kącik, wiatrak +
5:05 łazienka
5:55 garderoba
7:28 garderoba
9:23 garderoba
9:40 toaleta
10:25 konsola +
10:49 sypialnia
10:58 wiatrak +
12:26 łazienka
14:02 garderoba
15:48 jadalnia
16:25 kuchnia
17:53 salon
20:00 spiżarnia
20:45 pralnia
21:20 toaleta
22:10 garaż
23:15 taras
      27:05 podjazd
32:55 jadalnia
33:25 pralnia
      `),
  },
  {
    // MUST SEE... INSIDE THE VERY BEST LUXURY HOUSE I'VE EVER SEEN W/ NANNY QUARTERS FOR $5M
    url: "https://www.youtube.com/watch?v=Wnw4PEvBavQ",
    markers: parse(`
      0:00 wejście
0:10 rzut
1:00 podjazd +
2:44 rzut
3:29 toaleta
4:13 kuchnia +
4:34 jadalnia
7:53 salon
9:08 pralnia
10:25 toaleta
11:21 gabinet
12:13 toaleta
13:12 sypialnia
13:44 garderoba
13:58 toaleta
15:12 garderoba
15:27 toaleta
16:14 toaleta
17:23 garderoba
17:36 toaleta
18:10 konsola +
18:40 sypialnia
19:24 łazienka
20:59 garderoba
21:26 garderoba
      `),
  },
  {
    // Budowa domu w stylu toskańskim – rozmowa z inwestorami i inspiracje wnętrzarskie
    url: "https://www.youtube.com/watch?v=MNYgOPWb8WQ",
    markers: parse(`
0:04 podjazd
0:26 wejście
1:08 schody
1:15 jadalnia
1:25 kominek
1:50 salon
10:34 ściany
10:34 ściany
11:17 listwy
12:10 garderoba
13:02 wanna
13:44 sypialnia
15:31 świetlik +
15:51 kuchnia ++
16:20 kącik kawowy +
18:05 brama garażowa +
20:43 elewacja
20:59 rzut
21:41 ogród
27:45 rzut
28:48 prysznic
      `),
  },
  {
    // Inside a £7,950,000 Modern Home Just Outside Of London
    url: "https://www.youtube.com/watch?v=F5gBWs1KBl0",
    markers: parse(`
0:09 lukarna
0:17 podjazd
0:57 wejście
15:04 ogród
16:10 kuchnia ogrodowa
16:18 lukarna
      `),
  },
  {
    // HOME TOUR spektakularna REZYDENCJA - MAGICZNE miejsce LUKSUSOWE nieruchomości w Polsce
    url: "https://www.youtube.com/watch?v=9zxRK1swlzY",
    markers: parse(`
0:45 rzut
2:54 kort
3:15 elewacja
4:29 konsola
5:52 kominek
6:13 salon
7:54 gabinet
9:15 siłownia
10:10 toaleta
10:23 sauna
11:26 łazienka
12:43 kuchnia
15:0 jadalnia
18:41 toaleta
19:21 sypialnia
19:44 łazienka
20:11 sypialnia
20:32 sypialnia
21:20 kącik
21:34 garderoba
22:40 łazienka
2:50 łazienka
2:58 sypialnia
3:05 schody
3:24 sypialnia
3:37 gabinet
3:50 sypialnia
4:04 pokój
4:35 taras
      `),
  },
  {
    // Architecture and interior of a modern villa
    url: "https://www.youtube.com/watch?v=I0vhvZxNeKg",
    markers: parse(`
0:11 ogród
0:39 wejście
1:22 kuchnia
1:32 salon
2:29 sypialnia
2:50 łazienka
2:58 sypialnia
3:05 schody
3:24 sypialnia
3:37 gabinet
3:50 sypialnia
4:04 pokój
4:35 taras
      `),
  },
  {
    // Forest villa. //Architecture and interior of a modern villa
    url: "https://www.youtube.com/watch?v=p5JQj-mMFUM",
    markers: parse(`
0:12 elewacja +
0:25 podjazd
      `),
  },
  {
    // Villa Safari
    url: "https://www.youtube.com/watch?v=NpYLfeM-4a8",
    markers: parse(`
0:05 podjazd
0:27 wejście
0:46 jadalnia
0:56 kuchnia
1:21 salon
1:38 schody
1:54 kącik
2:06 sypialnia
2:11 łazienka
2:25 sypialnia
2:50 ogród
2:59 elewacja
3:19 gabinet
4:38 oświetlenie
      `),
  },
  {
    // Villa Belki exterior
    url: "https://www.youtube.com/watch?v=YSaChDhIz94",
    markers: parse(`
0:22 elewacja
0:52 brama garażowa
1:05 brama wjazdowa, ogrodzenie +
      `),
  },
  {
    // Villa Belki interior
    url: "https://www.youtube.com/watch?v=Uhr9Zb-gJHc",
    markers: parse(`
0:02 wejście
0:06 schody
0:31 jadalnia
0:36 kuchnia
0:44 salon
0:58 sypialnia
1:06 konsola
1:14 łazienka
1:27 gabinet
1:38 sypialnia
1:51 basen
      `),
  },
  {
    // Touring a Modern Mediterranean Villa in Mallorca
    url: "https://www.youtube.com/watch?v=Tii5Ptf2iVQ",
    markers: parse(`
0:53 elewacja
1:24 panele
1:40 wejście
2:20 jadalnia
2:24 salon
2:40 oświetlenie +
2:46 rtv, wentylacja +
3:44 kuchnia
4:15 schody +
4:47 kącik +
4:57 kącik
5:10 sypialnia
5:20 taras
5:36 kącik
5:40 łazienka
6:12 sypialnia
6:18 sypialnia
6:36 kuchnia ogrodowa
7:32 basen
      `),
  },
  {
    // Casa A12: la super casa moderna in cemento con viste mozzafiato in Sicilia - Puleo Architettura
    url: "https://www.youtube.com/watch?v=6Y3PnuYD4HE",
    markers: parse(`
1:13 elewacja
2:02 panele +
2:12 schody +
2:22 kącik
2:26 sypialnia
2:30 toaleta
2:36 schody +
2:40 jadalnia
2:48 salon
3:13 kuchnia
3:24 drzwi +
3:36 sypialnia
4:24 basen
      `),
  },
  {
    // The Shell House: la residenza Passivhaus che cambia con il sole - Piraccini + Potente Architettura
    url: "https://www.youtube.com/watch?v=5Kmkmmg9tWE",
    markers: parse(`
0:18 elewacja +
0:52 elewacja / okiennice +
1:03 wejście ++
1:17 kuchnia
1:20 salon / rtv
1:22 jadalnia
1:28 drzwi +
1:31 sypialnia
1:44 toaleta
1:57 kuchnia
2:41 elewacja +
4:44 panele
      `),
  },
  {
    // La casa di un architetto immersa in un'oasi di bamboo - Studio Scaramucci
    url: "https://www.youtube.com/watch?v=D0ozxrCPgdo",
    markers: parse(`
1:27 furtka +
2:14 kuchnia +
3:06 toaleta
4:19 okno +
      `),
  },
  {
    // All'interno di una casa moderna con vista sul Golfo Siciliano di Brucoli - Puleo Architettura
    url: "https://www.youtube.com/watch?v=EVBYr7KmP4o",
    markers: parse(`
0:29 kącik
2:29 drzwi +
2:41 toaleta
3:18 kuchnia
4:57 sypialnia / wentylacja +
5:12 toaleta +
5:32 toaleta
      `),
  },
  {
    // Villa GC: una casa moderna che riflette design ed eleganza - Alessandro Fontana Studio
    url: "https://www.youtube.com/watch?v=yPYi-3YLzfo",
    markers: parse(`
1:08 kuchnia +
1:26 wentylacja +
1:42 kącik
1:56 toaleta
2:29 salon / rtv +
2:46 drzwi +
2:57 drzwi +
3:01 sypialnia
3:19 toaleta +
3:44 oświetlenie +
4:12 okiennice
      `),
  },
  {
    // One House: la perfezione architettonica di una casa tra cielo e mare Siciliano - Iraci Architetti
    url: "https://www.youtube.com/watch?v=YorK6DTL4Mw",
    markers: parse(`
1:35 ogrodzenie
1:40 wejście
2:19 schody
2:44 salon / rtv
2:46 kuchnia
2:51 jadalnia
2:57 drzwi +
3:13 elewacja +
3:16 sypialnia
3:23 łazienka
3:35 elewacja +
3:54 schody
4:08 sauna
4:19 sauna +
4:29 schody
4:53 elewacja
6:14 basen
      `),
  },
  {
    // All'interno di una villa straordinaria a Mondello - Luigi Smecca Architetti (House Tour)
    url: "https://www.youtube.com/watch?v=yq0QL5vcje8",
    markers: parse(`
1:15 kuchnia +
1:21 schody / kącik +
1:30 salon / rtv
1:33 bar
1:43 jadalnia / kredens +
1:55 kącik / podłoga +
2:16 drzwi / podłoga +
2:21 toaleta
2:27 kuchnia +
2:30 bar
2:35 schody +
2:59 kino
3:36 kuchnia ogrodowa
3:44 sauna +
3:49 ogród
      `),
  },
  {
    // La casa di un architetto: un progetto tra contemporaneo e storia locale - MOG Architetti (Home Tour)
    url: "https://www.youtube.com/watch?v=9LDcQf_Q6mU",
    markers: parse(`
0:37 elewacja +
1:10 schody
1:16 wejście
1:38 kuchnia
1:48 drzwi
1:55 schody +
2:55 ogrodzenie +
2:58 schody +
3:29 ogrodzenie +
3:39 elewacja / wejście +
4:19 okno +
      `),
  },
  {
    // Villa Selvadolce: una casa moderna sulle colline Liguri con vista sul Golfo di Montecarlo - GHA
    url: "https://www.youtube.com/watch?v=qGZbFz5b2CE",
    markers: parse(`
0:41 sypialnia
0:45 kuchnia
1:23 wiatrak
1:32 rolety
1:51 jacuzzi
1:56 basen
2:04 wejście
2:12 kuchnia
2:36 jadalnia
2:39 szafa / drzwi
2:48 rtv +
3:32 kuchnia / wentylacja
3:55 sypialnia
4:02 łazienka
4:26 garderoba
4:30 świetlik
5:08 toaleta
5:14 drzwi
5:19 świetlik
6:14 panele
      `),
  },
  {
    // La casa moderna progettata per offrire una vista panoramica estesa sulla città - Damilano Studio
    url: "https://www.youtube.com/watch?v=fNZXQN7JHV0",
    markers: parse(`
1:00 szafa
1:18 salon / rtv
1:34 jadalnia / oświetlenie
1:36 kuchnia
1:43 toaleta
1:49 toaleta
1:57 sauna
3:33 kuchnia / oświetlenie
3:47 schody +
4:18 rolety
      `),
  },
  {
    // La ristrutturazione di una casa fronte lago con uno stile moderno - Nicola Salami Architetto
    url: "https://www.youtube.com/watch?v=d5cl79f6OQI",
    markers: parse(`
0:44 kominek
0:47 wejście
0:56 salon / oświetlenie
1:01 kuchnia / oświetlenie
1:03 drzwi
1:15 podłoga
1:20 salon
1:32 oświetlenie
1:50 kuchnia
2:21 salon
3:24 toaleta
3:30 sypialnia
3:47 toaleta
3:59 kącik / rtv
4:14 basen
      `),
  },
  {
    // A Designer’s Own Home. Luxury Byron Bay Beach House! Full House Tour
    url: "https://www.youtube.com/watch?v=AzyqNnuXB6U",
    markers: parse(`
4:13 pralnia
4:37 salon
5:46 kącik / biuro
6:14 schody
7:00 sypialnia
8:00 toaleta
9:15 łazienka
      `),
  },
  {
    // A Luxury Home Tour in Tasmania! 🍎 1850s Georgian Cottage Architectural Restoration & Extension 🏠
    url: "https://www.youtube.com/watch?v=D1d-Ho9FcyY",
    markers: parse(`
1:17 biuro
1:44 sypialnia
2:20 toaleta
3:08 sypialnia
3:24 kącik
4:10 łącznik
5:12 kuchnia +
7:50 pralnia
8:30 łazienka +
10:10 sypialnia
11:10 patio
11:25 salon
12:45 wejście
13:25 kuchnia +
      `),
  },
  {
    // Win this Luxury Modern Coastal Home! Full House Tour in Hampton
    url: "https://www.youtube.com/watch?v=caqjJZNNhzM",
    markers: parse(`
0:25 elewacja +
0:40 wejście +
0:55 schody
1:11 kuchnia +
1:52 spiżarnia
2:08 drzwi +
2:10 pralnia
2:25 jadalnia +
2:50 salon
3:30 basen
4:12 kuchnia +
4:23 toaleta
4:38 kącik
5:08 szatnia
5:23 schody
5:40 kącik
5:43 sypialnia
6:04 łazienka +
6:48 garderoba +
7:20 sypialnia
7:25 toaleta
7:42 sypialnia
7:44 toaleta
8:00 sypialnia
8:14 toaleta
9:27 elewacja +
      `),
  },
  {
    // A Luxury Modern House (you can WIN!) RMH Home Lottery House Tour Australia
    url: "https://www.youtube.com/watch?v=vAZZNu-u4K8",
    markers: parse(`
0:13 elewacja ++
0:27 wejście +
0:42 sypialnia
0:48 zasłony
1:12 garderoba
1:19 łazienka +
2:48 toaleta
3:05 schody +
3:06 szatnia
3:09 jadalnia
3:27 jadalnia
3:46 kuchnia +
5:10 świetlik / wentylacja +
6:22 salon / kominek ++
7:53 basen +
8:28 drzwi +
8:35 pralnia / świetlik
8:53 schody +
9:17 kącik +
9:20 sypialnia
9:28 szafa +
9:37 toaleta +
10:02 kącik / rtv
10:28 sypialnia
10:33 szafa +
10:56 sypialnia
10:59 toaleta
12:03 kuchnia / wentylacja +
12:11 bar
13:28 schody +
13:34 sypialnia
13:56 elewacja +
      `),
  },
  {
    // Modern Luxury Home Full Walk Through! Contemporary Interiors. Royal Melbourne Hospital House Tour.
    url: "https://www.youtube.com/watch?v=vZlP5JCp2Ek",
    markers: parse(`
0:29 elewacja +
0:42 wejście
1:08 sypialnia
1:30 garderoba
1:35 łazienka
2:24 drzwi +
2:40 kącik
2:45 bar
3:15 kuchnia +
3:45 spiżarnia +
3:55 jadalnia
4:15 salon / kominek +
4:40 wentylacja ++
5:15 toaleta
5:22 pralnia
5:30 schody
5:50 kącik
6:00 sypialnia
6:15 toaleta
6:45 kącik
7:05 sypialnia
7:10 toaleta
7:24 sypialnia
7:27 toaleta
8:06 elewacja +
      `),
  },
  {
    // Architectural Luxury Modern Home! Modern Home Tour. Royal Melbourne Hospital House Tour.
    url: "https://www.youtube.com/watch?v=MIsQ8LfG5Zk",
    markers: parse(`
0:44 wejście +
1:58 łazienka +
3:10 schody +
3:48 kuchnia
4:51 salon / kominek +
5:13 kominek / wentylacja +
6:30 pralnia
6:40 drzwi +
7:03 schody +
7:15 kącik / skosy +
7:30 rtv / wentylacja +
7:32 sypialnia / szafa
7:45 toaleta
8:15 sypialnia / toaletka
8:29 toaleta
8:39 schody +
9:19 basen
9:24 elewacja +
      `),
  },
  {
    // Architectural Family Home Tour! This Luxury $4.7M House! Royal Melbourne Hospital House Tour.
    url: "https://www.youtube.com/watch?v=SwhaRzVgPe8",
    markers: parse(`
0:40 elewacja +
0:52 wejście +
1:23 gabinet +
2:26 bar
3:25 pralnia
4:35 salon
5:30 kuchnia
6:55 spiżarnia
7:35 toaleta
8:15 sypialnia
8:55 łazienka ++
10:10 garderoba +
10:40 kuchnia ogrodowa
10:50 schody +
11:15 kącik +
11:45 sypialnia / szafa
11:55 toaleta
12:20 sypialnia
12:40 toaleta
14:30 elewacja +
      `),
  },
  {
    // Win this Luxury Home! 🤞 Multi Million Dollar Home in Hampton. Royal Melbourne Hospital Home Tour.
    url: "https://www.youtube.com/watch?v=Co-UmzEXfsA",
    markers: parse(`
0:35 elewacja +
0:54 wejście +
1:25 kącik +
2:25 sypialnia
2:40 toaleta
3:28 toaleta
3:40 szatnia
3:50 pralnia
4:05 spiżarnia
4:15 kuchnia
5:50 salon
6:30 prysznic ogrodowy
7:20 kuchnia ogrodowa
7:45 schody ++
8:25 sypialnia
8:35 toaleta
10:10 garderoba
10:25 łazienka
11:15 kącik
12:52 elewacja +
      `),
  },
  {
    // Casa in bio architettura con vista sul lago di Mergozzo - Elena Bertinotti Architetto (House Tour)
    url: "https://www.youtube.com/watch?v=5vdNKhc2GFE",
    markers: parse(`
0:06 elewacja
0:29 elewacja
0:36 elewacja / lukarna +
0:48 elewacja +
0:51 balkon / balustrada +
      `),
  },
  {
    // Project Newfoundland Home Tour - Interior Design, Home Decor, Furnishing, and Lighting
    url: "https://www.youtube.com/watch?v=H-4pEnCbKfA",
    markers: parse(`
1:11 wiatrołap
1:22 schody
1:30 szatnia
1:37 konsola
2:36 salon / kominek
4:08 jadalnia
4:40 oświetlenie / wentylacja
4:48 kredens / bufet
6:00 gabinet
7:28 kuchnia
9:31 kącik / rtv
11:19 sypialnia
      `),
  },
  {
    // Project New House Old Charm Tour – Custom Home Build
    url: "https://www.youtube.com/watch?v=UCfdaFulfus",
    markers: parse(`
1:37 elewacja
2:05 wejście
2:14 konsola / lustro
2:19 salon / rtv
2:31 schody
2:37 konsola / lustro
2:46 kuchnia
2:54 salon / kominek
2:57 jadalnia
3:00 sypialnia
3:03 łazienka
7:50 spiżarnia
10:20 szatnia
10:54 toaleta
11:59 sypialnia / zasłony
12:20 ekspres ++
12:39 sypialnia / zasłony
12:50 garderoba
13:36 łazienka
15:38 pralnia
16:47 łazienka
      `),
  },
  {
    // HOME TOUR ekskluzywny dom z BASENEM Grzegorz Wysok prezentuje wyjątkowe nieruchomości
    url: "https://www.youtube.com/watch?v=LR_uuo5JWuA",
    markers: parse(`
0:45 wejście
1:08 pergola
1:11 sypialnia
1:16 salon
1:20 elewacja
1:24 wejście
2:27 salon
4:18 jadalnia
4:52 kuchnia
5:27 pralnia
11:46 toaleta
12:18 sypialnia
13:35 sypialnia
14:44 łazienka
      `),
  },
  {
    // Zwykły bliźniak URZĄDZONY NIEZWYKLE! INSPIRUJĄCY pomysł na dom MEGA kuchnia KRĘCIMY nieruchomości
    url: "https://www.youtube.com/watch?v=wYzWe6wcRI0",
    markers: parse(`
0:55 wejście
1:58 kuchnia
4:24 panele
5:30 schody
8:57 panele
      `),
  },
  {
    // HOME TOUR Spektakularny DOM z basenem nad brzegiem Narwi. Na sprzedaż!
    url: "https://www.youtube.com/watch?v=HyH3wc5wjdk",
    markers: parse(`
1:05 schody
      `),
  },
  {
    // Wart 6.500.000 zł APARTAMENT w secesyjnej KAMIENICY sztuka w KUCHNI zamiast szafek Home Tour
    url: "https://www.youtube.com/watch?v=wMR5Ayn2Bwk",
    markers: parse(`
3:45 kuchnia +
      `),
  },
  {
    // Home tour - Nowoczesna STODOŁA w lesie. Na sprzedaż!
    url: "https://www.youtube.com/watch?v=lVqY-5qN5Fk",
    markers: parse(`
0:28 elewacja
6:20 schody
7:00 sypialnia / skosy
      `),
  },
  {
    // REZYDENCJA W ŚRODKU SOSNOWEGO LASU HOME TOUR + POMYSŁY NA URZĄDZENIE DZIAŁKI
    url: "https://www.youtube.com/watch?v=X7aA29Mcx1s",
    markers: parse(`
      `),
  },
  {
    // DOM MARZEŃ - NUTA MODERNIZMU POD WARSZAWĄ HOME TOUR W WYJĄTKOWEJ NIERUCHOMOŚCI
    url: "https://www.youtube.com/watch?v=wRoeDf8S7_4",
    markers: parse(`
4:45 schody +
5:59 schody
      `),
  },
  {
    // HOME TOUR: APARTAMENT NA PRYWATNEJ WYSPIE I KRĘCIMY NIERUCHOMOŚCI W FORT CZE
    url: "https://www.youtube.com/watch?v=ZPaaI5aB-LA",
    markers: parse(`
0:34 elewacja
1:07 wejście
1:10 salon
1:54 kuchnia
5:09 elewacja
      `),
  },
  {
    // Najpiękniejszy DOM MARZEŃ w Polsce! Ma DUŻE okna i leśny OGRÓD! EKO DOM pasywny NOWOCZESNA STODOŁA
    url: "https://www.youtube.com/watch?v=8_RxHV7XAjc",
    markers: parse(`
0:27 elewacja ++
1:18 schody
1:21 łazienka +
1:58 elewacja +
2:13 wejście +
2:27 kuchnia +
2:37 salon
2:49 kącik / zasłony
2:55 zasłony +
3:03 elewacja +
3:54 panele
4:44 jadalnia / wentylacja ++
7:15 drzwi / toaletka
7:24 sypialnia / wentylacja ++
      `),
  },
  {
    // Biała KUCHNIA MARZEŃ otwarta na ogród 🌿 Jak urządzić modną kuchnię z WYSPĄ w salonie? Inspiracje
    url: "https://www.youtube.com/watch?v=WBFJ5qVPwxA",
    markers: parse(`
0:09 elewacja +
0:12 kuchnia +
2:37 salon
2:49 kącik / zasłony
2:55 zasłony +
3:03 elewacja +
3:54 panele
4:44 jadalnia / wentylacja ++
7:15 drzwi / toaletka
7:24 sypialnia / wentylacja ++
      `),
  },
  {
    // Układ lepszy niż nowoczesna stodoła? Zalety domu na planie krzyża? - Pomysł na Dom #116
    url: "https://www.youtube.com/watch?v=v1RT6r6SL90",
    markers: parse(`
1:49 schody
11:18 panele
      `),
  },
  {
    // DOM MARZEŃ 95 m2 - MAŁY, ale praktyczny! "W środku wygląda na dużo większy!" Jak to możliwe?
    url: "https://www.youtube.com/watch?v=ZCTXLZh542w",
    markers: parse(`
1:00 elewacja
1:14 panele
      `),
  },
  {
    // Parterowy DOM MARZEŃ Agaty i Rafała! "Płacimy 350 zł za OGRZEWANIE na rok!" CO SIĘ SPRAWDZIŁO? 🏠
    url: "https://www.youtube.com/watch?v=TWNHhESVuUg",
    markers: parse(`
0:05 elewacja
0:09 panele
      `),
  },
  {
    // OGRÓD MARZEŃ od razu! Ma ALTANĘ, PALENISKO, małe drzewa i byliny 🌿 TOP Pomysły do ogrodu!
    url: "https://www.youtube.com/watch?v=_0Mx8UBDMdM",
    markers: parse(`
0:39 szopa
1:13 palenisko
1:53 ogród
3:35 kucnia ogrodowa
      `),
  },
  {
    // Sonia i Ben SAMI zbudowali DOM JAK Z KLOCKÓW! DOM MARZEŃ przyszłości - Szybka budowa! STODOŁA
    url: "https://www.youtube.com/watch?v=XKUuRPiQiDs",
    markers: parse(`
0:33 ogrodzenie
0:44 elewacja
0:58 wejście
1:08 schody
9:57 sypialnia / skosy
10:24 sypialnia / skosy
      `),
  },
  {
    // Zbudowali EKO DOM przyszłości! W ich salonie ROŚNIE DRZEWO 🌳 Pasywny DOM MARZEŃ NOWOCZESNA STODOŁA
    url: "https://www.youtube.com/watch?v=uYq5uaHx59I",
    markers: parse(`
0:04 elewacja / panele
0:14 wejście
10:40 schody
      `),
  },
  {
    // DOM jak ze SNÓW! Cudny kominek i huśtawka w salonie! Przytulny dom marzeń dla rodziny!
    url: "https://www.youtube.com/watch?v=GYaXrzcFkNg",
    markers: parse(`
0:11 elewacja
2:40 wejście
2:46 szatnia
3:22 toaleta
3:30 salon
3:44 elewacja
3:57 elewacja
4:48 jadalnia
4:54 kuchnia
6:28 schody ++
6:48 łazienka
7:28 sypialnia / skosy
8:10 kącik
8:37 sypialnia / skosy
      `),
  },
  {
    url: "https://www.youtube.com/watch?v=cNGArAUt8Ow",
    markers: [
      { text: "oświetlenie", time: 29 },
      { text: "oświetlenie", time: 105 },
      { text: "basen", time: 393 },
      { text: "bilard", time: 7 * 60 + 33 },
      { text: "szafa rack", time: 11 * 60 + 11 },
      { text: "schody", time: 13 * 60 + 29 },
      { text: "siłownia", time: 14 * 60 + 27 },
      { text: "garderoba", time: 17 * 60 + 40 },
      { text: "oświetlenie", time: 18 * 60 + 38 },
      { text: "balkon", time: 19 * 60 + 8 },
      { text: "toaleta", time: 20 * 60 },
      { text: "toaleta", time: 21 * 60 + 15 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=a9W0CT7dwDc",
    markers: [
      { text: "kuchnia ogrodowa", time: 10 * 60 + 59 },
      { text: "bilard", time: 18 * 60 + 30 },
      { text: "kino", time: 19 * 60 + 26 },
      { text: "siłownia", time: 20 * 60 + 8 },
      { text: "sauna", time: 20 * 60 + 54 },
      { text: "oświetlenie", time: 24 * 60 + 24 },
      { text: "oświetlenie", time: 24 * 60 + 53 },
      { text: "szafy", time: 25 * 60 + 17 },
      { text: "toaleta", time: 25 * 60 + 25 },
      { text: "balkon", time: 25 * 60 + 51 },
      { text: "biurko", time: 26 * 60 + 34 },
      { text: "biurko", time: 26 * 60 + 47 },
      { text: "toaletka", time: 27 * 60 + 4 },
      { text: "garderoba", time: 27 * 60 + 8 },
      { text: "prysznic", time: 27 * 60 + 14 },
      { text: "wanna", time: 27 * 60 + 16 },
      { text: "balkon", time: 27 * 60 + 20 },
      { text: "kącik kawowy", time: 28 * 60 + 33 },
      { text: "garderoba", time: 29 * 60 + 9 },
      { text: "łazienka", time: 29 * 60 + 38 },
      { text: "kuchnia ogrodowa", time: 30 * 60 + 51 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=bRjHkZQW-jg",
    markers: [
      { text: "schody", time: 1 * 60 + 1 },
      { text: "kuchnia", time: 2 * 60 + 12 },
      { text: "łącznik", time: 5 * 60 + 21 },
      { text: "toaleta", time: 7 * 60 + 50 },
      { text: "pralnia", time: 8 * 60 + 2 },
      { text: "kotłownia", time: 8 * 60 + 48 },
      { text: "skosy", time: 10 * 60 + 26 },
      { text: "balkon", time: 11 * 60 + 5 },
      { text: "garderoba", time: 11 * 60 + 31 },
      { text: "wanna", time: 11 * 60 + 56 },
      { text: "łazienka", time: 12 * 60 + 52 },
      { text: "toaleta", time: 13 * 60 + 33 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=QuIn59ONdpA",
    markers: [
      { text: "kuchnia", time: 1 * 60 + 10 },
      { text: "kuchnia ogrodowa", time: 1 * 60 + 43 },
      { text: "jadalnia", time: 2 * 60 + 20 },
      { text: "balkon", time: 3 * 60 + 5 },
      { text: "łazienka", time: 3 * 60 + 9 },
      { text: "garderoba", time: 3 * 60 + 22 },
      { text: "toaleta", time: 3 * 60 + 54 },
      { text: "toaleta", time: 4 * 60 + 24 },
      { text: "sauna", time: 6 * 60 + 19 },
      { text: "kino", time: 6 * 60 + 33 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=V2WKynZkjdM",
    markers: [
      { text: "schody", time: 1 * 60 + 3 },
      { text: "kuchnia", time: 1 * 60 + 3 },
      { text: "toaleta", time: 1 * 60 + 47 },
      { text: "schody", time: 12 * 60 + 5 },
      { text: "toaleta", time: 14 * 60 + 50 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=udQWw7qAJJo",
    markers: [
      { text: "wejście", time: 1 * 60 + 55 },
      { text: "kuchnia", time: 2 * 60 + 15 },
      { text: "jadalnia", time: 2 * 60 + 47 },
      { text: "oświetlenie", time: 3 * 60 + 7 },
      { text: "basen", time: 3 * 60 + 29 },
      { text: "toaleta", time: 8 * 60 + 40 },
      { text: "wanna", time: 9 * 60 + 19 },
      { text: "kucnia ogrodowa", time: 10 * 60 + 51 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=jv7Tgk2Hxvg",
    markers: [
      { text: "schody", time: 7 * 60 + 9 },
      { text: "sypialnia", time: 7 * 60 + 28 },
      { text: "sypialnia", time: 7 * 60 + 52 },
      { text: "sypialnia", time: 8 * 60 + 22 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=sDHvXDVJfUQ",
    markers: [
      { text: "okno", time: 13 * 60 + 10 },
      { text: "toaleta", time: 15 * 60 + 17 },
      { text: "łazienka", time: 19 * 60 + 28 },
      { text: "kuchnia ogrodowa", time: 23 * 60 + 22 },
    ],
  },
  { url: "https://www.youtube.com/watch?v=NaBIz7JiNCs" },
  { url: "https://www.youtube.com/watch?v=e3HWPmXsNrI" },
  {
    url: "https://www.youtube.com/watch?v=jcxXGeXuDAs",
    markers: [
      { text: "pralnia", time: 3 * 60 + 11 },
      { text: "szopa", time: 4 * 60 + 4 },
      { text: "jadalnia", time: 7 * 60 + 55 },
      { text: "szopa", time: 14 * 60 + 30 },
    ],
  },
  { url: "https://www.youtube.com/watch?v=TVsyoGU8a1Y" },
  {
    url: "https://www.youtube.com/watch?v=bYDHzGF75bc",
    markers: [
      { text: "toaleta", time: 0 * 60 + 39 },
      { text: "wentylacja", time: 4 * 60 + 53 },
      { text: "toaleta", time: 7 * 60 + 8 },
      { text: "łazienka", time: 7 * 60 + 15 },
      { text: "taras", time: 9 * 60 + 41 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=ICTzMaVLqfA",
    markers: [
      { text: "oświetlenie", time: 0 * 60 + 21 },
      { text: "wentylacja", time: 0 * 60 + 28 },
      { text: "bar", time: 1 * 60 + 58 },
      { text: "kuchnia", time: 3 * 60 + 0 },
      { text: "garderoba", time: 6 * 60 + 31 },
      { text: "łazienka", time: 7 * 60 + 32 },
      { text: "gabinet", time: 11 * 60 + 42 },
      { text: "smart", time: 12 * 60 + 54 },
      { text: "oświetlenie", time: 13 * 60 + 16 },
      { text: "sypialnia", time: 13 * 60 + 53 },
      { text: "tialeta", time: 14 * 60 + 37 },
      { text: "tialeta", time: 16 * 60 + 13 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=KAySrmPZnd0",
    markers: [
      { text: "pralnia", time: 14 * 60 + 6 },
      { text: "garderoba", time: 19 * 60 + 45 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=zW1cVmU91dM",
    markers: [
      { text: "zabudowa tv", time: 33 * 60 + 0 },
      { text: "zabudowa tv", time: 1 * 60 + 28 },
      { text: "kuchnia", time: 2 * 60 + 21 },
      { text: "garderoba", time: 3 * 60 + 10 },
      { text: "łazienka", time: 3 * 60 + 24 },
      { text: "sypialnia", time: 3 * 60 + 42 },
      { text: "garderoba", time: 4 * 60 + 8 },
      { text: "sypialnia", time: 4 * 60 + 15 },
      { text: "toaleta", time: 4 * 60 + 39 },
      { text: "pralnia", time: 4 * 60 + 56 },
      { text: "toaleta", time: 5 * 60 + 11 },
      { text: "sypialnia", time: 5 * 60 + 15 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=Dy8xoHPO-6A",
    markers: [
      { text: "kuchnia", time: 3 * 60 + 27 },
      { text: "spiżarnia", time: 4 * 60 + 37 },
      { text: "pralnia", time: 6 * 60 + 24 },
      { text: "łazienka", time: 8 * 60 + 17 },
      { text: "schody", time: 8 * 60 + 54 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=ByeOhF5FLGI",
    markers: [
      { text: "kuchnia", time: 2 * 60 + 58 },
      { text: "taras", time: 3 * 60 + 41 },
      { text: "basen", time: 3 * 60 + 48 },
      { text: "sypialnia", time: 5 * 60 + 3 },
      { text: "toaleta", time: 5 * 60 + 6 },
      { text: "garderoba", time: 5 * 60 + 43 },
      { text: "łazienka", time: 6 * 60 + 2 },
      { text: "wanna", time: 6 * 60 + 21 },
      { text: "toaleta", time: 6 * 60 + 26 },
      { text: "sypialnia", time: 6 * 60 + 34 },
      { text: "toaletka", time: 6 * 60 + 49 },
      { text: "siłownia", time: 6 * 60 + 59 },
      { text: "toaleta", time: 7 * 60 + 15 },
      { text: "taras", time: 7 * 60 + 24 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=diXIpoB2AOs",
    markers: [
      { text: "sypialnia", time: 8 * 60 + 53 },
      { text: "sypialnia", time: 9 * 60 + 25 },
      { text: "schody", time: 10 * 60 + 24 },
      { text: "sypialnia", time: 11 * 60 + 25 },
      { text: "toaletka", time: 11 * 60 + 55 },
      { text: "toaleta", time: 12 * 60 + 44 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=VQWN_YxGQC4",
    markers: [
      { text: "konsola", time: 0 * 60 + 30 },
      { text: "sypialnia", time: 3 * 60 + 55 },
      { text: "toaleta", time: 4 * 60 + 54 },
      { text: "łazienka", time: 5 * 60 + 13 },
      { text: "toaleta", time: 5 * 60 + 46 },
      { text: "sypialnia", time: 5 * 60 + 50 },
      { text: "sypialnia", time: 6 * 60 + 20 },
      { text: "toaleta", time: 6 * 60 + 27 },
      { text: "sypialnia", time: 7 * 60 + 22 },
      { text: "jadalnia", time: 7 * 60 + 51 },
      { text: "kuchnia", time: 8 * 60 + 19 },
      { text: "toaleta", time: 8 * 60 + 45 },
      { text: "pralnia", time: 8 * 60 + 51 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=55q22MncaUY",
    markers: [
      { text: "schody", time: 0 * 60 + 29 },
      { text: "toaleta", time: 0 * 60 + 41 },
      { text: "oświetlenie", time: 1 * 60 + 30 },
      { text: "kuchnia", time: 2 * 60 + 22 },
      { text: "kino", time: 3 * 60 + 26 },
      { text: "toaleta", time: 4 * 60 + 20 },
      { text: "siłownia", time: 4 * 60 + 25 },
      { text: "toaleta", time: 4 * 60 + 43 },
      { text: "schody", time: 5 * 60 + 14 },
      { text: "łazienka", time: 6 * 60 + 4 },
      { text: "wanna", time: 6 * 60 + 13 },
      { text: "toaletka", time: 7 * 60 + 20 },
      { text: "łazienka", time: 7 * 60 + 39 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=foTjwFxUlDA",
    markers: [
      { text: "wejście", time: 1 * 60 + 25 },
      { text: "pralnia", time: 5 * 60 + 34 },
      { text: "kino", time: 8 * 60 + 32 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=p8x7sX4q-T0",
    markers: [
      { text: "elewacja", time: 0 * 60 + 56 },
      { text: "balkon", time: 2 * 60 + 41 },
      { text: "kuchnia", time: 2 * 60 + 50 },
      { text: "kuchnia ogrodowa", time: 5 * 60 + 13 },
      { text: "wentylacja", time: 6 * 60 + 22 },
      { text: "toaleta", time: 6 * 60 + 58 },
      { text: "pralnia", time: 7 * 60 + 8 },
      { text: "sypialnia", time: 7 * 60 + 20 },
      { text: "łazienka", time: 8 * 60 + 24 },
      { text: "wanna", time: 9 * 60 + 26 },
      { text: "balkon", time: 9 * 60 + 57 },
      { text: "schody", time: 10 * 60 + 21 },
      { text: "pralnia", time: 11 * 60 + 29 },
      { text: "sauna", time: 12 * 60 + 54 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=bKs5YEHQ0cc",
    markers: [
      { text: "chodnik", time: 0 * 60 + 16 },
      { text: "oświetlenie", time: 0 * 60 + 53 },
      { text: "wejście", time: 0 * 60 + 55 },
      { text: "schody", time: 1 * 60 + 5 },
      { text: "kuchnia", time: 1 * 60 + 56 },
      { text: "bar", time: 2 * 60 + 36 },
      { text: "oświetlenie", time: 3 * 60 + 32 },
      { text: "spiżarnia", time: 5 * 60 + 26 },
      { text: "toaleta", time: 5 * 60 + 53 },
      { text: "elewacja", time: 7 * 60 + 54 },
      { text: "sauna", time: 8 * 60 + 1 },
      { text: "toaleta", time: 8 * 60 + 7 },
      { text: "garderoba", time: 9 * 60 + 56 },
      { text: "schody", time: 10 * 60 + 24 },
      { text: "garderoba", time: 10 * 60 + 55 },
      { text: "wanna", time: 11 * 60 + 41 },
      { text: "łazienka", time: 12 * 60 + 4 },
      { text: "gabinet", time: 13 * 60 + 0 },
      { text: "łazienka", time: 14 * 60 + 6 },
      { text: "balkon", time: 14 * 60 + 18 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=KBIcPrWK4kM",
    markers: [
      { text: "elewacja", time: 0 * 60 + 21 },
      { text: "wejście", time: 2 * 60 + 45 },
      { text: "kominek", time: 4 * 60 + 1 },
      { text: "bar", time: 5 * 60 + 16 },
      { text: "kino", time: 6 * 60 + 20 },
      { text: "gabinet", time: 7 * 60 + 8 },
      { text: "konsola", time: 8 * 60 + 29 },
      { text: "kuchnia", time: 8 * 60 + 48 },
      { text: "oświetlenie", time: 8 * 60 + 53 },
      { text: "ekspres", time: 9 * 60 + 6 },
      { text: "basen", time: 10 * 60 + 10 },
      { text: "kuchnia ogrodowa", time: 11 * 60 + 30 },
      { text: "siłownia", time: 13 * 60 + 57 },
      { text: "rtv", time: 15 * 60 + 27 },
      { text: "sypialnia", time: 15 * 60 + 43 },
      { text: "toaleta", time: 15 * 60 + 47 },
      { text: "garderoba", time: 16 * 60 + 22 },
      { text: "toaleta", time: 16 * 60 + 26 },
      { text: "toaleta", time: 16 * 60 + 48 },
      { text: "garderoba", time: 16 * 60 + 52 },
      { text: "sypialnia", time: 16 * 60 + 54 },
      { text: "toaleta", time: 17 * 60 + 37 },
      { text: "sypialnia", time: 18 * 60 + 17 },
      { text: "wentylacja", time: 18 * 60 + 28 },
      { text: "garderoba", time: 18 * 60 + 43 },
      { text: "łazienka", time: 19 * 60 + 6 },
      { text: "łazienka", time: 19 * 60 + 35 },
      { text: "garderoba", time: 19 * 60 + 59 },
      { text: "siłownia", time: 20 * 60 + 36 },
      { text: "oświetlenie", time: 20 * 60 + 48 },
      { text: "szafa / listwy", time: 21 * 60 + 18 },
      { text: "kuchnia", time: 21 * 60 + 26 },
      { text: "pralnia", time: 21 * 60 + 47 },
      { text: "garaż", time: 21 * 60 + 56 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=YsKt0DOzXWo",
    markers: [
      { text: "elewacja", time: 0 * 60 + 15 },
      { text: "wejście", time: 0 * 60 + 26 },
      { text: "jadalnia", time: 0 * 60 + 45 },
      { text: "oświetlenie", time: 0 * 60 + 54 },
      { text: "salon", time: 1 * 60 + 12 },
      { text: "rtv", time: 1 * 60 + 20 },
      { text: "kominek", time: 1 * 60 + 21 },
      { text: "kuchnia", time: 1 * 60 + 45 },
      { text: "bar", time: 1 * 60 + 59 },
      { text: "ekspres", time: 2 * 60 + 15 },
      { text: "kuchnia ogrodowa", time: 2 * 60 + 37 },
      { text: "szafa", time: 3 * 60 + 10 },
      { text: "toaleta", time: 3 * 60 + 19 },
      { text: "sypialnia / zasłony / wentylacja", time: 3 * 60 + 31 },
      { text: "garderoba", time: 3 * 60 + 51 },
      { text: "łazienka", time: 4 * 60 + 5 },
      { text: "drzwi", time: 4 * 60 + 25 },
      { text: "siłownia", time: 4 * 60 + 30 },
      { text: "świetlik", time: 4 * 60 + 40 },
      { text: "kino +", time: 4 * 60 + 47 },
      { text: "gabinet", time: 4 * 60 + 57 },
      { text: "pralnia +", time: 5 * 60 + 32 },
      { text: "szatnia", time: 5 * 60 + 48 },
      { text: "elewacja / ogrodzenie", time: 6 * 60 + 5 },
      { text: "schody +", time: 6 * 60 + 9 },
      { text: "gabinet +", time: 6 * 60 + 24 },
      { text: "pralnia / wentylacja +", time: 6 * 60 + 39 },
      { text: "sypialnia", time: 6 * 60 + 45 },
      { text: "toaleta", time: 6 * 60 + 48 },
      { text: "salon", time: 6 * 60 + 53 },
      { text: "toaleta", time: 7 * 60 + 17 },
      { text: "drzwi", time: 7 * 60 + 25 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=Zlddt7frCg0",
    markers: [
      { text: "bar", time: 11 * 60 + 5 },
      { text: "kuchnia ogrodowa", time: 13 * 60 + 58 },
      { text: "boisko", time: 17 * 60 + 26 },
      { text: "szopa", time: 17 * 60 + 34 },
      { text: "siłownia", time: 17 * 60 + 54 },
      { text: "świetlik", time: 17 * 60 + 57 },
      { text: "boisko", time: 17 * 60 + 38 },
      { text: "ekspres", time: 22 * 60 + 49 },
      { text: "balkon", time: 27 * 60 + 33 },
      { text: "bar", time: 28 * 60 + 21 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=I5ZouUctFTI",
    markers: [
      { text: "wejście", time: 1 * 60 + 21 },
      { text: "basen", time: 4 * 60 + 27 },
      { text: "sauna", time: 5 * 60 + 10 },
      { text: "siłownia", time: 5 * 60 + 23 },
      { text: "kino", time: 6 * 60 + 26 },
      { text: "toaleta", time: 7 * 60 + 31 },
      { text: "schody", time: 8 * 60 + 36 },
      { text: "balkon", time: 9 * 60 + 43 },
      { text: "wanna", time: 9 * 60 + 57 },
      { text: "pralnia", time: 11 * 60 + 31 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=IRffovBXIUE",
    markers: [
      { text: "wejście", time: 0 * 60 + 4 },
      { text: "oświetlenie / wentylacja", time: 2 * 60 + 33 },
      { text: "bar", time: 2 * 60 + 39 },
      { text: "kuchnia", time: 3 * 60 + 5 },
      { text: "spiżarnia / pralnia", time: 4 * 60 + 32 },
      { text: "salon", time: 5 * 60 + 7 },
      { text: "rtv / kominek", time: 5 * 60 + 13 },
      { text: "basen", time: 6 * 60 + 50 },
      { text: "sypialnia", time: 8 * 60 + 32 },
      { text: "toaletka", time: 8 * 60 + 36 },
      { text: "łazienka", time: 8 * 60 + 47 },
      { text: "toaletka", time: 9 * 60 + 15 },
      { text: "kino", time: 10 * 60 + 1 },
      { text: "garaż", time: 11 * 60 + 17 },
      { text: "bawialnia", time: 12 * 60 + 8 },
      { text: "sypialnia", time: 13 * 60 + 20 },
      { text: "sypialnia", time: 13 * 60 + 55 },
      { text: "łazienka", time: 14 * 60 + 23 },
      { text: "sypialnia", time: 14 * 60 + 32 },
      { text: "łazienka", time: 15 * 60 + 36 },
      { text: "garderoba", time: 16 * 60 + 51 },
      { text: "sypialnia", time: 18 * 60 + 19 },
      { text: "balkon", time: 19 * 60 + 29 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=e1KOwce3RTM",
    markers: [
      { text: "kuchnia", time: 1 * 60 + 14 },
      { text: "kuchnia", time: 4 * 60 + 41 },
      { text: "gabinet", time: 6 * 60 + 2 },
      { text: "bar", time: 11 * 60 + 2 },
      { text: "spiżarnia", time: 12 * 60 + 20 },
      { text: "pralnia", time: 12 * 60 + 55 },
      { text: "bar", time: 13 * 60 + 31 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=lBbwU1QyUD4",
    markers: [
      { text: "wejście", time: 0 * 60 + 1 },
      { text: "kuchnia", time: 0 * 60 + 18 },
      { text: "ekspres", time: 1 * 60 + 30 },
      { text: "jadalnia", time: 1 * 60 + 56 },
      { text: "salon +", time: 2 * 60 + 33 },
      { text: "kominek", time: 2 * 60 + 42 },
      { text: "schody", time: 3 * 60 + 58 },
      { text: "szatnia +", time: 4 * 60 + 50 },
      { text: "bawialnia +", time: 5 * 60 + 43 },
      { text: "łazienka", time: 6 * 60 + 1 },
      { text: "sypialnia", time: 6 * 60 + 40 },
      { text: "gabinet", time: 6 * 60 + 43 },
      { text: "szafa", time: 7 * 60 + 15 },
      { text: "toaleta", time: 7 * 60 + 19 },
      { text: "elewacja", time: 7 * 60 + 34 },
    ],
  },
  {
    // Inside Miami-Based Interior Designer Juan Poggi’s Home
    url: "https://www.youtube.com/watch?v=Bh1JyYKNmGs",
    markers: [
      { text: "elewacja", time: 0 * 60 + 13 },
      { text: "wejście", time: 0 * 60 + 18 },
      { text: "rolety", time: 2 * 60 + 11 },
      { text: "kuchnia", time: 2 * 60 + 20 },
      { text: "wentylacja", time: 4 * 60 + 3 },
      { text: "jadalnia", time: 5 * 60 + 34 },
      { text: "basen", time: 6 * 60 + 54 },
      { text: "bar", time: 8 * 60 + 2 },
      { text: "sypialnia", time: 8 * 60 + 48 },
      { text: "szafa / wentylacja", time: 9 * 60 + 0 },
      { text: "toaleta", time: 9 * 60 + 16 },
      { text: "toaleta", time: 9 * 60 + 57 },
      { text: "balkon", time: 0 * 60 + 40 },
      { text: "rtv", time: 1 * 60 + 26 },
      { text: "oświetlenie / wentylacja", time: 1 * 60 + 28 },
      { text: "balkon", time: 5 * 60 + 23 },
      { text: "łazienka", time: 5 * 60 + 38 },
      { text: "elewacja", time: 7 * 60 + 34 },
    ],
  },
  {
    // Inside a £5,950,000 Waterfront Apartment in Chelsea Harbour, London
    url: "https://www.youtube.com/watch?v=Plw9zsGn4yI",
    markers: parse(`
0:30 kuchnia
0:39 oświetlenie
1:54 jadalnia
2:23 zasłony
2:32 konsola
2:52 salon
3:19 rtv
3:36 kominek
4:29 konsola
4:32 szafa / wentylacja
4:42 toaletka
5:03 sypialnia
5:27 garderoba
5:58 łazienka
7:25 balkon
7:57 sypialnia
8:00 szafa
8:18 toaletka
8:28 sypialnia
9:10 konsola / wentylacja
9:26 łazienka
10:14 toaleta
10:41 toaleta
      `),
  },
  {
    // Inside a £4,750,000 Modern Apartment with Stunning Coastal Views
    url: "https://www.youtube.com/watch?v=i1oTgYo3_ow",
    markers: parse(`
1:24 wejście
1:37 konsola / oświetlenie
1:57 konsola
2:22 drzwi
2:30 konsola
2:40 kuchnia / wentylacja
3:43 oświetlenie +
4:06 kącik +
4:15 jadalnia +
4:35 salon
4:55 szafa
5:05 kącik
5:19 balkon
5:52 pralnia
5:58 toaleta
6:03 wentylacja
6:12 sypialnia
6:33 konsola / wentylacja
6:44 garderoba +
6:54 łazienka
7:05 oświetlenie
7:50 sypialnia
7:59 toaletka
8:18 toaleta
      `),
  },
  {
    // Inside a $8,998,000 Miami Mansion in an Exclusive Neighbourhood
    url: "https://www.youtube.com/watch?v=jF7ncqj3PtU",
    markers: parse(`
0:37 brama
0:57 elewacja
1:14 wejście
1:45 schody
2:06 kącik +
2:15 konsola
2:51 basen
2:54 kuchnia
3:26 jadalnia
4:14 kuchnia / wentylacja
5:33 rtv
6:21 kuchnia ogrodowa
6:56 toaleta
7:00  basen
9:56 garderoba
9:59 toaleta
10:12 garaż
10:56 toaleta
11:23 gabinet
11:39 sypialnia +
11:56 garderoba
11:59 toaleta
12:02 konsola
12:33 kącik / wentylacja
12:38 sypialnia
12:47 konsola / wentylacja
13:27 łazienka
14:03 toaleta
      `),
  },
  {
    // Inside a £6,950,000 Beachfront Home with Bohemian Interiors ✨
    url: "https://www.youtube.com/watch?v=TQplPcsWIWQ",
    markers: parse(`
0:22 wejście
1:16 konsola
5:01 konsola
8:16 kotłownia / szafa jack
9:32 sypialnia / skosy
10:38 szafa / skosy
10:53 łazienka / skosy
12:04 szafa / skosy
12:11 łazienka / skosy
13:24 sypialnia / skosy
13:34 toaleta / skosy
13:57 korytarz / skosy
14:07 sypialnia / skosy
14:42 toaleta / skosy
15:09 prysznic ogrodowy
      `),
  },
  {
    // Inside A Sustainable Luxury £3,750,000 Cheshire Home
    url: "https://www.youtube.com/watch?v=ysKW4N9zNXA",
    markers: parse(`
0:16 elewacja
1:25 wejście / brama
1:32 konsola / drzwi
2:33 kuchnia
2:55 oświetlenie
4:34 spiżarnia
5:44 jadalnia
6:27 szatnia / prysznic
6:38 salon
6:42 kominek
7:30 schody
7:35 toaleta
9:27 toaleta
9:49 gabinet
9:56 kino
10:01 pralnia
11:24 sypialnia
11:55 łazienka
12:39 balkon
13:19 pralnia
13:35 toaleta
13:48 sypialnia / szafa
14:08 sypialnia
14:25 toaleta
14:45 świetlik
15:29 sypialnia / skosy
15:36 toaleta
15:55 szafa / skosy
16:19 toaleta
16:34 gabinet / skosy
17:08 kącik / skosy
      `),
  },
  {
    // Inside a $26,000,000 New York Townhouse in The West Village
    url: "https://www.youtube.com/watch?v=t_cW76UNt_c",
    markers: parse(`
0:59 wejście
1:02 kącik
1:05 konsola
1:08 szafa / wentylacja
1:09 toaleta
1:34 kuchnia
2:18 jadalnia
3:15 taras
4:00 salon
4:03 kominek
4:51 toaleta
4:57 jadalnia
5:05 bar
5:37 sypialnia / wentylacja
5:47 balkon
6:10 garderoba
6:17 łazienka / wentylacja +
6:29 wanna +
6:50 sypialnia / wentylacja
6:56 toaletka
7:06 toaleta
7:18 sypialnia
7:33 toaleta
7:59 kącik
8:00 gabinet / wentylacja
9:05 pralnia
9:28 świetlik
      `),
  },
  {
    // Inside a $20,000,000 New York Townhouse In The West Village
    url: "https://www.youtube.com/watch?v=tjaeQ2wUIUc",
    markers: parse(`
3:16 barek
4:05 salon
4:25 kącik / jadalnia
4:31 kuchnia
4:41 oświetlenie / wentylacja
5:26 gabinet
5:52 szatnia
6:05 smart
6:50 kotłownia
6:57 pralnia
7:29 świetlik
9:17 kuchnia ogrodowa
10:28 sypialnia
11:00 garderoba
12:13 sypialnia / skosy
12:18 świetlik / wentylacja 
13:06 sypialnia
13:15 szafa / wentylacja 
13:42 kuchnia ogrodowa
      `),
  },
  {
    // Inside a £5,950,000 Central London Apartment with Amazing Thames Views
    url: "https://www.youtube.com/watch?v=cAKFnpgyYwQ",
    markers: parse(`
1:22 rewizja
4:42 jadalnia / kredens +
5:12 sypialnia
7:40 kącik / biurko
8:38 jadalnia
8:43 konsola / lustro
8:46 wejście / szafa
8:48 pralnia
      `),
  },
  {
    // Inside a Restored £3,485,000 Mews House In Notting Hill
    url: "https://www.youtube.com/watch?v=o_NFKowx8CA",
    markers: parse(`
2:20 wejście
2:40 toaleta
3:15 kuchnia / okap
9:35 pralnia
14:32 łazienka / wanna +
15:53 toaleta
16:30 gabinet / skosy
      `),
  },
  {
    // Inside a $9,000,000 Luxury 8 Bedroom Miami Mansion with Swimming Pool
    url: "https://www.youtube.com/watch?v=R_9-JElwV2A",
    markers: parse(`
1:03 podjazd / brama
1:13 garaż / brama
1:58 wejście
2:32 salon
2:40 kominek
3:13 smart / oświetlenie +
3:18 jadalnia +
3:22 kredens
3:30 elewacja
3:44 kuchnia / wentylacja
5:06 salon / rtv
5:44 toaleta
5:50 pralnia
5:53 garaż
7:27 konsola
7:36 sypialnia
7:50 wentylacja / oświetlenie ++
8:35 konsola
9:07 łazienka
10:14 kącik / gabinet
13:20 kuchnia ogrodowa
13:45 toaleta
      `),
  },
  {
    // Inside Footballer Zlatan Ibrahimovic’ former Manchester Mansion
    url: "https://www.youtube.com/watch?v=2aVDki0LfkQ",
    markers: parse(`
20:37 pralnia
22:36 sypialnia / skosy
22:50 toaleta / skosy
      `),
  },
  {
    // Inside a $85,000,000 New York Townhouse with Indoor Swimming Pool
    url: "https://www.youtube.com/watch?v=7v4RulDkr-o",
    markers: parse(`
2:25 konsola / lustro
2:48 salon / kominek
3:48 jadalnia +
3:55 konsola / lustro
4:19 kącik
4:35 kuchnia
5:18 kącik / kominek
7:00 salon / wentylacja
7:37 gabinet / wentylacja
8:26 kącik / wentylacja
9:25 sypialnia / wentylacja
9:56 roleta
10:41 łazienka
11:33 łazienka / wentylacja
12:05 kącik
12:37 sypialnia / wentylacja
12:57 łazienka
13:05 sypialnia / biurko
13:25 łazienka
13:55 sypialnia / biurko
14:12 łazienka
14:18 sypialnia
14:38 kącik
15:03 toaleta
16:06 basen / spa
      `),
  },
  {
    // Inside a £3,800,000 Central London Penthouse | Kings Cross
    url: "https://www.youtube.com/watch?v=6ipQrXy-Ry8",
    markers: parse(`
1:02 kuchnia / wentylacja
1:31 konsola
1:33 sypialnia
1:37 plan
4:00 jadalnia
4:53 toaleta
4:57 drzwi
5:43 kącik / oświetlenie
8:37 sypialnia / wentylacja
10:00 łazienka
10:46 szafa
11:10 drzwi
11:14 toaleta
11:42 toaleta
11:45 pralnia
11:57 konsola +
12:07 drzwi
12:30 sypialnia +
13:14 toaleta / oświetlenie
13:45 szafa / rolety
      `),
  },
  {
    // Inside Erika Fox's Upper East Side, New York Apartment
    url: "https://www.youtube.com/watch?v=-4JvfrZCDdI",
    markers: parse(`
0:42 konsola
1:43 konsola / lustro
1:52 szatnia
2:13 salon
3:48 kącik
5:05 rtv
9:13 jadalnia / kredens
12:10 kuchnia
13:28 sypialnia / toaletka
15:05 szafa
      `),
  },
  {
    // Inside a £5,000,000 Fully Renovated Victorian London Townhouse
    url: "https://www.youtube.com/watch?v=MKklxO0PgU0",
    markers: parse(`
1:05 wejście
1:09 konsola / lustro
1:50 drzwi
1:55 toaleta
2:05 kuchnia
3:06 jadalnia
3:38 kącik / wentylacja
3:50 schody +
5:02 plan
6:10 schody +
6:23 salon
6:26 rtv / kominek
7:25 gabinet
7:53 szatnia
7:55 pralnia
8:23 salon / kominek
9:47 sypialnia / szafa
11:40 łazienka / skosy
      `),
  },
  {
    // Inside a $10,500,000 Tropical Dream Home In Miami, Florida
    url: "https://www.youtube.com/watch?v=zMqIWPo58AE",
    markers: parse(`
1:02 furtka
2:18 wejście
2:40 konsola
2:45 kącik / wentylacja
3:41 jadalnia
4:11 sypialnia / toaleta
4:20 gabinet
5:14 salon / rtv
5:27 drzwi / wentylacja
7:43 kuchnia
8:14 spiżarnia
8:19 pralnia
8:54 smart
9:19 kuchnia ogrodowa
10:12 garaż
12:01 kącik
12:47 gabinet
15:25 kino / rtv
      `),
  },
  {
    // Inside a £30,000,000 Mayfair Townhouse with Underground Pool, Spa & Cinema
    url: "https://www.youtube.com/watch?v=X0P-TrDrA6Y",
    markers: parse(`
3:54 sypialnia
4:09 toaleta
4:33 szafa
4:54 toaleta
5:00 sypialnia
5:06 oświetlenie +
5:14 szafa
5:19 sypialnia
5:36 toaleta +
6:08 sypialnia
6:50 łazienka
7:39 toaleta
7:57 toaletka
8:00 garderoba
8:14 smart
8:48 salon
9:00 gabinet
9:06 oświetlenie / wentylacja +
9:23 toaleta +
14:57 toaleta
15:00 spa
15:23 bar
15:35 sauna
15:59 kino
17:48 toaleta
18:30 sauna
21:56 łazienka
23:01 sypialnia
23:04 wentylacja / oświetlenie +
23:07 szafa
24:39 toaleta
25:01 toaleta
25:39 kuchnia +
26:09 świetlik
26:33 jadalnia +
26:40 salon +
      `),
  },
  {
    url: "https://www.youtube.com/watch?v=lIiMDDdKXZ8",
    markers: [
      { text: "elewacja", time: 0 * 60 + 2 },
      { text: "wejście", time: 0 * 60 + 33 },
      { text: "wentylacja", time: 0 * 60 + 43 },
      { text: "konsola", time: 0 * 60 + 47 },
      { text: "salon", time: 1 * 60 + 15 },
      { text: "jadalnia", time: 3 * 60 + 29 },
      { text: "bar", time: 3 * 60 + 39 },
      { text: "kuchnia", time: 4 * 60 + 12 },
      { text: "oświetlenie", time: 5 * 60 + 35 },
      { text: "jadalnia", time: 5 * 60 + 56 },
      { text: "salon", time: 6 * 60 + 20 },
      { text: "oświetlenie / wentylacja", time: 7 * 60 + 11 },
      { text: "basen", time: 7 * 60 + 34 },
      { text: "toaletka", time: 8 * 60 + 14 },
      { text: "toaleta", time: 8 * 60 + 43 },
      { text: "pokój", time: 9 * 60 + 6 },
      { text: "sypialnia", time: 9 * 60 + 38 },
      { text: "szafa", time: 9 * 60 + 40 },
      { text: "drzwi", time: 9 * 60 + 44 },
      { text: "toaleta", time: 9 * 60 + 55 },
      { text: "elewacja", time: 10 * 60 + 0 },
      { text: "garaż", time: 10 * 60 + 12 },
      { text: "schody", time: 10 * 60 + 20 },
      { text: "bawialnia", time: 10 * 60 + 56 },
      { text: "drzwi / wentylacja", time: 11 * 60 + 5 },
      { text: "sypialnia", time: 11 * 60 + 15 },
      { text: "szafa", time: 11 * 60 + 24 },
      { text: "toaleta", time: 11 * 60 + 28 },
      { text: "pralnia", time: 11 * 60 + 39 },
      { text: "sypialnia / wentylacja", time: 11 * 60 + 46 },
      { text: "sypialnia", time: 11 * 60 + 56 },
      { text: "garderoba", time: 13 * 60 + 0 },
      { text: "łazienka", time: 13 * 60 + 24 },
      { text: "sauna", time: 13 * 60 + 32 },
      { text: "łazienka", time: 13 * 60 + 47 },
      { text: "sauna", time: 13 * 60 + 57 },
      { text: "schody", time: 14 * 60 + 14 },
      { text: "salon", time: 14 * 60 + 25 },
      { text: "siłownia / spa +", time: 15 * 60 + 12 },
      { text: "basen", time: 15 * 60 + 37 },
      { text: "łazienka", time: 16 * 60 + 4 },
      { text: "sauna +", time: 16 * 60 + 8 },
      { text: "kino", time: 16 * 60 + 21 },
      { text: "toaleta", time: 16 * 60 + 53 },
      { text: "sypialnia", time: 17 * 60 + 13 },
      { text: "kuchnia ogrodowa", time: 18 * 60 + 3 },
      { text: "kuchnia", time: 18 * 60 + 44 },
      { text: "wentylacja", time: 18 * 60 + 56 },
      { text: "sypialnia", time: 19 * 60 + 5 },
    ],
  },
  {
    // Touring a $10,000,000 Miami Beachfront Condo With Incredible Ocean Views
    url: "https://www.youtube.com/watch?v=Skc4eh7efA4",
    markers: [
      { text: "balkon", time: 0 * 60 + 40 },
      { text: "rtv", time: 1 * 60 + 26 },
      { text: "oświetlenie / wentylacja", time: 1 * 60 + 28 },
      { text: "sypialnia", time: 4 * 60 + 29 },
      { text: "balkon", time: 5 * 60 + 23 },
      { text: "łazienka", time: 5 * 60 + 38 },
      { text: "toaleta", time: 6 * 60 + 23 },
      { text: "kuchnia", time: 7 * 60 + 3 },
      { text: "sauna", time: 11 * 60 + 10 },
      { text: "toaleta", time: 11 * 60 + 45 },
      { text: "gabinet", time: 11 * 60 + 50 },
      { text: "toaleta", time: 12 * 60 + 10 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=Lh67DMwZ2MY",
    markers: [
      { text: "kuchnia ogrodowa", time: 14 * 60 + 28 },
      { text: "oświetlenie", time: 16 * 60 + 22 },
      { text: "sypialnia", time: 17 * 60 + 22 },
      { text: "toaleta", time: 17 * 60 + 39 },
      { text: "garderoba", time: 17 * 60 + 52 },
      { text: "pralnia", time: 17 * 60 + 58 },
      { text: "sypialnia", time: 18 * 60 + 5 },
      { text: "sauna", time: 18 * 60 + 30 },
      { text: "sypialnia", time: 19 * 60 + 3 },
      { text: "garderoba", time: 19 * 60 + 27 },
      { text: "toaleta", time: 19 * 60 + 30 },
      { text: "smart", time: 20 * 60 + 0 },
      { text: "siłownia", time: 20 * 60 + 26 },
      { text: "garderoba", time: 21 * 60 + 32 },
      { text: "sypialnia", time: 22 * 60 + 30 },
      { text: "łazienka", time: 23 * 60 + 25 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=L8OmA1P7bB8",
    markers: [
      { text: "elewacja", time: 0 * 60 + 5 },
      { text: "kominek", time: 1 * 60 + 15 },
      { text: "jadalnia / wentylacja", time: 3 * 60 + 44 },
      { text: "kuchnia", time: 3 * 60 + 56 },
      { text: "ekspres", time: 4 * 60 + 15 },
      { text: "gabinet", time: 5 * 60 + 0 },
      { text: "toaleta", time: 7 * 60 + 27 },
      { text: "sypialnia", time: 8 * 60 + 2 },
      { text: "łazienka", time: 8 * 60 + 13 },
      { text: "sypialnia", time: 8 * 60 + 33 },
      { text: "sypialnia", time: 9 * 60 + 42 },
      { text: "łazienka", time: 9 * 60 + 58 },
      { text: "kuchnia", time: 11 * 60 + 4 },
      { text: "kominek", time: 13 * 60 + 11 },
      { text: "łazienka", time: 15 * 60 + 19 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=xBey-_2IMrI",
    markers: [
      { text: "elewacja", time: 0 * 60 + 10 },
      { text: "wejście", time: 0 * 60 + 30 },
      { text: "kuchnia", time: 0 * 60 + 37 },
      { text: "salon", time: 2 * 60 + 45 },
      { text: "warsztat", time: 3 * 60 + 40 },
      { text: "toaleta", time: 4 * 60 + 20 },
      { text: "gabinet", time: 4 * 60 + 32 },
      { text: "sypialnia", time: 5 * 60 + 35 },
      { text: "łazienka", time: 5 * 60 + 51 },
      { text: "konsola", time: 6 * 60 + 21 },
      { text: "świetlik", time: 6 * 60 + 24 },
      { text: "sypialnia", time: 6 * 60 + 32 },
      { text: "drzwi", time: 6 * 60 + 49 },
      { text: "sypialnia", time: 7 * 60 + 32 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=6NwVQKrKZIU",
    markers: [
      { text: "elewacja", time: 0 * 60 + 16 },
      { text: "wejście", time: 0 * 60 + 40 },
      { text: "szatnia", time: 0 * 60 + 50 },
      { text: "pralnia", time: 0 * 60 + 52 },
      { text: "kuchnia", time: 1 * 60 + 23 },
      { text: "ekspres", time: 2 * 60 + 8 },
      { text: "gabinet", time: 2 * 60 + 39 },
      { text: "jadalnia", time: 3 * 60 + 1 },
      { text: "kominek", time: 3 * 60 + 13 },
      { text: "balkon", time: 4 * 60 + 3 },
      { text: "schody", time: 4 * 60 + 57 },
      { text: "toaleta", time: 6 * 60 + 30 },
      { text: "sypialnia", time: 6 * 60 + 40 },
      { text: "kino", time: 7 * 60 + 47 },
      { text: "sauna", time: 8 * 60 + 24 },
      { text: "salon", time: 8 * 60 + 50 },
      { text: "sypialnia", time: 9 * 60 + 30 },
      { text: "sypialnia", time: 10 * 60 + 48 },
      { text: "balkon", time: 10 * 60 + 50 },
      { text: "łazienka", time: 11 * 60 + 34 },
      { text: "świetlik", time: 12 * 60 + 15 },
      { text: "sypialnia", time: 12 * 60 + 31 },
      { text: "sypialnia", time: 13 * 60 + 7 },
      { text: "toaleta", time: 13 * 60 + 55 },
      { text: "świetlik", time: 13 * 60 + 59 },
      { text: "pergola", time: 14 * 60 + 25 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=EAvY_2znQfw",
    markers: [
      { text: "elewacja", time: 0 * 60 + 30 },
      { text: "wejście", time: 1 * 60 + 57 },
      { text: "schody", time: 2 * 60 + 4 },
      { text: "szafa", time: 2 * 60 + 35 },
      { text: "garderoba", time: 2 * 60 + 45 },
      { text: "toaleta", time: 2 * 60 + 49 },
      { text: "gabinet", time: 2 * 60 + 52 },
      { text: "konsola", time: 3 * 60 + 10 },
      { text: "kuchnia", time: 3 * 60 + 37 },
      { text: "ekspres", time: 4 * 60 + 7 },
      { text: "pralnia", time: 4 * 60 + 53 },
      { text: "toaleta", time: 5 * 60 + 40 },
      { text: "kuchnia ogrodowa", time: 8 * 60 + 22 },
      { text: "łazienka", time: 9 * 60 + 2 },
      { text: "szafa", time: 9 * 60 + 54 },
      { text: "sypialnia", time: 10 * 60 + 55 },
      { text: "toaletka", time: 11 * 60 + 0 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=r9F_U3gUyQ0",
    markers: [
      { text: "wejście", time: 0 * 60 + 48 },
      { text: "kuchnia", time: 0 * 60 + 53 },
      { text: "sypialnia", time: 6 * 60 + 52 },
      { text: "toaleta", time: 7 * 60 + 51 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=7EJWbR2Np1Q",
    markers: [
      { text: "wejście", time: 0 * 60 + 5 },
      { text: "elewacja", time: 0 * 60 + 12 },
      { text: "konsola", time: 0 * 60 + 40 },
      { text: "gabinet", time: 0 * 60 + 44 },
      { text: "kino", time: 1 * 60 + 29 },
      { text: "toaleta", time: 2 * 60 + 38 },
      { text: "kuchnia", time: 3 * 60 + 10 },
      { text: "ekspres", time: 4 * 60 + 28 },
      { text: "pralnia", time: 5 * 60 + 45 },
      { text: "jadalnia", time: 6 * 60 + 9 },
      { text: "kominek", time: 6 * 60 + 56 },
      { text: "konsola", time: 9 * 60 + 22 },
      { text: "sypialnia", time: 9 * 60 + 26 },
      { text: "sypialnia", time: 10 * 60 + 0 },
      { text: "łazienka", time: 10 * 60 + 25 },
      { text: "sypialnia", time: 11 * 60 + 40 },
      { text: "łazienka", time: 13 * 60 + 23 },
      { text: "garderoba", time: 14 * 60 + 7 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=QU6IVgQAKYo",
    markers: [
      { text: "elewacja", time: 1 * 60 + 42 },
      { text: "wejście", time: 3 * 60 + 30 },
      { text: "kuchnia", time: 4 * 60 + 47 },
      { text: "bar", time: 6 * 60 + 39 },
      { text: "jadalnia", time: 6 * 60 + 45 },
      { text: "kominek", time: 7 * 60 + 42 },
      { text: "rtv", time: 7 * 60 + 54 },
      { text: "spa", time: 9 * 60 + 23 },
      { text: "gabinet", time: 11 * 60 + 16 },
      { text: "toaleta", time: 11 * 60 + 24 },
      { text: "sypialnia", time: 11 * 60 + 50 },
      { text: "toaleta", time: 12 * 60 + 13 },
      { text: "sypialnia", time: 13 * 60 + 36 },
      { text: "łazienka", time: 13 * 60 + 48 },
      { text: "świetlik", time: 13 * 60 + 52 },
      { text: "ekspres", time: 14 * 60 + 23 },
      { text: "sypialnia", time: 14 * 60 + 38 },
      { text: "toaleta", time: 15 * 60 + 23 },
      { text: "sypialnia", time: 15 * 60 + 38 },
      { text: "toaleta", time: 16 * 60 + 11 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=bhG5G_Ljx2k",
    markers: [
      { text: "wejście", time: 2 * 60 + 7 },
      { text: "kuchnia", time: 3 * 60 + 30 },
      { text: "toaleta", time: 5 * 60 + 33 },
      { text: "smart", time: 5 * 60 + 36 },
      { text: "toaleta", time: 5 * 60 + 41 },
      { text: "łazienka", time: 8 * 60 + 5 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=xcc-ix8E8y8",
    markers: [
      { text: "szatnia", time: 2 * 60 + 33 },
      { text: "toaleta", time: 2 * 60 + 35 },
      { text: "audio / smart", time: 3 * 60 + 19 },
      { text: "smart", time: 3 * 60 + 19 },
      { text: "salon", time: 3 * 60 + 44 },
      { text: "jadalnia", time: 3 * 60 + 50 },
      { text: "rtv", time: 3 * 60 + 54 },
      { text: "kuchnia", time: 4 * 60 + 13 },
      { text: "gabinet", time: 4 * 60 + 55 },
      { text: "schody", time: 5 * 60 + 35 },
      { text: "sypialnia", time: 6 * 60 + 24 },
      { text: "garderoba", time: 7 * 60 + 0 },
      { text: "łazienka", time: 7 * 60 + 30 },
      { text: "sauna", time: 7 * 60 + 34 },
      { text: "smart", time: 8 * 60 + 28 },
      { text: "siłownia", time: 8 * 60 + 50 },
      { text: "toaleta", time: 9 * 60 + 36 },
      { text: "sypialnia", time: 9 * 60 + 44 },
      { text: "łazienka", time: 9 * 60 + 49 },
      { text: "pralnia", time: 10 * 60 + 57 },
      { text: "kotłownia", time: 11 * 60 + 2 },
      { text: "wejście", time: 11 * 60 + 5 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=UL4iRlUuHUY",
    markers: [
      { text: "kuchnia", time: 3 * 60 + 0 },
      { text: "jadalnia", time: 4 * 60 + 7 },
      { text: "gabinet", time: 4 * 60 + 40 },
      { text: "toaleta", time: 4 * 60 + 58 },
      { text: "sypialnia", time: 5 * 60 + 9 },
      { text: "łazienka", time: 5 * 60 + 18 },
      { text: "garderoba", time: 5 * 60 + 22 },
      { text: "bar", time: 5 * 60 + 35 },
      { text: "konsola", time: 6 * 60 + 0 },
      { text: "basen", time: 6 * 60 + 5 },
      { text: "spa", time: 7 * 60 + 14 },
      { text: "siłownia", time: 7 * 60 + 26 },
      { text: "kino", time: 8 * 60 + 17 },
      { text: "sypialnia", time: 8 * 60 + 56 },
      { text: "toaleta", time: 9 * 60 + 1 },
      { text: "garderoba", time: 9 * 60 + 3 },
      { text: "toaletka", time: 9 * 60 + 4 },
      { text: "sypialnia", time: 9 * 60 + 57 },
      { text: "toaleta", time: 10 * 60 + 1 },
      { text: "sypialnia", time: 10 * 60 + 6 },
      { text: "toaleta", time: 10 * 60 + 8 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=FSsRaoamxhM",
    markers: [
      { text: "elewacja", time: 0 * 60 + 43 },
      { text: "schody", time: 2 * 60 + 10 },
      { text: "kominek", time: 2 * 60 + 16 },
      { text: "wejście", time: 2 * 60 + 59 },
      { text: "szopa", time: 3 * 60 + 27 },
      { text: "kominek", time: 6 * 60 + 21 },
      { text: "kuchnia", time: 6 * 60 + 23 },
      { text: "rtv", time: 7 * 60 + 8 },
      { text: "szatnia", time: 7 * 60 + 18 },
      { text: "toaleta", time: 7 * 60 + 20 },
      { text: "pergola", time: 7 * 60 + 45 },
      { text: "balia", time: 9 * 60 + 20 },
      { text: "świetlik", time: 9 * 60 + 31 },
      { text: "tenis", time: 10 * 60 + 31 },
      { text: "sypialnia", time: 10 * 60 + 55 },
      { text: "szafa", time: 11 * 60 + 0 },
      { text: "balkon / lukarna", time: 11 * 60 + 12 },
      { text: "łazienka", time: 11 * 60 + 18 },
      { text: "sypialnia", time: 11 * 60 + 30 },
      { text: "łazienka", time: 11 * 60 + 32 },
      { text: "sypialnia", time: 11 * 60 + 45 },
      { text: "toaleta", time: 11 * 60 + 55 },
      { text: "schody", time: 12 * 60 + 26 },
      { text: "pokój gościnny", time: 12 * 60 + 36 },
      { text: "toaleta", time: 12 * 60 + 43 },
      { text: "sypialnia", time: 12 * 60 + 46 },
      { text: "basen", time: 13 * 60 + 9 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=2r2_4ifBXis",
    markers: [
      { text: "garaż", time: 0 * 60 + 40 },
      { text: "wejście", time: 1 * 60 + 30 },
      { text: "szafa", time: 1 * 60 + 45 },
      { text: "wiatrołap", time: 2 * 60 + 10 },
      { text: "kuchnia", time: 2 * 60 + 15 },
      { text: "schody", time: 3 * 60 + 12 },
      { text: "balkon", time: 4 * 60 + 12 },
      { text: "szafa", time: 5 * 60 + 22 },
      { text: "sypialnia", time: 5 * 60 + 27 },
      { text: "toaletka", time: 5 * 60 + 34 },
      { text: "łazienka", time: 5 * 60 + 46 },
      { text: "smart / schody", time: 6 * 60 + 16 },
      { text: "świetlik / lukarna", time: 6 * 60 + 39 },
      { text: "sypialnia", time: 6 * 60 + 57 },
      { text: "świetlik / lukarna", time: 7 * 60 + 37 },
      { text: "łazienka", time: 7 * 60 + 49 },
      { text: "konsola", time: 8 * 60 + 19 },
      { text: "sypialnia", time: 8 * 60 + 22 },
      { text: "toaleta", time: 8 * 60 + 44 },
      { text: "gabinet", time: 9 * 60 + 22 },
      { text: "sypialnia", time: 9 * 60 + 30 },
      { text: "konsola", time: 9 * 60 + 34 },
      { text: "garderoba", time: 9 * 60 + 39 },
      { text: "toaleta", time: 9 * 60 + 45 },
      { text: "konsola", time: 10 * 60 + 0 },
      { text: "rtv", time: 10 * 60 + 10 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=voowzG28gzo",
    markers: [
      { text: "wejście", time: 1 * 60 + 23 },
      { text: "jadalnia", time: 2 * 60 + 25 },
      { text: "kuchnia", time: 2 * 60 + 30 },
      { text: "rtv", time: 4 * 60 + 15 },
      { text: "oświetlenie / wentylacja", time: 2 * 60 + 54 },
      { text: "toaleta", time: 4 * 60 + 45 },
      { text: "salon", time: 5 * 60 + 2 },
      { text: "kominek", time: 5 * 60 + 36 },
      { text: "spa", time: 8 * 60 + 1 },
      { text: "sauna", time: 8 * 60 + 7 },
      { text: "toaleta", time: 8 * 60 + 22 },
      { text: "kino", time: 9 * 60 + 3 },
      { text: "sypialnia", time: 10 * 60 + 8 },
      { text: "gabinet", time: 10 * 60 + 13 },
      { text: "drzwi", time: 11 * 60 + 23 },
      { text: "garderoba", time: 11 * 60 + 43 },
      { text: "wanna", time: 11 * 60 + 47 },
      { text: "sypialnia", time: 12 * 60 + 1 },
      { text: "łazienka", time: 12 * 60 + 43 },
      { text: "toaleta", time: 13 * 60 + 16 },
      { text: "świetlik", time: 13 * 60 + 35 },
      { text: "toaleta", time: 14 * 60 + 4 },
      { text: "toaletka", time: 14 * 60 + 5 },
      { text: "sypialnia", time: 14 * 60 + 8 },
      { text: "sypialnia", time: 14 * 60 + 41 },
      { text: "toaleta", time: 15 * 60 + 1 },
      { text: "schody", time: 15 * 60 + 24 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=1uPnhDgXgYk",
    markers: [
      { text: "elewacja", time: 0 * 60 + 12 },
      { text: "panele", time: 0 * 60 + 21 },
      { text: "elewacja", time: 0 * 60 + 58 },
      { text: "wejście", time: 1 * 60 + 5 },
      { text: "ławka", time: 1 * 60 + 8 },
      { text: "salon", time: 1 * 60 + 28 },
      { text: "kuchnia", time: 1 * 60 + 30 },
      { text: "oświetlenie", time: 2 * 60 + 39 },
      { text: "spiżarnia", time: 3 * 60 + 4 },
      { text: "jadalnia", time: 3 * 60 + 16 },
      { text: "kominek", time: 3 * 60 + 20 },
      { text: "salon", time: 3 * 60 + 27 },
      { text: "pokój", time: 3 * 60 + 35 },
      { text: "oświetlenie", time: 5 * 60 + 28 },
      { text: "toaleta", time: 5 * 60 + 36 },
      { text: "sypialnia", time: 6 * 60 + 15 },
      { text: "łazienka", time: 6 * 60 + 45 },
      { text: "garderoba", time: 7 * 60 + 56 },
      { text: "sypialnia", time: 8 * 60 + 18 },
      { text: "toaleta", time: 8 * 60 + 28 },
      { text: "sypialnia", time: 9 * 60 + 3 },
      { text: "toaleta", time: 9 * 60 + 17 },
      { text: "pokój", time: 9 * 60 + 30 },
      { text: "świetlik", time: 9 * 60 + 35 },
      { text: "pralnia", time: 10 * 60 + 15 },
      { text: "sypialnia", time: 10 * 60 + 58 },
      { text: "łazienka", time: 11 * 60 + 12 },
      { text: "toaleta", time: 11 * 60 + 38 },
      { text: "sypialnia", time: 11 * 60 + 39 },
      { text: "gabinet", time: 11 * 60 + 41 },
      { text: "pokój", time: 12 * 60 + 43 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=UfnPKvN3DY8",
    markers: [
      { text: "wejście", time: 0 * 60 + 16 },
      { text: "smart", time: 0 * 60 + 56 },
      { text: "schody", time: 1 * 60 + 6 },
      { text: "kuchnia", time: 1 * 60 + 28 },
      { text: "jadalnia", time: 2 * 60 + 33 },
      { text: "bar", time: 2 * 60 + 45 },
      { text: "salon", time: 4 * 60 + 17 },
      { text: "rtv", time: 4 * 60 + 23 },
      { text: "pralnia", time: 4 * 60 + 45 },
      { text: "kino", time: 5 * 60 + 35 },
      { text: "toaleta", time: 6 * 60 + 6 },
      { text: "salon", time: 6 * 60 + 38 },
      { text: "kominek", time: 7 * 60 + 7 },
      { text: "bar", time: 7 * 60 + 29 },
      { text: "garderoba", time: 7 * 60 + 57 },
      { text: "łazienka", time: 8 * 60 + 14 },
      { text: "sypialnia", time: 8 * 60 + 57 },
      { text: "wentylacja", time: 9 * 60 + 13 },
      { text: "sypialnia", time: 9 * 60 + 35 },
      { text: "toaletka", time: 9 * 60 + 53 },
      { text: "łazienka", time: 10 * 60 + 23 },
      { text: "świetlik", time: 10 * 60 + 40 },
      { text: "szafa", time: 11 * 60 + 40 },
      { text: "smart", time: 11 * 60 + 53 },
      { text: "toaleta", time: 12 * 60 + 0 },
      { text: "świetlik", time: 12 * 60 + 10 },
      { text: "sypialnia", time: 12 * 60 + 13 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=6U-fIY4ykFc",
    markers: [
      { text: "wejście", time: 2 * 60 + 47 },
      { text: "smart", time: 2 * 60 + 58 },
      { text: "kuchnia", time: 3 * 60 + 53 },
      { text: "jadalnia", time: 4 * 60 + 53 },
      { text: "oświetlenie", time: 5 * 60 + 9 },
      { text: "świetlik", time: 5 * 60 + 32 },
      { text: "kuchnia", time: 5 * 60 + 58 },
      { text: "schody", time: 7 * 60 + 3 },
      { text: "toaleta", time: 8 * 60 + 8 },
      { text: "pralnia", time: 10 * 60 + 29 },
      { text: "gabinet", time: 11 * 60 + 55 },
      { text: "sypialnia", time: 14 * 60 + 10 },
      { text: "toaleta", time: 14 * 60 + 41 },
      { text: "sypialnia", time: 15 * 60 + 17 },
      { text: "szopa", time: 15 * 60 + 40 },
      { text: "łazienka", time: 16 * 60 + 5 },
      { text: "sypialnia", time: 16 * 60 + 27 },
      { text: "szopa", time: 17 * 60 + 44 },
      { text: "kuchnia ogrodowa", time: 19 * 60 + 24 },
      { text: "basen", time: 20 * 60 + 39 },
      { text: "siłownia", time: 21 * 60 + 54 },
      { text: "toaleta", time: 22 * 60 + 20 },
      { text: "sauna", time: 22 * 60 + 28 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=GYHz1hL8VTI",
    markers: [
      { text: "panele", time: 0 * 60 + 30 },
      { text: "wejście", time: 1 * 60 + 23 },
      { text: "schody", time: 1 * 60 + 58 },
      { text: "garderoba", time: 2 * 60 + 18 },
      { text: "toaleta", time: 2 * 60 + 37 },
      { text: "schody", time: 4 * 60 + 28 },
      { text: "kuchnia", time: 5 * 60 + 31 },
      { text: "smart", time: 18 * 60 + 25 },
      { text: "garderoba", time: 19 * 60 + 3 },
      { text: "łazienka", time: 19 * 60 + 34 },
      { text: "okno", time: 20 * 60 + 13 },
      { text: "lukarna", time: 23 * 60 + 11 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=E3mxJ11JUmg",
    markers: [
      { text: "elewacja", time: 40 },
      { text: "wejście", time: 3 * 60 + 43 },
      { text: "kuchnia", time: 4 * 60 + 1 },
      { text: "jadalnia", time: 6 * 60 + 14 },
      { text: "gabinet", time: 7 * 60 + 12 },
      { text: "siłownia", time: 7 * 60 + 31 },
      { text: "toaleta", time: 7 * 60 + 51 },
      { text: "balkon", time: 8 * 60 + 38 },
      { text: "elewacja", time: 9 * 60 + 17 },
      { text: "basen", time: 12 * 60 + 32 },
      { text: "schody", time: 12 * 60 + 46 },
      { text: "sypialnia", time: 12 * 60 + 53 },
      { text: "wentylacja", time: 13 * 60 + 30 },
      { text: "garderoba", time: 13 * 60 + 38 },
      { text: "wentylacja", time: 14 * 60 + 6 },
      { text: "toaleta", time: 14 * 60 + 14 },
      { text: "sypialnia", time: 15 * 60 + 10 },
      { text: "szafa", time: 15 * 60 + 22 },
      { text: "toaleta", time: 15 * 60 + 27 },
      { text: "sypialnia", time: 17 * 60 + 0 },
      { text: "szafa", time: 17 * 60 + 9 },
      { text: "wentylacja", time: 17 * 60 + 15 },
      { text: "toaleta", time: 17 * 60 + 30 },
      { text: "pralnia", time: 17 * 60 + 52 },
      { text: "łazienka", time: 17 * 60 + 55 },
      { text: "sauna", time: 18 * 60 + 2 },
      { text: "sypialnia", time: 19 * 60 + 17 },
      { text: "toaleta", time: 20 * 60 + 0 },
      { text: "sypialnia", time: 20 * 60 + 5 },
      { text: "toaletka", time: 20 * 60 + 10 },
      { text: "szafa", time: 20 * 60 + 15 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=bSTcm99Lr3E",
    markers: [
      { text: "elewacja", time: 43 },
      { text: "kuchnia", time: 1 * 60 + 21 },
      { text: "jadalnia", time: 1 * 60 + 42 },
      { text: "ekspres / spiżarnia", time: 2 * 60 + 40 },
      { text: "kominek", time: 3 * 60 + 32 },
      { text: "jadalnia", time: 4 * 60 + 27 },
      { text: "sypialnia", time: 4 * 60 + 57 },
      { text: "łazienka", time: 5 * 60 + 42 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=nXYuXCxLmN8",
    markers: [
      { text: "elewacja", time: 30 },
      { text: "wejście", time: 1 * 60 + 8 },
      { text: "schody", time: 1 * 60 + 39 },
      { text: "oświetlenie", time: 1 * 60 + 47 },
      { text: "lustro", time: 1 * 60 + 52 },
      { text: "jadalnia", time: 1 * 60 + 10 },
      { text: "kominek", time: 2 * 60 + 30 },
      { text: "rtv", time: 3 * 60 + 9 },
      { text: "kuchnia", time: 4 * 60 + 25 },
      { text: "ekspres", time: 5 * 60 + 22 },
      { text: "garderoba", time: 5 * 60 + 45 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=O9vc6vySiXk",
    markers: [
      { text: "lustro / konsola", time: 10 },
      { text: "kominek", time: 1 * 60 + 50 },
      { text: "kuchnia", time: 3 * 60 + 12 },
      { text: "toaleta", time: 5 * 60 + 25 },
      { text: "łazienka", time: 5 * 60 + 49 },
      { text: "toaleta", time: 6 * 60 + 33 },
    ],
  },
  { url: "https://www.youtube.com/watch?v=hH-RSt1Oqhs", markers: [] },
  { url: "https://www.youtube.com/watch?v=j2Zl1BQ6Mi8", markers: [] },
  {
    url: "https://www.youtube.com/watch?v=AuaSm4QNJjk",
    markers: [
      { text: "salon", time: 10 },
      { text: "kuchnia", time: 2 * 60 + 50 },
      { text: "spiżarnia", time: 3 * 60 + 25 },
      { text: "lustro / konsola", time: 3 * 60 + 48 },
      { text: "sypialnia", time: 4 * 60 + 18 },
      { text: "garderoba", time: 5 * 60 + 4 },
      { text: "toaleta", time: 5 * 60 + 40 },
      { text: "spiżarnia", time: 6 * 60 + 12 },
      { text: "toaleta", time: 6 * 60 + 44 },
      { text: "balkon", time: 7 * 60 + 25 },
    ],
  },
  {
    url: "https://www.youtube.com/watch?v=pHVs032EI9Y",
    markers: [
      { text: "elewacja", time: 40 },
      { text: "elewacja", time: 55 },
      { text: "łazienka", time: 2 * 60 + 48 },
      { text: "jadalnia", time: 2 * 60 + 57 },
      { text: "pralnia", time: 3 * 60 + 8 },
      { text: "kominek", time: 4 * 60 + 2 },
      { text: "kuchnia", time: 4 * 60 + 13 },
      { text: "sypialnia", time: 5 * 60 + 49 },
      { text: "łazienka", time: 6 * 60 + 11 },
      { text: "sypialnia", time: 6 * 60 + 42 },
      { text: "sypialnia", time: 6 * 60 + 50 },
      { text: "kuchnia ogrodowa", time: 7 * 60 + 12 },
    ],
  },
  { url: "https://www.youtube.com/watch?v=VltmMbeEyY4", markers: [] },
  {
    url: "https://www.youtube.com/watch?v=v3c04jFy8AM",
    markers: [
      { text: "kuchnia", time: 0 * 60 + 48 },
      { text: "lustro / konsola", time: 1 * 60 + 10 },
      { text: "rtv", time: 2 * 60 + 7 },
      { text: "kuchnia", time: 4 * 60 + 24 },
      { text: "sypialnia", time: 5 * 60 + 35 },
      { text: "łazienka", time: 6 * 60 + 20 },
      { text: "sypialnia", time: 6 * 60 + 46 },
      { text: "toaleta", time: 7 * 60 + 18 },
    ],
  },
  {
    // Dom inspirowany stylem połowy wieku, którego projekt na nowo definiuje pojęcie spokojnego luksusu
    url: "https://www.youtube.com/watch?v=q1RIm2lS_P4",
    markers: parse(`
0:09 elewacja
1:35 elewacja
2:03 toaleta
2:43 kuchnia
2:47 pokój
3:05 garaż
3:20 wejście
3:27 schody
4:05 kącik / rtv
4:50 kuchnia ogrodowa ++
5:06 salon
      `),
  },
  {
    // Wnętrze domu nad wodą zaprojektowanego tak, aby było ukryte (wycieczka po domu)
    url: "https://www.youtube.com/watch?v=4Rr42pKtlhw",
    markers: parse(`
1:14 balkon
1:29 schody
1:51 kuchnia ogrodowa
1:55 schody
2:24 toaleta +
2:30 kuchnia
4:39 kącik / rtv
      `),
  },
  {
    // Dlaczego świetny projekt wymaga czasu i inwestycji – z Jamie Bushem (Design Masterclass)
    url: "https://www.youtube.com/watch?v=jmvfhjlFLFQ",
    markers: parse(`
1:33 elewacja ++
4:12 salon / rtv
4:18 łazienka +
5:40 schody
5:57 salon / kominek
6:52 schody
      `),
  },
  {
    // W środku wyjątkowego domu z zabawnym wystrojem wnętrz (zwiedzanie domu)
    url: "https://www.youtube.com/watch?v=smbbWe2JvqA",
    markers: parse(`
0:11 kuchnia
0:54 elewacja
2:11 kuchnia
2:26 bar
3:02 schody
3:22 toaleta
3:39 szatnia
3:46 sypialnia
5:09 elewacja
5:38 ogród
      `),
  },
  {
    // W domu z tropikalnym ogrodem, który łączy Cię z naturą (zwiedzanie domu)
    url: "https://www.youtube.com/watch?v=8TJ4lFWrJks",
    markers: parse(`
0:52 elewacja +
1:36 kącik / rtv
1:53 łazienka +
2:10 sypialnia
2:37 jadalnia
2:45 kuchnia
2:51 kącik / kominek
3:08 gabinet
3:20 ogród
3:30 sypialnia
3:53 sypialnia
4:02 toaleta
4:23 balkon
4:29 kuchnia
4:33 schody
4:41 elewacja
5:16 kominek
5:46 elewacja
      `),
  },
  {
    // Ta Chatka W Lesie Pozostawi Cię Bez Mowy (Wycieczka Po Domu)
    url: "https://www.youtube.com/watch?v=5_r5IWWeYk0",
    markers: parse(`
0:12 elewacja +
1:18 salon / kominek
1:23 elewacja +
2:57 palenisko
3:18 sypialnia
3:33 sypialnia
4:14 łazienka
5:13 salon / kominek
5:58 kuchnia
6:12 sypialnia
      `),
  },
  {
    // Dom marzeń zbudowany na własnej prywatnej plaży w Nowej Zelandii (zwiedzanie domu)
    url: "https://www.youtube.com/watch?v=Qe4l5anx3rU",
    markers: parse(`
1:14 elewacja +
1:36 kuchnia
1:39 ogrodzenie ++
1:50 łazienka
1:52 sypialnia
2:11 elewacja
2:56 salon / kominek
3:06 kuchnia
3:12 kuchnia ogrodowa
3:45 basen
3:48 ogrodzenie ++
5:09 patio
      `),
  },
  {
    // Ten dom to list miłosny do natury (zwiedzanie domu)
    url: "https://www.youtube.com/watch?v=incmD0ZiRWE",
    markers: parse(`
1:38 kuchnia
1:41 sypialnia
2:14 elewacja
3:11 kuchnia ogrodowa
3:18 salon / kominek
3:21 jadalnia
3:34 sypialnia
3:38 łazienka
      `),
  },
  {
    // Wnętrze nowoczesnego domu zaprojektowanego z myślą o naturze (zwiedzanie domu)
    url: "https://www.youtube.com/watch?v=-_CW3KnLczg",
    markers: parse(`
1:27 elewacja
1:42 schody
2:14 basen
2:26 salon / rtv
2:30 wentylacja +
3:01 kuchnia
3:29 łazienka
3:36 sypialnia
5:09 kącik / salon
      `),
  },
  {
    // Idealnie zaprojektowany nowoczesny dom, zbudowany tak, aby przetrwać próbę czasu (zwiedzanie domu)
    url: "https://www.youtube.com/watch?v=v7IsTZKw6G4",
    markers: parse(`
0:53 elewacja
1:37 jadalnia
1:57 brama garażowa
2:01 elewacja +
2:09 kuchnia
2:13 kuchnia ogrodowa
2:25 kącik
2:29 drzwi
2:36 łazienka
3:31 elewacja
5:22 łazienka
      `),
  },
  {
    // Jak zaprojektować dom rodzinny z płynnymi połączeniami zewnętrznymi (wycieczka po domu)
    url: "https://www.youtube.com/watch?v=v1TXZkNYUIY",
    markers: parse(`
0:07 schody ++
0:10 elewacja
0:17 szopa
0:24 jadalnia
0:43 kuchnia
0:47 kącik / pokój
0:50 wejście
1:11 jadalnia
1:19 rtv
1:22 schody ++
1:27 sypialnia
1:31 sypialnia
1:35 toaleta
2:06 łazienka
2:14 salon / rtv
2:40 sypialnia
2:57 toaleta
3:23 basen
3:49 świetlik
3:59 gabinet
4:50 łazienka
      `),
  },
  {
    // Oszałamiający dom na wsi zaprojektowany z myślą o zapewnieniu maksymalnego spokoju i relaksu
    url: "https://www.youtube.com/watch?v=l9VDdD0d_1w",
    markers: parse(`
0:13 elewacja
0:46 jadalnia
1:09 elewacja
1:18 wejście
1:29 szatnia
1:47 elewacja
2:11 salon / kominek
2:23 elewacja
3:09 kuchnia ogrodowa
3:13 toaleta +
3:40 elewacja +
      `),
  },
  {
    // Wnętrze najbardziej zapierającego dech w piersiach domu wakacyjnego w Australii (wycieczka po domu)
    url: "https://www.youtube.com/watch?v=UGjN8VXMyHg",
    markers: parse(`
0:16 elewacja +
1:31 brama garażowa +
1:38 wejście
1:59 toaleta
2:04 brama garażowa +
2:16 sypialnia
2:18 sypialnia
2:23 toaleta
2:26 kącik
2:42 łazienka
2:46 kuchnia
2:49 jadalnia
3:08 elewacja +
      `),
  },
  {
    // Wnętrze wymarzonego domu na nabrzeżu zaprojektowanego jako zrównoważone sanktuarium
    url: "https://www.youtube.com/watch?v=SvAOtgMmAkg",
    markers: parse(`
0:08 elewacja +
0:15 schody +
0:20 elewacja +
1:07 elewacja +
1:44 kuchnia
1:57 brama garażowa +
2:09 wejście
2:12 kotłownia
2:20 elewacja / balustrada +
2:23 panele
2:30 drzwi ++
2:31 toaleta
2:37 pokój / rtv
3:08 schody
3:22 łazienka
3:29 sypialnia
3:34 balkon
3:47 elewacja
4:06 kotłownia
      `),
  },
  {
    // Własny dom architekta i wyjątkowa przestrzeń mieszkalna w studiu (wycieczka po domu)
    url: "https://www.youtube.com/watch?v=FzDunpHJLo8",
    markers: parse(`
1:22 schody +
1:28 gabinet / pracownia
1:34 kuchnia
1:51 salon / rtv
2:03 wejście
2:41 gabinet / pracownia
2:49 balkon
3:37 drzwi +
3:44 toaleta +
3:46 sypialnia +
4:12 kącik / pokój
      `),
  },
  {
    // Inside a Magical Holiday Home Like No Other (House Tour)
    url: "https://www.youtube.com/watch?v=lqh_HK8MsYA",
    markers: parse(`
2:52 elewacja +
3:25 kuchnia
3:36 toaleta
3:42 sypialnia
3:48 toaleta
3:50 basen
3:54 sypialnia
4:45 kuchnia
4:56 kominek
      `),
  },
  {
    // Architect Designs a Breathtaking Home Connected to Nature (House Tour)
    url: "https://www.youtube.com/watch?v=z5-lIA7BuwQ",
    markers: parse(`
0:23 elewacja +
1:34 szopa ++
      `),
  },
  {
    // Dom rodzinny architektów z nowoczesnym i teksturowanym wystrojem wnętrz (wycieczka po domu)
    url: "https://www.youtube.com/watch?v=PtShECOgRrw",
    markers: parse(`
1:04 lukarna
1:15 ogrodzenie +
      `),
  },
  {
    // Poznaj chatę w lesie, która odzwierciedla otaczający krajobraz (wycieczka po domu)
    url: "https://www.youtube.com/watch?v=MIJ8BxBIufA",
    markers: parse(`
3:00 lukarna ++
3:35 elewacja
      `),
  },
  {
    // Wewnątrz pamiątkowego domu, w którym natura i sztuka stają się jednym (wycieczka po domu)
    url: "https://www.youtube.com/watch?v=JV4PP2Cq8uo",
    markers: parse(`
0:39 elewacja
      `),
  },
  {
    // Inside the Ultimate Country Home Where Minimalism Meets Elegance (House Tour)
    url: "https://www.youtube.com/watch?v=yJb80E-yma0",
    markers: parse(`
0:40 elewacja +
1:07 pergola
1:30 elewacja +
3:29 pralnia
4:47 elewacja +
      `),
  },
  {
    // Dom marzeń zaprojektowany z cegły, kamienia i drewna (wycieczka po domu)
    url: "https://www.youtube.com/watch?v=jQdXn-GSb5A",
    markers: parse(`
0:16 schody ++
0:20 kominek / rtv
0:33 elewacja
0:22 schody
1:35 kącik / skosy
1:45 kuchnia
2:13 salon
2:55 kuchnia
3:09 elewacja
3:56 toaleta
5:33 kuchnia ogrodowa
      `),
  },
  {
    // An Interior Designer's Own Hidden Home! This is Modern Australian Luxury at its Finest. House Tour
    url: "https://www.youtube.com/watch?v=3-SsmCHYduY",
    markers: parse(`
      `),
  },
  {
    // An Artist's Home by a Stream is a Tranquil Escape - Tauhai Villa by Ponce Veridiano
    url: "https://www.youtube.com/watch?v=mY13Slnc4uQ",
    markers: parse(`
      `),
  },
  {
    // Ancient stone housebarn becomes couple's tranquil home-office
    url: "https://www.youtube.com/watch?v=i6c0Pvei3F4",
    markers: parse(`
      `),
  },
  {
    // The Dos Vistas Home Tour | Step Inside This Luxurious Cabo Estate With Incredible Ocean Views
    url: "https://www.youtube.com/watch?v=uD1ti4o2ch4",
    markers: parse(`
      `),
  },
  {
    // Inside the Gerald Luss House: A Mid-Century Modern Masterpiece in New York | House Tour
    url: "https://www.youtube.com/watch?v=L1ZRlRXEtxs",
    markers: parse(`
      `),
  },
  {
    // Inside an Elegant London Project With Hamish Brown of 1508 London | House Tour | The Intérieur
    url: "https://www.youtube.com/watch?v=nxPBfkEMmt0",
    markers: parse(`
      `),
  },
  {
    // Villa Tugendhat: Tour of UNESCO Masterpiece by Mies Van Der Rohe
    url: "https://www.youtube.com/watch?v=dLYdNB3jNi4",
    markers: parse(`
      `),
  },
  {
    // Grand Designs: House of The Year | Season 5 Episodes 1 - 4 | Full Season | Who Will Win?
    url: "https://www.youtube.com/watch?v=nrCWBxyokIA",
    markers: parse(`
0:29 elewacja
0:43 elewacja / lukarna +
0:52 elewacja
1:00 elewacja +
1:18 elewacja
22:14 schody
23:16 elewacja
27:47 elewacja
31:44 toaleta / drzwi
36:53 elewacja
1:05:02 elewacja / lukarna +
1:12:40 elewacja
1:20:27 elewacja
1:23:58 schody
      `),
  },
  {
    // Ridge House Design: Contemporary Style with a Touch of Tradition
    url: "https://www.youtube.com/watch?v=RMiMVbHmPc8",
    markers: parse(`
0:01 elewacja
1:55 schody
      `),
  },
  {
    // Simple but Smart: Inside This Control4 Home Setup
    url: "https://www.youtube.com/watch?v=DgzdfakzqQA",
    markers: parse(`
4:23 smart
5:06 kuchnia ogrodowa
7:07 szafa rack
10:21 smart
      `),
  },
  {
    // Smart Home Tour | Automation and Control4 In Action
    url: "https://www.youtube.com/watch?v=ccTeO326mCU",
    markers: parse(`
2:15 smart
8:57 szafa rack
      `),
  },
  {
    // This is how much a smart home costs in 2025 | Home Automation
    url: "https://www.youtube.com/watch?v=Q_LiZoknXq8",
    markers: parse(`
3:03 schody
6:05 smart
8:05 smart
10:44 szafa rack
18:59 kuchnia ogrodowa
      `),
  },
  {
    // Idealne połączenie tradycji z nowoczesnością. Piękny dom w górach - Pomysł na Dom #115
    url: "https://www.youtube.com/watch?v=rCBspLFFVcg",
    markers: parse(`
0:32 elewacja
      `),
  },
  {
    // Dom bez kluczy, otwieranych okien i tylko z 3 włącznikami światła - Pomysł na Dom #73
    url: "https://www.youtube.com/watch?v=PCAKIF6djis",
    markers: parse(`
0:52 elewacja
1:31 elewacja +
4:03 spiżarnia
8:15 smart
      `),
  },
  {
    // Za 420 tys. PLN zbudował ENERGOOSZCZĘDNY DOM dla 5 osobowej rodziny - Pomysł na Dom #57
    url: "https://www.youtube.com/watch?v=JDFAQkHD9JQ",
    markers: parse(`
0:23 elewacja
      `),
  },
  {
    // Nowoczesna stodoła dla dużej rodziny. 4 sypialnie, kominek i huśtawka - Pomysł na Dom #29
    url: "https://www.youtube.com/watch?v=Tu-7ZrzOoPY",
    markers: parse(`
0:01 elewacja
3:06 kuchnia
6:43 sypialnia
7:23 sypialnia
      `),
  },
  {
    // Spektakularny dom w górach. Imponująca nowoczesna stodoła! - Pomysł na Dom #3
    url: "https://www.youtube.com/watch?v=a-t0Q_YQpAQ",
    markers: parse(`
0:38 elewacja
1:56 kuchnia
1:56 kuchnia
2:30 spiżarnia
3:50 sypialnia
4:08 łazienka
5:42 sypialnia
6:00 sypialnia
      `),
  },
  {
    // On ne trouve pas le temps, on le prend - s[21]
    url: "https://www.youtube.com/watch?v=UdoKwimjUsQ",
    markers: parse(`
0:01 elewacja
0:13 kuchnia
      `),
  },
  {
    // Stûv - The essential fire
    url: "https://www.youtube.com/watch?v=VljkrsVHi14",
    markers: parse(`
0:20 kominek ++
      `),
  },
  {
    // Stûv Interiors created by Decosud (Belgium)
    url: "https://www.youtube.com/watch?v=FfyzlH6bpZA",
    markers: parse(`
1:01 kominek ++
1:36 kominek ++
2:07 kominek ++
      `),
  },
  {
    // Cala Glass - Auroom design sauna
    url: "https://www.youtube.com/watch?v=WVu-lH0rmPA",
    markers: parse(`
0:08 sauna +
      `),
  },
  {
    // Harvia - Saker att tänka på när du väljer aggregat för din hemmabastu
    url: "https://www.youtube.com/watch?v=SlJstiYyfmw",
    markers: parse(`
0:01 sauna
      `),
  },
  {
    // The MOST Expensive Home in Arizona! Secret Bunker, Man Cave, & Spa
    url: "https://www.youtube.com/watch?v=E-2Ym1Dyk08",
    markers: parse(`
2:36 elewacja
3:26 wejście
4:47 toaleta
10:42 toaleta
12:56 patio / elewacja
13:36 gabinet
14:22 kino
14:50 sypialnia
15:47 smart
15:52 toaleta
16:35 wanna
17:34 garderoba
17:58 pralnia
19:35 toaleta
30:45 kuchnia ogrodowa
34:05 toaleta
34:21 kącik
36:57 szatnia
38:40 sypialnia
40:07 garderoba
40:44 pralnia
41:40 sypialnia
42:05 łazienka
42:37 basen
      `),
  },
  {
    // Onnen Outdoor Sauna - Heartwood Saunas
    url: "https://www.youtube.com/watch?v=yyKAOARkSZE",
    markers: parse(`
0:05 sauna ogrodowa
15:00 sauna
      `),
  },
  {
    // Aire X Outdoor Sauna - Heartwood Saunas
    url: "https://www.youtube.com/watch?v=Z3HTFT7iL0E",
    markers: parse(`
0:27 sauna ogrodowa
0:43 sauna
      `),
  },
  {
    // Arden Outdoor Sauna - Heartwood Saunas
    url: "https://www.youtube.com/watch?v=8fxRzu_Qvt0",
    markers: parse(`
0:09 sauna ogrodowa
0:56 sauna
      `),
  },
  {
    // Arbor X Outdoor Sauna - Heartwood Saunas
    url: "https://www.youtube.com/watch?v=yAME1ZK7tDY",
    markers: parse(`
0:15 sauna ogrodowa
1:02 sauna
      `),
  },
  {
    // Ora Outdoor Sauna - Heartwood Saunas
    url: "https://www.youtube.com/watch?v=ONwXbWfhvZg",
    markers: parse(`
0:07 sauna ogrodowa
0:19 sauna
      `),
  },
  {
    // Arbor V Outdoor Sauna - Heartwood Saunas
    url: "https://www.youtube.com/watch?v=p7nNJ0kPyAc",
    markers: parse(`
0:14 sauna ogrodowa
0:32 sauna
      `),
  },
  {
    // Heartwood Saunas Bespoke Outdoor Sauna
    url: "https://www.youtube.com/watch?v=Shv1936yvW0",
    markers: parse(`
0:09 sauna ogrodowa
0:11 sauna
      `),
  },
  {
    // Clearlight® Saunas Outdoor 5-Person Full Spectrum Sauna
    url: "https://www.youtube.com/watch?v=pmRFn_Ptk_Y",
    markers: parse(`
0:01 sauna ogrodowa
      `),
  },
  {
    // Kabinka Spa | a minimalist cabin designed and built by Hello Wood
    url: "https://www.youtube.com/watch?v=V6yZuAUuslU",
    markers: parse(`
0:04 szopa
      `),
  },
  {
    // New Fishing Paradise for Nature Lovers Near Budapest
    url: "https://www.youtube.com/watch?v=8MYIL0R4mh0",
    markers: parse(`
0:14 szopa
      `),
  },
  {
    // A Professional Home Gym AND Sauna in a Garden Room?!
    url: "https://www.youtube.com/watch?v=GE3aywLPRUg",
    markers: parse(`
0:40 szopa / sauna
      `),
  },
  {
    // REF 5710 The ultimate garden spa, with hot tub and sauna in Hertfordshire
    url: "https://www.youtube.com/watch?v=927BvkIZglw",
    markers: parse(`
0:15 szopa
1:21 sauna
      `),
  },
  {
    // WE BUILT OUR DREAM HOME! | Full House Tour & Renovation
    url: "https://www.youtube.com/watch?v=qMyWh25_CsM",
    markers: parse(`
0:22 wejście
0:40 schody
1:37 kino
2:18 szatnia
2:35 gabinet
3:29 toaleta
3:40 kącik / pokój
6:37 kącik / salon
8:12 jadalnia
9:06 kuchnia
11:16 spiżarnia +
11:53 ekspres
13:35 kotłownia
15:02 sypialnia
16:05 sypialnia
16:17 toaleta +
16:24 łazienka
16:53 toaleta +
17:00 pralnia
17:41 szafa +
19:29 toaletka
      `),
  },
  {
    // OUR DREAM GARDEN TRANSFORMATION | Indoor Swimming Pool & Garden Tour
    url: "https://www.youtube.com/watch?v=0MqDbN0S8Ms",
    markers: parse(`
0:34 elewacja
3:08 elewacja
6:47 szopa
      `),
  },
  {
    // We Built Our DREAM Swimming Pool | Full Tour & First Swim
    url: "https://www.youtube.com/watch?v=h2_sXdU8SQA",
    markers: parse(`
3:24 szopa
3:37 kuchnia ogrodowa
5:43 basen
7:47 sauna
8:28 toaleta
      `),
  },
];
