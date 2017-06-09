const expect = require('expect')

const utils = require('./utils');

const mockUser = {
  age: 25,
  location: "dublin"
}
describe("Utils", () => {
  describe('#add', () => {
    it('should add two numebrs', () => {
      const res = utils.add(1, 2);
      expect(res).toBe(3).toBeA('number')
    });
  });
  describe('#square', () => {
    it('should square a number', () => {
      const res = utils.square(3);
      expect(res).toBe(9).toBeA('number');
    });
  });
  describe('#setname', () => {
    it('should add names to an object', () => {
      const blankRes = utils.setName(mockUser, "Alexander Cannon");
      expect(blankRes).toInclude({ firstName: "Alexander", lastName: "Cannon" }).toBeAn('object')
      const reRes = utils.setName(blankRes, "Balexander Bannon");
      expect(reRes).toInclude({ firstName: "Balexander", lastName: "Bannon" }).toBeAn('object')
      expect(reRes).toBe(blankRes).toBe(mockUser);
    });
  });
  it("should add asyncronously", (done) => {
    utils.asyncAdd(2, 3, (sum) => {
      expect(sum).toBe(5).toBeA('number');
      done();
    });
  });

  it("should square asyncronously", (done) => {
    utils.asyncSquare(9, (sum) => {
      expect(sum).toBe(81).toBeA('number');
      done();
    });
  });

  it('should expect some values', () => {
    expect("this").toNotBe('that');
    expect({ me: 9 }).toEqual({ me: 9 });
    expect([1, 2, 3]).toInclude(1);
    expect({ this: 1, that: 2 }).toInclude({ that: 2 })
    expect({ this: 1, that: 2 }).toExclude({ us: 3 })
  });
});