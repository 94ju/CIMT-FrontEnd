import { Atributes } from './attributes.model';
import { spotPrice } from './spotPrice.model';

export class Product {
    attributes:Atributes
    catergory: string;
    cpus: string;
    onDemandPrice:string;
    memPerVm:string;
    spotPrice:spotPrice
}