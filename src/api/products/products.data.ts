import {environment} from '../../environments/environment';

export const products: ReadonlyArray<any> = [
    {
        "id": 1,
        "name": "Leaf Rake",
        "code": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": `${environment.baseUrl}/assets/images/Leaf_Rake.png`
    },
    {
        "id": 2,
        "name": "Garden Cart",
        "code": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": `${environment.baseUrl}/assets/images/Garden_Cart.png`
    },
    {
        "id": 5,
        "name": "Hammer",
        "code": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": `${environment.baseUrl}/assets/images/Hammer.png`
    },
    {
        "id": 8,
        "name": "Saw",
        "code": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": `${environment.baseUrl}/assets/images/Saw.png`
    },
    {
        "id": 10,
        "name": "Video Game Controller",
        "code": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": `${environment.baseUrl}/assets/images/Video_Game_Controller.png`
    }
];
