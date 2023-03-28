<template>
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
        <MySidebar />
        <div class="flex flex-col flex-1 w-full">
            <MyNavbar />
            <main class="h-full overflow-y-auto">
                 <div class="container grid px-6 mx-auto">
                    <router-view></router-view>
                 </div>
            </main>
        </div>
    </div>
</template>

<script>
import MyNavbar from '@/components/backend/TopNavber.vue'
import MySidebar from '@/components/backend/BaseSidebar.vue'

export default {
    name: 'BackendLayout',
    components: {
        MyNavbar,
        MySidebar
    }
}
</script>