const expect = require('expect');
const {Users} = require('./users');


describe('Users', () =>{
var users;
  beforeEach(()=>{
    users = new Users();
    users.users = [{
      id: '1',
      name: 'A',
      room: 'Gaga'
    },{
      id: '2',
      name: 'B',
      room: 'Bebe'
    },{
      id: '3',
      name: 'C',
      room: 'Gaga'
    }];
  });


  it('should add new user', ()=> {
  var users = new Users();
  var user = {
    id: '123',
    name: 'Aukis',
    room: 'Bebe'
  };
  var resUser = users.addUser(user.id, user.name, user.room);

  expect(users.users).toEqual([user]);
  });

  it('should remove a user', ()=> {
    var userId = '1';
    var user =  users.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', ()=> {
      var userId = '100';
      var user =  users.removeUser(userId);
      expect(user).toNotExist();
      expect(users.users.length).toBe(3);
  });

  it('should find a user', ()=> {
    var userId = '2';
    var user =  users.getUser(userId);
    expect(user.id).toEqual(userId);
  });

  it('should not find a user', ()=> {
    var userId = '40';
    var user =  users.getUser(userId);
    expect(user).toNotExist();
  });


  it('should return names for Gaga', ()=> {
    var userList = users.getUserList('Gaga');
    expect(userList).toEqual(['A','C']);
  });

  it('should return names for Bebe', ()=> {
    var userList = users.getUserList('Bebe');
    expect(userList).toEqual(['B']);
  });

});
