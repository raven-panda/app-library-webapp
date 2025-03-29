import {
  Dispatch,
  ReactNode,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ChevronDown, Search, X } from 'react-feather';
import { SelectOption } from '@/lib/types/controls/SelectOption.ts';
import { useTranslation } from 'react-i18next';

export default function Dropdown({
  setFieldValue,
  defaultValue,
  name,
  placeholder,
  label,
  options,
  error,
  isMultiSelect,
  isDefaultExpanded = false,
}: {
  setFieldValue: (newValue: string | string[]) => void;
  defaultValue?: string | Set<string>;
  name: string;
  placeholder: string;
  label: ReactNode | string;
  options: SelectOption[];
  error?: string;
  isMultiSelect: boolean;
  isDefaultExpanded?: boolean;
}) {
  const [isExpanded, setExpanded] = useState(isDefaultExpanded);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string | Set<string>>(
    isMultiSelect
      ? defaultValue
        ? new Set(
            options
              .filter((o) => (defaultValue as Set<string>).has(o.id))
              .map((o) => o.id),
          )
        : new Set()
      : defaultValue && options.some((o) => o.id === defaultValue)
        ? defaultValue
        : '',
  );
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [searchInput, setSearchInput] = useState('');

  const selectOptionClickHandler = (newValue: string | string[]) => {
    setValue(
      isMultiSelect ? new Set(newValue as string[]) : (newValue as string),
    );
    setExpanded(false);
    setSearchInput('');
    setFieldValue(newValue);
  };

  const addOptions = (...newValues: string[]) => {
    setValue((prev) => {
      const newValuesSet = new Set([...prev, ...newValues]);
      setFieldValue(Array.from(newValuesSet));
      return newValuesSet;
    });
    setSearchInput('');
  };

  const removeOptions = (...valuesToRemove: string[]) => {
    setValue((prev) => {
      const newValuesSet = new Set(
        Array.from(prev).filter((v) => !valuesToRemove.includes(v)),
      );
      setFieldValue(Array.from(newValuesSet));
      return newValuesSet;
    });
  };

  const removeAllOptions = () => {
    setValue(new Set());
    setFieldValue([]);
    setExpanded(false);
  };

  const getSelectPlaceholder = () => {
    if (isMultiSelect) {
      const selectedOptLabels = options
        .filter((opt) => Array.from(value).includes(opt.id))
        .map((opt) => opt.label);
      return selectedOptLabels.length > 0
        ? selectedOptLabels.join(', ')
        : placeholder;
    } else {
      return options.find((opt) => opt.id === value)?.label ?? placeholder;
    }
  };

  useEffect(() => {
    setFilteredOptions(
      options.filter(
        (opt) =>
          searchInput.length === 0 ||
          opt.label.toLowerCase().includes(searchInput.trim().toLowerCase()),
      ),
    );
  }, [searchInput, options]);

  return (
    <div className="ebr_form-control">
      <label>{label}</label>
      <div
        className={
          'ebr_dropdown-control ' +
          (Array.from(value).length ? 'value-selected' : '')
        }
        data-expanded={isExpanded}
      >
        <button
          type="button"
          className="ebr_dropdown-title-button"
          aria-expanded={isExpanded}
          onClick={() => setExpanded((prev) => !prev)}
        >
          <span>{getSelectPlaceholder()}</span>
          <ChevronDown
            style={{ transform: `rotate(${isExpanded ? '180deg' : '0deg'})` }}
          />
        </button>
        {isMultiSelect ? (
          <MultiSelect
            filteredOptions={filteredOptions}
            addOptions={addOptions}
            removeOptions={removeOptions}
            removeAllOptions={removeAllOptions}
            dropdownRef={dropdownRef}
            setSearchInput={setSearchInput}
            value={value as Set<string>}
            options={options}
          />
        ) : (
          <Select
            filteredOptions={filteredOptions}
            selectOptionClickHandler={selectOptionClickHandler}
            dropdownRef={dropdownRef}
            setSearchInput={setSearchInput}
            value={value as string}
            options={options}
          />
        )}
        <input
          key={`value${value}`}
          name={name}
          type="text"
          value={isMultiSelect ? Array.from(value) : (value as string)}
          readOnly
          hidden
        />
      </div>
      {error && <p className="ebr_input-error">{error}</p>}
    </div>
  );
}

const Select = ({
  dropdownRef,
  value,
  selectOptionClickHandler,
  setSearchInput,
  options,
  filteredOptions,
}: {
  dropdownRef: RefObject<HTMLDivElement | null>;
  value: string;
  selectOptionClickHandler: (newValue: string | string[]) => void;
  setSearchInput: Dispatch<SetStateAction<string>>;
  options: SelectOption[];
  filteredOptions: SelectOption[];
}) => {
  const { t } = useTranslation();

  return (
    <div ref={dropdownRef} key={value} className="ebr_dropdown-content">
      {options?.length ? (
        <>
          {!!value?.length && (
            <button type="button" onClick={() => selectOptionClickHandler('')}>
              <X className="ebr_dropdown-remove-icon" /> {t('form.delete')}
            </button>
          )}
          <label className="ebr_dropdown-search-field" htmlFor="searchField">
            <input
              name="searchField"
              placeholder={t('form.searchValue')}
              type="text"
              onChange={(e) => setSearchInput(e.currentTarget.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') e.preventDefault();
              }}
            />
            <Search size={14} />
          </label>
          <div className="ebr_dropdown-values">
            {options
              .filter((opt) => opt.id === value)
              .map((opt) => (
                <button
                  key={`dpbtn${opt.id}`}
                  aria-selected={value === opt.id}
                  type="button"
                  onClick={() => selectOptionClickHandler(opt.id)}
                  aria-label={opt.label}
                >
                  {opt.label}
                </button>
              ))}
            {filteredOptions
              .filter((opt) => !opt.hidden && opt.id !== value)
              .map((opt) => (
                <button
                  key={`dpbtn${opt.id}`}
                  aria-selected={value === opt.id}
                  type="button"
                  onClick={() => selectOptionClickHandler(opt.id)}
                  aria-label={opt.label}
                >
                  {opt.label}
                </button>
              ))}
          </div>
        </>
      ) : (
        <>{t('form.noValueAvailable')}</>
      )}
    </div>
  );
};

const MultiSelect = ({
  dropdownRef,
  value,
  addOptions,
  removeOptions,
  removeAllOptions,
  setSearchInput,
  options,
  filteredOptions,
}: {
  dropdownRef: RefObject<HTMLDivElement | null>;
  value: Set<string>;
  addOptions: (...newValue: string[]) => void;
  removeOptions: (...valueToDelete: string[]) => void;
  removeAllOptions: () => void;
  setSearchInput: Dispatch<SetStateAction<string>>;
  options: SelectOption[];
  filteredOptions: SelectOption[];
}) => {
  const { t } = useTranslation();

  return (
    <div
      ref={dropdownRef}
      key={value.toString()}
      className="ebr_dropdown-content"
    >
      {options?.length ? (
        <>
          {!!value.size && (
            <button type="button" onClick={() => removeAllOptions()}>
              <X className="ebr_dropdown-remove-icon" /> {t('form.delete')}
            </button>
          )}
          <label className="ebr_dropdown-search-field" htmlFor="searchField">
            <input
              name="searchField"
              placeholder={t('form.searchValue')}
              type="text"
              onChange={(e) => setSearchInput(e.currentTarget.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') e.preventDefault();
              }}
            />
            <Search size={14} />
          </label>
          <div className="ebr_dropdown-values">
            {options
              .filter((opt) => value.has(opt.id))
              .map((opt) => (
                <button
                  key={`dpbtn${opt.id}`}
                  aria-selected={value.has(opt.id)}
                  type="button"
                  onClick={() => removeOptions(opt.id)}
                  aria-label={opt.label}
                >
                  {opt.label}
                </button>
              ))}
            {filteredOptions
              .filter((opt) => !opt.hidden && !value.has(opt.id))
              .map((opt) => (
                <button
                  key={`dpbtn${opt.id}`}
                  aria-selected={value.has(opt.id)}
                  type="button"
                  onClick={() => addOptions(opt.id)}
                  aria-label={opt.label}
                >
                  {opt.label}
                </button>
              ))}
          </div>
        </>
      ) : (
        <>{t('form.noValueAvailable')}</>
      )}
    </div>
  );
};
