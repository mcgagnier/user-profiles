
function getFriendsProfiles(req, res) {
    var currentUser = req.session.currentUser;
    if (!currentUser) {
        res.send({
            error: "User is undefined.",
            session: req.session
        });
        return;
    }
    var results = profiles.filter((profile) => {
        var friends = currentUser.friends;
        for(var i = 0; i < friends.length; i++) {
            if (friends[i] === profile.name)
                return true;
        }
        return false;
    });
    res.send({
        currentUser: currentUser,
        friends: results
    });

}

module.exports = {getFriendsProfiles: getFriendsProfiles};


var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];
