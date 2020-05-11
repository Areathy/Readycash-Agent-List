<template>
    <div class="container">
		<div class="row align-items-center form-cont">
			<div class="col-sm-6 center-block form-space bg-light">
			<div class="form-group">
				<label for="username">User Name</label>
				<input type="text" class="form-control"  placeholder="User Name" v-model="userName">
			</div>
			<div class="form-group">
				<label for="password">Password</label>
				<input type="password" class="form-control"  placeholder="Password" v-model="password">
			</div>
			<button type="button" class="btn btn-primary" @click="fetchUsers">Submit</button>
			</div>
		</div>
    </div>
</template>

<script src="./Login.js"  lang="js"/>

<style>
	.form-cont {
		margin-top: 10rem;
	}

	.form-space {
		border: 0.06rem solid rgb(223, 223, 223);
		padding: 5rem;
		border-radius: 5px;
	}

	/* Media Query */
	@media only screen and (max-width: 780px) {
		.form-space {
			padding: 2rem 1rem;
		}

		.form-cont {
		margin: 8rem 0.2rem 0rem 0.2rem;
	}
	}
</style>