<template>
  <div class="login">
    <el-form :model="ruleForm"
             :rules="rules"
             ref="ruleForm"
             :label-position="labelPosition"
             class="login-ruleForm">
      <el-form-item prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input type="password"
                  ref="ruleForm"
                  v-model="ruleForm.pass"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button  class="btn bttn-unite bttn-lg bttn-warning btn-form"
                   @click="submitForm('ruleForm')">LOGIN</el-button>
      </el-form-item>
    </el-form>
    <div>
      {{dataUser.token}}
    </div>
  </div>
</template>
<script>
import { codeLogin } from '@/api/login.js'
export default {
  data () {
    return {
      labelPosition: 'center',
      dataUser: '',
      ruleForm: {
        name: 'Mrli',
        pass: 'li#$123456'
      },
      rules: {
        name: [
          { required: true, message: '請輸入用戶名', trigger: 'blur' },
          { min: 3, max: 18, message: '長度在 3 到 18 個字符', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '請輸入密碼', trigger: 'blur' },
          { min: 3, max: 18, message: '長度在 3 到 18 個字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          codeLogin({
            UCode: this.ruleForm.name,
            UPwd: this.ruleForm.pass
          }).then(res => {
            const { token } = res.data.data
            localStorage.setItem('userToken', token)

            this.$router.push('/')
          }).catch(res => { })
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  max-width: 1200px;
  margin: 0 auto;
  .login-ruleForm {
    max-width: 450px;
    padding: 0 20px;
    margin: 0 auto;
  }
  .btn-form{
    font-size: 16px;
  }
}
</style>
