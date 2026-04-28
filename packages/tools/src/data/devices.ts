// copy((({name, brand:{name:brand}, image:[{contentUrl:image}],offers:[{price,url}],sku:id}) => ({id,brand,name,image,url,price}))(JSON.parse(document.querySelectorAll('script[type="application/ld+json"]')[1].innerText)))

export const devices = [
  [
    {
      id: "U-RACK-6U-TL",
      brand: "Ubiquiti",
      name: "Ubiquiti Networks U-Rack-6U-TL Podstawa do stojaka",
      image:
        "https://gfx3.senetic.com/akeneo-catalog/d/8/c/f/d8cf6a42593a800a708090ecb8b55b4484481183_1680668__custom_image1.jpg",
      url: "https://senetic.pl/product/U-RACK-6U-TL",
      price: 1361.54,
    },
    {
      id: "UDM-SE",
      brand: "Ubiquiti",
      name: "Ubiquiti UDM-SE Networks Dream Machine Special Edition gateway/kontroler 1000 Mbit/s",
      image:
        "https://gfx3.senetic.com/akeneo-catalog/c/2/8/2/c282d468137ea53570c2de98b2fa078b81a3cc9f_1649412__custom_image1.jpg",
      url: "https://senetic.pl/product/UDM-SE",
      price: 2413.51,
    },
    {
      id: "UNAS-Pro-4",
      brand: "Ubiquiti",
      name: "Ubiquiti UNAS-Pro-4 Serwer NAS 4-dyskowy 10Gbps",
      image:
        "https://gfx3.senetic.com/akeneo-catalog/8/0/1/e/801efbb389df3796222f4474720062b4d9281123_1769304__custom_image1.jpg",
      url: "https://senetic.pl/product/UNAS-PRO-4",
      price: 2758.09,
    },
    {
      id: "USW-24-POE",
      brand: "Ubiquiti",
      name: "Ubiquiti USW-24-POE UniFi 24-Port PoE switch zarządzalny L2/L3 Gigabit Ethernet (10/100/1000) Obsługa PoE 1U Srebrny",
      image:
        "https://gfx3.senetic.com/akeneo-catalog/3/a/5/a/3a5a671da7883dfe28c24278a5e533dd6d53ce0e_1033228__custom_image1.jpg",
      url: "https://senetic.pl/product/USW-24-POE",
      price: 1786.76,
    },
    {
      id: "UACC-Rack-Panel-Patch-Blank-24",
      brand: "Ubiquiti",
      name: "Ubiquiti UACC-Rack-Panel-Patch-Blank-24 panel krosowniczy 24-portowy do montażu w racku",
      image:
        "https://gfx3.senetic.com/akeneo-catalog/b/f/e/0/bfe07020d9b8a5b0a566ae95cc095186ca2c64d1_1713392_UACC_Rack_Panel_Patch_Blank_24_custom_image1",
      url: "https://www.senetic.pl/product/UACC-RACK-PANEL-PATCH-BLANK-24",
      price: 122.85,
    },
  ],
  [
    {
      id: "UPL-Amp-B",
      brand: "Ubiquiti",
      name: "Ubiquiti UPL-Amp-B UniFi PowerAmp (Czarny)",
      image:
        "https://gfx3.senetic.com/akeneo-catalog/c/d/4/9/cd49a8101dc18710ad13dc54ade6e6f67a4be31f_1752018__normalized_image1.jpg",
      url: "https://senetic.pl/product/UPL-AMP-B",
      price: 3198.71,
    },
    {
      id: "UPL-Port-B",
      brand: "Ubiquiti",
      name: "Ubiquiti UPL-Port-B Port Audio PoE",
      image:
        "https://gfx3.senetic.com/akeneo-catalog/4/c/c/b/4ccb71254c05be1fc982921b95dc8610aa2a1f6d_1768681__normalized_image1.jpg",
      url: "https://senetic.pl/product/UPL-PORT-B",
      price: 936.74,
    },
    {
      id: "U7-IW",
      brand: "Ubiquiti",
      name: "Ubiquiti U7 In-Wall 4300 Mbit/s Biały Obsługa PoE",
      image:
        "https://gfx3.senetic.com/akeneo-catalog/5/9/b/e/59be46d7860dee9f6b7d89a8da4bee17d8f81487_1762162__normalized_image1.jpg",
      url: "https://senetic.pl/product/U7-IW",
      price: 660.73,
    },
  ],
  [
    {
      id: "UVC-G6-Bullet-W",
      brand: "Ubiquiti",
      name: "Ubiquiti G6 Bullet Tubowa Kamera bezpieczeństwa IP Wewnętrz i na wolnym powietrzu 3840 x 2160 px Sufit / ściana / słup",
      image:
        "https://gfx3.senetic.com/akeneo-catalog/d/f/b/1/dfb1d3c398e5b743499881ab9b50990eba417858_1763218__normalized_image1.jpg",
      url: "https://senetic.pl/product/UVC-G6-BULLET-W",
      price: 959.82,
    },
    {
      id: "UVC-G6-Turret-W",
      brand: "Ubiquiti",
      name: "Ubiquiti UVC-G6-Turret-W Kamera IP do monitoringu z obrotem 360 stopni i nocnym widzeniem",
      image:
        "https://gfx3.senetic.com/akeneo-catalog/7/c/2/c/7c2cb37fd78c3a54d8a2cef7ac6f365acf573c81_1763220__normalized_image1.jpg",
      url: "https://senetic.pl/product/UVC-G6-TURRET-W",
      price: 926.88,
    },
    {
      id: "UVC-G4 Doorbell Pro PoE Kit-White",
      brand: "Ubiquiti",
      name: "Ubiquiti UVC-G4 Doorbell Pro PoE Kit-White Dzwonek z podwójną kamerą PoE i dzwonkiem z zaawansowanymi funkcjami AI i użyteczności, Kolor biały",
      image:
        "https://gfx3.senetic.com/akeneo-catalog/3/4/e/b/34ebc34d8fa73dabb5280fce4bb62ad14f17e063_1713376__normalized_image1.jpg",
      url: "https://senetic.pl/product/UVC-G4_DOORBELL_PRO_POE_KIT-WHITE",
      price: 1970.4,
    },
    {
      id: "UA-G3-B",
      brand: "Ubiquiti",
      name: "Ubiquiti UA-G3-B czytnik kontroli dostępu Podstawowy czytnik kontroli dostępu Czarny",
      image:
        "https://gfx3.senetic.com/akeneo-catalog/1/b/5/8/1b58386b760c9fa19b21e43243ded1f68aa58ee0_1759520__normalized_image1.jpg",
      url: "https://senetic.pl/product/UA-G3-B",
      price: 652.65,
    },
    {
      id: "UA-Lock-Electric",
      brand: "Ubiquiti",
      name: "Ubiquiti UA-Lock-Electric Zamek elektryczny z funkcją zabezpieczenia w przypadku awarii",
      image:
        "https://gfx3.senetic.com/akeneo-catalog/9/f/8/7/9f877bb955e92b82bf94618224dad6766a51c7e3_1707963__custom_image1.jpg",
      url: "https://senetic.pl/product/UA-LOCK-ELECTRIC",
      price: 475.14,
    },
  ],
  [
    {
      id: "UACC-Rack-42U",
      brand: "Ubiquiti",
      name: "Ubiquiti UACC-RACK-PM-KIT części do stojaków Zestaw do montażu",
      image:
        "https://gfx3.senetic.com/akeneo-catalog/8/5/6/6/85662d50f8c3719be44bf2e6912fa08e9ae05cb3_1763003__normalized_image1.jpg",
      url: "https://senetic.pl/product/UACC-RACK-42U",
      price: 5653.04,
    },
    {
      id: "UACC-Rack-12U-Wall-450-G",
      brand: "Ubiquiti",
      name: "Ubiquiti UACC-Rack-12U-Wall-450-G Szafka Rack 12U, 450 mm, Drzwi Szklane",
      image:
        "https://gfx3.senetic.com/akeneo-catalog/3/a/c/7/3ac75b8f129b9775e9acbe6097a736929c865d51_1777619__normalized_image1.jpg",
      url: "https://senetic.pl/product/UACC-RACK-12U-WALL-450-G",
      price: 947.81,
    },
  ],
];
