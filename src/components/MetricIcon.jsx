export default function MetricIcon({ type, index = 0 }) {
  const normalizedType = String(type || "").toLowerCase();

  const iconType =
    normalizedType.includes("app") || normalizedType.includes("layer")
      ? "apps"
      : normalizedType.includes("team") || normalizedType.includes("user")
        ? "team"
        : normalizedType.includes("debt") || normalizedType.includes("down")
          ? "debt"
          : normalizedType.includes("build") ||
              normalizedType.includes("time") ||
              normalizedType.includes("speed")
            ? "build"
            : normalizedType.includes("issue") ||
                normalizedType.includes("quality") ||
                normalizedType.includes("shield")
              ? "quality"
              : normalizedType.includes("bank")
                ? "bank"
                : ["apps", "team", "debt", "build", "quality", "bank"][index] ||
                  "apps";

  const commonProps = {
    width: 30,
    height: 30,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: "block",
    },
  };

  switch (iconType) {
    case "apps":
      return (
        <svg {...commonProps}>
          <path d="M12 3.75 5 7.5 12 11.25 19 7.5 12 3.75Z" />
          <path d="M6.25 11.4 12 14.55l5.75-3.15" />
          <path d="M6.25 15.45 12 18.6l5.75-3.15" />
        </svg>
      );

    case "team":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="8" r="2.75" />
          <path d="M7.6 19v-.55c0-2.75 1.97-4.95 4.4-4.95s4.4 2.2 4.4 4.95V19" />

          <circle cx="6.1" cy="9.5" r="1.85" />
          <path d="M3.65 18.2c0-1.95 1.12-3.43 2.85-3.85" />

          <circle cx="17.9" cy="9.5" r="1.85" />
          <path d="M20.35 18.2c0-1.95-1.12-3.43-2.85-3.85" />
        </svg>
      );

    case "debt":
      return (
        <svg {...commonProps}>
          <path d="M5 7.5 8.25 10.75 12 7 18.25 13.25" />
          <path d="M14.75 13.25h3.5v-3.5" />
        </svg>
      );

    case "build":
      return (
        <svg {...commonProps}>
          <path d="M10 2.75h4" />
          <path d="M12 2.75v2" />
          <path d="M18.2 6.2 19.75 4.65" />

          <circle cx="12" cy="13" r="6.95" />
          <path d="M12 13 15.45 9.6" />

          <path d="M5.05 10.2H2.85" />
          <path d="M4.55 13H2.15" />
          <path d="M5.05 15.8H2.85" />
        </svg>
      );

    case "quality":
      return (
        <svg {...commonProps}>
          <path d="M12 3.5 18 5.95v5c0 3.95-2.45 7.3-6 8.8-3.55-1.5-6-4.85-6-8.8v-5L12 3.5Z" />
          <path d="m9.2 12.15 1.85 1.9 3.8-4.05" />
        </svg>
      );

    case "bank":
      return (
        <svg {...commonProps}>
          <path d="M4 9h16" />
          <path d="M5 9 12 4.5 19 9" />
          <path d="M6.5 10.5v5.25" />
          <path d="M10 10.5v5.25" />
          <path d="M14 10.5v5.25" />
          <path d="M17.5 10.5v5.25" />
          <path d="M5.25 17.5h13.5" />
          <path d="M4.25 19.5h15.5" />
        </svg>
      );

    default:
      return (
        <svg {...commonProps}>
          <path d="M12 3.75 5 7.5 12 11.25 19 7.5 12 3.75Z" />
          <path d="M6.25 11.4 12 14.55l5.75-3.15" />
          <path d="M6.25 15.45 12 18.6l5.75-3.15" />
        </svg>
      );
  }
}
