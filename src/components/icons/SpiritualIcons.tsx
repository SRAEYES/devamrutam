import type { SVGProps } from "react";

export type SpiritualIconName =
  | "diya"
  | "lotus"
  | "mala"
  | "book"
  | "scroll"
  | "flower"
  | "conch"
  | "people"
  | "gift"
  | "leaf";

interface SpiritualIconProps extends SVGProps<SVGSVGElement> {
  name: SpiritualIconName;
  size?: number;
}

export default function SpiritualIcon({
  name,
  size = 28,
  className = "",
  ...props
}: SpiritualIconProps) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.55,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...common}
      {...props}
    >
      {name === "diya" && (
        <>
          <path d="M24 7 C18 14 20 19 24 21 C28 18 30 13 24 7Z" />
          <path d="M24 20 C16 26 9 28 8 31 C12 38 36 38 40 31 C39 28 32 26 24 20Z" />
          <path d="M13 33 C18 36 30 36 35 33" />
          <path d="M24 38 V42" />
          <path d="M17 42 H31" />
        </>
      )}

      {name === "lotus" && (
        <>
          <path d="M24 38 C16 31 8 28 8 19 C17 19 22 26 24 32 C26 26 31 19 40 19 C40 28 32 31 24 38Z" />
          <path d="M24 34 C18 26 18 17 24 9 C30 17 30 26 24 34Z" />
          <path d="M8 39 C17 43 31 43 40 39" />
        </>
      )}

      {name === "mala" && (
        <>
          <path d="M24 7 C14 7 8 15 8 24 C8 34 15 41 24 41 C33 41 40 34 40 24 C40 15 34 7 24 7Z" />
          <circle cx="24" cy="7" r="2.5" />
          <circle cx="34" cy="11" r="2" />
          <circle cx="40" cy="21" r="2" />
          <circle cx="37" cy="33" r="2" />
          <circle cx="27" cy="41" r="2" />
          <circle cx="14" cy="37" r="2" />
          <circle cx="8" cy="25" r="2" />
          <circle cx="14" cy="12" r="2" />
        </>
      )}

      {name === "book" && (
        <>
          <path d="M24 14 C18 9 11 10 6 12 V36 C12 34 19 34 24 39 C29 34 36 34 42 36 V12 C37 10 30 9 24 14Z" />
          <path d="M24 14 V39" />
          <path d="M11 18 C15 17 19 18 21 20" />
          <path d="M27 20 C30 18 34 17 38 18" />
          <path d="M11 25 C15 24 19 25 21 27" />
          <path d="M27 27 C30 25 34 24 38 25" />
        </>
      )}

      {name === "scroll" && (
        <>
          <path d="M13 9 H34 C39 9 40 16 35 18 H13 C8 18 8 9 13 9Z" />
          <path d="M13 18 V36 C13 40 18 41 21 38 H35 V18" />
          <path d="M19 25 H30" />
          <path d="M19 30 H30" />
          <path d="M19 35 H27" />
        </>
      )}

      {name === "flower" && (
        <>
          <path d="M24 22 C16 14 19 7 24 7 C29 7 32 14 24 22Z" />
          <path d="M24 22 C28 11 36 12 38 17 C40 22 33 27 24 22Z" />
          <path d="M24 22 C35 23 37 31 33 35 C29 39 22 32 24 22Z" />
          <path d="M24 22 C20 33 12 34 9 29 C6 24 14 18 24 22Z" />
          <path d="M24 22 C14 17 14 9 19 7 C24 5 29 14 24 22Z" />
          <circle cx="24" cy="22" r="3" />
          <path d="M24 37 V43" />
        </>
      )}

      {name === "conch" && (
        <>
          <path d="M10 28 C9 18 18 10 28 10 C36 10 41 17 39 25 C37 34 28 39 18 37 C13 36 10 33 10 28Z" />
          <path d="M17 29 C18 22 24 17 31 19 C36 20 36 27 32 30 C29 33 24 32 23 28 C22 25 25 23 28 24" />
          <path d="M10 28 L5 31 L11 35" />
          <path d="M18 37 L15 42" />
        </>
      )}

      {name === "people" && (
        <>
          <circle cx="24" cy="14" r="6" />
          <circle cx="10" cy="20" r="4" />
          <circle cx="38" cy="20" r="4" />
          <path d="M11 39 C11 30 16 25 24 25 C32 25 37 30 37 39" />
          <path d="M3 38 C3 32 6 28 12 28" />
          <path d="M45 38 C45 32 42 28 36 28" />
        </>
      )}

      {name === "gift" && (
        <>
          <path d="M7 20 H41 V41 H7Z" />
          <path d="M5 15 H43 V22 H5Z" />
          <path d="M24 15 V41" />
          <path d="M24 15 C12 15 11 6 17 6 C22 6 24 15 24 15Z" />
          <path d="M24 15 C36 15 37 6 31 6 C26 6 24 15 24 15Z" />
        </>
      )}

      {name === "leaf" && (
        <>
          <path d="M40 7 C18 7 7 17 9 31 C11 40 23 43 32 34 C39 27 40 17 40 7Z" />
          <path d="M10 39 C17 29 25 21 37 11" />
          <path d="M20 29 L18 20" />
          <path d="M27 22 L36 23" />
        </>
      )}
    </svg>
  );
}
