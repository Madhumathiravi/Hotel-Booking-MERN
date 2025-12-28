import { useState } from "react";

export default function HoverDropdown({ trigger, children, align = "right" }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {trigger}

      {open && (
        <div
          className={`absolute mt-2 ${
            align === "right" ? "right-0" : "left-0"
          } bg-white border shadow-lg rounded-md z-50`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
