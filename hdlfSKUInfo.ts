import Brand from "./classBrand";

export class Espadin extends Brand {
    private skuName: string;
    private skuSizeCL: number;

    constructor(brandName: string,  origin:  string,  type:  string, skuNamme: string, skuSizeCL: number){
        super(brandName, origin, type);
        this.skuName = skuNamme;
        this.skuSizeCL = skuSizeCL;

    }

    public showEspadinDetails(): void {
        this.showBrandDetails();
        console.log(`sku: ${this.skuName} CL: ${this.skuSizeCL}`)
    }
}

export class Tobala extends Brand {
    private skuName: string;
    private skuSizeCL: number;

    constructor(brandName: string,  origin:  string,  type:  string, skuNamme: string, skuSizeCL: number){
        super(brandName, origin, type);
        this.skuName = skuNamme;
        this.skuSizeCL = skuSizeCL;

    }

    public showTobalaDetails(): void {


        
        this.showBrandDetails();
        console.log(`sku: ${this.skuName} CL: ${this.skuSizeCL}`)
    }

}