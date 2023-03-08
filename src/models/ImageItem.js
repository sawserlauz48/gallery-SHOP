class ImageItem {

  title;
  alt;
  credit;
  price;
  imgUrl;
  id;
  discription;
  createdAt;
  constructor(title, alt, credit, price, imgUrl, id, discription, createdAt) {

    this.title = title;
    this.alt = alt;
    this.credit = credit;
    this.price = price;
    this.imgUrl = imgUrl;
    this.id = id;
    this.discription = discription;
    this.createdAt = createdAt;
  }
}
export default ImageItem;