# approach

use react query for data fetching, caching and pagination (or infinite scroll) scroll-based fetching

use context api and use reducer for managing local state:
https://medium.com/remedy-product-studio/building-a-global-github-profile-search-app-with-react-tailwind-css-daisy-ui-and-axios-e854158bb7b2

use zustand (optionally?)

use context api for light/dark theme

useInfiniteQuery for infinite scrolling

## new approach

Use the hook for all data, loading, and error state.
Use the infinite scroll logic to call fetchNextPage.
Flatten the paginated data for rendering.
No need for manual fetch or debounce logic, React Query handles caching and deduplication.


how does react query manage store
