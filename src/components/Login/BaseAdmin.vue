<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
                <div class="alert alert-danger" v-if="!$store.state.login.AuthFail" role="alert">
                    Wrong credentials!! Please use correct credentials.
                </div>
                <div class="col-lg-12 login-key">
                    <img src="../../assets/ultra-c.png" style="height:100%">
                </div>
                <div class="col-lg-12 login-title">
                    ADMIN PANEL
                </div>
                <div class="col-lg-12 login-form">
                    <div class="col-lg-12 login-form">
                        <form @submit.prevent="sumbitForm">
                            <div class="form-group">
                                <label class="form-control-label">USERNAME</label>
                                <input v-model.trim="username" type="text" class="form-control">
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">PASSWORD</label>
                                <input type="password" v-model.trim="pass" class="form-control" i>
                            </div>

                            <div class="col-lg-12 loginbttm">
                                <div class="col-lg-6 login-btm login-text">
                                    <!-- Error Message -->
                                </div>
                                <div class="col-lg-6 login-btm login-button">
                                    <button @click="sumbitFrom" type="submit"
                                        class="btn btn-outline-primary">LOGIN</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-3 col-md-2"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex'
import axios from 'axios'
import {useRouter} from 'vue-router'
export default {
    setup() {
        let username = ref('')
        let pass = ref('')
        const store = useStore()
        const router = useRouter()
        // function reroute(){
        //     this.$router.push('/home')
        // }

        function sumbitForm() {
            axios.post("http://127.0.0.1:8000/admin-auth", {
                username: username.value,
                password: pass.value,
            }).then(response => {
                if (response.status === 200) {
                   localStorage.setItem( 'Admin', response.data.username)
                    localStorage.setItem( 'AdminLogin', JSON.stringify(true))
                    store.state.login.AdminUsername = localStorage.getItem( 'Admin')
                   store.state.login.AdminLogin = true
                    router.push("/admin-panel/home")
                    if(localStorage.getItem('Admin') != null){
                        store.state.login.AdminLogin = true
                    }
                    
                }

            }).catch(error => {
                console.log(error.message)
                store.state.login.AuthFail = false
                setTimeout(function() { router.push('/') }, 2000);
                
            })
     
        }

        return { username, pass, sumbitForm }
    },
}
</script>


<style scoped>
@import url(admin.css);
</style>