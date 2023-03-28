<template>
     <MyNavbar />
    <main>
        <router-view />
    </main>
    <MyFooter />
    
</template>

<script>
import MyNavbar from '@/components/frontend/BaseNavber.vue'
import MyFooter from '@/components/frontend/BaseFooter.vue'

export default {
    name: 'FrontendLayout',
    components: {
        MyNavbar,
        MyFooter
    }
}
</script>