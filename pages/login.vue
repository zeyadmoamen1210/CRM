<template>
  <div class="login-page">
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-sm-12">
            <div>
              <img
                class="login-page__right-img"
                src="@/assets/imgs/Marketing-rafiki.png"
                alt=""
              />
            </div>
          </div>

          <div class="col-md-5 col-sm-12">
            <div class="login-page__logo mb-5">
              <img src="@/assets/imgs/hive-logo.png" alt="" />
            </div>
            <div class="login-page__heading mb-4">
              <h3 class="mb-4">Welcome To Our Customer Relatioship Managment System.</h3>
              <span> Enter Your Data </span>
            </div>
            <div class="login-page__form">
              <el-form
                :model="loginData"
                ref="login-form"
                class="demo-ruleForm"
              >
                <el-form-item
                  :rules="[{ required: true, message: 'Email is required' }]"
                  prop="email"
                >
                  <el-input
                    v-model="loginData.email"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>

                <el-form-item
                  :rules="[{ required: true, message: 'Password is required' }]"
                  prop="password"
                >
                  <el-input
                    type="password"
                    v-model="loginData.password"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button data-btn-type="submit-form" type="primary" @click="submitForm('login-form')"
                    >LOG IN</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginData: {},
    };
  },
  middleware:['loggedIn'],
  auth: false,
  methods: {

    submitForm(formName) {

        


        this.$refs[formName].validate((valid) => {
            if(valid){
                this.login();
            }
        })
    },

    login(){
      const loading = this.$loading({
            lock: true,
            text: false,
            spinner: "el-icon-loading",
            background: "rgba(255,255,255,.7)",
            customClass: "fullscreen-loading",
        });

        this.$auth.loginWith("local", {
          data: {
              email: this.loginData.email,
              password: this.loginData.password
          }
        }).then(response => {
          this.$auth.setUser(response.data.user);
          localStorage.setItem(
            "CRMDashboardUser",
            JSON.stringify(response.data.user)
          );
          this.$vs.notification({
            progress: "auto",
            color: "success",
            position: "top-center",
            text: `Welcome Back ${response.data.user.name}`,
          });
          this.$router.push('/');
        }).catch((err) => {
          this.$vs.notification({
            progress: "auto",
            color: "danger",
            position: "top-center",
            text: `Invalid Email Or Password`,
          });
        }).finally(() => loading.close())
    }


  },
};
</script>

<style lang="scss">
.login-page {
  background-image: url("../assets/imgs/circle.png");
  background-size: 66%;
  height: 100vh;
  background-position: -43% 120%;
  background-repeat: no-repeat;

  &__right-img {
    width: 767px;
    height: 627px;
    @media screen and (max-width: 1200px) {
      width: 100% !important;
      height: 100% !important;
    }
  }
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  [data-btn-type="submit-form"]{
      width: 100%;
      padding: 15px;
  }
}
</style>