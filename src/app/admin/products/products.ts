export class products {
    constructor(
      public id: number,
      public title: string,
      public price: number, // Added the price property
      public description: string,
      public image: string,
      public category: string,
      public rating: object
    ) {}
  }
  