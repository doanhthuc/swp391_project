import create from "zustand";
import { persist } from "zustand/middleware";

const store = (set, get) => ({
  // Variables
  user: {
    username: "Guest",
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/440px-User_icon_2.svg.png",
    token: "Cong Hoa Xa Hoi Chu Nghia Trung Quoc",
  },
  // Functions
  addUser: (info) => set(() => ({ user: { username: info.username, picture: info.avatarUrl, token: info.getToken } })),
  removeUser: () =>
    set(() => ({
      user: {
        username: "Guest",
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/440px-User_icon_2.svg.png",
        token: "Cong Hoa Xa Hoi Chu Nghia Trung Quoc",
      },
    })),
});

const userStore = create(persist(store));

export default userStore;
