export default class Brand  {
    brandName: string;
    origin: string;
    type: string;

    constructor(brandName: string,  origin:  string,  type:  string){
        this.brandName = brandName;
        this.origin = origin;
        this.type = type;
    }

    public showBrandDetails(): void {
        console.log(`${this.brandName} ${this.origin} ${this.type}`)
}

}