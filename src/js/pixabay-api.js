const API_KEY = '43248873-3ce9b820c5f26b6ef0afaa018';

export function fetchImages(searchQuery) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: searchQuery,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true"
    });

    const url = `https://pixabay.com/api/?${params}`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.hits.length === 0) {
                throw new Error('Sorry, there are no images matching your search query. Please try again!');
            }
            return data.hits;
        });
}
