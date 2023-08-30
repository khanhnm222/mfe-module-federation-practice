import _ from 'lodash';

// export interface IItemCart {
//   id: number;
//   title: string;
//   qty: number;
//   price: number;
//   img: string;
// }

// export interface ICartData {
//   userId: number | null;
//   totalItems: number;
//   subTotal: number;
//   grandTotal: number;
//   items: IItemCart[]
// }

// interface IGlobalStorage {
//   getCartData(): ICartData | null;
//   addItemToCart(item: IItemCart): void;
// }

class chatStorageClass {
  private getLocalStorage(name: string) {
    return localStorage.getItem(name);
  }

  private setLocalStorage(name: string, val: string | object) {
    if (typeof val !== 'string') {
      val = JSON.stringify(val);
    }

    return localStorage.setItem(name, val);
  }

  private removeLocalStorage(name: string) {
    return localStorage.removeItem(name);
  }

  public getChatData() {
    const data = this.getLocalStorage('mfchat');
    return data ? JSON.parse(data) : null;
  }

  public addMessage(msg:any) {
    this.setLocalStorage('mfchat', msg)
  }
}

const globalStorage = new chatStorageClass();
export default globalStorage;
