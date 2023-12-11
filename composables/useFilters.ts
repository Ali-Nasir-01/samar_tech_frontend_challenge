export default function useFilters() {
    const route = useRoute();
    const router = useRouter();

    // To delete Item from query set it undefined
    const updateQuery = (value: Record<string, undefined | string>) => {
        let query = {
            ...route.query,
            ...value
        };
        router.replace({
            query
        })
    }

    const getCategories: ComputedRef<string[]> = computed(() => {
        if (route.query?.category) {
            return (<string>route.query.category).split(',');
        }
        return []
    });

    const getSort: ComputedRef<string> = computed(() => <string>route.query?.sort || "asc");

    const getSearch: ComputedRef<string[]> = computed(() => {
        if (route.query.search) {
            return (<string>route.query.search).split(',')
        }
        return [];
    });

    const updateCategoryFilter = (category: string[]) => {
        interface IValue {
            [category: string]: string | undefined
        }

        let value: IValue = {
            category: undefined
        };
        if (category.length > 0) {
            value.category = category.join(',');   
        }

        updateQuery(value);
    }

    const updateSortFilter = (sort: string) => {
        interface IValue {
            [sort: string]: undefined | string
        }

        let value: IValue = {
            sort: undefined
        }

        if (sort !== 'asc') {
            value.sort = sort;
        }

        updateQuery(value);
    }

    const updateSearchFilter = (words: string | string[], push = true) => {
        interface IValue {
            [search: string]: string | undefined
        }

        let value:IValue = {
            search: undefined
        }
        
        let searching = [];
        if (push) {
            searching = [<string>words, ...getSearch.value];
        } else {
            searching = <string[]>words;
        }
        searching = uniqItems(searching);
        if (searching.length > 0) {
            value.search = searching.join(",");
        }

        updateQuery(value);
    }

    return {
        getCategories,
        getSort,
        getSearch,
        updateCategoryFilter,
        updateSortFilter,
        updateSearchFilter
    }
}