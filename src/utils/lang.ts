export function getUserLanguage(): string {
    if (typeof window !== "undefined") {
        return localStorage.getItem("lang") || navigator.language.startsWith("fr") ? "fr" : "en";
    }
    return "en"; // Default language
}
