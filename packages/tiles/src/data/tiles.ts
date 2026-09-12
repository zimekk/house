// copy((({name, brand:{name:brand}, image:[{contentUrl:image}],offers:[{price,url}],sku:id}) => ({id,brand,name,image,url,price}))(JSON.parse(document.querySelectorAll('script[type="application/ld+json"]')[1].innerText)))

export const tiles = [
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
