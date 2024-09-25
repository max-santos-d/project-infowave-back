import Question from "../models/Question.js";

const store = (question, user, text) =>
  Question.findOneAndUpdate(
    { _id: question },
    {
      $push: {
        comments: {
          _id: crypto.randomUUID(),
          user,
          text,
          createdAt: new Date(),
        },
      },
    },
    { new: true }
  );

const index = (question) => Question.findById({ _id: question });

const show = (question, comment) =>
  Question.find({ _id: question, "comments._id": { $in: [comment] } });

const deleted = (question, comment) =>
  Question.findOneAndUpdate(
    { _id: question },
    { $pull: { comments: { _id: comment } } },
    { new: true }
  );

export default {
  store,
  index,
  show,
  deleted,
};