export class ProductListModel {
    constructor(public readonly productId: number,
                public readonly productName: string,
                public readonly productCode: string,
                public readonly releaseDate: string,
                public readonly description: string,
                public readonly price: number,
                public readonly starRating: number,
                public readonly imageUrl: string) {
    }
}
