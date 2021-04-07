import { makeObservable, observable, action } from "mobx";
import instance from "./instance";

class RoomStore {
  room = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      room: observable,
      fetchRooms: action,
      deleteRoom: action,
      createRoom: action,
    });
  }
  fetchRooms = async () => {
    try {
      const response = await instance.get("/rooms");
      this.room = response.data;
      this.loading = false;
    } catch (error) {
      console.error("roomStore -> fetchRooms -> error", error);
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
roomStore.fetchRooms();

export default roomStore;
