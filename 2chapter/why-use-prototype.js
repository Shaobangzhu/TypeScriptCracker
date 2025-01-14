function XUser(id_, age_, tag_) {
    this.id = id_;
    this.age = age_;
    this.tag = tag_;
}

XUser.prototype.mutualFriends = ['lmao', 'fire', 'roaringKitty', 'elon'];
XUser.prototype.show = function() {
    console.log(`XId: ${this.id}, Age: ${this.age}, Tag: ${this.tag}`);
    console.log(`Mutual friends are:${this.mutualFriends}`);
};

let tom = new XUser("Tom", 15, "stock broker");
let jim = new XUser("Jim", 22, "auto dealer");
let harry = new XUser("Harry", 25, "realtor");

tom.show();
// XId: Tom, Age: 15, Tag: stock broker
// Mutual friends are:lmao,fire,roaringKitty,elon
// Explaination: this is correctly bound to the tom instance.so the first line will print out the personality info of the user

tom.__proto__.show();
// XId: undefined, Age: undefined, Tag: undefined
// Mutual friends are:lmao,fire,roaringKitty,elon
// Explaination: Since there is no this context when calling show() directly from the prototype, this will be undefined.