<template>
  <div class="container">
    <Layout class="layout">
      <Sider class="side-bar" :style="{height: 'calc(100vh - 35px)', background: '#fff', overflow: 'auto'}" ref="side" :collapsed-width="78">
        <Menu active-name="1-2" theme="light" width="auto" @on-select="onSelect">
          <div class="user-icon">
            <div class="user-img">
              <img src="@/assets/img/head.png">
            </div>
            <p>Gavin</p>
          </div>
          <Submenu name="1">
            <template slot="title">
                <Icon type="location"></Icon>
                <span>收货地址</span>
            </template>
            <MenuItem name="personalCenterMyAddress">我的收货地址</MenuItem>
            <MenuItem name="personalCenterAddAddress">添加收货地址</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
                <Icon type="clipboard"></Icon>
                <span>购物订单</span>
            </template>
            <MenuItem name="personalCenterMyOrder">我的订单</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
                <Icon type="ios-cart"></Icon>
                <span>购物车</span>
            </template>
            <MenuItem name="personalCenterMyShoppingCart">我的购物车</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout class="layout">
        <Header :style="{background: '#fff'}">
          <h2>{{activeTitle}}</h2>
        </Header>
        <Content class="content">
          <transition mode="out-in">
            <router-view></router-view>
          </transition>
        </Content>
        <Footer class="layout-footer-center">2018 &copy; Gavin</Footer>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      activeTitle: '我的订单',
      bar: {
        'personalCenterMyAddress': '我的收货地址',
        'personalCenterAddAddress': '添加收货地址',
        'personalCenterMyOrder': '我的订单',
        'personalCenterMyShoppingCart': '我的购物车'
      }
    };
  },
  methods: {
    onSelect (name) {
      this.activeTitle = this.bar[name];
      this.$router.push(`/personalCenter/${name}`);
    }
  }
};
</script>

<style scoped>
.side-bar a{
  color: #232323;
}
.user-icon {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.user-icon span {
  font-size: 96px;
}
.user-img {
  margin-bottom: 15px;
  width: 96px;
  height: 96px;
  border-radius: 48px;
  overflow: hidden;
}
.user-img img{
  width: 100%;
}
.content {
  margin: 15px;
  background-color: #fff;
  padding: 15px;
}
.layout-footer-center {
  padding: 0px 15px;
  padding-bottom: 15px;
  text-align: center;
}
</style>
