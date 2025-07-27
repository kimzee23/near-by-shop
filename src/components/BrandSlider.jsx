export default function BrandSlider() {
    const brands = [
        { name: 'Versace', logo: '/brands/zara.png' },
        { name: 'Zara', logo: '/brands/zara.png' },
        { name: 'Gucci', logo: '/brands/gucci.png' },
        { name: 'Prada', logo: '/brands/prada.png' },
        { name: 'Calvin Klein', logo: '/brands/ck.png' },
    ];

    return (
        <div className="bg-gray-50 py-6 border-t border-b">
            <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
                <div className="flex gap-10 items-center justify-between">
                    {brands.map((brand, i) => (
                        <img
                            key={i}
                            src={brand.logo}
                            alt={brand.name}
                            className="h-12 grayscale hover:grayscale-0 transition"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
