export default {
    save(obj) {
        let str = JSON.stringify(obj)
        localStorage.setItem("todoList", str)
    },
    get() {
        let str = localStorage.getItem("todoList")
        let rs = JSON.parse(str)
        if (rs == null) {
            return {
                visibility: "all",
                todos: []
            }
        } else {
            return rs;
        }
    }
}