// copy((([{name,offers:{price,url},image:[image]}])=>({name,price:Number(price),image,url}))(JSON.parse(document.querySelector('script[type="application/ld+json"]').innerText)))

export const lights = [
  [
    {
      name: "Ultracienki zasilacz LED AC190V 240V do DC12V 24V 60W 100W 150W 200W 300W Transformator Adapter Driver FCOB WS2815 Light Strip - AliExpress 39",
      // "price": 3.64,
      // "price": 33.43, // 5,85zł Moc: 60W Napięcie: AC190V 240V to DC24V
      // "price": 38.69, // 11,11zł Moc: 100W Napięcie: AC190V 240V to DC24V
      price: 45.27, // 17,70zł Moc: 150W Napięcie: AC190V 240V to DC24V
      image:
        "https://ae01.alicdn.com/kf/Sab9d5b7367ac44709ba9420616951570b.jpg",
      url: "https://pl.aliexpress.com/item/4001260747482.html",
    },
    {
      name: "FCOB LED Strip Light 336 480 528 LED High Density Flexible FOB COB Led Light RA90 Warm Nature Cool White Linear Dimmable 12V 24V - AliExpress 39",
      image:
        "https://ae01.alicdn.com/kf/Sdc2a88e0bd7445c5b9cb0ae7074b21f6N.jpg",
      url: "https://pl.aliexpress.com/item/4000145232270.html",
      // price: 15.69,
      // price: 48.48, // 48,48zł <- 79,33zł / Emitujący kolor: 3000K Warm White / Moc: 24v 336 leds / Długość: 10 m
      price: 13.2, // 13,20zł <- 41,89zł / Emitujący kolor: 3000K Warm White / Moc: 24v 336 leds / Długość: 5m
    },
    {
      name: "5 metrów czarno-białej rurki termokurczliwej do 8mm 10mm 12mm 3528 3014 3535 5050 SMD LED Strip Lights WS2812B WS2811 WS2815 - AliExpress 39",
      image:
        "https://ae01.alicdn.com/kf/H52aac67b14e94e0da36267b6e3123569o.jpg",
      url: "https://pl.aliexpress.com/item/1721184350.html",
      price: 16.49,
    },
    {
      name: "12 sztuk przezroczystych złączy bezlutowych 15 cm do taśm LED FCOB DIM CCT RGB WS2812B WS2811 WS2815 5050 RGBW RGBCCT SMD - AliExpress 13",
      image:
        "https://ae01.alicdn.com/kf/S6a6be4fe1e9440259446eaf2ffe4585c8.jpg",
      url: "https://pl.aliexpress.com/item/1005001308044132.html",
      price: 21.19,
    },
    {
      name: "GLEDOPTO ESP32 WLED LED Controller Dynamic RGB IC IO33 DIY App Easy Wiring WS2811 WS2812 SK6812 TM1814 WS2813 WS2815 Strip Light - AliExpress ",
      image:
        "https://ae01.alicdn.com/kf/Sd2b06901a0724776a39fed7154e37bf1M.jpg",
      url: "https://pl.aliexpress.com/item/1005007017224313.html",
      price: 58.59,
    },
    {
      name: "GLEDOPTO ESP32 WLED kontroler LED DC5-24V DIY dynamiczny tryb oświetlenia WS2811 WS2812b SK6812 TM1814 WS2813 WS2815 taśmy LED - AliExpress ",
      image:
        "https://ae01.alicdn.com/kf/Sc3b98ec33b854f08a0c05e94243c0d8fl.jpg",
      url: "https://pl.aliexpress.com/item/1005006345755219.html",
      price: 54.99,
    },
    {
      name: "GLEDOPTO WLED wzmacniacz sygnału wzmacniacz 10m przedłużenie bez migotania wzmacniacz taśmy LED dla WS2811 WS2812 SK6812 kontroler cyfrowy - AliExpress 39",
      image:
        "https://ae01.alicdn.com/kf/S1b5683d9a45e491bbb44b9da3aba71563.jpg",
      url: "https://pl.aliexpress.com/item/1005008530591482.html",
      price: 39.49,
    },
    {
      name: "GLEDOPTO Elite ESP32 Kontroler WLED Przewodowy Ethernet Reaktywny na Dźwięk Energooszczędny Przekaźnik Bezpiecznik 20A Dynamiczny RGBIC WS2811 WS2812 SK6812 - AliExpress ",
      // "price": 27.39, // kolor: IR Sensor Switch
      // "price": 78.33, // 77,19zł / kolor: 615WL No Ethernet
      price: 94.19, // 92,79zł / kolor: 616WL With Ethernet
      image:
        "https://ae01.alicdn.com/kf/S1bc9d1db0e13400386258885c5e896d0D.jpg",
      url: "https://pl.aliexpress.com/item/1005009880754804.html",
    },
    {
      name: "GLEDOPTO WLED Kontroler LED ESP32 Mikrofon Muzyka UART RGB IC Cyfrowe Światła Adresowalne Oświetlenie Sznurowe WS2811 WS2812B WS2815 SK6812 - AliExpress ",
      // "price": 26,
      price: 79.55, // 53,28zł / kolor: ESP32 Mic UART White
      image:
        "https://ae01.alicdn.com/kf/S95d53527f6464932996161faa8958616y.jpg",
      url: "https://pl.aliexpress.com/item/1005009262493430.html",
    },
    {
      name: "SMLIGHT A1-SLWF-09 WLED Ethernet PoE Audioreaktywny Kontroler LED Home Assistant do Taśm WS2811 WS2812B WS2813 WS2815 RGBIC - AliExpress ",
      image:
        "https://ae01.alicdn.com/kf/S2ad647b1713943c2abc50782ef3ebe9a3.jpg",
      url: "https://pl.aliexpress.com/item/1005009755308729.html",
      // price: 106.79,
      price: 171.1, // 161,19zł / kolor: 09 Color Eth PoE
    },
    {
      name: "WS2811 WS2812B SP901E Kontroler wzmacniacza sygnału LED Wyjście SPI Sygnał TTL 5V Dla modułów taśm LED WS2813 WS2815 SK6812 - AliExpress 39",
      price: 97.19,
      image: "https://ae01.alicdn.com/kf/HTB1mOg9Q4TpK1RjSZR0q6zEwXXag.jpg",
      url: "https://pl.aliexpress.com/item/1005010069746566.html",
    },
    {
      name: "Mata magnetyczna Silikonowa mata naprawcza Podkładka lutownicza do płytek drukowanych Odporna na ciepło 932 ° F Antystatyczny do naprawy telefonów ESD Iron - AliExpress ",
      // "price": 11.28,
      price: 34.05, // 32,26zł / kolor: S140 350 X 250mm
      image:
        "https://ae01.alicdn.com/kf/S0e9a7769077c43b0ab63f154dcd84217Y.jpg",
      url: "https://pl.aliexpress.com/item/1005008040032049.html",
    },
    {
      name: "Oryginalny Mean Well RS-15/25/35/50 seria Meanwell 3.3V 5V 12V 15V 24V 48V pojedyncze wyjście zasilacz impulsowy - AliExpress ",
      image:
        "https://ae01.alicdn.com/kf/S80769808f5c74abea872835044f1616by.jpg",
      url: "https://pl.aliexpress.com/item/1005007124288232.html",
      price: 51.59,
    },
    {
      name: "Płytka rozwojowa ESP32-S3 PoE RJ45 / OV2640 OV5640 Camera / W5500 / Micro-SD kompatybilna z Raspberry Pi - AliExpress 7",
      image:
        "https://ae01.alicdn.com/kf/S5cc532ab97754d698f5d6b3eaecd2b6bY.jpg",
      url: "https://pl.aliexpress.com/item/1005009515493507.html",
      price: 84.39,
    },
    {
      name: "ESP32-S3 4-calowy ekran dotykowy LCD 480x480 RS485 /SHT20 / płytka rozwojowa przekaźnika dla Arduino LVGL 86 TVbox - AliExpress 7",
      price: 33.69,
      image:
        "https://ae01.alicdn.com/kf/S5da0b11d00554b358da898f2d1e1a6a8G.jpg",
      url: "https://pl.aliexpress.com/item/1005007906933040.html",
    },
    {
      name: "HKL-EA8 16M duża karta IoT Flash inteligentne sterowanie przemysłowe w domu NPN PNP wejście sygnału 0-5V 4-20MA wejście analogowe wyjście 0-10V - AliExpress 44",
      price: 142.79,
      image:
        "https://ae01.alicdn.com/kf/Sfc98d46dba194e469d3d3b463b077700W.jpg",
      url: "https://pl.aliexpress.com/item/1005008468553434.html",
    },
    {
      name: "Płytka rozwojowa ESP32-P4 Smart 86 Box z dwurdzeniowymi i jednordzeniowymi procesorami RISC-V 32-bitowymi opartymi na kontrolerze ESP32-P4 - AliExpress 7",
      price: 191.59,
      image:
        "https://ae01.alicdn.com/kf/S6bd18b3ece594c94bf41754332890eb5K.jpg",
      url: "https://pl.aliexpress.com/item/1005009455582410.html",
    },
    {
      name: "ESP32-S3 4.0 Cal inteligentny wyświetlacz dla Arduino LVGL WiFi płyta rozwojowa Bluetooth moduł LCD TFT moduł pojemnościowy - AliExpress 13",
      price: 123.59,
      image:
        "https://ae01.alicdn.com/kf/S580066e850e945f3b85ee711aaf3b478T.jpg",
      url: "https://pl.aliexpress.com/item/1005009013384109.html",
    },
    {
      name: "Gotowy do wysyłki Nowy System Bezpieczeństwa Domu SIP Wideodomofon Domofon KNX Inteligentny Dom Monitor Sterowanie Zasłonami Światłem Panel Przełącznika - AliExpress 15",
      price: 2278.79,
      image:
        "https://ae01.alicdn.com/kf/S39c19a2295504ee1ab6819d4f89011f9h.jpg",
      url: "https://pl.aliexpress.com/item/1005008982127454.html",
    },
    {
      name: "Inteligentny panel sterowania MOES Tuya WiFi 3,5-calowy ekran dotykowy, 3 przekaźniki i przyciski, pilot na podczerwień, koncentrator Bluetooth Sigmesh, automatyka domowa - AliExpress 44",
      price: 252.84,
      image:
        "https://ae01.alicdn.com/kf/S48bff80c23a34686b2b34a4b1497f016t.jpg",
      url: "https://pl.aliexpress.com/item/1005008876804544.html",
    },
    {
      name: "Dooya DT98 Mini elektryczny silnik kurtyny Jednościeżowy inteligentny dom Kompatybilny z aplikacją Mijia Zdalnie sterowany pręt z napędem silnikowym do Curtai - AliExpress 13",
      price: 580.99,
      image:
        "https://ae01.alicdn.com/kf/Sc1e217e880d54fa493f4982fb6a9c42dn.jpg",
      url: "https://pl.aliexpress.com/item/1005008327951751.html",
    },
    {
      name: "Inteligentny silnik do zasłon Tuya Smart Wifi Mini, elektryczny napęd do szyn zasłonowych, inteligentny system zdalnego sterowania zasłonami. - AliExpress 13",
      price: 421.19,
      image:
        "https://ae01.alicdn.com/kf/S3c90d85c107e4310bbc60dc7cc28cc56O.jpg",
      url: "https://pl.aliexpress.com/item/1005009871860809.html",
    },
    {
      name: "Elektryczna szyna do zasłon z falowaniem S, regulowana, inteligentny silnik do zasłon Tuya, Mini, Zigbee, WiFi, sterowanie Alexa i Google Assistant - AliExpress 13",
      price: 506.79,
      image:
        "https://ae01.alicdn.com/kf/Scbb7fc43b9434b238f58baaf5e6df84fr.jpg",
      url: "https://pl.aliexpress.com/item/1005010003915591.html",
    },
    {
      name: "Elektryczna kurtyna marzeń wifi zigbee tuya Alexa Google Alice Sterowanie głosem Inteligentny domowy elektryczny system kurtyn Zestaw torów - AliExpress 13",
      price: 767.79,
      image:
        "https://ae01.alicdn.com/kf/Sf536c207232a4718800b450c2cb1a5472.jpg",
      url: "https://pl.aliexpress.com/item/1005006942919435.html",
    },
    {
      name: "Elektryczny zestaw szyn do zasłon NOVO N31 z obsługą Tuya WiFi i modnymi oświetleniami atmosferycznymi, szyna karnisza do zasłon i akcesoria. - AliExpress 13",
      price: 813.39,
      image:
        "https://ae01.alicdn.com/kf/Sd3917d3fe22b4ec985cb7f1afdec400cu.jpg",
      url: "https://pl.aliexpress.com/item/1005009156782060.html",
    },
    {
      name: "Tuya 155MM 4rd Smart Zigbee/WiFi elektryczny silnik kurtyny migawki cichy silnik ze zdalnym sterowaniem APPVoice z Alexa Google Home - AliExpress ",
      price: 119.82,
      image:
        "https://ae01.alicdn.com/kf/S5bd8e86d9176445a8b735fd07fb7d38dM.jpg",
      url: "https://pl.aliexpress.com/item/1005007279142455.html",
    },
    {
      name: "Płytka rozwojowa ESP32-S3 7-calowy wyświetlacz dotykowy 800×480 Dwurdzeniowy procesor Xtensa LX7 8M Flash WiFi BT5 dla GUI LVGL HMI ESP32 - AliExpress 7",
      price: 149.99,
      image:
        "https://ae01.alicdn.com/kf/S994df21c8de2450c819790aff945d4a40.jpg",
      url: "https://pl.aliexpress.com/item/1005007033908236.html",
    },
    {
      name: "50CM Nordic żyrandol sufitowy nowoczesny E27 LED stół do jadalni wisiorek światła do salonu sypialnia Loft Decor lampa wisząca - AliExpress 39",
      price: 642.99,
      image:
        "https://ae01.alicdn.com/kf/S728f29942539447a845dff08e10b98c5V.jpg",
      url: "https://pl.aliexpress.com/item/1005009105280318.html",
    },
    {
      name: "Moduł laserowy czujnik odległości do Arduino STM32 zmierz odległość lotu 50CM 200CM 400CM I2C wyjście TOF050C TOF0200C TOF0400C - AliExpress 502",
      price: 9.99,
      image:
        "https://ae01.alicdn.com/kf/S3e221dbdc85f45ab8bbdc814643ba02ad.jpg",
      url: "https://pl.aliexpress.com/item/1005006922414022.html",
    },
    {
      name: "230 sztuk 2/3/4/5p zestaw zacisków męskich i żeńskich obudowa złącze pinowe JST XH-2.54 4-wartościowy adapter złączy - AliExpress 502",
      price: 8.39,
      image:
        "https://ae01.alicdn.com/kf/S1fbf6fd07f3744e79231cf7dbf82fde3P.jpg",
      url: "https://pl.aliexpress.com/item/1005008791163858.html",
    },
    {
      name: "Czujnik wilgotności i temperatury Zigbee Tuya Smart Tester gleby Czujnik wilgotności Obsługa Home Assistant Z2M Aplikacja Smart Life - AliExpress 13",
      price: 25.23,
      image:
        "https://ae01.alicdn.com/kf/Se0b29f455d424248a5a98014ba2b7b2bl.jpg",
      url: "https://pl.aliexpress.com/item/1005009331847639.html",
    },
    {
      name: "Moduł czujnika obecności człowieka 24 GHz Inteligentny radar fal milimetrowych Moduł wykrywania tętna z BT HLK-LD2410B - AliExpress 502",
      price: 17.1,
      image:
        "https://ae01.alicdn.com/kf/S0e374ffe6ef543988dc33f6943ef8c9bV.jpg",
      url: "https://pl.aliexpress.com/item/1005006315304472.html",
    },
    {
      name: "10 sztuk/1 szt. LD2410S 24G moduł czujnika radarowego wykrywania obecności człowieka HLK-LD2410S małej mocy LD2410 odległość wykrywania 8M 3.3V 0.1mA - AliExpress ",
      price: 14.09,
      image:
        "https://ae01.alicdn.com/kf/S7a7d631c31294c3c89191d0cd5b4e03dx.jpg",
      url: "https://pl.aliexpress.com/item/1005006208398629.html",
    },
    {
      name: "AHT10 precyzyjny cyfrowy czujnik temperatury i wilgotności moduł pomiarowy komunikacja I2C wymień DHT11 SHT20 AM2302 - AliExpress 502",
      price: 6.19,
      image:
        "https://ae01.alicdn.com/kf/S90897d329c9a4b82bccc276d33e97117D.jpg",
      url: "https://pl.aliexpress.com/item/1005008130578753.html",
    },
    {
      name: "Zemismart Zigbee 3.0 inteligentna prowadnica kurtyny praca z Tuya Zigbee Hub SmartThings Alexa Google Home Assistant elektryczne zasłony - AliExpress ",
      price: 396.22,
      image:
        "https://ae01.alicdn.com/kf/S5aa808a60c0140c09270d4e02f689c32K.jpg",
      url: "https://pl.aliexpress.com/item/1005008158938333.html",
    },
    {
      name: "Dooya DT98 Mini elektryczny silnik kurtyny Jednościeżowy inteligentny dom Kompatybilny z aplikacją Mijia Zdalnie sterowany pręt z napędem silnikowym do Curtai - AliExpress 13",
      price: 602.79,
      image:
        "https://ae01.alicdn.com/kf/Sc1e217e880d54fa493f4982fb6a9c42dn.jpg",
      url: "https://pl.aliexpress.com/item/1005008327951751.html",
    },
    {
      name: "1 szt. Męskie i żeńskie złącze płyta testowa MINI z płytą 2.54mm podziałka 19/20pin DP HD kobiecy męski płytka przyłączeniowa - AliExpress ",
      price: 8.91,
      image:
        "https://ae01.alicdn.com/kf/Sb2ccee99c08949fab9f882377b2c3ab3g.jpg",
      url: "https://pl.aliexpress.com/item/1005006287755751.html",
    },
    {
      name: "Silikonowa podkładka lutownicza platforma mata na stół do stacji lutowniczej żelazka naprawa telefonu PC magnetyczna izolacja termiczna bez ołowiu S-160 - AliExpress ",
      price: 16.15,
      image:
        "https://ae01.alicdn.com/kf/S0a090ccf96f84093a4559c90f57b82f7D.jpg",
      url: "https://pl.aliexpress.com/item/1005009085657828.html",
    },
    {
      name: "5 Typ 9CM 15CM 20CM 25CM 30CM Linijka PCB Wielofunkcyjne narzędzie pomiarowe Rezystor Kondensator Układ scalony IC SMD Dioda Tranzystor - AliExpress ",
      price: 4.89,
      image:
        "https://ae01.alicdn.com/kf/Sbc32b0e8ae00411386f1b7627d2c346fc.jpg",
      url: "https://pl.aliexpress.com/item/1005008077823195.html",
    },
    {
      name: "100 sztuk żółty przycisk wypełniony żelem przewód telefoniczny łącznik UY 2 Port - AliExpress ",
      price: 10.59,
      image:
        "https://ae01.alicdn.com/kf/Sb08dacbc85bc4d828491ffa99bd35db5o.jpg",
      url: "https://pl.aliexpress.com/item/1005005689913648.html",
    },
    {
      name: "DALI AC Triac Dimmer DT-C z przełącznikiem przyciskowym Ściemniacz krawędziowy DT4 do jednokolorowych ściemnialnych lamp LED AC100-240V 360W - AliExpress 39",
      price: 29.12,
      image:
        "https://ae01.alicdn.com/kf/S58320361ec784205aba01746ac6c553bL.jpg",
      url: "https://pl.aliexpress.com/item/1005007328614262.html",
    },
    {
      name: "DALI AC Triac Dimmer DT-C z przełącznikiem przyciskowym Ściemniacz krawędziowy DT4 do jednokolorowych ściemnialnych lamp LED AC100-240V 360W - AliExpress 39",
      price: 26.84,
      image:
        "https://ae01.alicdn.com/kf/S58320361ec784205aba01746ac6c553bL.jpg",
      url: "https://pl.aliexpress.com/item/1005007328614262.html",
    },
    {
      name: "Silikonowa rurka neonowa IP67 Wodoodporny elastyczny miękki żel krzemionkowy Znak 1m 2m 3m 4m 5m Dla WS2811 WS2812B 5050 2835 COB LED Strip Light - AliExpress 39",
      price: 3.69,
      image:
        "https://ae01.alicdn.com/kf/Sd60600cced64422b881bca69926aa203c.jpg",
      url: "https://pl.aliexpress.com/item/1005007705654602.html",
    },
    {
      name: "ESP32-S3 7-calowa płytka rozwojowa pojemnościowego wyświetlacza dotykowego, ESP32 z wyświetlaczem, 800 × 480, 5-punktowy dotyk - AliExpress 44",
      price: 141.19,
      image:
        "https://ae01.alicdn.com/kf/S242c28c3bf634fd8b83050f4ad2fc345k.jpg",
      url: "https://pl.aliexpress.com/item/1005006981594450.html",
    },
    {
      name: "Aktywny inżektor PoE++ 2.5G 10G, moc 90W, montaż na szynę DIN, IEEE 802.3af/at/bt, 4-pair PoE do kamer PTZ, WiFi 6/6E - AliExpress 30",
      price: 75.82,
      image:
        "https://ae01.alicdn.com/kf/Sb55b7a9d215c4417955ea2f390c3ddf49.jpg",
      url: "https://pl.aliexpress.com/item/1005009400746249.html",
    },
    {
      name: "WeMos LOLIN D1 Mini Pro NodeMcu Lua Internet rzeczy moduł płytka prototypowa IOT WIFI ESP-12F ESP8266 CH340G TYPE-C kabel USB - AliExpress 13",
      price: 2.17,
      image:
        "https://ae01.alicdn.com/kf/S606bb4c452a742c49491e4c6afa2d8a0h.jpg",
      url: "https://pl.aliexpress.com/item/1005005676635460.html",
    },
    {
      name: "10M/20M Miękka Silikonowa Neonowa Taśma LED 220V Wysoki Lumen Wodoodporna Taśma Diodowa Zewnętrzna do Dekoracji Domu - AliExpress 39",
      price: 49.84,
      image:
        "https://ae01.alicdn.com/kf/Sf82b83f24c2a4796b1406d27b233c98e1.jpg",
      url: "https://pl.aliexpress.com/item/1005008968353234.html",
    },
    {
      name: "GLEDOPTO ESP32 WLED LED Controller Dynamic RGB IC IO33 DIY App Easy Wiring WS2811 WS2812 SK6812 TM1814 WS2813 WS2815 Strip Light - AliExpress 39",
      price: 34.8,
      image:
        "https://ae01.alicdn.com/kf/Sd2b06901a0724776a39fed7154e37bf1M.jpg",
      url: "https://pl.aliexpress.com/item/1005007017224313.html",
    },
    {
      name: "Zigbee DALI wpuszczany inteligentny reflektor LED COB 5 CCT przełączany Ultra cienka, przeciwodblaskowa, ściemnialna aluminiowa lampa sufitowa o wysokim CRI 95 - AliExpress 39",
      price: 11.92,
      image:
        "https://ae01.alicdn.com/kf/S9600e8892da94785aa98d6ad579f65aeG.jpg",
      url: "https://pl.aliexpress.com/item/1005004317325002.html",
    },
    {
      name: "Oprawa wpuszczana LED typu Downlight czarny nowoczesny reflektor kryty antyodblaskowy CRI97 aluminiowa lampa sufitowa do salonu sypialnia - AliExpress 39",
      price: 5.2,
      image:
        "https://ae01.alicdn.com/kf/S42cb3ef610ce44f8a504acdc252d8da29.jpg",
      url: "https://pl.aliexpress.com/item/1005008488408856.html",
    },
    {
      name: "1 sztuk GY-BME280-3.3 GY-BMP280-3.3 5V moduł czujnika ciśnienia atmosferycznego o wysokiej precyzji BME280 dla Arduino - AliExpress ",
      price: 3.69,
      image:
        "https://ae01.alicdn.com/kf/S2e9f24f4b0ee4a1488c0572bb5404561V.jpg",
      url: "https://pl.aliexpress.com/item/1005008728942141.html",
    },
    {
      name: "Pojemnościowy moduł czujnika wilgotności gleby V1.2 Odporny na korozję analogowy przewód o szerokim napięciu - AliExpress ",
      price: 3.69,
      image:
        "https://ae01.alicdn.com/kf/S7128711a669b4a97b68d2a2c67c0a089F.jpg",
      url: "https://pl.aliexpress.com/item/1005005973892592.html",
    },
    {
      name: "Mini płytka rozwojowa ESP32C6 XIAO esp32 c6-2.4 GHz WiFi6,BlE5.3,Zigbee Thread (802.15.4)ESP Rain Maker,AWS IoT, Microsoft Azure - AliExpress ",
      price: 24.89,
      image:
        "https://ae01.alicdn.com/kf/Sc7d2ed9be9d54d9a9079fb6f9484b922B.png",
      url: "https://pl.aliexpress.com/item/1005007341738903.html",
    },
    {
      name: "1 szt./10 szt. mini płytek rozwojowych ESP32S3 Seeed Studio XIAO esp32 s3 Arduino MicroPython Dev Board 240MHz 2.4GHz WiFi Bluetooth",
      price: 0.55,
      image:
        "https://ae01.alicdn.com/kf/S10796176f43542fdb768cbae4d725d42P.jpg",
      url: "https://pl.aliexpress.com/item/1005007341749305.html",
    },
    {
      name: "XIAO ESP32S3 Plus - 20 GPIO, 2,4 GHz WiFi, BLE 5.0, 8 MB pamięci PSRAM, 16 MB pamięci FLASH, dwurdzeniowy procesor esp32-s3, obsługa ładowania akumulatora - AliExpress 7",
      price: 34.99,
      image:
        "https://ae01.alicdn.com/kf/S2e90df5d0ec2418898ef8dfe4fe16ddfY.jpg",
      url: "https://pl.aliexpress.com/item/1005008329745247.html",
    },
    {
      name: "Wstępnie przylutowany Seeeduino Xiao ESP32 C3 C6 S3 nRF52840 Mini płytka rozwojowa moduł wifi moduł bluetooth5.0 RISC-V z anteną - AliExpress 7",
      price: 1.62,
      image:
        "https://ae01.alicdn.com/kf/Sc99002e2860c4ca19c3b493a841095dbW.jpg",
      url: "https://pl.aliexpress.com/item/1005008304166336.html",
    },
    {
      name: 'TRMNL BYOD 7,5\\" (OG) zestaw DIY e-ink, monochromatyczny wyświetlacz e-ink 800x480, XIAO ESP32-S3 PLUS, kompatybilny z Arduino, akumulator - AliExpress 7',
      price: 202.19,
      image:
        "https://ae01.alicdn.com/kf/S49e6821fa41f4a23a694291d5b8fe1621.png",
      url: "https://pl.aliexpress.com/item/1005009532501677.html",
    },
    {
      name: "Wyświetlacz ePaper reTerminal E1002, pełnokolorowy, 6 kolorów, ekran e-ink, TRMNL, ESP32-S3, ESPHome, Home Assistant, open-source, możliwość personalizacji - AliExpress 7",
      price: 483.99,
      image:
        "https://ae01.alicdn.com/kf/Sd895138d7fb54e17ae49dddaa6eb216bN.png",
      url: "https://pl.aliexpress.com/item/1005010114828559.html",
    },
    {
      name: "Kabel ładujący SenseCAP T1000, magnetyczny USB typu A do 4-pinowego, czarny, 1000 mm, SKU 321010939, do lokalizatora SenseCAP T1000-E - AliExpress 7",
      price: 9.49,
      image:
        "https://ae01.alicdn.com/kf/S3321074b8c494e859b189f2dfaa10ba2y.jpg",
      url: "https://pl.aliexpress.com/item/1005008283136493.html",
    },
    {
      name: "Płytka sterownika LED Seeed Studio dla Seeed Studio XIAO, obsługująca taśmy LED RGB 5V i 12V NeoPixel WS2812, WS2813, WS2815 - AliExpress 7",
      price: 23.59,
      image:
        "https://ae01.alicdn.com/kf/S346c70008a674bf69672ce3803247324K.jpg",
      url: "https://pl.aliexpress.com/item/1005009130131910.html",
    },
    {
      name: "Moduł dodatkowy przekaźnika dla Seeed Studio XIAO i QT Py, przekaźnik HF32FA-G do 10A/250VAC - AliExpress 7",
      price: 16.99,
      image:
        "https://ae01.alicdn.com/kf/S7d38412720454a42a17983b72612b3a6m.png",
      url: "https://pl.aliexpress.com/item/1005008299349682.html",
    },
    {
      name: "Grove-Relay Przekaźnik mechaniczny mały 1-kierunkowy wysokoprądowy 5V/10A Arduino, wytrzymałość na napięcie szczytowe 250V 10A",
      price: 12.19,
      image:
        "https://ae01.alicdn.com/kf/Sda685d42c29540ac826dbfb7849606f1t.png",
      url: "https://pl.aliexpress.com/item/1005007131155791.html",
    },
    {
      name: "Seeed Studio XIAO RP2040 Obsługa Arduino, MicroPython, CircuitPython, płytka rozwojowa oparta na Raspberry Pi RP2040, mikrokontroler - AliExpress 7",
      price: 19.29,
      image:
        "https://ae01.alicdn.com/kf/S78c9c1869b73486b955410908a9eac95L.png",
      url: "https://pl.aliexpress.com/item/1005006987582110.html",
    },
    {
      name: "RP2040 - Mikrokontroler Studio XIAO RP2040, z dwurdzeniowym procesorem ARM Cortex M0+, Arduino, MicroPython i CircuitPyth - AliExpress 7",
      price: 60.79,
      image:
        "https://ae01.alicdn.com/kf/S409d1464613d4630b01214c3c723c63eG.jpg",
      url: "https://pl.aliexpress.com/item/1005007514206323.html",
    },
    {
      name: "3 szt. XIAO ESP32C3 Mini płytka rozwojowa ESP32 C3 Moduł Dev WiFi BlE5.0 RISC-V dla Arduino IDE, MicroPython, CircuitPython - AliExpress 7",
      price: 60.19,
      image:
        "https://ae01.alicdn.com/kf/S5d4cadcca1f040f68119e9892d07c4bbY.jpg",
      url: "https://pl.aliexpress.com/item/1005010024103496.html",
    },
    {
      name: "Grove - AHT20 I2C Przemysłowy czujnik temperatury i wilgotności",
      price: 19.49,
      image:
        "https://ae01.alicdn.com/kf/S62912dd9019a42d6b58bd7805f931306c.jpg",
      url: "https://pl.aliexpress.com/item/1005007798524783.html",
    },
    {
      name: "Grove - Czujnik gazu VOC i eCO2 (SGP30) - AliExpress 7",
      price: 36.19,
      image:
        "https://ae01.alicdn.com/kf/Sf4b9aaa81f894a4c8ee7ddb804f7d88d7.jpg",
      url: "https://pl.aliexpress.com/item/1005007797314968.html",
    },
    {
      name: "Grove - Czujnik barometru (BME280) - AliExpress 7",
      price: 81.99,
      image:
        "https://ae01.alicdn.com/kf/S423ec997260946f18de8a2b8ceab7117M.jpg",
      url: "https://pl.aliexpress.com/item/1005007819068845.html",
    },
    {
      name: "Grove - Czujnik temperatury i wilgotności (DHT11) - AliExpress 7",
      price: 21.89,
      image:
        "https://ae01.alicdn.com/kf/Sfea49d41cd4744a989423259f0c430ads.jpg",
      url: "https://pl.aliexpress.com/item/1005007789706688.html",
    },
    {
      name: "Cyfrowy czujnik ruchu PIR Seeed Studio Grove (12 m) - AliExpress 7",
      price: 19.49,
      image:
        "https://ae01.alicdn.com/kf/S9e636f6276754290ab9a62c3b793e1e5c.png",
      url: "https://pl.aliexpress.com/item/1005007132220104.html",
    },
    {
      name: "Płytka mikrokontrolera Raspberry Pi Pico 2 RP2350/ Pi Pico RP2040 520KB 150 MHz, Arm Cortex-M33 RISC-V Hazard3 rdzenie - AliExpress 7",
      price: 29.79,
      image:
        "https://ae01.alicdn.com/kf/Sd1fba777367a4e83874589963d4027dfz.png",
      url: "https://pl.aliexpress.com/item/1005007786007987.html",
    },
    {
      name: "LinkStar-H68K-1432 V2 Wi-Fi 6 dla asystenta domowego z 4 GB pamięci RAM i 32 GB eMMC, dual-2.5G i dual-1G Ethernet, wyjście 4K - AliExpress 7",
      price: 443.99,
      image:
        "https://ae01.alicdn.com/kf/Sa199c8c5800e4c91937b0507a253c1b9U.jpg",
      url: "https://pl.aliexpress.com/item/1005007401300232.html",
    },
    {
      name: "Płytka rozwojowa mikrokontrolera Wio Terminal, ekran LCD 2,4 cala, rdzeń ATSAMD51, Realtek RTL8720DN, Grove, Raspberry Pi, Arduino, MicroPython - AliExpress 7",
      price: 136.19,
      image:
        "https://ae01.alicdn.com/kf/S581bf05665084e77920ab2dae12e00a4n.png",
      url: "https://pl.aliexpress.com/item/1005007096437370.html",
    },
    {
      name: "SenseCAP S2110 RS485 Grove Sensor Builder LoRaWAN Device Oprogramowanie open source do tworzenia czujników IoT RS485 z modułami Grove - AliExpress 7",
      price: 88.39,
      image:
        "https://ae01.alicdn.com/kf/S2a5736afe7e340b6a9d928072e065768k.jpg",
      url: "https://pl.aliexpress.com/item/1005008394075585.html",
    },
    {
      name: "Płytka rozwojowa ESP32-S3 WiFi BT 4-calowy ekran dotykowy IPS dla Arduino LVGL IOT ESP32 86 Box Central Centrol - AliExpress 7",
      price: 82.78,
      image:
        "https://ae01.alicdn.com/kf/S374ea1878a604b848eade08a55459c16R.jpg",
      url: "https://pl.aliexpress.com/item/1005009384274904.html",
    },
    {
      name: "Konfigurowalna super cicha elektryczna szyna kurtynowa dla Aqara Tuya Wifi/Zigbee Dooya 82 silnik inteligentne zasłony domowe pręt cornice - AliExpress 13",
      price: 95.59,
      image:
        "https://ae01.alicdn.com/kf/Scec4ff8508fe4dd89e8476c35bb95608s.jpg",
      url: "https://pl.aliexpress.com/item/1005007666391473.html",
    },
    {
      name: "10 sztuk SN74HC165N SN74HC165 DIP16 DIP 74HC165N 74HC165 74165 - AliExpress ",
      price: 8.31,
      image:
        "https://ae01.alicdn.com/kf/Sfd6883d770bc45d5b8f5e89c158da264K.jpg",
      url: "https://pl.aliexpress.com/item/32950715212.html",
    },
    {
      name: "Moduł nadajnika i odbiornika IR ESP32 – protokół NEC, transmisja WiFi dla inteligentnego domu, zasilanie - AliExpress ",
      price: 18.59, // Kolor: A
      image:
        "https://ae01.alicdn.com/kf/Se3f1e591a7a44505a0aee6bd5f4d30500.jpg",
      url: "https://pl.aliexpress.com/item/1005010715515252.html",
    },
    {
      name: "75mm suwak miksera BK10x2 dwukanałowy prosty potencjometr przesuwny B103 7.5CM suwak miksera - AliExpress ",
      price: 7.49,
      image:
        "https://ae01.alicdn.com/kf/H36767d51673d489f8fc71a896a8cd04dF.png",
      url: "https://pl.aliexpress.com/item/1005001530747022.html",
    },
    {
      name: "Mini DC-DC Buck Step Down Converter Board Module 6V-24 V to 3.3V 5V 12V DC DC Voltage Regulator PCB Board Power Buck Module - AliExpress ",
      price: 9.71, // kolor: 5V
      // "price": 9.99, // kolor: 3.3V
      image:
        "https://ae01.alicdn.com/kf/Sbc35dd4783ac44d5aa0f44b7c8b21083O.jpg",
      url: "https://pl.aliexpress.com/item/1005007360027772.html",
    },
    {
      name: "DC3.6V-32V do 5V/9V/12V stabilizowany moduł konwertera napięcia regulowany moduł regulatora napięcia wzmacniającego Buck zasilacz - AliExpress ",
      // "price": 12.32, // kolor: 12V
      price: 12.32, // kolor: 5V
      image:
        "https://ae01.alicdn.com/kf/S439ead9c2aee41ca8e8106dabe5daa81D.jpg",
      url: "https://pl.aliexpress.com/item/1005008308365600.html",
    },
    {
      name: "Moduł zasilania DC-DC z regulacją obniżającą napięcie 6-80V do 3.3V 5V 12V, przetwornica obniżająca napięcie (Buck Converter) - AliExpress ",
      price: 2.79, // kolor: B
      image:
        "https://ae01.alicdn.com/kf/S81089fc6307f45348e77fda9a50c995cj.jpg",
      url: "https://pl.aliexpress.com/item/1005009657050980.html",
    },
    {
      name: "DC-DC 3A Buck Step-down Moduł zasilacza 5V-12V 24V do 5V 3.3V 9V 12V Stałe wyjście wysokoprądowe dla Arduino Zastępuje LM2596 - AliExpress ",
      // "price": 3.64,
      price: 4.6, // Standard źródła zasilania: 1 SZT. / kolor: 5V
      image:
        "https://ae01.alicdn.com/kf/S40e89a1a7e494c958b1b8d3414d47c0fV.jpg?has_lang=1&ver=2",
      url: "https://pl.aliexpress.com/item/1005003564766694.html",
    },
    {
      name: "1/5/10 szt. Przetwornica DC-DC Buck Moduł Zasilania Obniżającego Napięcie 5V-30V Do 3.3V 5V 3A Regulator Napięcia do Samochodu Motocykla Akumulatora - AliExpress ",
      // "price": 3.64,
      price: 4.38, // Standard źródła zasilania: 1 SZT. / kolor: 5V
      image:
        "https://ae01.alicdn.com/kf/S15e3a911773941de86fe67dd02022815b.jpg",
      url: "https://pl.aliexpress.com/item/1005009615481447.html",
    },
    {
      name: "1szt 41F-1Z-C2-1 + HF41F 24-ZS 12-Z 5-ZS 5V 12V 24V ZST 6A 250V 1CO Slim/SSR Przekaźnik montowany na gniazdku śrubowym z przekaźnikiem waflowym LED - AliExpress ",
      // "price": 3.64,
      price: 18.06, // Rozmiar: 5V-ZS 41F-1Z-C2-1
      image:
        "https://ae01.alicdn.com/kf/S444780376d184388aef1a8d515d7c2d1f.jpg",
      url: "https://pl.aliexpress.com/item/1005005274947502.html",
    },
    {
      name: "CENFAYA DALI DMX 4-kanałowy przełącznik 100-240VAC 4CH*16A AC DH4 DT7 DALI-2 OLED Sisplay Screen DMX512 standardowe protokoły 220V - AliExpress ",
      // "price": 117.22,
      price: 145.91, // Rozmiar: Przełącznik DALI DMX 4-kanałowy
      image:
        "https://ae01.alicdn.com/kf/S8dfa05cbed744edab1c367688f2e9eeaa.jpg",
      url: "https://pl.aliexpress.com/item/1005009447488043.html",
    },
    {
      name: "Skydance AC DALI Switch Dimmer DH DH1 DH8 DH-B (DT7) DH4 Relay Unit AC100-240V 1/2/4/8 Channel DMX Push Switch for DALI Product - AliExpress 39",
      // "price": 28.4,
      price: 129.12, // kolor: DH4 Only
      // "price": 142.77, // kolor: DH8 Only
      image:
        "https://ae01.alicdn.com/kf/Sa5aa677f71924566bbf2a902237bc3aeI.jpg",
      url: "https://pl.aliexpress.com/item/1005008637796703.html",
    },
    {
      name: "NOWOŚĆ 100-240VDC DALI / DMX RDM 8-kanałowy sterownik przekaźnika 8CH*16A Wyświetlacz numeryczny / szyna Din DH8 (DT7) do lamp LED - AliExpress 39",
      // "price": 96.51,
      price: 122.62,
      image:
        "https://ae01.alicdn.com/kf/S791b9f0e4bac4dcbbd88bd3a85c409e6X.jpg",
      url: "https://pl.aliexpress.com/item/1005006172487386.html",
    },
  ],
  [
    {
      name: "Skydance 12V 24V 150W DALI Ściemnialny sterownik LED stałonapięciowy LN-150-12-DA LN-150-24-DA do jednokolorowych i CCT taśm LED - AliExpress ",
      price: 66,
      image:
        "https://ae01.alicdn.com/kf/S0839d1cbf1f641eda8a3a14f5538dad56.jpg",
      url: "https://pl.aliexpress.com/item/1005009824439643.html",
    },
    {
      name: "Skydance AC DALI Switch Dimmer DH DH1 DH8 DH-B (DT7) DH4 Relay Unit AC100-240V 1/2/4/8 Channel DMX Push Switch for DALI Product - AliExpress 39",
      price: 17.72,
      image:
        "https://ae01.alicdn.com/kf/Sa5aa677f71924566bbf2a902237bc3aeI.jpg",
      url: "https://pl.aliexpress.com/item/1005008637796703.html",
    },
    {
      name: "Skydance DA1 DA1-S DA4 DA4-M DA4-L DA4-D DA4-WPS DP4 DA5-L DT4 DT6 Jednokolorowy pasek CV DALI Ściemniacz LED PMW Ściemnianie 12-48V DC - AliExpress 39",
      price: 3.64,
      image:
        "https://ae01.alicdn.com/kf/S6a33af876b8e4d158e2a6b484276ba54W.jpg",
      url: "https://pl.aliexpress.com/item/1005005752815229.html",
    },
    {
      name: "Skydance Czujnik ruchu dłoni EB(C) Czujnik drzwi ED(C) Czujnik dotykowy drewna EW Laserowa głowica czujnika EL-C Sonda czujnika Seria szafy schodowej - AliExpress 39",
      // price: 3.64,
      // price: 34.67,// kolor: ED(C) Only
      price: 36.99, // kolor: EL-C Only
      image:
        "https://ae01.alicdn.com/kf/Sf43ed410009d4aedb48d6f6889b38b4cH.jpg",
      url: "https://pl.aliexpress.com/item/1005008887590977.html",
    },
    {
      name: "SKYDANCE PIR Czujnik Ruchu ER-A/Czujnik Dotykowy EC-A/Czujnik Laserowy EL-C Używany do oświetlenia schodów/garaży szaf, garderoby - AliExpress 39",
      // "price": 10.06,
      price: 43.04, // kolor: EL-C
      image:
        "https://ae01.alicdn.com/kf/Scf07c4319d7d4d8cb390e770ef26d231a.jpg",
      url: "https://pl.aliexpress.com/item/1005008880536640.html",
    },
    {
      name: "Taśma LED COB SPI RGB RGBW RGBCCT 5m DC12V 24V 840 784 720 576 LED/M Elastyczna Taśma LED FCOB Ściemnialna Liniowa Taśma Wstążka - AliExpress 39",
      price: 32.94,
      image:
        "https://ae01.alicdn.com/kf/S840f0179c8cd4a9e9124d3b93530f65eR.jpg",
      url: "https://pl.aliexpress.com/item/1005005963422695.html",
    },
    {
      name: "5m 12V DC 5050 UV LED Strip Light 395nm - 405nm Ultraviolet Flexible SMD LED Tape IP20 IP65 Black White PCB for DJ Fluorescence - AliExpress 39",
      price: 10.7,
      image:
        "https://ae01.alicdn.com/kf/Hf90cb87a641341bca3d303a6e894f07a4.jpg",
      url: "https://pl.aliexpress.com/item/32780704783.html",
    },
    {
      name: "0.3m 0.5m 1m 2m 5m 2Pin 3Pin 4Pin 5Pin przedłużacz SM JST 22AWG SM wtyk przewód męski na żeński przewód łączący do użytku z Led CCTV - AliExpress 13",
      price: 3.71,
      image:
        "https://ae01.alicdn.com/kf/S6f6174d23fee489683b6f3cef9c1fe20x.jpg",
      url: "https://pl.aliexpress.com/item/1005003772053637.html",
    },
    {
      name: "1m 2m 3m 5m 6Pin 6Pins LED Connector 2.0mm Pin Picth Extension Cable Cord Wire Female Connector for RGBCCT LED Strip Light - AliExpress 13",
      price: 3.64,
      image:
        "https://ae01.alicdn.com/kf/S27963cafe7cb46cc8f3be56bcca76debe.jpg",
      url: "https://pl.aliexpress.com/item/1005004828217268.html",
    },
    {
      name: "3-pinowe szybkie złącze CCT COB LED Strip do IP20 CCT FOB Strip 8mm 10mm Bez lutowania Bez lutowania Pasek do paska / narożnik przewodu - AliExpress 13",
      price: 18.59,
      image:
        "https://ae01.alicdn.com/kf/S4d3d5facf63b4f31aaf204577094cec8Z.jpg",
      url: "https://pl.aliexpress.com/item/1005006051233398.html",
    },
    {
      name: "10szt 6Pin 12mm Cut-End Snap On Clip Connector Socket 2.0mm Pin Picth + wtyczka męska do Hue V3 2.0 Standard 6-Pin RGBCCT LED Strip - AliExpress 13",
      price: 3.64,
      image:
        "https://ae01.alicdn.com/kf/Se6317bebc15f492684d6600b23e1a3c8y.jpg",
      url: "https://pl.aliexpress.com/item/1005004835699867.html",
    },
    {
      name: "5m 10m 20m 30m 50m 100m 6Pin 6-Pin 6 kanałów przedłużacz kabla przewód zasilający złącze LED 22AWG dla RGB CCT taśmy LED - AliExpress 13",
      price: 25.59,
      image: "https://ae01.alicdn.com/kf/HTB1NVSYL9zqK1RjSZFpq6ykSXXax.jpg",
      url: "https://pl.aliexpress.com/item/32878618544.html",
    },
    {
      name: "Panel ścienny DALI CENFAYA z 8/4 przyciskami, urządzenie wejściowe DALI-2, obsługuje funkcję sprzężenia zwrotnego, wbudowany zasilacz magistrali, 100-240VAC - AliExpress ",
      // price: 30.77,
      price: 75.18, // kolor: 4 Button DALI Panel
      image:
        "https://ae01.alicdn.com/kf/Sf373ba5d4fd746ad912e4d1dbe5e7d15W.jpg",
      url: "https://pl.aliexpress.com/item/1005010394214614.html",
    },
    {
      name: "DMX512 & RDM Decoder 12CH 24CH Wyjście Cyfrowy wyświetlacz numeryczny Funkcja 16bit 8bit RGB Tryb Ściemniacz Tryb wybieralny DC 12V 24V - AliExpress 39",
      price: 169.99,
      // price: 180.79, // kolor: 12CH DMX512
      // price: 242.99, // kolor: 24CH DMX512
      image:
        "https://ae01.alicdn.com/kf/S3e82a15ae3ef4368aa1afea075d5251cB.jpg",
      url: "https://pl.aliexpress.com/item/1005008862491598.html",
    },
    {
      name: "CENFAYA DALI DMX Ściemniacz LED DALI ze Stałą Napięciem DP4 Wyświetlacz OLED 4CH*12A 12-48VDC DT6 DT8 DALI 8/16-bit Tryb Ręczny DMX - AliExpress ",
      price: 96.4, // kolor: DALI DMX LED Dimmer
      image:
        "https://ae01.alicdn.com/kf/S92561ef1019244afa4c6cb4d422108ebc.jpg",
      url: "https://pl.aliexpress.com/item/1005010513876509.html",
    },
    {
      name: "Konwerter sygnału CENFAYA DALI DMX512, obsługa 3-przyciskowa, wyświetlacz cyfrowy, DC 12V 24V 36V 48V, montaż na szynie DIN, certyfikat DALI-2 - AliExpress ",
      price: 55.99, // kolor: black
      image:
        "https://ae01.alicdn.com/kf/S52edd9ec5bcb412fa8ab98792c39551b3.jpg",
      url: "https://pl.aliexpress.com/item/1005009381387586.html",
    },
    {
      name: "Kontroler LED ESP32 WLED z Ethernetem, Reagujący na Muzykę, Sterowany Dźwiękiem, UART DIY Dynamiczny dla Taśm Cyfrowych Adresowalnych RGB IC WS2812 - AliExpress 39",
      price: 93.86,
      image:
        "https://ae01.alicdn.com/kf/Sa256e3e47c7f412989374ff8d4a4193aF.jpg",
      url: "https://pl.aliexpress.com/item/1005010486217178.html",
    },
    {
      name: "5-kanałowy dekoder DMX z wyświetlaczem cyfrowym RDM, sterownik ściemniacza DMX512 PWM RGBCCT, kontroler LED do modułów LED 12V RGBWW RGB - AliExpress ",
      price: 64.36,
      image:
        "https://ae01.alicdn.com/kf/S5a91cf79b5d1451382262342f1d8486bd.jpg",
      url: "https://pl.aliexpress.com/item/1005007709742439.html",
    },
  ],
  [
    {
      name: "Mean Well DLP-04R Zasilacz magistrali DALI AC90-305V Szyna wejściowa DIN DALI Zasilacz systemowy Wyjście DC16V - AliExpress 13",
      price: 76.39,
      image:
        "https://ae01.alicdn.com/kf/S949ef5f7ef4c45be8136833189163fa9c.png",
      url: "https://pl.aliexpress.com/item/1005009056900115.html",
    },
    {
      name: "Zasilacz Mean Well DLP-04R DALI Bus, wejście AC90-305V, montaż na szynę DIN, system DALI, wyjście DC16V",
      price: 79.39, // Napięcie wyjściowe: DLP-04R
      image:
        "https://ae01.alicdn.com/kf/S7bfd2b71eaef43ddb021046ad878d721L.png",
      url: "https://pl.aliexpress.com/item/1005010431789489.html",
    },
    {
      name: "Zasilacz MEAN WELL DALI Bus DLP-04L - AliExpress 13",
      price: 91.39,
      image:
        "https://ae01.alicdn.com/kf/S89a26646f89e4e8b887797ad7ecb944cl.jpeg",
      url: "https://pl.aliexpress.com/item/1005009872067594.html",
    },
    {
      name: "Czujnik ruchu na podczerwień MEAN WELL DALI-2 DLS-203/208-P PIR, indukcja piroelektryczna na podczerwień",
      price: 109.39,
      image:
        "https://ae01.alicdn.com/kf/S980a3679826a44b59a6242ee1170e787K.jpeg",
      url: "https://pl.aliexpress.com/item/1005010269634226.html",
    },
    {
      name: "Czujnik ruchu DALI-2 na podczerwień DLS-203/208-P PIR, indukcja piroelektryczna na podczerwień - AliExpress ",
      price: 112.79, // kolor: DLS-203-P
      image:
        "https://ae01.alicdn.com/kf/S2f07e2d05cfd4ffeb1be85c1920c04d2x.jpeg",
      url: "https://pl.aliexpress.com/item/1005010269377657.html",
    },
    {
      name: "Ściemniacz LED DALI 12V 24V DC 4-kanałowy Stałe Napięcie Wyświetlacz Cyfrowy Ściemnianie PMW Szyna DIN 20A 240W 480W Ściemniacz do Taśm LED - AliExpress 39",
      price: 65.59,
      image:
        "https://ae01.alicdn.com/kf/S666f583532db49b19caf3faf1954da18X.jpg",
      url: "https://pl.aliexpress.com/item/1005009388509118.html",
    },
    {
      name: "Zasilacz MEAN WELL serii DLC-02-KN KNX-DALI Gateway",
      price: 1529.79, // Napięcie wyjściowe: DLC-02-KN
      image:
        "https://ae01.alicdn.com/kf/S8c1d11694ec94dd5a92a09aa3805acdd6.jpg",
      url: "https://pl.aliexpress.com/item/1005009554128585.html",
    },
    {
      name: "DLC-02 Cyfrowy kontroler oświetlenia DALI Mean Well DLC-02-KN Bramka KNX do DALI-2 - AliExpress 13",
      price: 969.59, // Napięcie wyjściowe: DLC-02 Controller
      // "price": 1_175.39, // Napięcie wyjściowe: DLC-02-KN KNX-DALI
      image:
        "https://ae01.alicdn.com/kf/S8ca115b1b69c4a06a26df9efd849ab10M.jpg",
      url: "https://pl.aliexpress.com/item/1005010041372534.html",
    },
    {
      name: "SP901E Wzmacniacz sygnału SPI dla WS2812B WS2811 WS2813 Pixel RGB LED Strip Signal Repeater Adresowalna taśma Dream Color Tape DC5-24V - AliExpress ",
      price: 11.38,
      image: "https://ae01.alicdn.com/kf/HTB1Gj3ydlWD3KVjSZFsq6AqkpXaW.jpg",
      url: "https://pl.aliexpress.com/item/33041516360.html",
    },
    {
      name: "5-kanałowy dekoder DMX z cyfrowym wyświetlaczem RDM DMX512 Dimmer Driver PWM RGBCCT kontroler LED wejście moduł lampy LED 12V-48VDC - AliExpress 39",
      price: 96.1,
      image:
        "https://ae01.alicdn.com/kf/S3a56ca0ecfa846afa12965ef351dec05X.jpg",
      url: "https://pl.aliexpress.com/item/1005006851181238.html",
    },
    {
      name: "4/6/8/10mm wąska LED Neon silikonowa rurka lampa linowa wpuszczana DC12V elastyczny wodoodporny dyfuzor szafka szafa wstążka pasek świetlny - AliExpress 39",
      price: 12.05,
      image:
        "https://ae01.alicdn.com/kf/S6682e9b644304d6f9cea2e2219681bbbC.jpg",
      url: "https://pl.aliexpress.com/item/1005007424507477.html",
    },
    {
      name: "Płytka rozwojowa ESP32-P4 Smart 86 TV Box z 4-calowym ekranem dotykowym 720x720, RS485, przekaźnikiem, kamerą, RJ45 i portem ETH - AliExpress 7",
      price: 193.35,
      // "price": 217.22, // kolor: Basic version
      // "price": 272.64, // kolor: ETH-RS485-Relay
      image:
        "https://ae01.alicdn.com/kf/Sec5b3aff17ea4c2f82a99f6faa8a2d0dS.jpg",
      url: "https://pl.aliexpress.com/item/1005010050491065.html",
    },
    {
      name: "BVBV ESP32-S3-POE-ETH ESP32-S3 Płytka rozwojowa Ethernet Obsługa dwurdzeniowego Wi-Fi PoE i bezprzewodowego portu USB typu C Bluetooth - AliExpress 6",
      price: 106.99,
      image:
        "https://ae01.alicdn.com/kf/S5ffe07b37c284d8f94131554829a756fa.jpg",
      url: "https://pl.aliexpress.com/item/1005008765371740.html",
    },
    {
      name: "Płytka rozwojowa Waveshare ESP32-S3 ETH, port Ethernet 10/100 Mb/s RJ45, dwurdzeniowy 240 MHz, opcjonalnie dla modułu PoE/modułu kamery - AliExpress 13",
      // "price": 87.39, // Color: ESP32-S3-ETH
      price: 106.4, // Color: ESP32-S3-POE-ETH
      image:
        "https://ae01.alicdn.com/kf/S0212a3f448704676a88207d0549ab8887.jpg",
      url: "https://pl.aliexpress.com/item/1005008001642764.html",
    },
    {
      name: "Płytka rozwojowa Waveshare ESP32-P4-ETH ESP32-P4 Wysokiej wydajność ESP32-P4 POE RJ45 - AliExpress 502",
      // "price": 57.39, // kolor: ESP32-P4-ETH
      // "price": 67.59, // kolor: ESP32-P4-ETH-M
      price: 85.39, // kolor: ESP32-P4-POE-ETH
      image:
        "https://ae01.alicdn.com/kf/Sf859a4daca1040e3acbe5addd5cec41bu.jpg",
      url: "https://pl.aliexpress.com/item/1005009718228392.html",
    },
    {
      name: "Płytka rozszerzeń Waveshare Pico-DALI2 dla płyt ESP32-Pico serii ESP32 C6 S3, kontrola komunikacji DALI, obsługa wielu diod LED - AliExpress 502",
      price: 24.39, // kolor: Pico-DALI2 Board
      image:
        "https://ae01.alicdn.com/kf/Sa3eb60c4a9b94fdc9f340cfa1943d217Y.jpg",
      url: "https://pl.aliexpress.com/item/1005009497621971.html",
    },
    {
      name: "Gotowy do wysyłki Nowy System Bezpieczeństwa Domu SIP Wideodomofon Domofon KNX Inteligentny Dom Monitor Sterowanie Zasłonami Światłem Panel Przełącznika - AliExpress 15",
      price: 2254.99,
      image:
        "https://ae01.alicdn.com/kf/S39c19a2295504ee1ab6819d4f89011f9h.jpg",
      url: "https://pl.aliexpress.com/item/1005008982127454.html",
    },
    {
      name: "Moduł szeregowy ModBus RTU IO z interfejsem RS485 AI DI DO 8 Wyjść Cyfrowych Montaż na szynę DIN 8~28VDC CDEBYTE MA01-AXCX4020 - AliExpress ",
      price: 23.79,
      image:
        "https://ae01.alicdn.com/kf/Sd03bdf3bb9434180bc173fd38b1e904cO.jpg",
      url: "https://pl.aliexpress.com/item/1005002871055445.html",
    },
    {
      name: "Nowoczesna szklana lampa wisząca LED, prosta, nowoczesna, do restauracji, baru, nad ladę, do kawiarni, lampka nocna, oświetlenie dekoracyjne do wnętrz. - AliExpress ",
      price: 90.25,
      image:
        "https://ae01.alicdn.com/kf/Sc5b0e890b6d540bab2709c6f983f5d38y.jpg",
      url: "https://pl.aliexpress.com/item/1005010205931191.html",
    },
    {
      name: "7-24V Modbus-Rtu 1/2/4 kanałowy moduł przekaźnika przełącznik Modbus RTU RS485/TTL wejście komunikacyjne wyjście z zabezpieczeniem przed odwróceniem - AliExpress ",
      price: 6.45,
      image:
        "https://ae01.alicdn.com/kf/S28f61d069a684718b55ef2523d250f68y.jpg",
      url: "https://pl.aliexpress.com/item/1005008746324578.html",
    },
    {
      name: "5v 1 2 4 8-kanałowy moduł przekaźnika z transoptorem. Wyjście X Way dla Arduino 1CH 2CH 4CH 8CH - AliExpress 13",
      price: 3.65,
      image:
        "https://ae01.alicdn.com/kf/S5edeabd7a3f74ed595a31e261e06b52dq.png",
      url: "https://pl.aliexpress.com/item/1005008226072942.html",
    },
    {
      name: "Zemismart Zigbee 3.0 inteligentna prowadnica kurtyny praca z Tuya Zigbee Hub SmartThings Alexa Google Home Assistant elektryczne zasłony - AliExpress 13",
      price: 394.77,
      image:
        "https://ae01.alicdn.com/kf/S5aa808a60c0140c09270d4e02f689c32K.jpg",
      url: "https://pl.aliexpress.com/item/1005008158938333.html",
    },
    {
      name: "Łazienka szklana płyta profil aluminiowy LED wbudowany w kształcie litery F wodoodporna warstwa kanałowa półka szyna szafka prysznicowa listwa świetlna - AliExpress ",
      price: 42.37, // Emitujący kolor: Black 3510 / kolor: 0.5mx1pcs
      image:
        "https://ae01.alicdn.com/kf/S3824010813be434b8faff091c4714c86P.jpg",
      url: "https://pl.aliexpress.com/item/1005006236520945.html",
    },
    {
      name: "Bezramowy sufitowy górny narożnik profil aluminiowy LED wpuszczany podwieszany dyfuzor PC kanał płyta gipsowa ukryta podświetlenie lampa liniowa - AliExpress 39",
      // "price": 36.69,
      price: 36.69, // Emitujący kolor: Z38B / kolor: 0.5mX1pcs
      image:
        "https://ae01.alicdn.com/kf/S313f6dc200504aa89d9dcf324a29bd7bQ.png",
      url: "https://pl.aliexpress.com/item/1005007408565589.html",
    },
    {
      name: "Niszowy kosz na śmieci ze stali nierdzewnej 304, pojemnik na chusteczki higieniczne, wbudowany w toaletę, metalowa szafka, możliwość personalizacji. - AliExpress 15",
      // "price": 712.99,
      price: 797.59, // kolor: Stainless steel natu
      image:
        "https://ae01.alicdn.com/kf/S20c2af6a407e4e6ab13965aa2d97eda2C.jpg",
      url: "https://pl.aliexpress.com/item/1005009893198802.html",
    },
  ],
];
