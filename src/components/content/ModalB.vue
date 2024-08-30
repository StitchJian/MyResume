<template>
  <div>
    <custom-modal ref="modal">
      <template v-slot:title><h2>MES(數據採集)</h2></template>
      <template v-slot:content>
        <p>
          因應產線新增修改機台時，MES需採集PLC不同數據，省去設備商修改軟體的價錢，如:產線工作站增添3個站位時就省去三筆費用
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