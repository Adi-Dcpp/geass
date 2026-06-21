export const DEFAULT_IGNORES = [
    // Version control
    ".git",

    // Dependencies
    "node_modules",
    "vendor",

    // Build outputs
    "dist",
    "build",
    "out",
    "target",

    // Coverage & reports
    "coverage",
    ".nyc_output",

    // Framework caches
    ".next",
    ".nuxt",
    ".svelte-kit",
    ".angular",
    ".astro",

    // Generic caches
    ".cache",
    ".turbo",
    ".parcel-cache",

    // Package manager stores
    ".pnpm-store",

    // IDEs
    ".vscode",
    ".idea",

    // Python
    "__pycache__",

    // Temporary files
    "tmp",
    "temp"
] as const;