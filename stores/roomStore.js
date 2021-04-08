import { makeObservable, observable, action } from "mobx";
import instance from "./instance";

class RoomStore {
  exploreRoom = [];
  room = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      room: observable,
      exploreRoom: observable,
      deleteRoom: action,
      createRoom: action,
      fetchRooms: action,
      fetchExplore: action,
    });
  }

  fetchRooms = async () => {
    try {
      const response = await instance.get("/rooms/myRooms");
      this.room = response.data;
      this.loading = false;
    } catch (error) {
      console.error("roomStore -> fetchRooms -> error", error);
    }
  };

  fetchExplore = async () => {
    try {
      const response = await instance.get("/rooms/exploreRooms");
      this.exploreRoom = response.data;
      this.loading = false;
    } catch (error) {
      console.error("roomStore -> fetchExplore -> error", error);
    }
  };

  deleteRoom = async (roomId) => {
    try {
      await instance.delete(`/rooms/${roomId}`);
      this.room = this.room.filter((room) => room.id !== roomId);
    } catch (error) {
      console.error("roomStore -> deleteRoom -> error", error);
    }
  };

  createRoom = async (data) => {
    try {
      const response = await instance.post("/rooms", data);
      this.room.push(response.data);
    } catch (error) {
      console.error("roomStore -> createRoom -> error", error);
    }
  };
}
const roomStore = new RoomStore();

export default roomStore;
