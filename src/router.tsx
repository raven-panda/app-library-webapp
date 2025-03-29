import { lazy, ReactNode } from 'react';
import BrowseLayout from '@/lib/layout/BrowseLayout.tsx';
import { useParams } from 'react-router-dom';

/** Pages that doesn't need authentication */
const publicPages = import.meta.glob('./pages/public/**/*.tsx');

/**
 * Create route path with the page as Component.
 * The route will be the path to a index.tsx file, or with last path the filename if it's not index
 *
 * Warning : page component must be default import of the page file, or else it wont work
 * @param pages Pages of routes
 * @param rootPath Root path of pages to replace with empty string
 * @returns Formatted routes
 */
function filterRoutes(
  pages: Record<string, () => Promise<unknown>>,
  rootPath: string,
) {
  return Object.entries(pages)
    .filter(
      ([path]) => !path.split('/')[path.split('/').length - 1].startsWith('_'),
    )
    .map(([path, component]) => {
      if (!path) throw new Error('No path supplied for page component.');

      const formattedPath = path
        .replace(rootPath, '')
        .replace(/\/index\.tsx$/, '')
        .replace(/\.tsx$/, '')
        .replace(/\[([^\]]+)]/g, ':$1');

      const LazyComponent = lazy(async () => {
        const module: any = await component();
        return { default: module.default };
      });

      const WrapperComponent = (props: any) => {
        const params = useParams();
        return <LazyComponent {...props} {...params} />;
      };

      return {
        path: formattedPath,
        Component: WrapperComponent,
        Layout: lazy(async () => {
          const module: any = await component();
          const LayoutComponent = module.default?.Layout || BrowseLayout;
          return {
            default: (props: { children: ReactNode }) => (
              <LayoutComponent {...props} />
            ),
          };
        }),
      };
    });
}

/** Routes that doesn't need authentication */
export const PUBLIC_ROUTES = filterRoutes(publicPages, './pages/public');
