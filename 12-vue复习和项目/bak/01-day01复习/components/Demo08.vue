<template>
  <div>
    <!-- Demo08: 指令综合小练习 -->
    <fieldset>
      <legend>指令综合小练习</legend>
      <div>
        <span>姓名:</span>
        <input type="text" placeholder="请输入姓名" v-model="newPerson.name" />
      </div>
      <div>
        <span>年龄:</span>
        <input type="text" placeholder="请输入年龄" v-model="newPerson.age" />
      </div>
      <div>
        <span>性别:</span>
        <select v-model="newPerson.sex">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <div>
        <span>手机:</span>
        <input type="text" placeholder="请输入手机号码" v-model="newPerson.phone" />
      </div>
      <button @click="createNewPerson">创建新用户</button>
    </fieldset>
    <table>
      <thead>
        <tr>
          <td>姓名</td>
          <td>性别</td>
          <td>年龄</td>
          <td>手机</td>
          <td>删除</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, index) in persons" :key="index">
          <td v-text="p.name"></td>
          <td v-text="p.age"></td>
          <td v-text="p.sex"></td>
          <td v-text="p.phone"></td>
          <td>
            <button @click="delPerson(index)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "Demo01",
  data() {
    return {
      persons: [  // vue的核心是操作数据  自动更新视图
        { name: "张三", age: 20, sex: "男", phone: "18919988999" },
        { name: "李四", age: 30, sex: "女", phone: "18912121212" },
        { name: "王五", age: 40, sex: "男", phone: "18912222229" },
        { name: "赵六", age: 10, sex: "女", phone: "18921218999" }
      ],
      newPerson: { name: "", age: 0, sex: "男", phone: "" }
    };
  },
  computed: {},
  methods: {
      createNewPerson(){
          let {name,age,sex,phone} = this.newPerson;
          if(name === ""){
              alert("姓名不能为空~")  
              return;
          }
          if(age <= 0){
              alert("年龄不能小于等于0~")  
              return;
          }
          if(name === ""){
              alert("手机号不能为空~")  
              return;
          }
          this.persons.unshift(this.newPerson)
          this.newPerson = { name: "", age: 0, sex: "男", phone: "" }
      },
      delPerson(index){
          this.persons.splice(index,1)
      }
  }
};
</script>
<style scoped>
#app {
  margin: 50px auto;
  width: 600px;
}
fieldset {
  border: 1px solid skyblue;
  margin-bottom: 20px;
}
fieldset input {
  width: 200px;
  height: 30px;
  margin: 10px 0;
}
table {
  width: 600px;
  border: 2px solid skyblue;
  text-align: center;
}
thead {
  background-color: skyblue;
}
</style>