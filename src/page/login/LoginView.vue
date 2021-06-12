<template>
  <div>
    <div class="loginWrap">
        <div class="intro">
            <p class="color_green">Welcome!</p> 
            <p class="color_grey"> 스타벅스커피 코리아에 오신 것을 환영합니다.</p>
        </div>
        <div class="login">
            <input type="text" v-model="user.user_id" placeholder="아이디를 입력해 주세요.">
            <input type="password" v-model="user.user_pw" placeholder="비밀번호를 입력해 주세요.">
        </div>
        <div>
            <button @click="checkLogin()">로그인</button>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Login',
    data() {
        return {
            user: {
                user_id: '',
                user_pw: ''
            }
        }
    },
    computed: {
        ...mapState({
            isPassed: state => state.isPassed
        })
    },
    methods: {
        checkLogin() {
            this.$store.dispatch('CHECK_LOGIN', this.user);
            setTimeout(() => {
                console.log("isPassed: " + this.isPassed);
                if(this.isPassed == 'Y') {
                    this.$session.set('logined', 'Y');
                    this.$session.get('logined');
                    alert("로그인이 완료되었습니다.");
                }
            }, 300);
            this.$router.push('home');
        }
    }
}
</script>

<style scope>
.loginWrap input {
    width: 480px;
    height: 50px;
    margin-top: 10px;
    border: 1px solid rgb(0, 129, 7);
    border-radius: 5px;
    padding-left: 20px;
}

.loginWrap {
    text-align: center;
    width: 700px;
    margin: 0 auto;
    border: 1px solid rgb(209, 209, 209);
    border-radius: 8px;
}

.login {
    margin-top: 20px;
}

.loginWrap button {
    width: 505px;
    height: 70px;
    color: white;
    text-align: center;
    background-color: rgb(0, 124, 48);
    margin: 20px 0 30px 0;
    box-shadow: none;
    font-size: 1.5rem;
    border-radius: 8px;
    border: 0;
    outline: 0;
}

.color_green {
    display: inline;
    color: rgb(0, 124, 48);
    font-weight: bold;
}

.color_grey {
    display: inline;
    color: rgb(126, 126, 126);
}

.intro {
    padding: 30px 0 30px 0;
    border-bottom: 1px solid rgb(224, 224, 224);
}

</style>