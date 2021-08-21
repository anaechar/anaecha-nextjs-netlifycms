export function getCategoryFieldByInput(field, categories, input) {
    return categories[categories.map((category) => category[field]).indexOf(input)];
};

