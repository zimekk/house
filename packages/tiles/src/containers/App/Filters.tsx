import {
  type ChangeEventHandler,
  type ComponentProps,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useCallback,
} from "react";

export interface FiltersState {
  search: string;
  favorite: boolean;
}

export const INITIAL_FILTERS: FiltersState = {
  search: "",
  favorite: false,
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
        <label>
          <input
            type="checkbox"
            checked={filters.favorite}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) =>
                setFilters((filters) => ({
                  ...filters,
                  favorite: target.checked,
                })),
              [],
            )}
          />
          <span> Favorite</span>
        </label>
      </div>
    </fieldset>
  );
}
