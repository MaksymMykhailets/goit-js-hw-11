import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchImages } from "./js/pixabay-api";
import { gallery, renderImages } from "./js/render-function";

const searchForm = document.querySelector('.search-form');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const searchInput = document.querySelector('.search-input');
    const searchQuery = searchInput.value.trim();

    if (!searchQuery) {
        showErrorToast('Search query cannot be empty');
        return;
    }

    loader.style.display = 'block';
    gallery.innerHTML = '';

    fetchImages(searchQuery)
        .then(handleFetchSuccess)
        .catch(handleFetchError);
    
    searchInput.value = '';
}

function showErrorToast(message) {
    iziToast.error({
        title: 'Error',
        message: message,
    });
}

function showSuccessToast(message) {
    iziToast.success({
        title: 'Success',
        message: message,
    });
}

function handleFetchSuccess(images) {
    loader.style.display = 'none';
    renderImages(images);
    showSuccessToast('Images loaded successfully');
}

function handleFetchError(error) {
    loader.style.display = 'none';
    showErrorToast(error.message);
}
