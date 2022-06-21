<template>
	<div class="login-wrap mt-3">
		<div class="login-html">
			<input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">Sign
				In</label>
			<input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab">Sign Up</label>
			<div class="login-form">
				<div class="sign-in-htm">
					<form>
						<div class="group">
							<label for="username" class="label">Username</label>
							<input v-model.trim="username" id="username" type="text" class="input" />
						</div>
						<div class="group">
							<label for="password" class="label">Password</label>
							<input v-model.trim="pass" id="password" type="password" class="input"
								data-type="password" />
						</div>

						<div class="group">
							<input type="button" @click="login" class="button" value="Sign In" />
						</div>
						<div v-if="this.$store.state.login.loginfail" class="alert alert-danger" role="alert">
							<i class='fas fa-exclamation-triangle'></i> UnAuthorized Login,Wrong credentials
						</div>
						<div class="hr"></div>
						<div class="foot-lnk">
							<a href="#forgot">Forgot Password?</a>
						</div>
					</form>
				</div>
				<form>
					<div class="sign-up-htm">
						<div class="group">
							<label for="user" class="label">Username</label>
							<input id="user" v-model.trim="firstname" type="text" class="input" />
						</div>
						<div class="group">
							<label for="pass" class="label">Password</label>
							<input id="pass" v-model.trim="password" type="password" class="input"
								data-type="password" />
						</div>
						<div class="group">
							<label for="pass1" class="label">Repeat Password</label>
							<input id="pass1" v-model.trim="password1" type="password" class="input"
								data-type="password" />
						</div>
						<div class="group">
							<label for="email" class="label">Email Address</label>
							<input id="email" v-model.trim="email" type="email" class="input" />
						</div>
						<div class="group">
							<input type="button" @click="sumbit" class="button" value="Sign Up" />
						</div>
						<div v-if="!formValid" class="alert alert-danger" role="alert">
							<i class="fas fa-exclamation-circle"></i> Invlaid Entry in Form
							please fill correct information
						</div>
						<div v-if="usercreate" class="alert alert-info" role="alert">
							<i class='fas fa-stamp'></i> User created you can login now
						</div>
						<div v-if="!erroralert" class="alert alert-warning" role="alert">
							Something wrong at backend please contact admin
						</div>

						<div class="hr"></div>
						<div class="foot-lnk">
							<label for="tab-1"><a>>Already Member?</a></label>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
	setup() {
		let firstname = ref("");
		let email = ref("");
		let password = ref("");
		let password1 = ref("");
		let formValid = ref(true);
		let usercreate = ref(false);
		let erroralert = ref(true);
		// let authorization = ref(false);
		// login variable
		let username = ref("");
		let pass = ref("");
		let loginValid = ref(true);
		const store = useStore()
		const router = useRouter()
		function signUpValidation() {
			if (firstname.value === "" || firstname.value.length < 3) {
				formValid.value = false;
			}

			if (email.value === "") {
				formValid.value = false;
			}
			if (password.value != password1.value) {
				formValid.value = false;

			}
			setTimeout(function () {
				formValid.value = true;
			}, 3000);
		}

		function LoginValidations() {
			if (username.value === "" || username.value.length < 3) {
				loginValid.value = false;
			}
			if (password.value === "") {
				loginValid.value = false;
			}
		}

		// axios function

		function SendQuery() {
			axios
				.post("https://ultradev-api.herokuapp.com/user-signup", {
					username: firstname.value,
					password: password.value,
					email: email.value,
				})
				.then((response) => {
					if (response.status === 200) {
						usercreate.value = true;
						setTimeout(function () {
							usercreate.value = false;
						}, 3000)
					}
					else {
						erroralert.value = false;
					}
				});
		}

		function sumbit() {
			signUpValidation();
			if (formValid.value == true) {
				SendQuery();
				firstname.value = "";
				password.value = "";
				password1.value = "";
				email.value = "";
			}
			else {
				erroralert.value = false;
				setTimeout(function () {
					erroralert.value = true;
				}, 3000)
			}
		}

		function userlogin() {
			axios.post("https://ultradev-api.herokuapp.com/api/api-token/", {
				username: username.value,
				password: pass.value,
			}).then((response) => {
				store.state.login.accesstoken = response.data.access
				store.state.login.refreshtoken = response.data.refresh
				localStorage.setItem('ClientName',username.value)
				localStorage.setItem('token', JSON.stringify(response.data.access))
				store.commit('login/setTokens')
				console.log("accesstoken: " + localStorage.getItem('token'))

				if (localStorage.getItem('token') != null) {

					store.state.login.Authenticated = true;
					router.push("/client-area/support/home")
				}

				else {
					console.log("access reject")
				}
			}).catch(error => {
				if (String(error).search("401")) {
					store.state.login.Authenticated = false;
					store.state.login.loginfail = true;
					setTimeout(function () {
						store.state.login.loginfail = false;
						router.push("/")

					},3000)
					
				}

			})

		}

		// login function here

		function login() {

			userlogin();

		}

		return {
			firstname,
			email,
			password,
			password1,
			formValid,
			username,
			pass,
			loginValid,
			signUpValidation,
			sumbit,
			SendQuery,
			usercreate,
			erroralert,
			login,
			LoginValidations
		};
	},
};
</script>

<style scoped>
@import "login.css";
</style>
