<template>
  <div>
    <custom-modal ref="modal">
      <template v-slot:title><h2>Enovia PLM</h2></template>
      <template v-slot:content>
        <p>
          1.根據技研和營業處需求開發產品接案到開案的簽核流程，隨著不同需求自動加入對應人員簽核，避免以往手工轉派情況
        </p>
        <p>
          2.使用EChart圖形化進度，如開案延誤階段比例或各階段單位人員卡件數圓餅圖，讓主管清楚工作調配避免專案延誤
        </p>
        <p>
          3.在設變簽核中將設計Catia圖檔轉化成PDF並儲存發送，便於人員無繪圖軟體時方便觀看
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