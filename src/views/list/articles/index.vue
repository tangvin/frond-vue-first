<template>
  <div>
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>

<!--    <el-progress :percentage="50"></el-progress>-->
<!--    <el-progress :percentage="100" :format="format"></el-progress>-->
<!--    <el-progress :percentage="100" status="success"></el-progress>-->
    <!--    <el-progress :percentage="100" status="warning"></el-progress>-->
<!--    <el-progress :percentage="50" status="exception"></el-progress>-->
    <br>
    <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
    <br>
    <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
    <br>
    <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
    <br>
    <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
    <br>
    <el-progress type="circle" :percentage="0"></el-progress>
    <el-progress type="circle" :percentage="25"></el-progress>
    <el-progress type="circle" :percentage="100" status="success"></el-progress>
    <el-progress type="circle" :percentage="70" status="warning"></el-progress>
    <el-progress type="circle" :percentage="50" status="exception"></el-progress>
    <el-progress type="circle" :percentage="50" status="exception"></el-progress>

  </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            format(percentage) {
                return percentage === 100 ? '满' : `${percentage}%`;
            }
        }
    }
</script>

