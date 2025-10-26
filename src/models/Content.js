import mongoose from 'mongoose';

const fieldSchema = new mongoose.Schema({
  key: { type: String, required: true },
  value: { type: mongoose.Schema.Types.Mixed },
});

const contentSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    slug: { type: String, unique: true, required: true },
    fields: [fieldSchema],
  },
  { timestamps: true }
);

export default mongoose.model('Content', contentSchema);
