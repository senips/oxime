var
    expect = require('chai').expect;



describe('functional test', function() {

    it('see object works', function () {
      var o1 = new person('f1', '1', 2, 'sdf');
      var o2 = new person('f2', '2', 2, 'sdf');
      expect('f1').to.equal(o1.firstName);
      expect('f2').to.equal(o2.firstName);
    });

    it('see object works - 2', function () {

      expect('red').to.equal(apple.color);
    });


});


function person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
        this.lastName = name;
    }
}


var apple = {
    type: "macintosh",
    color: "red",
    getInfo: function () {
        return this.color + ' ' + this.type + ' apple';
    }
}
