const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/relation_db")
  .then((res) => {
    console.log("terkoneksi dengan mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  username: String,
  age: Number,
});

const tweetSchema = new mongoose.Schema({
  text: String,
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

// const makeTweet = async () => {
//   const user = new User({
//     username: "marcell",
//     age: 22,
//   });
//   const tweet = new Tweet({
//     text: "halo dunia!",
//     likes: 0,
//   });

//   tweet.user = user;
//   user.save();
//   tweet.save();
// };

const makeTweet = async () => {
  const user = await findOne({
    username: "marcell",
  });
  const tweet = new Tweet({
    text: "halo dunia!",
    likes: 0,
  });

  tweet.user = user;
  tweet.save();
};

makeTweet();

// const showTweets = async () => {
//   const tweets = await Tweet.findById("66e5c4632e8f7f86093b11b3");
//   console.log(tweets);
// };

const showTweets = async () => {
  const tweets = await Tweet.findById("66e5c4632e8f7f86093b11b3").populate(
    "user"
  );
  console.log(tweets);
};
