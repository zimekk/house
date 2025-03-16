import {
  type ChangeEventHandler,
  type ComponentProps,
  type Dispatch,
  type FocusEventHandler,
  type ReactNode,
  type SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Subject, debounceTime, distinctUntilChanged, map } from "rxjs";
import { Player } from "../../components/player";
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

const getVideoId = (url: string) => url.split("=")[1];

interface VideoItem {
  url: string;
  id: string;
  markers: {
    text: string;
    time: number;
  }[];
}

function Item({ onAdd }: { onAdd: (videoId: string) => void }) {
  const [url, setUrl] = useState(() => "");
  const [error, setError] = useState(() => "");

  const handleClickAdd = useCallback(() => {
    console.log({ url });
    const u = url.trim();
    if (u.match(/https:\/\/www.youtube.com\/watch\?v=(.+)/)) {
      setError(``);
      setUrl("");
      onAdd(u);
    } else if (u === "") {
      setError(`Empty Url`);
    } else {
      setError(`Invalid Url: ${u}`);
    }
  }, [url]);

  return (
    <fieldset>
      <div>
        <Input
          type="text"
          label="New Url"
          value={url}
          onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
            ({ target }) => setUrl(target.value),
            [],
          )}
          onFocus={useCallback<FocusEventHandler<HTMLInputElement>>(
            ({ target }) => target.select(),
            [],
          )}
        />
        <button onClick={handleClickAdd}>Add</button>
        {error && (
          <span
            style={{
              backgroundColor: "lemonchiffon",
              color: "red",
              marginLeft: "1em",
              padding: ".25em .5em",
            }}
          >
            {error}
          </span>
        )}
      </div>
    </fieldset>
  );
}

function List({ list, queries }: { list: VideoItem[]; queries: FiltersState }) {
  const [selected, setSelected] = useState(() =>
    list.filter(() => false).map(({ url }) => url),
  );

  const filtered = useMemo(
    () =>
      list.filter(
        (item) =>
          queries.search === "" ||
          item.url.toLowerCase().includes(queries.search) ||
          item.markers.find(({ text }) =>
            text.toLowerCase().includes(queries.search),
          ),
      ),
    [queries, list],
  );

  const handleSelect = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) =>
      ((key) =>
        setSelected((selected) =>
          selected.filter((id) => id !== key).concat(target.checked ? key : []),
        ))(target.value),
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
          {filtered.map((item) => (
            <tr key={item.url}>
              <td>
                <label>
                  <input
                    type="checkbox"
                    value={item.url}
                    checked={selected.includes(item.url)}
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
                  <Player videoId={item.id} markers={item.markers} />
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
  const [list, setList] = useState(() =>
    videos.map(({ url, markers = [] }) => ({
      url,
      id: getVideoId(url),
      markers,
    })),
  );

  const [queries, setQueries] = useState(() => filters);
  const search$ = useMemo(() => new Subject<any>(), []);

  const handleAdd = useCallback(
    (url: string) =>
      setList((list) =>
        [
          {
            url,
            id: getVideoId(url),
            markers: [],
          } as VideoItem,
        ].concat(list),
      ),
    [list],
  );

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
      <Item onAdd={handleAdd} />
      <List list={list} queries={queries} />
    </div>
  );
}
