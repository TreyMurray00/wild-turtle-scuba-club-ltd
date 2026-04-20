import { useQuery } from '@tanstack/react-query';
import { sanityClient } from '../lib/sanity';

/**
 * A custom hook to fetch data from Sanity CMS using TanStack Query.
 * 
 * @param queryKey The unique key for the TanStack query
 * @param query The GROQ query string
 * @param params Optional parameters to pass to the GROQ query
 * @param options Additional TanStack query options
 */
export function useSanityQuery<T = any>(
  queryKey: string[],
  query: string,
  params: Record<string, any> = {},
  options: Record<string, any> = {}
) {
  return useQuery({
    queryKey,
    gcTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
    queryFn: async () => {
      const result = await sanityClient.fetch<T>(query, params);
      return result;
    },
    ...options,
  });
}
