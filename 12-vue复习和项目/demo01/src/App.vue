<template>
<section class="todoapp">
		<AddTodo></AddTodo>
		<section class="main" style="">
			<input type="checkbox" class="toggle-all" @click="toggleAllTodo(!isAllDone)" :checked="isAllDone"> 
      
				<ul class="todo-list">
          <!-- <ListTodo :class="{completed:item.done}" v-for="(item,index) in todos" :todo="item" :key="index"></ListTodo> -->
          <ListTodo :class="{completed:item.done}" v-for="(item,index) in filterTodo" :todo="item" :key="index"></ListTodo>
				</ul>
			</section> 
			<footer class="footer" style="">
				<span class="todo-count"><strong>{{unDoneNumber}}</strong> 未完成</span> 
				<ul class="filters">
					<li><a href="" :class="{selected:visibility=='all'}" @click.prevent="changeVisibility('all')">all</a></li>
					<li><a href=""  :class="{selected:visibility=='active'}"  @click.prevent="changeVisibility('active')">active</a></li>
					<li><a href=""  :class="{selected:visibility=='completed'}"  @click.prevent="changeVisibility('completed')">completed</a></li>
				</ul> 
				<!-- <button @click="delDone" class="clear-completed" v-show="todos.length > unDoneNumber">clear completed</button> -->
				<button @click="delDone" class="clear-completed" v-show="DoneNumber>0">clear completed</button>
			</footer>
	</section>
</template>

<script>
import "@/assets/todo-mvc.css"
import ListTodo from "./components/ListTodo"
import AddTodo from "./components/AddTodo"
import { mapState, mapGetters,mapMutations } from "vuex"
export default {
  name: 'App',
  computed: {
    ...mapState(["todos","visibility"]),
    ...mapGetters(["isAllDone","unDoneNumber","filterTodo","DoneNumber"])
  },
  methods: {
    ...mapMutations(['toggleAllTodo',"delDone","changeVisibility"])
  },
  components: {
    ListTodo,
    AddTodo
  }
}
</script>

<style>
</style>
