function queryCity(cityName) {
    return '\
{\
    "query": "query {\
        queryCity(filter: { name: { eq: \\"' + cityName + '\\" } }) {\
            id\
            name\
            lat\
            lng\
        } \
    }",\
    "variables": null\
}';
}

function queryAdvisory(cityName) {
    return '\
{\
    "query":"query {\
        queryCity(filter: { name: { eq: \\"' + cityName + '\\" } }) {\
            advisory {\
                id\
                continent\
                country\
                country_code\
                last_updated\
                message\
                score\
                source\
            }\
        }\
    }",\
    "variables":null\
}';
}

function queryWeather(cityName) {
    return '\
{\
    "query":"query {\
        queryCity(filter: { name: { eq: \\"' + cityName + '\\" } }) {\
            weather {\
                id\
                city_name\
                description\
                feels_like\
                humidity\
                pressure\
                sunrise\
                sunset\
                temp\
                temp_min\
                temp_max\
                visibility\
                wind_direction\
                wind_speed\
            }\
        }\
    }",\
    "variables":null\
}';
}

function queryPlaceByCategory(cityName, category) {
    return '\
{\
     "query": "query {\
        queryCity(filter: { name: { eq: \\"' + cityName + '\\" } }) {\
            places(filter: {category: {eq: \\"' + category + '\\" } }) {\
                id\
                address\
                avg_user_rating\
                category\
                city{\
                    id\
                }\
                city_name\
                gmaps_url\
                lat\
                lng\
                location_type\
                name\
                no_user_rating\
                place_id\
                photo_id\
            }\
        }\
    }",\
    "variables": null\
} ';
}

function queryPlaceByName(placeName) {
    return '\
{\
     "query": "query {\
        queryPlace(filter: { name: { eq: \\"' + placeName + '\\" } }) {\
            id\
            address\
            avg_user_rating\
            category\
            city{\
                id\
            }\
            city_name\
            gmaps_url\
            lat\
            lng\
            location_type\
            name\
            no_user_rating\
            place_id\
            photo_id\
        }\
    }",\
    "variables": null\
} ';
}
