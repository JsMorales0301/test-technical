import { Server } from "./models/server"

(() => {
    main()
})()

async function main() {
    new Server({
        port: 3000
    }).start()
}