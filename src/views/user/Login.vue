<template>
  <div class="login">
    <el-form :model="ruleForm"
             :rules="rules"
             ref="ruleForm"
             :label-position="labelPosition"
             label-width="100px"
             class="login-ruleForm">
      <el-form-item label="用戶名"
                    prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码"
                    prop="pass">
        <el-input type="password"
                  ref="ruleForm"
                  v-model="ruleForm.pass"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="submitForm('ruleForm')">登陸</el-button>
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
      labelPosition: 'right',
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
    width: 450px;
    margin: 0 auto;
  }
}
</style>
