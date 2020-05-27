<template>
    <div>
        <h1>个人中心</h1>
        <!-- 获取动态路由的参数 -->
        <!-- $route 当把router挂载到根组件上面之后，它的子组件都可以得到$route和$router -->
        <!-- $route后面跟属性  $router后面跟方法 -->
        <p>{{$route.params.id}}</p>
    </div>
</template>