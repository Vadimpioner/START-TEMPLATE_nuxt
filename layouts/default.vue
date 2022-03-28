<template>
    <div class="TEMPLATE">
        <Header style="flex: 0 0 auto"/>
        <Nuxt style="flex: 1 0 auto"/>
        <Footer style="flex: 0 0 auto"/>
    </div>
</template>


<script>
    import Header from '../components/Header'
    import Footer from '../components/Footer'
    export default {
        components: {
            Header,
            Footer,
        }
    }
</script>

<style lang="scss" scoped>
    .TEMPLATE {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
</style>
