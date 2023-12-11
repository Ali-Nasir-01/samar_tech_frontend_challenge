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

    const getCategories: ComputedRef<string> = computed(() => <string>route.query?.category || '');

    const updateCategoryFilter = (category: string[]) => {
        interface IValue {
            [category: string]: string | undefined
        }

        let value: IValue = {
            category: undefined
        };
        if (category.length > 0) {
            value.category = category[0];   
        }

        updateQuery(value);
    }

    return {
        getCategories,
        updateCategoryFilter
    }
}