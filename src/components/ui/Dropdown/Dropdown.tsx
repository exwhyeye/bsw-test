import React, { useState, useRef, useEffect } from "react";

import * as styles from "./Dropdown.module.scss";

import ChevronDownIcon from "@/components/icons/ChevronDownIcon/ChevronDownIcon";

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption =
    options.find((option) => option.value === value) || null;

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (option: DropdownOption) => {
    onChange(option.value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${styles["dropdown"]} ${isOpen ? styles["dropdown--open"] : ""} ${disabled ? styles["dropdown--disabled"] : ""}`}
      ref={dropdownRef}
    >
      <div className={styles["dropdown__header"]} onClick={handleToggle}>
        <span className={styles["dropdown__selected"]}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDownIcon className={styles["dropdown__chevron"]} />
      </div>

      {isOpen && (
        <div className={styles["dropdown__list"]}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles["dropdown__item"]} ${value === option.value ? styles["dropdown__item--selected"] : ""}`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
