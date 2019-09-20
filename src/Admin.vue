<template>
    <div id="wrapper">
        <NavVar/>
        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">
          <!-- Main Content -->
          <div id="content">
            <Topbar/>
            <router-view></router-view>
          </div>
        </div>
    </div>
</template>

<script>
import NavVar from '@/components/Admin/NavVar.vue'
import Topbar from '@/components/Admin/Topbar.vue'
import 'startbootstrap-sb-admin-2/css/sb-admin-2.css'

export default {
  components: {
    NavVar,
    Topbar,
  }
}
</script>