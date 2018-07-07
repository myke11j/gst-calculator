module.exports = {
    commodityMapping: [
        {
            type: 'Food Grains',
            items: ['Rice', 'Wheat', 'Dal'],
            gstSlab: process.env.FoodGrains_SLAB
        },
        {
            type: 'Furniture',
            items: ['Table', 'Sofa', 'Chair'],
            gstSlab: process.env.Cosmetics_SLAB
        },
        {
            type: 'Electronics',
            items: ['Mobile', 'TV', 'Tablet'],
            gstSlab: process.env.Electronics_SLAB
        },
        {
            type: 'Cosmetics',
            items: ['Cream', 'Perfume', 'Lotion'],
            gstSlab: process.env.Cosmetics_SLAB
        }
    ]
};
