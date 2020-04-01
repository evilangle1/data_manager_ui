<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="avatar" />
      </div>
      <div>
        <a-form-model
          ref="loginRef"
          :model="loginForm"
          :rules="loginFormRules"
          label-width="60px"
          class="login_form"
        >
          <a-form-model-item label="账号" v-bind="layout" prop="username">
            <a-input  v-model="loginForm.username" placeholder="Username" >
              <a-icon slot="prefix" type="user"  />
            </a-input>
          </a-form-model-item>
          <a-form-model-item label="密码" v-bind="layout" prop="password">
            <a-input
              v-model="loginForm.password"
              type="password"
              placeholder="Password"
            >
              <a-icon slot="prefix" type="lock"  />
            </a-input>
          </a-form-model-item>
          <a-form-model-item class="btns">
            <a-button type="primary" @click="login">登录</a-button>
            <a-button class="info" @click="resetLoginForm">重置</a-button>
          </a-form-model-item>
        </a-form-model>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from "vuex";

  export default {
    name: "Login",
    data() {
      return {
        loginForm: {
          username: '',
          password: '',
        },
        loginFormRules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入用户密码', trigger: 'blur'},
            {min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur'}
          ]
        },
        layout:{
          labelCol: { span: 4 },
          wrapperCol: { span: 16 },
        }
      };
    },
    methods: {
      ...mapMutations(['changeLogin']),
      resetLoginForm() {
        this.$refs.loginRef.resetFields()
      },
      login() {

          // 2、通过编程式导航跳转到后台主页,
          this.$router.push('/HelloWorld')

      },
    }
  }

</script>

<style  scoped>
  .login_container {
    background-color: #2b4b6b;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .login_box {
    width: 450px;
    height: 360px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
  }
  .login_box .avatar_box {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
  }
  .login_box .avatar_box img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
  .login_form {
    position: absolute;
    bottom: 60px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .btns {
    display: flex;
    justify-content: center;
  }
  .info {
    font-size: 13px;
    margin: 10px 15px;
  }


</style>

