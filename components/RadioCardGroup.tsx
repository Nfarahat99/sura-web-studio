"use client";

import { useState } from "react";

export type RadioOption = {
  value: string;
  label: string;
  hint?: string;
};

type Props = {
  name: string;
  options: RadioOption[];
  defaultValue?: string;
  required?: boolean;
  ariaLabel?: string;
};

/**
 * Selectable card group used in the contact form to replace the native
 * <select> for tier-of-interest. Keyboard-accessible via native inputs;
 * single visible label per card.
 */
export default function RadioCardGroup({
  name,
  options,
  defaultValue,
  required,
  ariaLabel,
}: Props) {
  const [value, setValue] = useState<string>(defaultValue ?? "");

  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className="grid grid-cols-2 gap-2.5 md:grid-cols-3"
    >
      {options.map((opt) => {
        const selected = value === opt.value;
        return (
          <label
            key={opt.value}
            className={`cursor-pointer rounded-xl border p-3.5 text-sm transition-colors duration-150 ${
              selected
                ? "border-green bg-green/5"
                : "border-ash bg-white hover:border-green/40"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              required={required}
              checked={selected}
              onChange={() => setValue(opt.value)}
              className="sr-only"
            />
            <span className="block font-medium text-navy">{opt.label}</span>
            {opt.hint && (
              <span className="mt-1 block text-xs text-navy/65">
                {opt.hint}
              </span>
            )}
          </label>
        );
      })}
    </div>
  );
}
