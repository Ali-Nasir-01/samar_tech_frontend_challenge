import { defineStore } from "pinia";
import type { IProduct } from "~/types/apis";

export const useProductsStore = defineStore("products", {
    state: () => {
        return {
            products: null as null | IProduct[]
        };
    },

    actions: {
        fillProducts(data: IProduct[] | null) {
            this.products = data;
        },
    },
});
