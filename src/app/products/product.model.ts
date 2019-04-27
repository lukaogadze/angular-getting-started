export class ProductModel {
    constructor(public readonly id: number,
                public readonly name: string,
                public readonly code: string,
                public readonly releaseDate: string,
                public readonly description: string,
                public readonly price: number,
                public readonly starRating: number,
                public readonly imageUrl: string) {
    }
}
