import { web3 } from "./Web3";

class PostStorage {

    posts = [];
    subscribers = new Set();
    latestId = -1;

    async getPost(id) {
        let post = await web3.postsave.method.posts(id).call();

        this.posts.push({
            ...post,
            id: id,
        });
    }

    constructor() {
        web3.http.eth.net.isListening().then(() => {
            
        });

        web3.ws.eth.net.isListening().then(()=>{
            web3.postsave.events.PostUpdated({ fromBlock: "latest" }, (err, result) => {
                if (error) {
                    console.error(error);
                    return;
                }

                let id = parseInt(result.returnValues.id);

                let existing = this.posts.find((post) => {
                    return post.id === id;
                });

                if(existing) {
                    return;
                }

                (async () => {
                    await this.getPost(id);
                    this.publish();
                })();
            });
        });
    }

    subscribe(component, defer = false) {
        this.subscribers.add(component);
        if (!defer) {
            this.publish();
        }
    }

    unsubscribe(component) {
        this.subscribers.delete(component);
    }
    publish() {
        for (let component of this.subscribers) {
            component.setState({ posts: this.posts });
        }
    }

}