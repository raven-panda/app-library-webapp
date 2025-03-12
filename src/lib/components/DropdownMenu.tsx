import { ReactNode, useRef, useState } from "react";
import { ChevronDown } from "react-feather";

export default function DropdownMenu({ title, children, isDefaultExpanded = false }: { title: string; children: ReactNode; isDefaultExpanded?: boolean; }) {
  const [isExpanded, setExpanded] = useState(isDefaultExpanded);
  const dropdownRef = useRef<HTMLDivElement|null>(null);

  return <div className="ebr_dropdown-menu" data-expanded={isExpanded}>
    <button type="button" className="ebr_dropdown-title-button" aria-expanded={isExpanded} onClick={() => setExpanded(prev => !prev)}>
      <span>{title}</span>
      <ChevronDown style={{ transform: `rotate(${isExpanded ? "180deg" : "0deg"})` }} />
    </button>
    <div ref={dropdownRef} className="ebr_dropdown-content">
      {children}
    </div>
  </div>;
}