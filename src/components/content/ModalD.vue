<template>
  <div>
    <custom-modal ref="modal">
      <template v-slot:title><h2>工裝進度追蹤系統</h2></template>
      <template v-slot:content>
        <p>
          1.每周追蹤會議報表原先至plm上收集相關專案資料再轉給工機人員比對填寫(約耗時1.5人天)，現資料同步不需耗費時間
        </p>
        <p>
          2.透過資料整理出各客戶需要的進度表
        </p>
      </template>
    </custom-modal>
  </div>
</template>
<script>
import CustomModal from "../CustomModal.vue";
import { Modal } from 'bootstrap'
export default {
  components: { CustomModal },
  methods: {
    show() {
      let modal = new Modal(this.$refs.modal.$refs.staticBackdrop);
      modal.show()
    },
  },
};
</script>