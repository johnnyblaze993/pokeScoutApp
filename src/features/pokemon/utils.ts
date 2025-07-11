export const extractIdFromUrl = (url: string) => {
	const parts = url.split("/").filter(Boolean);
	return parts[parts.length - 1]; // The last part is the ID
};
