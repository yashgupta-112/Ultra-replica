<template>
    <div class="card text-dark  m-4 mb-3" style="max-width: 13rem;">
        <div class="card-header">{{ plan }}</div>
        <div class="card-body">
            <h5 class="card-title">{{ storage }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">HDD Storage</h6>
            <h5 class="card-title mt-4">{{ traffic }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Monthly Upload</h6>
            <h5 class="card-title mt-4">50Gbps</h5>
            <h6 class="card-subtitle mb-2 text-muted"> Shared Upload Speed</h6>
            <h6 class="card-subtitle mt-4 mb- text-muted"><i class="fa fa-check" style="font-size:18px;color:green"></i> {{ media }}</h6>
            <h5 class="card-title mt-4">{{this.$store.state.plan.currency}}{{ price }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Billed monthly</h6>
            <a href="#" class="btn btn-primary mt-4">Order</a>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'plan',
        'storage',
        'traffic',
        'media',
        'price',
    ]
}
</script>

<style scoped>
.card-body {

    background-color: #25292f;
}

.card {
    background-color: #25292f;
    box-shadow: 6px 6px 15px 4px #db2777;
}

h5 {
    color: whitesmoke;
    font-weight: bold;
    font-family: Verdana, Geneva, Tahoma, cursive;
}

.card-header {
    color: #db2777;
    font-weight: 900;
    font-size: 1.5rem;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-shadow: 6px 6px black;
}

.btn {
    background-color: #db2777;
    border: 1px solid #db2777;
    color: black;
    font-weight: bold;
}

svg {
    color: red;
}
</style>