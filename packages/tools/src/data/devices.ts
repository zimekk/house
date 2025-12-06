// copy((({name, brand:{name:brand}, image:[{contentUrl:image}],offers:[{price,url}],sku:id}) => ({id,brand,name,image,url,price}))(JSON.parse(document.querySelectorAll('script[type="application/ld+json"]')[1].innerText)))

export const devices = [
  [
    {
      id: "UACC-Rack-42U",
      brand: "Ubiquiti",
      name: "Ubiquiti UACC-RACK-PM-KIT części do stojaków Zestaw do montażu",
      image:
        "https://gfx3.senetic.com/akeneo-catalog/2/4/7/b/247baf9d43573a0d8a102ef8f4d5622cd7ac125f_f3bca3ae_319f_43eb_8d90_92516d826049.png",
      url: "https://www.senetic.pl/product/UACC-RACK-42U",
      price: 6346.32,
    },
    {
      id: "U-RACK-6U-TL",
      brand: "Ubiquiti",
      name: "Ubiquiti Networks U-Rack-6U-TL Podstawa do stojaka",
      image:
        "https://gfx3.senetic.com/akeneo-catalog/4/b/0/c/4b0ca594d7d994c7b4f98200127b132ce3baa61a_1680668_U_RACK_6U_TL_custom_image1",
      url: "https://www.senetic.pl/product/U-Rack-6U-TL",
      price: 1288.17,
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
];
