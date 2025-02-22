import { lazy } from "react";

/** Pages that doesn't need authentication */
const publicPages = import.meta.glob("./pages/public/**/*.tsx");

/**
 * Create route path with the page as Component.
 * The route will be the path to a index.tsx file, or with last path the filename if it's not index
 *
 * Warning : page component must be default import of the page file, or else it wont work
 * @param pages Pages of routes
 * @param rootPath Root path of pages to replace with empty string
 * @returns Formatted routes
 */
function filterRoutes(pages: Record<string, () => Promise<unknown>>, rootPath: string) {
  return Object.entries(pages)
  .map(([path, component]) => {
    if (!path)
      throw new Error("No path supplied for page component.");

    const formattedPath = path
      .replace(rootPath, "")
      .replace(/\/index\.tsx$/, "")
      .replace(/\.tsx$/, "");    

    return {
      path: formattedPath,
      Component: lazy(component as any),
    };
  });
}

/** Routes that doesn't need authentication */
export const PUBLIC_ROUTES = filterRoutes(publicPages, "./pages/public");