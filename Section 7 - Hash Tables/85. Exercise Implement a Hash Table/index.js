class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const obj = {
      key: key,
      value: value,
    };
    // console.log(obj);
    // return obj;
    let index = this._hash(key);
    if (!this.data[index]) {
      this.data[index] = [];
    }
    this.data[index].push(obj);
    console.log(this.data[index]);
    return this.data[index];
  }

  get(key) {
    let index = this._hash(key);
    if (this.data[index]) {
      for (const item of this.data[index]) {
        if (item.key === key) {
          return item.value;
        }
      }
    }
    return undefined;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");
