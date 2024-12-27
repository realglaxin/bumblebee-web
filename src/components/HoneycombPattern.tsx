export function HoneycombPattern() {
  return (
    <div className="absolute inset-0 opacity-10">
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="100"
      >
        <defs>
          <pattern
            id="honeycomb"
            width="56"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#honeycomb)" />
      </svg>
    </div>
  );
}
