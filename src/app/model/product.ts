export class Product {
    name:string="Samsung OLED TV";
    Price:number=100000;
    image:string="https://img.global.news.samsung.com/in/wp-content/uploads/2023/06/OLED-Cover-1000x562.jpg"

    constructor(name:string, Price:number, image:string){
        this.name=name;
        this.image=image;
        this.Price=Price;
    }
}
