import {
  type ChangeEventHandler,
  type ComponentProps,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Subject, debounceTime, distinctUntilChanged, map } from "rxjs";
import { LazyPlayer } from "../../components/player";
import { videos } from "../../data";
import styles from "./styles.module.scss";

export interface FiltersState {
  search: string;
}

export const INITIAL_FILTERS: FiltersState = {
  search: "",
};

export function Input({
  label,
  ...props
}: ComponentProps<"input"> & {
  label: ReactNode;
}) {
  return (
    <label>
      <span>{label}</span>
      <input {...props} />
    </label>
  );
}

export function Filters({
  filters,
  setFilters,
}: {
  filters: FiltersState;
  setFilters: Dispatch<SetStateAction<FiltersState>>;
}) {
  return (
    <fieldset>
      <div>
        <Input
          type="search"
          label="Search"
          value={filters.search}
          onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
            ({ target }) =>
              setFilters((filters) => ({
                ...filters,
                search: target.value,
              })),
            [],
          )}
        />
      </div>
    </fieldset>
  );
}

function List({ queries }: any) {
  const [list] = useState(() =>
    videos.map((url) => ({
      url,
      id: url.split("=")[1],
    })),
  );
  const [selected, setSelected] = useState(() =>
    list.filter(() => false).map((_, key) => key),
  );

  const filtered = useMemo(
    () =>
      list.filter(
        (item) =>
          queries.search === "" ||
          item.url.toLowerCase().includes(queries.search),
      ),
    [queries, list],
  );

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
      <table className={styles.Table}>
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
                  <LazyPlayer videoId={item.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default function App() {
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
      <h1>video</h1>
      <Filters filters={filters} setFilters={setFilters} />
      <List queries={queries} />
    </div>
  );
}
