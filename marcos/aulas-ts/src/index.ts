//
interface IStorage {
  getItem: (key: string) => any
  setItem: (key: string, value: string) => void
  deleteItem: (key:string) => void
}

class Storagee implements IStorage{
  getItem (key:string){
    const storage = localStorage.getItem(key)
    if(!storage){
      return " "
    }
    return JSON.parse(storage)
  }
  setItem (key:string, value:string): void{
    localStorage.setItem(key, JSON.stringify(value))
  }
  deleteItem (key: string){
    localStorage.removeItem(key)
  } 
}

//localStorage.setItem('token', "djfhfhhfhdfhh")

const storage = new Storagee()
storage.setItem("token", "shdsahdsgfggf")