export default function MetricIcon({ type }) {
  const svgStyle = {
    width: 28,
    height: 28,
  };

  switch (type) {
    case "tech-debt":
      return (
        <svg viewBox="0 0 24 24" fill="none" style={svgStyle}>
          <path
            d="M19 7L13 13L10 10L5 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 13V7H13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "build-time":
      return (
        <svg viewBox="0 0 24 24" fill="none" style={svgStyle}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 8V12L15 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 3L6 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16 3L18 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "code-issues":
      return (
        <svg viewBox="0 0 24 24" fill="none" style={svgStyle}>
          <path
            d="M12 3L19 6V11C19 15.5 16.1 19.4 12 20.7C7.9 19.4 5 15.5 5 11V6L12 3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 11.5L11 13L14.5 9.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "projects":
      return (
        <svg viewBox="0 0 24 24" fill="none" style={svgStyle}>
          <path
            d="M12 4L18 7L12 10L6 7L12 4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M6 12L12 15L18 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M6 17L12 20L18 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "team":
      return (
        <svg viewBox="0 0 24 24" fill="none" style={svgStyle}>
          <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
          <circle
            cx="17"
            cy="9"
            r="2.5"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M3.5 19C4.3 15.8 6.2 14 9 14C11.8 14 13.7 15.8 14.5 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M14.5 15C16.8 15.2 18.5 16.5 19.5 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "banking":
      return (
        <svg viewBox="0 0 24 24" fill="none" style={svgStyle}>
          <path
            d="M4 10H20L12 5L4 10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M6 10V18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M10 10V18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M14 10V18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M18 10V18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 19H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    default:
      return null;
  }
}
