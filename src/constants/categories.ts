interface ProductCategory {
  id: string;
  label: string;
  anchor: string;
  navPath: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "all",
    label: "Semua Produk",
    anchor: "produk-top",
    navPath: "/produk#produk-top"
  },
  {
    id: "bubble-wrap-bening",
    label: "Bubble Wrap Bening",
    anchor: "bubble-wrap-bening",
    navPath: "/produk#bubble-wrap-bening"
  },
  {
    id: "bubble-wrap-hitam",
    label: "Bubble Wrap Hitam",
    anchor: "bubble-wrap-hitam",
    navPath: "/produk#bubble-wrap-hitam"
  },
  {
    id: "grade-bubble-wrap",
    label: "Grade Bubble Wrap",
    anchor: "grade-bubble-wrap",
    navPath: "/produk#grade-bubble-wrap"
  },
  {
    id: "coming-soon",
    label: "Coming Soon",
    anchor: "coming-soon",
    navPath: "/produk#coming-soon"
  }
]; 