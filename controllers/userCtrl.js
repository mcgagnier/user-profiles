// module.exports = {
//
//     login: function(req, res) {
//
//     }
// }

function login(req, res) {
    var name = req.body.user.name;
    var password = req.body.user.password;
    var usersMatch = users.filter((user) => user.name === name);

    if (usersMatch.length !== 1) {
        res.send({userFound: false})
    } else {
        // Log them in
        var foundUser = usersMatch[0];
        if (foundUser.password !== password) {
            res.send({userFound: false});
        } else {
            req.session.currentUser = foundUser;
            res.send({userFound: true});
        }
    }
}

module.exports = {login: login};

var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];
