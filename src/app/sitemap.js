export default function sitemap() {
    const baseUrl = 'https://mukarram.dev'; // User should update with actual domain

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}
