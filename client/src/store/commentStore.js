import create from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

const store = (set, get) => ({
  // Variables
  user_comment: [],
  // Functions
  addComment: (info) =>
    set(() => ({
      user_comment: [
        ...get().user_comment,
        { id: uuidv4(), username: info.username, picture: info.picture, comment: info.comment, rating: info.rating },
      ],
    })),
  deleteComment: (id) => {
    const lstOfCmt = get().user_comment.filter((x) => x.id !== id);
    return set(() => ({ user_comment: lstOfCmt }));
  },
});

const commentStore = create(persist(store));

export default commentStore;
