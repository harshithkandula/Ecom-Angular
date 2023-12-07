export class Product {
    name:string="Samsung OLED TV";
    Price:number=100000;
    image:string="https://img.global.news.samsung.com/in/wp-content/uploads/2023/06/OLED-Cover-1000x562.jpg"
    id:number=-1; 

    constructor(id:number, name:string, Price:number, image:string){
        this.id=id;
        this.name=name;
        this.image=image;
        this.Price=Price;
    }
}
