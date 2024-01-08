const  { Friend }  = require('../models/Friends');

const friendCreate = (req, res)  => {
    const friendDetails = req.body;
    

    const friend = new Friend({ firstName: friendDetails.firstName, lastName: friendDetails.lastName, age: friendDetails.age });
    friend.save()
        .then((newFriend) => {
            console.log(`Friend saved: ${newFriend}`);
            res.render('created.hbs');
        })
        .catch((err) => {
            console.log(`Error: ${err}`)
            res.send(`Error: ${err}`);
        })
        
};

const shortForm = (req, res) => {
    res.render('create-friend.hbs');
};

const showAllFriends = (req, res) => {
    Friend.find()
      .then((friends) => {
        res.render("index.hbs", { friends });
      })
      .catch((err) => {
        console.log(`Error while getting the friends from the DB: ${err}`);
      });
  };


module.exports = { friendCreate, shortForm, showAllFriends };