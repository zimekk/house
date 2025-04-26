// copy({ url: document.location.href, src:$0.src })
// copy({ url: document.location.href, src:$0.style.backgroundImage })
// copy(
//   Object.entries(
//     inspirations.reduce(
//       (list, { src, ...rest }) => Object.assign(list, { [src]: rest }),
//       {},
//     ),
//   ).map(([src, rest]) => ({ ...rest, src })),
// );

export const favorite = `
`
  .split("\n")
  .filter(Boolean);

export const inspirations = [
  {
    src: "https://partner.gira.com/abbildungen/full/HomeServer_VDE-EN_1600x990_20044_en_1737981625.png",
    url: "https://partner.gira.com/pl_PL/systeme/knx-system/knx-produkte/server/homeserver.html#cms-anchor-intro",
    tag: "knx",
  },
  {
    src: "https://partner.gira.com/abbildungen/full/Gira_HomeServer_Interface_Wei___1600x990_21823_1606845100.jpg",
    url: "https://partner.gira.com/pl_PL/systeme/knx-system/knx-produkte/server/homeserver.html#cms-anchor-3588",
  },
  {
    src: "https://partner.gira.com/abbildungen/full/Gira_Sprachsteuerung-Google-Home_TS4_21315_1595421108.jpg",
    url: "https://partner.gira.com/pl_PL/systeme/knx-system/knx-produkte/server/homeserver.html#cms-anchor-5070",
  },
  {
    src: "https://partner.gira.com/abbildungen/full/G1_Interface_EN_1800x960_20089_en_1602047990.jpg",
    url: "https://partner.gira.com/pl_PL/systeme/knx-system/knx-produkte/server/homeserver.html#cms-anchor-5070",
  },
  {
    src: "https://partner.gira.com/abbildungen/full/Bedienger__te_Interface_1800x310_20090_1582205756.png",
    url: "https://partner.gira.com/pl_PL/systeme/knx-system/knx-produkte/server/homeserver.html#cms-anchor-5070",
  },
  {
    src: "https://partner.gira.com/abbildungen/full/G1-Homeserver_EN_1600x990_15321_en_1611752432.jpg",
    url: "https://partner.gira.com/pl_PL/systeme/knx-system/knx-produkte/server/homeserver.html#cms-anchor-4676",
  },
  {
    src: "https://partner.gira.com/abbildungen/full/interface-ipad_EN_8510_1407785965.jpg",
    url: "https://partner.gira.com/pl_PL/systeme/knx-system/knx-produkte/server/homeserver.html#cms-anchor-4676",
  },
  {
    src: "https://partner.gira.com/abbildungen/full/Bediengeraet-Energieeffizienz_EN_1800x960_20105_en_1602047896.jpg",
    url: "https://partner.gira.com/pl_PL/systeme/knx-system/knx-produkte/server/homeserver.html#cms-anchor-4676",
  },
  {
    src: "https://partner.gira.com/abbildungen/full/FacilityServer_1600x990_21952_1611573691.png",
    url: "https://partner.gira.com/pl_PL/systeme/knx-system/knx-produkte/server/facilityserver.html#cms-anchor-intro",
  },
  {
    src: "https://partner.gira.com/abbildungen/full/Gira_X1_1600x990px_30748_1691505568.png",
    url: "https://partner.gira.com/pl_PL/systeme/knx-system/knx-produkte/server/x1.html",
  },
  {
    src: "https://partner.gira.com/abbildungen/full/Gira_X1_Website_Bild_28501_1677158815.jpg",
    url: "https://partner.gira.com/pl_PL/systeme/knx-system/knx-produkte/server/x1.html#cms-anchor-14604",
  },
  {
    src: "https://partner.gira.com/abbildungen/full/X1_Smart-Home-App_1600x990_EN_30754_en_1739874000.jpg",
    url: "https://partner.gira.com/pl_PL/systeme/knx-system/knx-produkte/server/x1.html#cms-anchor-14614",
  },
  {
    src: "https://partner.gira.com/abbildungen/full/Gira_X1_1600x990px_GPA_30757_1691565507.jpg",
    url: "https://partner.gira.com/pl_PL/systeme/knx-system/knx-produkte/server/x1.html#cms-anchor-14635",
  },
  {
    src: "https://partner.gira.com/abbildungen/full/KNX-Video_Teaser_PL_1800x960_20045_20045_pl_1628778987.png",
    url: "https://partner.gira.com/pl_PL/systeme/knx-system/details.html#cms-anchor-details",
  },
  {
    src: "https://partner.gira.com/abbildungen/full/Gebaeudetechnik-via-Kabel_PL_20017_20017_pl_1628778082.png",
    url: "https://partner.gira.com/pl_PL/systeme/knx-system/details.html#cms-anchor-details",
  },
  {
    src: "https://partner.gira.com/abbildungen/full/KNX-Produkte_1800x600_21518_PL_21518_pl_1612350520.png",
    url: "https://partner.gira.com/pl_PL/systeme/knx-system/details.html#cms-anchor-produkte",
  },
  {
    src: "https://partner.gira.com/abbildungen/full/KNX-Bediengeraete_1800x760_20018_PL_20018_pl_1612350906.png",
    url: "https://partner.gira.com/pl_PL/systeme/knx-system/details.html#cms-anchor-bediengeraete",
  },
  {
    src: "https://partner.gira.com/abbildungen/full/Gira_X1-Server_1800x779_neu_20272_1588053883.png",
    url: "https://partner.gira.com/pl_PL/systeme/knx-system/details.html#cms-anchor-server",
  },
  {
    src: "https://partner.gira.com/abbildungen/full/HomeServer_VDE-EN_1600x990_20044_en_1737981625.png",
    url: "https://partner.gira.com/pl_PL/systeme/knx-system/details.html#cms-anchor-server",
  },
  {
    src: "https://partner.gira.com/abbildungen/full/Gira-KNX-Wetterstation-Plus-900x480px_15479_1496236357.jpg",
    url: "https://partner.gira.com/pl_PL/systeme/knx-system/knx-produkte/wetterstationen/knx-wetterstation-plus.html#cms-anchor-intro",
  },
  {
    src: "https://partner.gira.com/abbildungen/full/KNX-Secure_Header_20397_1584349909.jpg",
    url: "https://partner.gira.com/pl_PL/systeme/knx-system/details.html#cms-anchor-11322",
  },
  {
    src: "https://partner.gira.com/abbildungen/full/Gira-KNX-RF-Keyvisual-900x390px_PL_13112_13112_pl_1628778256.jpg",
    url: "https://partner.gira.com/pl_PL/systeme/knx-system/details.html#cms-anchor-knx-rf",
  },
  {
    src: "https://partner.gira.com/abbildungen/full/Trimester_01_23_System_3000_1600x990px_28429_1675172094.jpg",
    url: "https://partner.gira.com/pl_PL/systeme/smart-home/system-3000.html#cms-anchor-14204",
  },
  {
    src: "https://partner.gira.com/abbildungen/full/Gira_System_3000_Website_Bild_28499_1677158710.jpg",
    url: "https://partner.gira.com/pl_PL/systeme/smart-home/system-3000.html#cms-anchor-14204",
  },
  {
    src: "https://partner.gira.com/abbildungen/half/Smart-Home-App_PL_20878_20878_pl_1603085193.png",
    url: "https://partner.gira.com/pl_PL/service/apps.html#cms-anchor-11372",
  },
  {
    src: "https://partner.gira.com/abbildungen/half/Homeserver-App_PL_20885_20885_pl_1628778839.png",
    url: "https://partner.gira.com/pl_PL/service/apps.html#cms-anchor-11372",
  },
  {
    src: "https://partner.gira.com/abbildungen/half/System-3000-Bluetooth-App_PL_20889_20889_pl_1628779237.png",
    url: "https://partner.gira.com/pl_PL/service/apps.html#cms-anchor-11381",
  },
  {
    src: "https://partner.gira.com/abbildungen/half/iPhone_TKS_888x1290_20869_1585718710.png",
    url: "https://partner.gira.com/pl_PL/service/apps.html#cms-anchor-11381",
  },
  {
    src: "https://partner.gira.com/abbildungen/half/GIRA_App-Unterseite_01.PNG_26829_1657781706.png",
    url: "https://partner.gira.com/pl_PL/service/apps.html#cms-anchor-11367",
  },
  {
    src: "https://www.jung-group.com/cms-assets/dam/media/34/34136/71901/3374x1446/standard-webp/JUNG_Header_LBM_2023_Viewport.webp",
    url: "https://www.jung-group.com/de-DE/Produkte/Systeme/Licht-Beschattungssteuerung/",
  },
  {
    src: "https://www.jung-group.com/cms-assets/dam/media/58/5867/32685/3374x1446/standard-webp/lbm_Note_HiddenTints_Highres-6_teaser%402x.webp",
    url: "https://www.jung-group.com/de-DE/Produkte/Systeme/Licht-Beschattungssteuerung/#Funktionen",
  },
  {
    src: "https://www.jung-group.com/cms-assets/dam/media/58/5838/32689/3374x1446/standard-webp/JUNG_Ambi-PH_Leiden_SWM_CM-1826-570%402x.webp",
    url: "https://www.jung-group.com/de-DE/Produkte/Systeme/Licht-Beschattungssteuerung/#Funktionen",
  },
  {
    src: "https://www.jung-group.com/cms-assets/dam/media/22/22271/44047/3374x1446/standard-webp/LBM_header.webp",
    url: "https://www.jung-group.com/de-DE/Produkte/Systeme/Licht-Beschattungssteuerung/#Funktionen",
  },
  {
    src: "https://www.jung-group.com/cms-assets/dam/media/58/5816/32677/3374x1446/standard-webp/Gruppe%204026%402x.webp",
    url: "https://www.jung-group.com/de-DE/Produkte/Systeme/Licht-Beschattungssteuerung/#Funktionen",
  },
  {
    src: "https://www.jung-group.com/cms-assets/dam/media/58/5837/32674/3374x1446/standard-webp/JUNG_Ambi-PH_Dordrecht_WWM_CM-1826-203%402x.webp",
    url: "https://www.jung-group.com/de-DE/Produkte/Systeme/Licht-Beschattungssteuerung/#Funktionen",
  },
  {
    src: "https://www.jung-group.com/cms-assets/dam/media/34/34145/71908/3376x1899/standard-webp/2023-ILLU_LBM_Baukasten%402x.webp",
    url: "https://www.jung-group.com/de-DE/Produkte/Systeme/Licht-Beschattungssteuerung/#Funktionen",
  },
  {
    src: "https://www.jung-group.com/cms-assets/dam/media/34/34174/71988/3376x1899/standard-webp/JUNG_LBM_ILLU-Grundriss-EFH5_2023.webp",
    url: "https://www.jung-group.com/de-DE/Produkte/Systeme/Licht-Beschattungssteuerung/#Funktionen",
  },
  {
    src: "https://www.jung-group.com/cms-assets/dam/media/34/34175/71989/3376x1899/standard-webp/JUNG_LBM_ILLU-Grundriss-Office_2023.webp",
    url: "https://www.jung-group.com/de-DE/Produkte/Systeme/Licht-Beschattungssteuerung/#Funktionen",
  },
  {
    src: "https://www.jung-group.com/cms-assets/dam/media/45/45811/206545/1582x1582/standard-webp/81819fd84749eb9212106bde99f1bc6b/JUNG_AMBI-PH_Dordrecht_SWM_CM-1826-384_ret_GT-2.webp",
    url: "https://www.jung-group.com/de-DE/Produkte/Systeme/Licht-Beschattungssteuerung/#Funktionen",
  },
  {
    src: "https://www.ekinex.com/media/cat/T&C-EKINEX-003(3)(1).jpg",
    url: "https://www.ekinex.com/en/proxima/touchsee/",
  },
  {
    src: "https://www.ekinex.com/media/cat/T&CONTROL_EKINEX_01(3)(1).jpg",
    url: "https://www.ekinex.com/en/proxima/touchsee/",
  },
  {
    src: "https://www.ekinex.com/media/cat/T&CONTROL_EKINEX_04(3)(1).jpg",
    url: "https://www.ekinex.com/en/proxima/touchsee/",
  },
  {
    src: "https://www.ekinex.com/media/appl/showroom-03.jpg",
    url: "https://www.ekinex.com/en/application-areas/functional-buildings.html",
  },
  {
    src: "https://www.ekinex.com/media/appl/showroom-04.jpg",
    url: "https://www.ekinex.com/en/application-areas/functional-buildings.html",
  },
  {
    src: "https://www.ekinex.com/media/appl/showroom-05.jpg",
    url: "https://www.ekinex.com/en/application-areas/functional-buildings.html",
  },
  {
    src: "https://www.ekinex.com/media/appl/showroom-06.jpg",
    url: "https://www.ekinex.com/en/application-areas/functional-buildings.html",
  },
  {
    src: "https://www.ekinex.com/media/appl/showroom-07.jpg",
    url: "https://www.ekinex.com/en/application-areas/functional-buildings.html",
  },
  {
    src: "https://www.ekinex.com/media/appl/terziario-prodotti-02.jpg",
    url: "https://www.ekinex.com/en/application-areas/functional-buildings.html",
  },
  {
    src: "https://www.ekinex.com/media/appl/terziario-prodotti-03.jpg",
    url: "https://www.ekinex.com/en/application-areas/functional-buildings.html",
  },
  {
    src: "https://www.ekinex.com/media/appl/showroom-02.jpg",
    url: "https://www.ekinex.com/en/application-areas/functional-buildings.html",
  },
  {
    src: "https://www.ekinex.com/media/pr/EK-ED2-TP-RW-FORM-GBU.png",
    url: "https://www.ekinex.com/en/15/pushbutton-with-thermostat.html",
  },
  {
    src: "https://www.ekinex.com/media/pr/EK-E12-TP-FORM-GBU.png",
    url: "https://www.ekinex.com/en/42/pushbutton-with-thermostat.html",
  },
  {
    src: "https://www.ekinex.com/media/pr/EK-EP2-TP-RW-NF.png",
    url: "https://www.ekinex.com/en/174/room-temperature-controller-ep2.html",
  },
  {
    src: "https://www.ekinex.com/media/pr/EK-EP2-TP-RW-FLANK.png",
    url: "https://www.ekinex.com/en/174/room-temperature-controller-ep2.html",
  },
  {
    src: "https://www.ekinex.com/media/pr/EK-ED2-TP-RW-NF-GBU.png",
    url: "https://www.ekinex.com/en/15/pushbutton-with-thermostat.html",
  },
  {
    src: "https://www.ekinex.com/media/pr/EK-EP2-TP-RW-FLANK.png",
    url: "https://www.ekinex.com/en/174/room-temperature-controller-ep2.html",
  },
  {
    src: "https://www.ekinex.com/media/pr/EK-EP2-TP-RW-NF.png",
    url: "https://www.ekinex.com/en/174/room-temperature-controller-ep2.html",
  },
  {
    src: "https://www.ekinex.com/media/pr/EK-ET2_TP-FORM-GBU.png",
    url: "https://www.ekinex.com/en/147/multisensor-t-ur-co2-eq.html",
  },
  {
    src: "https://www.ekinex.com/media/pr/EK-ET2_TP-FLANK-GBU.png",
    url: "https://www.ekinex.com/en/147/multisensor-t-ur-co2-eq.html",
  },
  {
    src: "https://www.ekinex.com/media/pr/EK-ET2_TP-NF-GBU.png",
    url: "https://www.ekinex.com/en/147/multisensor-t-ur-co2-eq.html",
  },
  {
    src: "https://www.ekinex.com/media/pr/EK-SG2-TP-P-EKINEX.png",
    url: "https://www.ekinex.com/en/578/knx-secure-multifunctional-presence-sensor.html",
  },
  {
    src: "https://www.ekinex.com/media/pr/PD55-FR-FORM-GBU.png",
    url: "https://www.ekinex.com/en/512/square-socket-point-55x55-mm-module-fr.html",
  },
  {
    src: "https://www.ekinex.com/media/pr/PD55-PD55-FORM-GBU-FR-USB.png",
    url: "https://www.ekinex.com/en/515/socket-point-for-2-fold-plate-55x55-mm-modules-fr-usb.html",
  },
  {
    src: "https://www.ekinex.com/media/pr/PD55-PD55-FLANK-GBU-FR-USB.png",
    url: "https://www.ekinex.com/en/515/socket-point-for-2-fold-plate-55x55-mm-modules-fr-usb.html",
  },
  {
    src: "https://www.ekinex.com/media/cat/PUNTI-DI-DERIVAZIONE-EKINEX-2021-BAGNO-FANTOLINO-2.jpg",
    url: "https://www.ekinex.com/en/71-series/socket/",
  },
  {
    src: "https://www.ekinex.com/media/cat/FANTOLINO-DELEGO-PANEL-SCHUKO-USB.jpg",
    url: "https://www.ekinex.com/en/71-series/socket/",
  },
  {
    src: "https://www.ekinex.com/media/cat/ITALIANA-GBB-CARRELLO.jpg",
    url: "https://www.ekinex.com/en/71-series/socket/",
  },
  {
    src: "https://www.ekinex.com/media/cat/ekinex-pd-10.jpg",
    url: "https://www.ekinex.com/en/71-series/socket/",
  },
  {
    src: "https://www.ekinex.com/media/cat/ekinex-pd-05(1).jpg",
    url: "https://www.ekinex.com/en/71-series/socket/",
  },
  {
    src: "https://www.ekinex.com/media/cat/ekinex-pd-04(1).jpg",
    url: "https://www.ekinex.com/en/71-series/socket/",
  },
  {
    src: "https://www.ekinex.com/media/cat/ekinex-pd-01(1).jpg",
    url: "https://www.ekinex.com/en/71-series/socket/",
  },
  {
    src: "https://www.ekinex.com/media/cat/ekinex-pd-02(1).jpg",
    url: "https://www.ekinex.com/en/71-series/socket/",
  },
  {
    src: "https://www.ekinex.com/media/cat/ekinex-pd-08(1).jpg",
    url: "https://www.ekinex.com/en/71-series/socket/",
  },
  {
    src: "https://www.ekinex.com/media/cat/ekinex-pd-07(1).jpg",
    url: "https://www.ekinex.com/en/71-series/socket/",
  },
  {
    src: "https://www.ekinex.com/media/cat/ekinex-pd-11(1).jpg",
    url: "https://www.ekinex.com/en/71-series/socket/",
  },
  {
    src: "https://www.ekinex.com/media/pr/IE1_SEC.png",
    url: "https://www.ekinex.com/en/487/ip-secure-interface.html",
  },
  {
    src: "https://revox.com/media/image/d8/17/4f/Revox-Audiosysteme-Studiomaster-M500-Verstaerker-Multiuser-Wohnraum-Pool_1920x1920.jpg",
    url: "https://revox.com/europe/audio-systems/audio-systems/155/studiomaster-m500",
  },
  {
    src: "https://revox.com/media/image/26/9a/ff/Revox-Audiosysteme-Studiomaster-M500-Verstaerker-Multiuser-App-Wohnraum02.jpg",
    url: "https://revox.com/europe/audio-systems/audio-systems/155/studiomaster-m500",
  },
  {
    src: "https://revox.com/media/image/6b/34/62/Revox-Audiosysteme-Studiomaster-M500-Bedienung-C200-Lautsprecher-PrestigeBnz0H0O0bKT1q.jpg",
    url: "https://revox.com/europe/audio-systems/audio-systems/155/studiomaster-m500",
  },
  {
    src: "https://revox.com/media/image/84/d2/0f/Revox-Audiosysteme-Studiomaster-M500-Verstaerker-Multiuser-Wohnraum-Pool.jpg",
    url: "https://revox.com/europe/audio-systems/audio-systems/155/studiomaster-m500",
  },
  {
    src: "https://revox.com/media/image/93/db/1c/Revox-Audiosysteme-Studiomaster-M500-Plattenspieler-T700-Studiocontrol-C200-Lautsprecher.jpg",
    url: "https://revox.com/europe/audio-systems/audio-systems/155/studiomaster-m500",
  },
  {
    src: "https://revox.com/media/image/7f/2d/7c/Revox-Audiosysteme-Studiomaster-M500-Verstaerker-Multiuser-C200-Wohnraum03hrtLsO7IMyABJ.jpg",
    url: "https://revox.com/europe/audio-systems/audio-systems/155/studiomaster-m500",
  },
  {
    src: "https://revox.com/media/image/d1/ba/51/Revox-Audiosysteme-Studiomaster-M500-Verstaerker-Multiuser-Wohnraum01.jpg",
    url: "https://revox.com/europe/audio-systems/audio-systems/155/studiomaster-m500",
  },
  {
    src: "https://revox.com/media/image/cf/12/a7/revox-multiuser-kategorie-audio_quality-multiroom-Audioqualitaet-studio_sound_quality-multiuser_systemxkadOln0zg9sO_800x800@2x.jpg",
    url: "https://revox.com/europe/multiuser-multiroom/experience/information-on-multiroom/",
  },
  {
    url: "https://www.crestron.com/Products/Audio/Speakers-Commercial/In-Ceiling-Speakers/SAROS-IC6T-W-T-EACH",
    src: "https://embed.widencdn.net/img/crestron/oyf4a43fvt/2500px@1x/master_photo_a-saros_ic6t.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Audio/Speakers-Commercial/In-Ceiling-Speakers/SAROS-IC8LPT-W-T-EACH",
    src: "https://embed.widencdn.net/img/crestron/r3offqilnr/2500px@1x/master_photo_a-saros_ic8lpt.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Audio/Speakers-Commercial/In-Ceiling-Speakers/SAROS-IC8LPT-W-T-EACH",
    src: "https://embed.widencdn.net/img/crestron/jxnrd9enq4/2500px@1x/photo_saros_ic8lpt-b-t.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Audio/Speakers-Commercial/In-Ceiling-Speakers/SAROS-IC8LPT-W-T-EACH",
    src: "https://embed.widencdn.net/img/crestron/jf4echgjtr/2500px@1x/photo_saros_ic8lpt.bmp?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Audio/Amplifiers/Commercial-Amplifiers/AMPI-8150",
    src: "https://embed.widencdn.net/img/crestron/mputu9vn1c/2500px@1x/master_photo_a-AMP-8150.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Audio/Amplifiers/Commercial-Amplifiers/AMPI-8150",
    src: "https://embed.widencdn.net/img/crestron/lnled1seta/2500px@1x/photo_AMP-8150_Back_RGB.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Audio/Amplifiers/X-Series-Amplifiers/AMP-X750",
    src: "https://embed.widencdn.net/img/crestron/6cghygp2oe/2500px@1x/master_photo_a-AMP-X750_FrontLeft15_v2.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Audio/Amplifiers/X-Series-Amplifiers/AMP-X750",
    src: "https://embed.widencdn.net/img/crestron/2uie4gwjke/2500px@1x/photo-AMP-X750_Comp.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Audio/Amplifiers/X-Series-Amplifiers/AMP-X1000",
    src: "https://embed.widencdn.net/img/crestron/wjru36ebsh/2500px@1x/master_photo_a-AMP-X1000_FrontLeft15.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Audio/Amplifiers/X-Series-Amplifiers/AMP-X1000",
    src: "https://embed.widencdn.net/img/crestron/itmlg8ncbg/2500px@1x/photo-AMP-X1000_Comp.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Audio/Audio-Extenders/Audio-over-CAT5-Extenders/AUD-EXT-100",
    src: "https://embed.widencdn.net/img/crestron/yzolxxaenk/2500px@1x/master_photo_a-aud-ext.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Audio/Audio-Extenders/Audio-over-CAT5-Extenders/AUD-EXT-100",
    src: "https://embed.widencdn.net/img/crestron/n8dbotihtw/2500px@1x/photo_aud-ext-100.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Audio/Multiroom-Audio/Multiroom-Audio-Systems/DM-NAX-8ZSA",
    src: "https://embed.widencdn.net/img/crestron/1no6mel4m5/2500px@1x/master_photo_a-DM-NAX-8ZSA-Front.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Audio/Multiroom-Audio/Multiroom-Audio-Systems/DM-NAX-8ZSA",
    src: "https://embed.widencdn.net/img/crestron/g0nbzpb7dv/2500px@1x/photo-DM-NAX-8ZSA_Rear_v2.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Audio/Multiroom-Audio/Multiroom-Audio-Systems/DM-NAX-16AIN",
    src: "https://embed.widencdn.net/img/crestron/5v1asq5ssv/2500px@1x/master_photo_a-DM-NAX-16AIN-front-right.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Audio/Multiroom-Audio/Multiroom-Audio-Systems/DM-NAX-16AIN",
    src: "https://embed.widencdn.net/img/crestron/5tk3tybkgy/2500px@1x/photo-DM-NAX-16AIN_rear.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Video/All-In-One-Solutions/DigitalMedia-Presentation-Switchers/DMPS3-4K-350-C",
    src: "https://embed.widencdn.net/img/crestron/vh3qttn5wr/2500px@1x/master_photo_A-DMPS3-4K-350-C.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Video/All-In-One-Solutions/DigitalMedia-Presentation-Switchers/DMPS3-4K-350-C",
    src: "https://embed.widencdn.net/img/crestron/dmlytqtorf/2500px@1x/photo_DMPS3-4K-350-C_Back_RGB.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Video/All-In-One-Solutions/DigitalMedia-Presentation-Switchers/DMPS3-4K-350-C",
    src: "https://embed.widencdn.net/img/crestron/iqkq5wduxa/2500px@1x/photo-DMPS3-4K-350-C_Comp_RGB.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Video/DM-Essentials/HDMI-Switchers/HD-MD4X2-4KZ-E",
    src: "https://embed.widencdn.net/img/crestron/dg6c7ycjpu/2500px@1x/master_photo_a-HD-MD4X2-4KZ-E_FrontLeft15.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Video/DM-Essentials/HDMI-Switchers/HD-MD4X2-4KZ-E",
    src: "https://embed.widencdn.net/img/crestron/0ka1xyefcd/2500px@1x/photo-HD-MD4X2-4KZ-E_Rear.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Video/DM-Essentials/HDMI-Switchers/HD-MD4X2-4KZ-E",
    src: "https://embed.widencdn.net/img/crestron/y0yu2qb4vx/2500px@1x/photo-HD-MD4X2-4KZ-E_Top.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Video/DM-Essentials/HDMI-Switchers/HD-MD8X8-4KZ-E",
    src: "https://embed.widencdn.net/img/crestron/xmeiziuq12/2500px@1x/master_photo_a-HD-MD8X8-4KZ-E_FrontLeft15.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Video/DM-Essentials/HDMI-Switchers/HD-MD8X8-4KZ-E",
    src: "https://embed.widencdn.net/img/crestron/coqvxhorrw/2500px@1x/photo-HD-MD8X8-4KZ-E_Rear.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Video/DM-Essentials/Transmitters-Receivers/HD-TXU-4KZ-211-CHGR",
    src: "https://embed.widencdn.net/img/crestron/rm0bg3rcyo/2500px@1x/master_photo_a-HD-TXU-4KZ-211-CHGR_FrontLeft15.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Video/DM-Essentials/Transmitters-Receivers/HD-TXU-4KZ-211-CHGR",
    src: "https://embed.widencdn.net/img/crestron/0gq6wwdogr/2500px@1x/photo-HD-TXU-4KZ-211-CHGR_Rear.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Video/DM-Essentials/Transmitters-Receivers/HD-RXC-4KZ-101-1G-B",
    src: "https://embed.widencdn.net/img/crestron/kqtmpxx6uc/2500px@1x/master_photo_a-HD-RXC-4KZ-101-1G-B_Front_Faceplate.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Video/DM-Essentials/Transmitters-Receivers/HD-RXC-4KZ-101-1G-B",
    src: "https://embed.widencdn.net/img/crestron/b779bvvsgv/2500px@1x/photo-HD-RXC-4KZ-101-1G-B_Front_NoPlate.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Video/DM-Essentials/Transmitters-Receivers/HD-TXCA-4KZ-101",
    src: "https://embed.widencdn.net/img/crestron/ui7vq3asod/2500px@1x/master_photo_a-HD-TXCA-4KZ-101_FrontLeft15.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Video/DM-Essentials/Transmitters-Receivers/HD-TXCA-4KZ-101",
    src: "https://embed.widencdn.net/img/crestron/lly3iswrkz/2500px@1x/photo-HD-TXCA-4KZ-101_Top.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Video/DM-Essentials/Transmitters-Receivers/HD-TXCA-4KZ-101",
    src: "https://embed.widencdn.net/img/crestron/xiadvxdad6/2500px@1x/photo-HD-TXCA-4KZ-101_Rear.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Video/DM-Essentials/Transmitters-Receivers/HD-TXCA-4KZ-101",
    src: "https://embed.widencdn.net/img/crestron/6j2j730csx/2500px@1x/photo-HD-TXCA-4KZ-101_Comp.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Video/DM-Essentials/USB-Enabled-Transmitters-Receivers/HD-TXU-4KZ-111-2G-W",
    src: "https://embed.widencdn.net/img/crestron/co4boc8osx/2500px@1x/master_photo_a-HD-TXU-4KZ-111-2G-W_Front_Faceplate.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Video/DM-Essentials/USB-Enabled-Transmitters-Receivers/HD-TXU-4KZ-111-2G-W",
    src: "https://embed.widencdn.net/img/crestron/yfrikbcdjz/2500px@1x/photo-HD-TXU-4KZ-111-2G_RearRight30.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Video/DM-Essentials/USB-Enabled-Transmitters-Receivers/HD-TXU-4KZ-111-2G-W",
    src: "https://embed.widencdn.net/img/crestron/laxiq5baxh/2500px@1x/photo-HD-TXU-4KZ-111-2G-W_Front_NoFaceplate.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Video/DM-Essentials/USB-Enabled-Transmitters-Receivers/HD-RXU-4KZ-101-2G-B",
    src: "https://embed.widencdn.net/img/crestron/a6ptmmblfu/2500px@1x/master_photo_a-HD-RXU-4KZ-101-2G-B_Front_Faceplate.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Video/DM-Essentials/USB-Enabled-Transmitters-Receivers/HD-RXU-4KZ-101-2G-B",
    src: "https://embed.widencdn.net/img/crestron/uftenndnxa/2500px@1x/photo-HD-RXU-4KZ-101-2G_RearRight30.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Video/DM-Essentials/USB-Enabled-Transmitters-Receivers/HD-RXU-4KZ-101-2G-B",
    src: "https://embed.widencdn.net/img/crestron/pf2sj2svwr/2500px@1x/photo-HD-RXU-4KZ-101-2G-B_Front_NoFaceplate.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Video/DM-Essentials/DM-Essential-Kits/HD-EARC-KIT",
    src: "https://embed.widencdn.net/img/crestron/j0yp56m5ci/2500px@1x/master_photo_a-photo-HD-RXC-EARC_Comp.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Shades/Drapery-Systems/Motors/CSM-QMTDC-DRP-3-CN",
    src: "https://embed.widencdn.net/img/crestron/2qv4vidc4c/2500px@1x/photo_csm-qmtdc-drp-3.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Shades/Roller-Shade-Systems/Motors/CSM-QMTDC-163-1-EX",
    src: "https://embed.widencdn.net/img/crestron/lfyyveccdt/2500px@1x/master_photo_a-csm-qmtdc-163-1-ex.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Shades/Roller-Shade-Systems/Motors/CSM-QMTDC-163-1-CN",
    src: "https://embed.widencdn.net/img/crestron/9yd7ubhoxl/2500px@1x/master_photo_a-CSM-QMTDC-163-1-CN.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Shades/Accessories/Third-Party-Shade-Drapery-Controllers/C2N-SDC-DC",
    src: "https://embed.widencdn.net/img/crestron/lqr7jwpkxj/2500px@1x/master_photo_a-c2n-sdc-dc.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Video/DM-Essentials/DM-Essential-Kits/HD-EARC-KIT",
    src: "https://embed.widencdn.net/img/crestron/4hmautejhx/2500px@1x/photo-HD-EARC_Kit.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Control-Surfaces/Touch-Screens/Medium-Touch-Screens/TSS-770-B-S-LB-KIT",
    src: "https://embed.widencdn.net/img/crestron/j0a5sgyuxj/2500px@1x/master_photo_a-TSS-770-LB-B-S%20KIT_Front_Available.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Control-Surfaces/Touch-Screens/Medium-Touch-Screens/TSS-770-B-S-LB-KIT",
    src: "https://embed.widencdn.net/img/crestron/ywixzfeeon/2500px@1x/photo-TSS-770-B-S-FrontLeft15.png?c=0",
  },
  {
    url: "https://www.crestron.com/Products/Control-Surfaces/Touch-Screens/Medium-Touch-Screens/TSS-770-B-S-LB-KIT",
    src: "https://embed.widencdn.net/img/crestron/mlkx39ww55/2500px@1x/photo-TSS-770-B-S_RearLeft15.png?c=0",
  },
  {
    url: "https://sonoff.tech/product/home-appliances/zbcurtain/",
    src: "https://sonoff.tech/wp-content/uploads/2023/02/ZBCurtain_01-scaled.jpg",
  },
  {
    url: "https://sonoff.tech/product/home-appliances/zbcurtain/",
    src: "https://sonoff.tech/wp-content/uploads/2023/02/APP.jpg",
  },
  {
    url: "https://sonoff.tech/product/gateway-and-sensors/bmt01/",
    src: "https://sonoff.tech/wp-content/uploads/2024/11/BMT01-scaled.webp",
  },
  {
    url: "https://sonoff.tech/product/gateway-and-sensors/bmt01/",
    src: "https://sonoff.tech/wp-content/uploads/2024/11/BMT01_11-scaled.webp",
  },
  {
    url: "https://sonoff.tech/product/home-appliances/swv/",
    src: "https://sonoff.tech/wp-content/uploads/2024/06/SWV-1920PX-DIVI_01.jpg",
  },
  {
    url: "https://sonoff.tech/product/home-appliances/swv/",
    src: "https://sonoff.tech/wp-content/uploads/2024/06/SWV-1920PX-DIVI_14.jpg",
  },
  {
    url: "https://sonoff.tech/product/smart-wall-switches/m5/",
    src: "http://sonoff.tech/wp-content/uploads/2021/11/图文分离_01-1.jpg",
  },
  {
    url: "https://sonoff.tech/product/smart-wall-switches/m5/",
    src: "http://sonoff.tech/wp-content/uploads/2021/11/图文分离_03.jpg",
  },
  {
    url: "https://sonoff.tech/product/smart-wall-switches/m5/",
    src: "http://sonoff.tech/wp-content/uploads/2021/11/图文分离_05-1.jpg",
  },
  {
    url: "https://sonoff.tech/product/smart-wall-switches/m5/",
    src: "http://sonoff.tech/wp-content/uploads/2021/11/图文分离_10.jpg",
  },
  {
    url: "https://sonoff.tech/product/smart-wall-switches/m5/",
    src: "http://sonoff.tech/wp-content/uploads/2022/02/M5_11.jpg",
  },
  {
    url: "https://sonoff.tech/product/smart-wall-switches/m5/",
    src: "http://sonoff.tech/wp-content/uploads/2021/11/图文分离_12.jpg",
  },
  {
    url: "https://sonoff.tech/product/smart-wall-switches/m5/",
    src: "http://sonoff.tech/wp-content/uploads/2021/11/图文分离_16.jpg",
  },
  {
    url: "https://sonoff.tech/product/smart-wall-switches/m5/",
    src: "http://sonoff.tech/wp-content/uploads/2021/11/图文分离_17.jpg",
  },
];
