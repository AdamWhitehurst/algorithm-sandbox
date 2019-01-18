class SnapArray {
  constructor(arr) {
    this.arr = [];
    this.snapshotId = 0;

    for (let i = 0; i < arr.length; i++) {
      this.arr[i] = { 0: arr[i] };
    }

    this.add = (index, value) => {
      if (this.arr[index]) this.arr[index][this.snapshotId + 1] = value;
    };

    this.getSnapshotValueAtId = (id, index) => {
      if (!this.arr[index]) return undefined;

      let value;

      while (value === undefined) {
        value = this.arr[index][id--];
      }

      return value;
    };

    this.getSnapshotId = () => {
      const id = this.snapshotId;
      this.snapshotId++;
      return id;
    };

    this.getSnapshotAtId = id => {
      let arr = [];
      for (let i = 0; i < this.arr.length; i++) {
        arr.push(this.getSnapshotValueAtId(id, i));
      }
    };
  }
}

let array = new SnapArray([0, 0, 0, 0]);

array.add(0, 1);
array.add(1, 2);
array.add(1, 3);

let id = array.getSnapshotId(); // 0

array.add(2, 1);

let val = array.getSnapshotValueAtId(1, 2);
let val2 = array.getSnapshotValueAtId(2, 2);

console.log(array);
console.log(id);
console.log(val);
console.log(val2);
