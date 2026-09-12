import {
  type ChangeEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Subject, debounceTime, distinctUntilChanged, map } from "rxjs";
import { LazyImage } from "@acme/ui";
import { type FiltersState, Filters, INITIAL_FILTERS } from "./Filters";
import { images } from "../../data";
import styles from "./styles.module.scss";

const favorite: string[] = [];

function Table({ queries }: { queries: FiltersState }) {
  const [list] = useState(() =>
    images
      // .slice(images.length - 50, images.length)
      // .slice(130)
      // .filter(({ src }) => favorite.includes(src))
      .map(
        ({
          src,
          url,
          tag = "",
        }: {
          src: string;
          url: string;
          tag?: string;
        }) => ({
          src: src.replace(/^https:\/\/[^\/]+\.(cdninstagram)\.com/, "/$1"),
          url,
          tag: tag.split(",").map((t) => t.trim()),
        }),
      ),
  );
  const [selected, setSelected] = useState(() => list.map((_, key) => key));

  const filtered = useMemo(
    () =>
      list.filter(
        (item) =>
          (queries.search === "" ||
            item.tag.includes(queries.search) ||
            item.url.toLowerCase().includes(queries.search) ||
            item.src.toLowerCase().includes(queries.search)) &&
          (!queries.favorite || favorite.includes(item.src)),
      ),
    [queries, list],
  );

  // console.log({ filtered });

  const duplicates = useMemo(
    () =>
      Object.entries(
        images.reduce(
          (result, { src }) =>
            Object.assign(result, {
              [src]: (result[src] || 0) + 1,
            }),
          {} as Record<string, number>,
        ),
      )
        .filter(([, num]) => num > 1)
        .map(([src]) => src),
    [images],
  );

  console.log({ duplicates });

  const handleSelect = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) =>
      ((key) =>
        setSelected((selected) =>
          selected.filter((id) => id !== key).concat(target.checked ? key : []),
        ))(Number(target.value)),
    [],
  );

  return (
    <>
      <small>
        {filtered.length === list.length
          ? `Showing all of ${list.length}`
          : `Found ${filtered.length} items out of a total of ${list.length}`}
      </small>
      <table className={styles.Table} style={{ width: 640 }}>
        <thead>
          <tr>
            <th style={{ width: 20 }}></th>
            <th align="left">url</th>
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
              <td>
                <div>
                  <a
                    href={item.url}
                    onClick={(e) => {
                      const range = document.createRange();
                      e.preventDefault();
                      range.selectNode(e.target as HTMLElement);
                      ((selection) =>
                        selection &&
                        (selection.removeAllRanges(),
                        selection.addRange(range)))(window.getSelection());
                    }}
                  >
                    {item.url}
                  </a>
                </div>
                <div>
                  <LazyImage src={item.src} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default function List() {
  const [filters, setFilters] = useState<FiltersState>(() => INITIAL_FILTERS);

  const [queries, setQueries] = useState(() => filters);
  const search$ = useMemo(() => new Subject<any>(), []);

  useEffect(() => {
    const subscription = search$
      .pipe(
        map(({ search, ...filters }) =>
          JSON.stringify({
            ...queries,
            ...filters,
            search: search.toLowerCase().trim(),
          }),
        ),
        distinctUntilChanged(),
        debounceTime(400),
      )
      .subscribe((filters) =>
        setQueries((queries) => ({ ...queries, ...JSON.parse(filters) })),
      );
    return () => subscription.unsubscribe();
  }, [search$]);

  useEffect(() => {
    search$.next(filters);
  }, [filters]);

  return (
    <div>
      <Filters filters={filters} setFilters={setFilters} />
      <Table queries={queries} />
    </div>
  );
}
