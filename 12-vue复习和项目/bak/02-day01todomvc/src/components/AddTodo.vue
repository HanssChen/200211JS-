<template>
  <header class="header">
    <h1>todos</h1>
    <!-- v-model 也有一些修饰符 trim  lazy -->
    <input type="text" v-model.trim.lazy="txt" 
        placeholder="what need to be done?" class="new-todo" 
        @keyup.enter="add"
    />
  </header>
</template>
<script>
import { mapMutations } from "vuex"
export default {
    data(){
        return{
            txt:""
        }
    },
    methods: {
        ...mapMutations(["addTodo"]),
        add(){
            this.addTodo(this.txt)
            this.txt = ""
        }
    }
};
</script>