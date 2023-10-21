import { writable } from 'svelte/store';

export const nav = writable({
	currentPage: 'home',
	nextAnchor: 'about'
});