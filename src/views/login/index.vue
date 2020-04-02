<template>
  <div>
    <!-- 头部标题 -->
    <van-nav-bar title="登录" />
    <!-- 输入框区域 -->
    <van-cell-group>
      <van-field v-model="value1" placeholder="请输入手机号">
        <template #label>
          <i class="iconfont">&#xe75b;</i>
        </template>
      </van-field>
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field v-model="tel" type="tel" placeholder="请输入验证码" class="code">
        <template #label>
          <i class="iconfont">&#xe759;</i>
        </template>
        <template #button>
          <van-button size="small" type="default">获取验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <!-- 登录按钮 -->
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit" class="sumit">登录</van-button>
    </div>
    <!-- 客户须知 -->
    <div class="clause">
      <a href="#">隐私条款</a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.van-nav-bar.van-hairline--bottom {
  background-color: #3296fa;
  color: #fff;

  .van-nav-bar__title {
    color: #fff;
  }
}
.van-field {
  color: #c0c0c0;
  i {
    margin-right: 10px;
  }

  .van-field__label {
    width: 25px;
  }

  .van-button.van-button--small.van-button--default {
    border-radius: 15px;
    background-color: #ededed;
    border: none;
    text-align: center;

    span {
      color: #666666;
    }
  }
}
.van-field.code {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sumit.van-button {
  border-radius: 5px;
  background-color: #6db4fb;
}
.clause {
  width: 100%;
  position: fixed;
  bottom: 30px;
  text-align: center;

  a {
    color: #666666;
  }
}
</style>
