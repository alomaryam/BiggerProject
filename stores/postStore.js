import { makeObservable, observable, action } from "mobx";
import instance from "./instance";

class postStore {
  post = [];
  loading = true;

  fetchPosts = async () => {
    try {
      const response = await instance.get("/posts");
      this.post = response.data;
      this.loading = false;
    } catch (error) {
      console.error("postStore -> fetchPosts -> error", error);
    }
  };

  deletePost = async (postId) => {
    try {
      await instance.delete(`/posts/${postId}`);
      this.post = this.post.filter((post) => post.id !== postId);
    } catch (error) {
      console.error("postStore -> deletePost -> error", error);
    }
  };

  createPost = async (data) => {
    try {
      const response = await instance.post("/posts", data);
      this.post.push(response.data);
    } catch (error) {
      console.error("postStore -> createPost -> error", error);
    }
  };

  updatePost = async (postId) => {
    try {
      // await instance.delete(`/posts/${postId}`);
      this.post = this.post.filter((post) => post.id !== postId);
    } catch (error) {
      console.error("postStore -> deletePost -> error", error);
    }
  };

  constructor() {
    makeObservable(this, {
      post: observable,
      fetchPosts: action,
      deletePost: action,
      createPost: action,
    });
  }
}
const postStore = new PostStore();
postStore.fetchPosts();

export default postStore;
