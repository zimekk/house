// copy([...document.querySelectorAll('script[type="application/ld+json"]')].filter((_, i) => i ===4).map($el => JSON.parse($el.textContent)).map(({ sku:id, name, image:[image],offers: [{price,url}]}) => ({id, name, price, image,url})))

export const moto = [
  [
    {
      id: "",
      name: "Colourlock - zestaw do skórzanej tapicerki samochodowej SOFT",
      price: 103.7,
      image:
        "https://sklep.motogo.pl/images/detailed/56/zestaw_soft_na_sklep_aktualny.jpg",
      url: "https://sklep.motogo.pl/colourlock-zestaw-do-skorzanej-tapicerki-samochodowej-soft-p428",
    },
    {
      id: "CAR000229",
      name: "+ CarPro Dhydrate 70x100cm - chłonny ręcznik do osuszania",
      price: 79.92,
      image:
        "https://sklep.motogo.pl/images/detailed/54/dhydrate_70x100_sam.jpg",
      url: "https://sklep.motogo.pl/carpro-dhydrate-70x100cm-chlonny-recznik-do-osuszania",
    },
    {
      id: "CAR000370",
      name: "+ CarPro GlassMitt - rękawica do mycia szyb",
      price: 51.92,
      image: "https://sklep.motogo.pl/images/detailed/55/glassmit_sam.jpg",
      url: "https://sklep.motogo.pl/carpro-glassmitt-rekawica-do-mycia-szyb",
    },
    {
      id: "CAR000444",
      name: "CarPro Clarify PH2OBIC 500ml - płyn do szyb z niewidzialną wycieraczką",
      price: 47.92,
      image:
        "https://sklep.motogo.pl/images/detailed/60/clarify_ph2obic_500ml_sklep_sam.jpg",
      url: "https://sklep.motogo.pl/carpro-clarify-ph2obic-500ml-plyn-do-szyb-z-niewidzialna-wycieraczka",
    },
    {
      id: "CAR000287",
      name: "​CarPro Clarify 500ml - płyn do szyb",
      price: 35.92,
      image:
        "https://sklep.motogo.pl/images/detailed/55/clarify_500ml_sam_new.jpg",
      url: "https://sklep.motogo.pl/carpro-clarify-500ml-plyn-do-szyb",
    },
    {
      id: "CTL-LCK",
      name: "Cleantle Leather Care Kit - kompletny zestaw do czyszczenia, pielęgnacji i zabezpieczenia tapicerki skórzanej",
      price: 77.99,
      image:
        "https://sklep.motogo.pl/images/detailed/59/leather_care_kit_set_sklep_sam.jpg",
      url: "https://sklep.motogo.pl/cleantle-leather-care-kit-kompletny-zestaw-do-czyszczenia-pielegnacji-i-zabezpieczenia-tapicerki-skorzanej",
    },
    {
      id: "CTL-LOOPERB",
      name: "Cleantle Looper 70x90cm 600gsm - ręcznik do osuszania",
      price: 49.39,
      image:
        "https://sklep.motogo.pl/images/detailed/57/looper_rulon_sklep_sam.jpg",
      url: "https://sklep.motogo.pl/cleantle-looper-70x90cm-600gsm-recznik-do-osuszania",
    },
    {
      id: "CTL-GC1L",
      name: "Cleantle Glass Cleaner 1L GreenTea Scent",
      price: 22.74,
      image:
        "https://sklep.motogo.pl/images/detailed/55/cleantle_glass_cleaner_1L_sam.jpg",
      url: "https://sklep.motogo.pl/cleantle-glass-cleaner-1l-greentea-scent",
    },
    {
      id: "3682",
      name: "+ Murska 590 - fińska akrylowa skrobaczka do szyb ze szczotką",
      price: 22.01,
      image:
        "https://sklep.motogo.pl/images/detailed/58/murska_590_szara_rękojeść_sklep_sam.jpg",
      url: "https://sklep.motogo.pl/murska-590-finska-akrylowa-skrobaczka-do-szyb-ze-szczotka",
    },
    {
      id: "CTL-HG500",
      name: "+ Cleantle Hydro Glass  500ml - hydrofobowy płyn do mycia szyb",
      price: 21.44,
      image:
        "https://sklep.motogo.pl/images/detailed/58/hydro_glass__500ml_sklep_sam.jpg",
      url: "https://sklep.motogo.pl/cleantle-hydro-glass-500ml-hydrofobowy-plyn-do-mycia-szyb",
    },
    {
      id: "CTL-GC500",
      name: "+ Cleantle Glass Cleaner 500ml GreenTea Scent",
      price: 16.24,
      image:
        "https://sklep.motogo.pl/images/detailed/55/cleantle_glass_cleaner_500ml_sam.jpg",
      url: "https://sklep.motogo.pl/cleantle-glass-cleaner-500ml-greentea-scent",
    },
    {
      id: "CTL-SC200",
      name: "+ Cleantle Screen Wash 200ml - mocno skoncentrowany płyn do spryskiwaczy",
      price: 16.24,
      image:
        "https://sklep.motogo.pl/images/detailed/57/screen_wash_200ml_sam.jpg",
      url: "https://sklep.motogo.pl/cleantle-screen-wash-200ml-mocno-skoncentrowany-plyn-do-spryskiwaczy",
    },
    {
      id: "WS 160",
      name: "+ Work Stuff Detailing Brush Classic Ultra Grip 22mm - pędzelek detailingowy",
      price: 16.03,
      image:
        "https://sklep.motogo.pl/images/detailed/63/ultra_grip_classic_22_sklep_sam.jpg",
      url: "https://sklep.motogo.pl/work-stuff-detailing-brush-classic-ultra-grip-22mm-pedzelek-detailingowy",
    },
    {
      id: "COLOURLOCKCHUSTZESTAW",
      name: "Colourlock Zestaw chusteczek do czyszczenia skór",
      price: 19.55,
      image: "https://sklep.motogo.pl/images/detailed/48/Chusteczki.jpg",
      url: "https://sklep.motogo.pl/colourlock-zestaw-chusteczek-do-czyszczenia-skor-p1129",
    },
    {
      id: "COLOURLOCKCHUSTDOCZYSZCZSK",
      name: "+ Colourlock Chusteczka do czyszczenia skór",
      price: 4.25,
      image: "https://sklep.motogo.pl/images/detailed/48/Chusteczka.jpg",
      url: "https://sklep.motogo.pl/colourlock-chusteczka-do-czyszczenia-skor-p726",
    },
  ],
];
