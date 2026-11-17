type P = { size?: number };

const base = (size = 22) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const Mic = ({ size }: P) => (
  <svg {...base(size)}><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>
);
export const Share = ({ size }: P) => (
  <svg {...base(size)}><circle cx="18" cy="5" r="2.5" /><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="19" r="2.5" /><path d="m8.2 10.8 7.6-4.4M8.2 13.2l7.6 4.4" /></svg>
);
export const Pen = ({ size }: P) => (
  <svg {...base(size)}><path d="M4 20h4L19 9l-4-4L4 16v4zM13.5 6.5l4 4" /></svg>
);
export const Widget = ({ size }: P) => (
  <svg {...base(size)}><rect x="3" y="3" width="8" height="8" rx="2.5" /><rect x="13" y="3" width="8" height="8" rx="2.5" /><rect x="3" y="13" width="18" height="8" rx="2.5" /></svg>
);
export const Tile = ({ size }: P) => (
  <svg {...base(size)}><path d="M4 7h16M4 12h10M4 17h6" /><circle cx="18" cy="16" r="3" /></svg>
);
export const Camera = ({ size }: P) => (
  <svg {...base(size)}><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></svg>
);
export const Clip = ({ size }: P) => (
  <svg {...base(size)}><rect x="6" y="4" width="12" height="17" rx="2.5" /><path d="M9 4h6v3H9zM9 12h6M9 16h4" /></svg>
);
export const Check = ({ size = 18 }: P) => (
  <svg {...base(size)}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
);
export const Arrow = ({ size = 18 }: P) => (
  <svg {...base(size)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Download = ({ size = 20 }: P) => (
  <svg {...base(size)}><path d="M12 4v11M7 10l5 5 5-5M5 20h14" /></svg>
);
export const Bug = ({ size = 20 }: P) => (
  <svg {...base(size)}><rect x="7" y="8" width="10" height="12" rx="5" /><path d="M9 8a3 3 0 0 1 6 0M3 13h4M17 13h4M4 7l3 2M20 7l-3 2M4 19l3-2M20 19l-3-2M12 12v8" /></svg>
);
export const Send = ({ size = 24 }: P) => (
  <svg {...base(size)}><path d="M5 12h13M12 5l7 7-7 7" /></svg>
);
export const Bell = ({ size = 14 }: P) => (
  <svg {...base(size)}><path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15zM10 20.5h4" /></svg>
);
export const Circle = ({ size = 14 }: P) => (
  <svg {...base(size)}><circle cx="12" cy="12" r="8" /></svg>
);
export const Mail = ({ size = 20 }: P) => (
  <svg {...base(size)}><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></svg>
);
export const Lock = ({ size = 20 }: P) => (
  <svg {...base(size)}><rect x="5" y="10" width="14" height="10" rx="3" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>
);
