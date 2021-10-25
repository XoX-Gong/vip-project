import mongoose from "./index.js";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

mongoose.set("useFindAndModify", false);

const HashIdSchema = new Schema(
  {
    userphone: { type: String, index: true },
    username: { type: String, index: true },
    password: { type: String },
    role: [String],
    avatar: { type: String, default: "默认头像" },
    followers: { type: Number, default: 0 }, //自己关注了多少人
    followings: { type: Number, default: 0 }, //自己被多少人关注了
    likes: { type: Number, default: 0 }, //收藏
    age: { type: String },
    postCount: { type: Number, default: 0 },
  },
  { collection: "HashId" }
);

const VIPScheme = new Schema({
  name: { type: String },
  created_at: { type: Date, default: Date.now },
  end_at: { type: Date, default: Date.now },
  rules: []
});
