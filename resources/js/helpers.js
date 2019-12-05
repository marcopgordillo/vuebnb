const amenities = new Map();
amenities.set('amenity_wifi', { title: 'Wireless Internet', icon: 'wifi' });
amenities.set('amenity_pets_allowed', { title: 'Pets Allowed', icon: 'paw' });
amenities.set('amenity_tv', { title: 'TV', icon: 'tv' });
amenities.set('amenity_kitchen', { title: 'Kitchen', icon: 'utensils' });
amenities.set('amenity_breakfast', { title: 'Breakfast', icon: 'coffee' });
amenities.set('amenity_laptop', { title: 'Laptop friendly workspace', icon: 'laptop' });

const prices = new Map();
prices.set('price_per_night', 'Per night');
prices.set('price_extra_people', 'Extra people');
prices.set('price_weekly_discount', 'Weekly discount');
prices.set('price_monthly_discount', 'Monthly discount');

const populateAmenitiesAndPrices = (state) => {
    if (!state) return {};
    var obj = {
        id: state.id,
        title: state.title,
        address: state.address,
        about: state.about,
        amenities: [],
        prices: [],
        images: []
    };
    for (let key in state) {
        let arr = key.split("_");
        if (arr[0] === 'amenity' && state[key]) {
            obj.amenities.push(key);
        }
        if (arr[0] === 'price') {
            obj.prices.push({ title: key, value: state[key]});
        }
        if(arr[0] === 'image') {
            obj.images.push(state[key]);
        }
    }

    obj.amenities = obj.amenities.map(item => amenities.get(item) );

    obj.prices = obj.prices.map(item => {
        item.title = prices.get(item.title);
        return item;
    });

    return obj;
};

export { populateAmenitiesAndPrices };

const groupByCountry = function (listings) {
    if (!listings) return {};
    return listings.reduce(function (rv, x) {
        let key = ['Taiwan', 'Poland', 'Cuba'].find(country => x.address.indexOf(country) > -1);
        if (!rv[key]) {
            rv[key] = [];
        }
        rv[key].push(x);
        return rv;
    }, {});
};

export { groupByCountry };
