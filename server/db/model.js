import mongoose from "./index.js";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

// mongoose.set("useFindAndModify", false);

// id模型
const HashIdSchema = new Schema(
  {
    hash_id: {type: String,index: true},
    vips: [{type: ObjectId, ref: 'VIP'}]
  },
  { collection: "HashId" }
);

const VIPScheme = new Schema({
  name: { type: String },
  ids: [{type: ObjectId, ref: 'HashId'}],
  created_at: { type: Date, default: Date.now },
  end_at: { type: Date, default: Date.now },
  rules: [{type: ObjectId, ref: 'Rule'}]
}, { collection: 'VIP' });

// id和vip是多-多关系
const IdVipScheme = new Schema({
  hash_id: { type: ObjectId, ref: 'HashId' },
  vip: { type: ObjectId, ref: 'VIP' }
}, { collection: 'IdVipRelation' })

const RuleScheme = new Schema({
  domain: { type: String },
  target: { type: String }
}, {collection: 'Rule'})

export const HashId=mongoose.model('HashId',HashIdSchema)
export const VIP=mongoose.model('VIP',VIPScheme)
export const IdVipRelation=mongoose.model('IdVipRelation',IdVipScheme)
export const Rule=mongoose.model('Rule',RuleScheme)
