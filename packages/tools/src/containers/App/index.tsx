import { type ChangeEventHandler, useCallback, useMemo, useState } from "react";
import { Link } from "../../components/link";
import styles from "./styles.module.scss";

interface ItemType {
  name: string;
  price: number;
  url?: string;
}

const formatAmount = (amount: number) =>
  new Intl.NumberFormat("pl-PL", {
    minimumFractionDigits: 2,
  }).format(amount);

function Table({ list }: { list: ItemType[] }) {
  const [selected, setSelected] = useState(() => list.map((_, key) => key));

  const filtered = useMemo(() => list, [list]);

  const handleSelect = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) =>
      ((key) =>
        setSelected((selected) =>
          selected.filter((id) => id !== key).concat(target.checked ? key : []),
        ))(Number(target.value)),
    [],
  );

  const handleSelectAll = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) =>
      ((keys) =>
        setSelected((selected) =>
          selected
            .filter((id) => !keys.includes(id))
            .concat(target.checked ? keys : []),
        ))(list.map((_, key) => key)),
    [list],
  );

  return (
    <table className={styles.Table}>
      <thead>
        <tr>
          <th style={{ width: 25 }}></th>
          <th align="left">name</th>
          <th align="right" style={{ width: 90 }}>
            price
          </th>
        </tr>
      </thead>
      <tbody>
        {filtered.map((item, key) => (
          <tr key={key}>
            <td>
              <label>
                <input
                  type="checkbox"
                  value={key}
                  checked={selected.includes(key)}
                  onChange={handleSelect}
                />
              </label>
            </td>
            <td className={styles.Name}>
              <Link
                href={item.url}
                onClick={(e) => {
                  const range = document.createRange();
                  e.preventDefault();
                  range.selectNode(e.target as HTMLElement);
                  ((selection) =>
                    selection &&
                    (selection.removeAllRanges(), selection.addRange(range)))(
                    window.getSelection(),
                  );
                }}
              >
                {item.name}
              </Link>
            </td>
            <td align="right">{formatAmount(item.price)}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        {[
          filtered
            .filter((_, key) => selected.includes(key))
            .reduce(
              (result, item) =>
                Object.assign(result, {
                  price: result.price + item.price,
                }),
              {
                price: 0,
              },
            ),
        ].map((item, key) => (
          <tr key={key}>
            <td>
              <label>
                <input
                  type="checkbox"
                  checked={list.length > 0 && selected.length === list.length}
                  disabled={list.length === 0}
                  onChange={handleSelectAll}
                />
              </label>
            </td>
            <td></td>
            <td align="right">{formatAmount(item.price)}</td>
          </tr>
        ))}
      </tfoot>
    </table>
  );
}

export default function App() {
  return (
    <div>
      <h1>tools</h1>
      <div className={styles.Columns}>
        <div>
          <Table
            list={[
              {
                name: "Robot koszący Miimo HRM310",
                price: 7_990,
                url: "https://www.mojahonda.pl/honda-miimo/miimo-310-detail",
              },
              {
                name: "Kosiarka akumulatorowa Honda HRG 466 XB",
                price: 4_600,
                url: "https://www.mojahonda.pl/kosiarki-honda/kosiarki-akumulatorowe/kosiarka-akumulatorowa-honda-hrg-466-xb-detail",
              },
              {
                name: "Wertykulator Tielburger TV 510",
                price: 10_209,
                url: "https://www.mojahonda.pl/wertykulatory/wertykulator-tielburger-tv-510-detail",
              },
              {
                name: "Glebogryzarka Honda FG 320 DE",
                price: 3_490,
                url: "https://www.mojahonda.pl/glebogryzarki/mini-hobby/glebogryzarka-honda-fg-320-de-detail",
              },
              {
                name: "Kosa Honda UMS 425E LE",
                price: 1_595,
                url: "https://www.mojahonda.pl/czterosuwowe-kosy-honda/kosa-honda-ums-425e-le-detail",
              },
              {
                name: "Kosa akumulatorowa Honda HHT 36 AXB",
                price: 2_950,
                url: "https://www.mojahonda.pl/urzadzenia-akumulatorowe/kosa-akumulatorowa-honda-hht-36-axb-detail",
              },
              {
                name: "Podkaszarka akumulatorowa HHT 36 BXB",
                price: 870,
                url: "https://www.mojahonda.pl/urzadzenia-akumulatorowe/podkaszarka-akumulatorowa-hht-36-bxb-detail",
              },
              {
                name: "Nożyce akumulatorowe HHH 36 BXB",
                price: 870,
                url: "https://www.mojahonda.pl/urzadzenia-akumulatorowe/no%C5%BCyce-akumulatorowe-hhh-36-bxb-detail",
              },
              {
                name: "Dmuchawa akumulatorowa HHB 36 BXB",
                price: 870,
                url: "https://www.mojahonda.pl/urzadzenia-akumulatorowe/dmuchawa-akumulatorowa-hhb-36-bxb-detail",
              },
              {
                name: "Akumulator DP 3640 4 Ah",
                price: 860,
                url: "https://www.mojahonda.pl/urzadzenia-akumulatorowe/akumulator-dp-3640-4-ah-detail",
              },
              {
                name: "Ładowarka Honda CV 3620 2A",
                price: 240,
                url: "https://www.mojahonda.pl/urzadzenia-akumulatorowe/%C5%82adowarka-honda-cv-3620-2a-detail",
              },
            ]}
          />
        </div>
        <div>
          <Table
            list={[
              {
                name: "Roboty koszące Automower® 410XE NERA z zestawem instalacyjnym Husqvarna EPOS™",
                price: 15_838,
                url: "https://www.husqvarna.com/pl/roboty-koszace/automower-410xe-nera-z-zestawem-instalacyjnym-husqvarna-epos/",
              },
              {
                name: "Kosiarki akumulatorowe HUSQVARNA LC 141C",
                price: 1499,
                url: "https://www.husqvarna.com/pl/kosiarki/lc141c/",
              },
              {
                name: "Kosiarki akumulatorowe Husqvarna LC 353iVX",
                price: 3999,
                url: "https://www.husqvarna.com/pl/kosiarki/lc353ivx/",
              },
              {
                name: "Wertykulatory HUSQVARNA S 138i z akumulatorem i ładowarką",
                price: 2_549,
                url: "https://www.husqvarna.com/pl/wertykulatory-i-skaryfikatory/model-s138i-z-akumulatorem-i-ladowarka/",
              },
              {
                name: "Glebogryzarki HUSQVARNA TF 120",
                price: 2_649,
                url: "https://www.husqvarna.com/pl/glebogryzarki/tf120/",
              },
              {
                name: "Wykaszarki spalinowe Husqvarna 122R z głowicą żyłkową",
                price: 1299,
                url: "https://www.husqvarna.com/pl/wykaszarki/122r-z-glowica-zylkowa/",
              },
              {
                name: "Wykaszarki HUSQVARNA 520iRX",
                price: 2299,
                url: "https://www.husqvarna.com/pl/wykaszarki/520irx/",
              },
              {
                name: "Podkaszarki Model 215iL z akumulatorem i ładowarką",
                price: 870,
                url: "https://www.husqvarna.com/pl/podkaszarki/model-215il-z-akumulatorem-i-ladowarka/",
              },
              {
                name: "Nożyce do żywopłotu 215iHD45 z akumulatorem i ładowarką",
                price: 1499,
                url: "https://www.husqvarna.com/pl/nozyce-do-zywoplotu/215ihd45-z-akumulatorem-i-ladowarka/",
              },
              {
                name: "Dmuchawy do liści Model 120iB z akumulatorem i ładowarką",
                price: 1399,
                url: "https://www.husqvarna.com/pl/dmuchawy-do-lisci/model-120ib-z-akumulatorem-i-ladowarka/",
              },
              {
                name: "Akumulator 40-B140",
                price: 749,
                url: "https://www.husqvarna.com/pl/battery-products-accessories/akumulator-40-b140/",
              },
              {
                name: "Ładowarka 40-C80",
                price: 279,
                url: "https://www.husqvarna.com/pl/battery-products-accessories/ladowarka-40-c80/",
              },
              {
                name: "Myjki ciśnieniowe Husqvarna PW 345C",
                price: 1499,
                url: "https://www.husqvarna.com/pl/myjki-cisnieniowe/husqvarna-pw345c/",
              },
            ]}
          />
        </div>
        <div>
          <Table
            list={[
              {
                name: "Robot koszący RM350D",
                price: 11_998,
                url: "https://www.makita.pl/product/rm350d.html",
              },
              {
                name: "Akum. kosiarka LXT ® / XGT ® LM001C",
                price: 4_500,
                url: "https://www.makita.pl/product/lm001c.html",
              },
              {
                name: "Wertykulator elektryczny UV3200",
                price: 1_053,
                url: "https://www.makita.pl/product/uv3200.html",
              },
              {
                name: "Akum. podkaszarka LXT ® UR201C",
                price: 2_000,
                url: "https://www.makita.pl/product/ur201c.html",
              },
              {
                name: "Nożyce do żywopłotu UH6580",
                price: 975,
                url: "https://www.makita.pl/product/uh6580.html",
              },
              {
                name: "Akum. dmuchawa UB001C",
                price: 1_320,
                url: "https://www.makita.pl/product/ub001c.html",
              },
              {
                name: "Akumulator BL1840 (18V / 4,0 Ah) LXT ® BL1840",
                price: 379,
                url: "https://www.makita.pl/product/bl1840.html",
              },
              {
                name: "Ładowarka DC18RC LXT ® DC18RC",
                price: 240,
                url: "https://www.makita.pl/product/dc18rc.html",
              },
              {
                name: "Myjka wysokociśnieniowa HW131",
                price: 2_250,
                url: "https://www.makita.pl/product/hw131.html",
              },
            ]}
          />
        </div>
        <div>
          <Table
            list={[
              {
                name: "Kosiarki automatyczne - Indego M+ 700",
                price: 4_100,
                url: "https://www.bosch-diy.com/pl/pl/p/indego-m-700-06008b0303",
              },
              {
                name: "Kosiarka akumulatorowa - GRA 18V2-46 Professional",
                price: 1_899,
                url: "https://www.bosch-professional.com/pl/pl/products/gra-18v2-46-06008C8000",
              },
              {
                name: "Wertykulator - UniversalVerticut 1100",
                price: 643,
                url: "https://www.bosch-diy.com/pl/pl/p/universalverticut-1100-060088a101",
              },
              {
                name: "UniversalGrassCut 18V-260",
                price: 674,
                url: "https://www.bosch-diy.com/pl/pl/p/universalgrasscut-18v-260-06008c1d03",
              },
              {
                name: "Akumulatorowa podkaszarka do trawy - GRT 18V-33 Professional",
                price: 1_261,
                url: "https://www.bosch-professional.com/pl/pl/products/grt-18v-33-06008D0000",
              },
              {
                name: "Sekator akumulatorowy - GHE 18V-60 Professional",
                price: 1_008,
                url: "https://www.bosch-professional.com/pl/pl/products/ghe-18v-60-06008C9000",
              },
              {
                name: "Dmuchawa akumulatorowa - GBL 18V-750 Professional",
                price: 899,
                url: "https://www.bosch-professional.com/pl/pl/products/gbl-18v-750-06008D2000",
              },
              {
                name: "Akumulator - ProCORE18V 4.0Ah Professional",
                price: 396,
                url: "https://www.bosch-professional.com/pl/pl/products/procore18v-4-0ah-1600A016GB",
              },
              {
                name: "Ładowarka - GAL 18V-40 Professional",
                price: 194,
                url: "https://www.bosch-professional.com/pl/pl/products/gal-18v-40-1600A019RJ",
              },
              {
                name: "Myjka wysokociśnieniowa - GHP 5-65 Professional",
                price: 2_660,
                url: "https://www.bosch-professional.com/pl/pl/products/ghp-5-65-0600910500",
              },
            ]}
          />
        </div>
        <div>
          <Table
            list={[
              {
                name: "Akumulatorowa kosiarka PowerMax 37/36V P4A – zestaw 14638-20",
                price: 2_167,
                url: "https://www.gardena.com/pl/produkty/pielegnacja-trawnika/kosiarki/akumulatorowa-kosiarka-powermax-3736v-p4a-%E2%80%93-zestaw/970586401.html",
              },
              {
                name: "Elektryczny wertykulator EVC 1000 4068-20",
                price: 1_060,
                url: "https://www.gardena.com/pl/produkty/pielegnacja-trawnika/wertykulator-aerator/elektryczny-wertykulator-evc-1000/901060801.html",
              },
              {
                name: "Podkaszarka akumulatorowa ComfortCut Li-23/18V P4A - zestaw 14701-20",
                price: 799,
                url: "https://www.gardena.com/pl/produkty/pielegnacja-trawnika/podkaszarki/podkaszarka-akumulatorowa-comfortcut-li-2318v-p4a---zestaw/970511801.html",
              },
              {
                name: "Akumulatorowe nożyce do żywopłotu ComfortCut 60/18V P4A - zestaw 14731-20",
                price: 939,
                url: "https://www.gardena.com/pl/produkty/pielegnacja-drzew-i-krzewow/nozyce-do-zywoplotu/akumulatorowe-no%C5%BCyce-do-%C5%BCywop%C5%82otu-comfortcut-6018v-p4a---zestaw/970512201.html",
              },
              {
                name: "Akumulatorowa dmuchawa PowerJet 18V P4A - zestaw 14890-20",
                price: 795,
                url: "https://www.gardena.com/pl/produkty/uprawa-gleby/porzadki-wokol-domu-i-w-ogrodzie/akumulatorowa-dmuchawa-powerjet-18v-p4a---zestaw/970512801.html",
              },
              {
                name: "Akumulator systemowy P4A PBA 18V/72 14905-20",
                price: 515,
                url: "https://www.gardena.com/pl/produkty/pielegnacja-trawnika/podkaszarki/akumulator-systemowy-p4a-pba-18v72/970508601.html",
              },
              {
                name: "Szybka ładowarka P4A AL 1830 CV 14901-20",
                price: 226,
                url: "https://www.gardena.com/pl/produkty/pielegnacja-trawnika/podkaszarki/szybka-%C5%82adowarka-p4a-al-1830-cv/970508301.html",
              },
            ]}
          />
        </div>
        <div>
          <Table
            list={[
              {
                name: "Kosiarka akumulatorowa LM 530/36 Bp (wersja bez akumulatora i ładowarki)",
                price: 6888,
                url: "https://www.kaercher.com/pl/professional/utrzymanie-terenow-zielonych/lm-530-36-bp-wersja-bez-akumulatora-i-ladowarki-10425000.html",
              },
              {
                name: "Kosiarka akumulatorowa LMO 36-46 Battery (wersja bez akumulatora i ładowarki)",
                price: 2749,
                url: "https://www.kaercher.com/pl/home-garden/narzedzia-ogrodowe/kosiarka-akumulatorowa/lmo-36-46-battery-wersja-bez-akumulatora-i-ladowarki-14444720.html",
              },
              {
                name: "Podkaszarka akumulatorowa LTR 18-30 Battery Set",
                price: 909,
                url: "https://www.kaercher.com/pl/home-garden/narzedzia-ogrodowe/podkaszarka-akumulatorowa/ltr-18-30-battery-set-14443110.html",
              },
              {
                name: "Kärcher HGE 18-45 - Akumulatorowe nożyce do żywopłotu",
                price: 969,
                url: "https://www.kaercher.com/pl/home-garden/narzedzia-ogrodowe/akumulatorowe-nozyce-do-zywoplotu/hge-18-45-battery-set-14442310.html",
              },
              {
                name: "Kärcher LB 930/36 - Profesjonalna akumulatorowa dmuchawa do liści",
                price: 3567,
                url: "https://www.kaercher.com/pl/professional/utrzymanie-terenow-zielonych/lb-930-36-bp-pack-10425080.html",
              },
              {
                name: "Dmuchawa do liści LBL 4 Battery Set",
                price: 1559,
                url: "https://www.kaercher.com/pl/home-garden/narzedzia-ogrodowe/dmuchawa-do-lisci/lbl-4-battery-set-14451600.html",
              },
              {
                name: "Bateria 36 V / 5.0 Ah",
                price: 1090,
                url: "https://www.kaercher.com/pl/akcesoria/bateria-36-v-5-0-ah-24450310.html",
              },
              {
                name: "Szybka ładowarka Battery Power+ 36/60",
                price: 539,
                url: "https://www.kaercher.com/pl/akcesoria/szybka-ladowarka-battery-power-36-60-24450450.html",
              },
              {
                name: "Myjka ciśnieniowa K 7 Premium Smart Control Home",
                price: 2299,
                url: "https://www.kaercher.com/pl/home-garden/myjki-cisnieniowe/k-7-premium-smart-control-home-13172330.html",
              },
              {
                name: "Wózek na wąż HC 50",
                price: 312,
                url: "https://www.kaercher.com/pl/home-garden/systemy-nawadniania/przechowywanie-wezy-i-wozki-na-weze/wozek-na-waz-hc-50-26451060.html",
              },
              {
                name: "Systemy nawadniania Kärcher Rain Box",
                price: 519,
                url: "https://www.kaercher.com/pl/home-garden/systemy-nawadniania/kaercher-rain-system-tm/kaercher-rain-box-26452380.html",
              },
            ]}
          />
        </div>
        <div>
          <Table
            list={[
              {
                name: "Kosiarka 40cm bezszczotkowa 18V ONE+ z dwoma akumulatorami 4.0Ah i ładowarką 2A RY18LMX40B-240",
                price: 2_498,
                url: "https://pl.ryobitools.eu/narzedzia-ogrodowe/kosiarki-i-wertykulatory-do-trawy/kosiarka-akumulatorowa/ry18lmx40b/ry18lmx40b-240/",
              },
              {
                name: "Kosiarka z napędem 46cm bezszczotkowa 36V MAX POWER z akumulatorem 5.0Ah i ładowarką 1.7A RY36LMXSP46A-150",
                price: 2_694,
                url: "https://pl.ryobitools.eu/narzedzia-ogrodowe/kosiarki-i-wertykulatory-do-trawy/kosiarka-akumulatorowa/ry36lmxsp46a/ry36lmxsp46a-150/",
              },
              {
                name: "Wertykulator i areator bezszczotkowy akumulatorowy ONE+ 18 V, z dwoma akumulatorami 4.0 Ah i ładowarką, szerokość wertykulacji 35 cm RY18SFX35A-240",
                price: 2_098,
                url: "https://pl.ryobitools.eu/narzedzia-ogrodowe/kosiarki-i-wertykulatory-do-trawy/wertykulator-elektryczny/ry18sfx35a/ry18sfx35a-240/",
              },
              {
                name: "Bezszczotkowa glebogryzarka MAX POWER 36V RY36CVXA-0",
                price: 2_998,
                url: "https://pl.ryobitools.eu/narzedzia-ogrodowe/urzadzenia-wielofunkcyjne-do-ogrodu/kultywatory/ry36cvxa/ry36cvxa-0/",
              },
              {
                name: "Podkaszarka bezszczotkowa Expand-It 36 V RY36ELTX33A-0",
                price: 684,
                url: "https://pl.ryobitools.eu/narzedzia-ogrodowe/podkaszarki-i-kosy-do-trawy/podkaszarka-akumulatorowa/ry36eltx33a/ry36eltx33a-0/",
              },
              {
                name: "Podkaszarka bezszczotkowa Expand-It 36 V (1 x 4.0 Ah) RY36ELTX33A-140",
                price: 1_231,
                url: "https://pl.ryobitools.eu/narzedzia-ogrodowe/podkaszarki-i-kosy-do-trawy/podkaszarka-akumulatorowa/ry36eltx33a/ry36eltx33a-140/",
              },
              {
                name: "Beszczotkowa kosa 36V MAX POWER, szerokość koszenia 30 cm RY36BCX30A-0",
                price: 1_124,
                url: "https://pl.ryobitools.eu/narzedzia-ogrodowe/podkaszarki-i-kosy-do-trawy/kosy-do-trawy/ry36bcx30a/ry36bcx30a-0/",
              },
              {
                name: "Nożyce do żywopłotu 36V, ostrze 60 cm RHT36B61R",
                price: 618,
                url: "https://pl.ryobitools.eu/narzedzia-ogrodowe/nozyce-do-zywoplotow-traw-i-krzewow/nozyce-do-zywoplotu/rht36c61r/rht36b61r/",
              },
              {
                name: "Bezszczotkowa dmuchawa WHISPER™ 36V MAX POWER RY36BLXB-0",
                price: 978,
                url: "https://pl.ryobitools.eu/narzedzia-ogrodowe/odkurzacze-i-dmuchawy-do-lisci/dmuchawy-do-lisci/ry36blxb/ry36blxb-0/",
              },
              {
                name: "Akumulator - ProCORE18V 4.0Ah Professional",
                price: 848,
                url: "https://pl.ryobitools.eu/akumulatory-i-ladowarki/akumulatory-i-ladowarki-36v/akumulatory-36v/ry36b40b/ry36b40b/",
              },
              {
                name: "Szybka ładowarka 36 V RY36C60A",
                price: 478,
                url: "https://pl.ryobitools.eu/akumulatory-i-ladowarki/akumulatory-i-ladowarki-36v/ladowarki-do-akumulatorow-36v/ry36c60a/ry36c60a/",
              },
            ]}
          />
        </div>
        <div>
          <Table
            list={[
              {
                name: "Robot koszący iMOW 5",
                price: 8899,
                url: "https://www.stihl.pl/pl/p/roboty-koszace-imow-5-164626#robot-imow-5-164626",
              },
              {
                name: "Kosiarka RMA 243, z akumulatorem AK 20 i ładowarką AL 101 - AK-System | 2024",
                price: 2499,
                url: "https://www.stihl.pl/pl/p/kosiarki-rma-243-ak-system-2024-185010#kosiarka-rma-243-zestaw-185010",
              },
              {
                name: "Wertykulator RLA 240, zestaw z AK 30 S i AL 101",
                price: 1149,
                url: "https://www.stihl.pl/pl/p/wertykulator-rla-240-ak-system-194291#wertykulator-rla-240-107874",
              },
              {
                name: "Glebogryzarka MH 445",
                price: 2999,
                url: "https://www.stihl.pl/pl/p/glebogryzarki-mh-445-146397#glebogryzarka-mh-445-146397",
              },
              {
                name: "Kosa spalinowa FS 56",
                price: 1599,
                url: "https://www.stihl.pl/pl/p/kosy-mechaniczne-fs-56-1410#fs-56-1410",
              },
              {
                name: "Kosa akumulatorowa FSA 80, z akumulatorem AK 30 S i ładowarką AL 101 - AK-System",
                price: 2299,
                url: "https://www.stihl.pl/pl/p/kosy-mechaniczne-fsa-80-ak-system-177619#kosa-fsa-80-zestaw-ak30s-al101-177607",
              },
              {
                name: "Podkrzesywarka akum. HTA 66 - AP-System",
                price: 2499,
                url: "https://www.stihl.pl/pl/p/podkrzesywarki-hta-66-ap-system-122875#podkrzesywarka-hta-66-122875",
              },
              {
                name: "Nożyce HSA 100, bez akumulatora i ładowarki - AP System",
                price: 1699,
                url: "https://www.stihl.pl/pl/p/nozyce-do-zywoplotow-hsa-100-ap-system-183350#hsa-100-bez-akumulatora-ladowarki-183350",
              },
              {
                name: "Dmuchawa akumulatorowa BGA 250, bez akumulatora i ładowarki - AP-System",
                price: 1699,
                url: "https://www.stihl.pl/pl/p/dmuchawy-odkurzacze-bga-250-ap-system-199660#dmuchawa-bga-250-199660",
              },
              {
                name: "Akumulator AK 20",
                price: 689,
                url: "https://www.stihl.pl/pl/ap/akumulator-ak-20-164033",
              },
              {
                name: "Ładowarka AL 101",
                price: 269,
                url: "https://www.stihl.pl/pl/ap/ladowarka-al-101-73243",
              },
              {
                name: "Myjka RE 130 PLUS",
                price: 1899,
                url: "https://www.stihl.pl/pl/p/myjki-cisnieniowe-re-130-plus-81522#re-130-plus-81522",
              },
            ]}
          />
        </div>
        <div>
          <Table
            list={[
              {
                name: "Autonomiczny robot koszący A 1500",
                price: 13_945,
                url: "https://www.stiga.pl/sklep/urzadzenia-akumulatorowe/roboty-koszace/autonomiczne/autonomiczny-robot-koszacy-a-1500",
              },
              {
                name: "Kosiarka akumulatorowa Collector 543 AE 4Ah",
                price: 2_399,
                url: "https://www.stiga.pl/sklep/koszenie-trawnika/kosiarki-akumulatorowe/kosiarka-akumulatorowa-collector-543-ae",
              },
              {
                name: "Wertykulator elektryczny SV 415 E",
                price: 745,
                url: "https://www.stiga.pl/sklep/przygotowanie-trawnika/wertykulatory/wertykulator-elektryczny-sv-415-e",
              },
              {
                name: "Glebogryzarka SRC 775 RG",
                price: 2_399,
                url: "https://www.stiga.pl/sklep/przygotowanie-trawnika/glebogryzarki/glebogryzarka-src-775-rg",
              },
              {
                name: "Kosa spalinowa BC 535 B",
                price: 899,
                url: "https://www.stiga.pl/sklep/koszenie-trawnika/kosy/kosy/kosa-spalinowa-bc-535-b",
              },
              {
                name: "Kosa akumulatorowa SBC 900 D AE",
                price: 2_065,
                url: "https://www.stiga.pl/sklep/urzadzenia-akumulatorowe/kosy-i-podcinarki-akumulatorowe/kosa-akumulatorowa-sbc-900-d-ae",
              },
              {
                name: "Podcinarka akumulatorowa GT 500e 2.0 Ah zestaw",
                price: 1_145,
                url: "https://www.stiga.pl/sklep/urzadzenia-akumulatorowe/kosy-i-podcinarki-akumulatorowe/podcinarka-akumulatorowa-gt-500e-2-0-ah-zestaw",
              },
              {
                name: "Sekator akumulatorowy SHT 900 AE",
                price: 1_835,
                url: "https://www.stiga.pl/sklep/urzadzenia-akumulatorowe/sekatory-akumulatorowe/sekator-akumulatorowy-sht-900-ae",
              },
              {
                name: "Dmuchawa akumulatorowa SAB 900 AE",
                price: 1_605,
                url: "https://www.stiga.pl/sklep/urzadzenia-akumulatorowe/dmuchawy-akumulatorowe/dmuchawa-akumulatorowa-sab-900-ae",
              },
              {
                name: "Akumulator E 440 4.0 Ah lub B 440 4.0 Ah",
                price: 731,
                url: "https://www.stiga.pl/sklep/urzadzenia-akumulatorowe/akumulatory/akumulator-e-440-4-0-ah",
              },
              {
                name: "Ładowarka EC 415 S",
                price: 271,
                url: "https://www.stiga.pl/sklep/urzadzenia-akumulatorowe/ladowarki/ladowarka-ec-415",
              },
              {
                name: "Myjka wysokociśnieniowa HPS 550 R",
                price: 2_199,
                url: "https://www.stiga.pl/sklep/utrzymanie-porzadku/myjki-wysokocisnieniowe/myjka-wysokocisnieniowa-hps-550-r",
              },
            ]}
          />
        </div>
        <div>
          <Table
            list={[
              {
                name: "M18 F2LM46-0 - M18 FUEL™ kosiarka z napędem 46 cm na dwa akumulatory",
                price: 4_760,
                url: "https://pl.milwaukeetool.eu/pl-pl/m18-fuel-kosiarka-z-napedem-46-cm-na-dwa-akumulatory/m18-f2lm46/",
              },
              {
                name: "M18 FOPH-SHTA - QUIK-LOK™ Krótkie nożyce do żywopłotu",
                price: 1_045,
                url: "https://pl.milwaukeetool.eu/pl-pl/quik-lok-krotkie-nozyce-do-zywoplotu/m18-foph-shta/",
              },
              {
                name: "M18 FOPH-CA - QUIK-LOK™ Kultywator",
                price: 1_549,
                url: "https://pl.milwaukeetool.eu/pl-pl/quik-lok-kultywator/m18-foph-ca/",
              },
              {
                name: "M18 BLLT-0 - M18™ Podkaszarka z silnikiem bezszczotkowym",
                price: 1_269,
                url: "https://pl.milwaukeetool.eu/pl-pl/m18-podkaszarka-z-silnikiem-bezszczotkowym/m18-bllt/",
              },
              {
                name: "M18 BLTS-0 - M18™ Sekator teleskopowy do gałęzi",
                price: 2_969,
                url: "https://pl.milwaukeetool.eu/pl-pl/m18-sekator-teleskopowy-do-galezi/m18-blts/",
              },
              {
                name: "M18 FBL-0 - M18 FUEL™ Dmuchawa",
                price: 899,
                url: "https://pl.milwaukeetool.eu/pl-pl/m18-fuel-dmuchawa/m18-fbl/",
              },
              {
                name: "M18™ akumulator 4.0 Ah",
                price: 784,
                url: "https://pl.milwaukeetool.eu/pl-pl/m18-akumulator-40-ah/m18-b4/",
              },
              {
                name: "M18™ Podwójna szybka ładowarka",
                price: 1181,
                url: "https://pl.milwaukeetool.eu/pl-pl/m18-podwojna-szybka-ladowarka/m18-dfc/",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}