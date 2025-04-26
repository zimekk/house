import { type ChangeEventHandler, useCallback, useMemo, useState } from "react";
import { Link } from "@acme/ui";
import Inspirations from "../Inspirations";
import styles from "./styles.module.scss";

interface ItemType {
  name: string;
  price: number;
  url?: string;
  src?: string;
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
      <h1>audio</h1>
      <div className={styles.Columns}>
        <div>
          <Table
            list={[
              {
                name: "Yamaha XDA-AMP5400RK",
                price: 7_000,
                url: "https://www.tophifi.pl/stereo/inne-komponenty-hi-fi/yamaha-xda-amp5400rk.html",
              },
              {
                name: "Yamaha MusicCast XDA-QS5400RK",
                price: 12_000,
                url: "https://www.tophifi.pl/stereo/inne-komponenty-hi-fi/yamaha-musiccast-xda-qs5400rk.html",
              },
              {
                name: "Yamaha NS-IC400",
                price: 475,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/y/a/yamaha_ns_ic400.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/yamaha-ns-ic400.html",
              },
              {
                name: "Yamaha NS-IC600",
                price: 650,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/y/a/yamaha_ns_ic600.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/yamaha-ns-ic600.html",
              },
              {
                name: "Yamaha NS-IC800",
                price: 825,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/y/a/yamaha_ns_ic800.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/yamaha-ns-ic800.html",
              },
              {
                name: "Yamaha NS-ICS600",
                price: 1_000,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/y/a/yamaha_ns_ics600.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/yamaha-ns-ics600.html",
              },
            ]}
          />
        </div>
        <div>
          <Table
            list={[
              {
                name: "ELAC IS-AMP340-BK",
                price: 3_700,
                url: "https://www.tophifi.pl/instalacje-audio-video/wzmacniacze-stereo-instalacyjne/elac-is-amp340-bk.html",
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/e/l/elac-is-amp340-bk.png",
              },
              {
                name: "ELAC IS-AMP8100-BK",
                price: 12_300,
                url: "https://www.tophifi.pl/instalacje-audio-video/wzmacniacze-stereo-instalacyjne/elac-is-amp8100-bk.html",
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/e/l/elac-is-amp8100-bk-tyl.png",
              },
              {
                name: "ELAC IS-AMP1275",
                price: 15_400,
                url: "https://www.tophifi.pl/instalacje-audio-video/wzmacniacze-stereo-instalacyjne/elac-is-amp1275-bk.html",
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/e/l/elac-is-amp1275-tyl.png",
              },
              {
                name: "ELAC IS-AMP1650",
                price: 18_300,
                url: "https://www.tophifi.pl/instalacje-audio-video/wzmacniacze-stereo-instalacyjne/elac-is-amp1650.html",
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/e/l/elac-is-amp1650-zlacza.png",
              },
              {
                name: "ELAC Debut IC-DT61",
                price: 800,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/e/l/elac-ic-dt61.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/elac-debut-ic-dt61.html",
              },
              {
                name: "ELAC Debut IC-D61",
                price: 888,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/e/l/elac-debut-ic-d61.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/elac-debut-ic-d61.html",
              },
            ]}
          />
        </div>
        <div>
          <Table
            list={[
              {
                name: "NAD CI720 V2",
                price: 5_000,
                url: "https://www.tophifi.pl/stereo/inne-komponenty-hi-fi/nad-ci720-v2.html",
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/n/a/nad-ci-720-v2-tyl.png",
              },
              {
                name: "NAD CI580 V2",
                price: 8_000,
                url: "https://www.tophifi.pl/stereo/inne-komponenty-hi-fi/nad-ci-580-v2.html",
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/n/a/nad-ci-580-v2-front2_1.png",
              },
              {
                name: "NAD CI 8-120 DSP",
                price: 16_000,
                url: "https://www.tophifi.pl/stereo/inne-komponenty-hi-fi/nad-ci-8-120-dsp.html",
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/n/a/nad-ci-8-120-dsp-tyl.png",
              },
              {
                name: "NAD CI 8-150 DSP",
                price: 21_400,
                url: "https://www.tophifi.pl/stereo/inne-komponenty-hi-fi/nad-ci-8-150-dsp.html",
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/n/a/nad-ci-8-150-dsp-tyl.png",
              },
            ]}
          />
        </div>
        <div>
          <Table
            list={[
              {
                name: "Rotel C8",
                price: 10_000,
                url: "https://www.tophifi.pl/instalacje-audio-video/wzmacniacze-stereo-instalacyjne/rotel-c8.html",
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/r/o/rotel-c8-tyl.png",
              },
              {
                name: "Rotel C8+",
                price: 12_400,
                url: "https://www.tophifi.pl/instalacje-audio-video/wzmacniacze-stereo-instalacyjne/rotel-c8-pluis.html",
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/r/o/rotel-c8-plus-tyl.png",
              },
            ]}
          />
        </div>
        <div>
          <Table
            list={[
              {
                name: "Sonance SONAMP DSP 2-100",
                price: 4_460,
                url: "https://www.tophifi.pl/instalacje-audio-video/wzmacniacze-stereo-instalacyjne/sonance-sonamp-dsp-2-100.html",
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/s/o/sonance-sonamp-2-100-tyl.png",
              },
              {
                name: "Sonance SONAMP DSP 2-150 MKIII INT",
                price: 5_400,
                url: "https://www.tophifi.pl/instalacje-audio-video/wzmacniacze-stereo-instalacyjne/sonance-sonamp-dsp-2-150-mkiii.html",
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/s/o/sonance-sonamp-dsp-2-150-mkiii-tyl.png",
              },
              {
                name: "Sonance SONAMP 8-50 INT",
                price: 6_800,
                url: "https://www.tophifi.pl/instalacje-audio-video/wzmacniacze-stereo-instalacyjne/sonance-sonamp-8-50-int.html",
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/s/o/sonance-sonamp-8-50-int-tyl.png",
              },
              {
                name: "Sonance SONAMP 12-50",
                price: 8_150,
                url: "https://www.tophifi.pl/instalacje-audio-video/wzmacniacze-stereo-instalacyjne/sonance-sonamp-12-50.html",
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/s/o/sonance-sonamp-12-50-tyl-.png",
              },
              {
                name: "Sonance SONAMP 16-50 INT",
                price: 9_950,
                url: "https://www.tophifi.pl/instalacje-audio-video/wzmacniacze-stereo-instalacyjne/sonance-sonamp-16-50-int.html",
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/s/o/sonance-sonamp-16-50-int-tyl.png",
              },
              {
                name: "Sonance SONAMP DSP 8-130 MKII EU",
                price: 15_400,
                url: "https://www.tophifi.pl/instalacje-audio-video/wzmacniacze-stereo-instalacyjne/sonance-sonamp-dsp-8-130-mkii.html",
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/s/o/sonance-sonamp-dsp-8-130-mkii-tyl.png",
              },
              {
                name: "Sonance C6R",
                price: 745,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/s/o/sonance-c6r-2.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/sonance-c6r.html",
              },
              {
                name: "Sonance VP60R",
                price: 955,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/s/o/sonance-vp60r.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/sonance-vp60r.html",
              },
              {
                name: "Sonance C6R SST",
                price: 990,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/s/o/sonance-c6r-sst.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/sonance-c6r-sst.html",
              },
              {
                name: "Sonance VX60R",
                price: 990,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/s/o/sonance-vx60r.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/sonance-vx60r.html",
              },
              {
                name: "Sonance Mariner 54 B",
                price: 1_030,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/s/o/sonance-mariner-54-b.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/sonance-mariner-54-b.html",
              },
              {
                name: "Sonance VP52R UTL",
                price: 1_115,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/s/o/sonance-vp52r-utl.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/sonance-vp52r-utl.html",
              },
              {
                name: "Sonance VP62R",
                price: 1_190,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/s/o/sonance-vp62r.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/sonance-vp62r.html",
              },
              {
                name: "Sonance VP80R",
                price: 1_190,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/s/o/sonance-vp80r.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/sonance-vp80r.html",
              },
              {
                name: "Sonance VX62R",
                price: 1_270,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/s/o/sonance-vx62r.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/sonance-vx62r.html",
              },
              {
                name: "Sonance VX80R",
                price: 1_270,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/s/o/sonance-vx80r.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/sonance-vx80r.html",
              },
            ]}
          />
        </div>
        <div>
          <Table
            list={[
              {
                name: 'Lithe Audio Głośnik sufitowy 3"',
                price: 300,
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/lithe-audio-glosnik-sufitowy-3-cale.html",
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/l/i/lithe-audio-glosnik-sufitowy-3-cale-maskownica.png",
              },
              {
                name: 'Lithe Audio Głośnik sufitowy 6,5"',
                price: 500,
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/lithe-audio-glosnik-sufitowy-6-5-cala.html",
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/l/i/lithe-audio-glosnik-sufitowy-6-5-cala.png",
              },
              {
                name: 'Lithe Audio Głośnik sufitowy niskoprofilowy 6,5"',
                price: 600,
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/lithe-audio-glosnik-sufitowy-niskoprofilowy-6-5-cala.html",
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/l/i/lithe-audio-glosnik-sufitowy-niskoprofilowy-6-5-cala-mask.png",
              },
              {
                name: 'Lithe Audio Głośnik sufitowy 6,5" (IP44)',
                price: 600,
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/lithe-audio-glosnik-sufitowy-stereo-6-5-cala-ip44.html",
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/l/i/lithe-audio-glosnik-sufitowy-6-5-cala-ip44-maskownica.png",
              },
              {
                name: 'Lithe Audio Głośnik sufitowy stereo 6,5"',
                price: 600,
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/lithe-audio-glosnik-sufitowy-stereo-6-5-cala.html",
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/l/i/lithe-audio-glosnik-sufitowy-stereo-6-5-cala.png",
              },
              {
                name: 'Lithe Audio Głośnik sufitowy Pro 6,5"',
                price: 3_000,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/l/i/lithe-audio-glosnik-sufitowy-pro-6-5-cala-maskownica.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/lithe-audio-glosnik-sufitowy-pro-6-5-cala.html",
              },
              {
                name: 'Lithe Audio Głośnik sufitowy Pro 6,5" (IP44)',
                price: 3_300,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/l/i/lithe-audio-glosnik-sufitowy-pro-6-5-cala-ip44.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/lithe-audio-glosnik-sufitowy-pro-6-5-cala-ip44.html",
              },
            ]}
          />
        </div>
        <div>
          <Table
            list={[
              {
                name: "Bowers & Wilkins CCM362",
                price: 680,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/8/b/8b1dd4ec.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/ccm-362.html",
              },
              {
                name: "Bowers & Wilkins CCM382",
                price: 980,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/a/3/a3456425.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/ccm-382.html",
              },
              {
                name: "Bowers & Wilkins M-1",
                price: 1_000,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/7/1/717be9dc.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/m-1.html",
              },
              {
                name: "Bowers & Wilkins CCM665",
                price: 1_050,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/e/6/e696feb2.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/ccm665.html",
              },
              {
                name: "Bowers & Wilkins CCM664",
                price: 1_250,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/b/w/bw-ccm664-2.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/ccm664sr-czarny-biala-maskownica-6325.html",
              },
              {
                name: "Bowers & Wilkins CCM664SR",
                price: 1_700,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/6/6/66028d2c.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/ccm664sr.html",
              },
            ]}
          />
        </div>
        <div>
          <Table
            list={[
              {
                name: "Indiana Line RD 260",
                price: 145,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/r/d/rd-260-lekki.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/indiana-line-rd-260.html",
              },
              {
                name: "Indiana Line RD 280",
                price: 250,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/r/d/rd-280.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/indiana-line-rd-280.html",
              },
              {
                name: "Indiana Line NANO.2",
                price: 300,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/n/a/nano-bl.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/indiana-line-nano-2.html",
              },
              {
                name: "Indiana Line LUNA",
                price: 500,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/i/n/indiana-line-luna-wh.png",
                url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/indiana-line-luna.html",
              },
            ]}
          />
        </div>
        <div>
          <Table
            list={[
              {
                name: "Marmitek Split 312 UHD",
                price: 195,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/m/a/marmitek-split-312-uhd-zlacza.png",
                url: "https://www.tophifi.pl/akcesoria/akcesoria-av/marmitek-split-312-uhd.html",
              },
              {
                name: "Marmitek Connect 310 UHD 2.0",
                price: 200,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/m/a/marmitek-connect-310-uhd-2-0-zlacza.png",
                url: "https://www.tophifi.pl/akcesoria/akcesoria-av/marmitek-connect-310-uhd-2-0.html",
              },
              {
                name: "Marmitek MegaView 63",
                price: 280,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/m/a/marmitek-megaview-63.png",
                url: "https://www.tophifi.pl/akcesoria/akcesoria-av/marmitek-megaview-63.html",
              },
              {
                name: "Marmitek Invisible Control 6 XTRA",
                price: 330,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/m/a/marmitek-invisible-control-6-xtra.png",
                url: "https://www.tophifi.pl/akcesoria/akcesoria-av/marmitek-invisible-control-6-xtra.html",
              },
              {
                name: "Marmitek MegaView 91",
                price: 800,
                src: "https://www.tophifi.pl/media/catalog/product/cache/47a534cba70bb4dede07c4c879c183e1/m/a/marmitek-megaview-91-zlacza3.png",
                url: "https://www.tophifi.pl/akcesoria/akcesoria-av/marmitek-megaview-91.html",
              },
            ]}
          />
        </div>
      </div>
      <Inspirations />
    </div>
  );
}
