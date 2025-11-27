import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X, Check } from "lucide-react";

interface FilterAutocompleteProps {
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  title: string;
}

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0) + string.slice(1);
};

export const FilterAutocomplete = ({
  options,
  value,
  onChange,
  placeholder = "",
  title,
}: FilterAutocompleteProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const filteredOptions = useMemo(() => {
    if (!searchTerm) return options;
    return options.filter((option) =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [options, searchTerm]);

  const toggleOption = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter((item) => item !== option));
    } else {
      onChange([...value, option]);
    }
  };

  const removeValue = (option: string) => {
    onChange(value.filter((item) => item !== option));
  };

  return (
    <div className="relative w-full">
      <div className="mb-0">
        <h4 className="mt-0 mb-1 text-sm font-semibold text-gray-900 tracking-wide">
          {title}
        </h4>
      </div>

      {/* Input field */}
      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        className="mb-0 border-gray-300 focus-visible:ring-mirai shadow-none"
      />

      {/* Selected values as badges */}
      {value.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {value.map((val) => (
            <Badge
              key={val}
              variant="secondary"
              className="bg-mirai/10 text-mirai hover:bg-mirai/20 cursor-pointer"
              onClick={() => removeValue(val)}
            >
              {capitalizeFirstLetter(val)}
              <X className="ml-1 h-3 w-3" />
            </Badge>
          ))}
        </div>
      )}

      {/* Dropdown list */}
      {isFocused && filteredOptions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-none max-h-64 overflow-y-auto">
          <div className="py-1">
            {filteredOptions.map((option) => {
              const isSelected = value.includes(option);
              return (
                <div
                  key={option}
                  className="px-3 py-1 cursor-pointer hover:bg-mirai/10 flex items-center justify-between transition-colors"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    toggleOption(option);
                  }}
                >
                  <span className={isSelected ? "font-medium text-mirai text-sm" : "text-gray-700 text-sm"}>
                    {capitalizeFirstLetter(option)}
                  </span>
                  {isSelected && <Check className="h-4 w-4 text-mirai" />}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* No results message */}
      {isFocused && searchTerm && filteredOptions.length === 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-none p-3 text-center text-gray-500 text-sm">
          No se encontraron resultados
        </div>
      )}
    </div>
  );
};

