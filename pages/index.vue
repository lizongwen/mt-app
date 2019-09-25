<template>
  <div class="page-index">
	<el-row>
		<el-col :span="5">
			<emenu/>
		</el-col>
		<el-col :span="19">2</el-col>
	</el-row>
	<el-row></el-row>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Emenu from '@/components/index/menu'
export default {
  components: {
	  Emenu
  },
  data: () => ({
    msg: "消息"
  }),
  computed: {
    ...mapGetters("app", {
      name: "appName"
    })
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss"

</style>
