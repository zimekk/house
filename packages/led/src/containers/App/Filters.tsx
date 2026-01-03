import {
  type ChangeEventHandler,
  type Dispatch,
  type SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Subject, debounceTime, distinctUntilChanged, map } from "rxjs";
import { Input, Picker, Range } from "../../components/form";

export const PRICE_LIST = [0, 100, 200, 500, 1_000];

export const SORT_BY = {
  title: "Title",
  price: "Price",
} as const;

export const TYPES = {
  "": "",
  strip: "strip",
  driver: "driver",
} as const;

const INITIAL_FILTERS = {
  brand: "",
  group: "",
  search: "",
  sortBy: Object.keys(SORT_BY)[0] as keyof typeof SORT_BY,
  type: "",
  priceFrom: PRICE_LIST[0],
  priceTo: PRICE_LIST[PRICE_LIST.length - 2],
};

export type FiltersState = typeof INITIAL_FILTERS;

export interface OptionsState {
  brand: string[];
  group: string[];
}

export const stringifyFilters = ({ search, ...filters }: FiltersState) =>
  JSON.stringify({
    ...filters,
    search: search.toLowerCase().trim(),
  });

export const initialQueries = () =>
  JSON.parse(stringifyFilters(INITIAL_FILTERS)) as FiltersState;

export function Filters({
  options,
  setQueries,
}: {
  options: OptionsState;
  setQueries: Dispatch<SetStateAction<FiltersState>>;
}) {
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const search$ = useMemo(() => new Subject<any>(), []);

  useEffect(() => {
    const subscription = search$
      .pipe(map(stringifyFilters), distinctUntilChanged(), debounceTime(400))
      .subscribe((filters) =>
        setQueries((queries) => ({ ...queries, ...JSON.parse(filters) })),
      );
    return () => subscription.unsubscribe();
  }, [search$]);

  useEffect(() => {
    search$.next(filters);
  }, [filters]);

  return (
    <fieldset>
      <div>
        <Picker
          label="Brand"
          options={[""].concat(options.brand)}
          value={String(filters.brand)}
          onChange={useCallback(
            ({ target }) =>
              setFilters((filters) => ({
                ...filters,
                brand: target.value,
              })),
            [],
          )}
        />
        <Range
          options={PRICE_LIST}
          labelFrom="Price From"
          labelTo="Price To"
          valueFrom={filters.priceFrom}
          valueTo={filters.priceTo}
          onChangeFrom={useCallback<ChangeEventHandler<HTMLInputElement>>(
            ({ target }) =>
              setFilters(({ priceTo, ...criteria }) =>
                ((priceFrom) => ({
                  ...criteria,
                  priceFrom,
                  priceTo: priceTo < priceFrom ? priceFrom : priceTo,
                }))(Number(target.value)),
              ),
            [],
          )}
          onChangeTo={useCallback<ChangeEventHandler<HTMLInputElement>>(
            ({ target }) =>
              setFilters(({ priceFrom, ...criteria }) =>
                ((priceTo) => ({
                  ...criteria,
                  priceFrom: priceTo > priceFrom ? priceFrom : priceTo,
                  priceTo,
                }))(Number(target.value)),
              ),
            [],
          )}
        />
        <span>{`${new Intl.NumberFormat().format(
          filters.priceFrom,
        )} - ${new Intl.NumberFormat().format(filters.priceTo)} zł`}</span>
      </div>
      <div>
        <Input
          label="Search"
          type="search"
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
        <Picker
          label="Type"
          entries={Object.entries(TYPES)}
          value={filters.type}
          onChange={useCallback(
            ({ target }) =>
              setFilters((filters) => ({
                ...filters,
                type: target.value,
              })),
            [],
          )}
        />
        <Picker
          label="Sort"
          entries={Object.entries(SORT_BY)}
          value={filters.sortBy}
          onChange={useCallback(
            ({ target }) =>
              setFilters((filters) => ({
                ...filters,
                sortBy: target.value as keyof typeof SORT_BY,
              })),
            [],
          )}
        />
      </div>
    </fieldset>
  );
}
