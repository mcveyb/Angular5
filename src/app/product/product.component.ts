import {Component, Input} from '@angular/core';
import { ProductService } from '../service/product.service';


@Component({
    selector: 'product',
    templateUrl:'product.component.html' ,
    styles: [`
        .media {
            margin-bottom: 20px;
        }                       
    `],
    providers: [ProductService]     
})
export class ProductComponent {
    @Input() data;  

    constructor(productService: ProductService){
        this.data = productService.getProducts();
    }
}

//<product [data]="product"></product>  