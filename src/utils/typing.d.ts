interface MenuItem {
    label: string;
    path: string;
}

interface ModelFeature {
    name: string;
    description: string;
    image: string;
}

interface ModelHighlight {
    title: string;
    content: string;
    image: string;
}

interface Model {
    id: number;
    name: string;
    segment: string;
    year: number;
    price: number;
    thumbnail: string;
    photo: string;
    title?: string;
    description?: htmlString;
    model_features?: ModelFeature[];
    model_highlights?: ModelHighlight[];
}

interface SelectedFilters {
    filter: string;
    sorting: SortKey;
}
type SortKey = "none" | "price-asc" | "price-desc" | "year-asc" | "year-desc";