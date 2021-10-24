<template>
  <n-form
    inline
    label-placement="left"
    :model="formValue"
    :rules="rules"
    ref="formRef"
  >
    <n-form-item label="id" path="id">
      <n-input v-model:value="formValue.id" placeholder="请输入唯一标识" />
    </n-form-item>
    <n-form-item>
      <n-button @click="handleClick" attr-type="button">验证</n-button>
    </n-form-item>
  </n-form>
</template>

<script setup>
import { ref } from "vue";
import { NInput, NButton, NForm, NFormItem } from "naive-ui";
import { useId } from './use'

// window.chrome.storage.sync.set({id: '6666'}, function() {
//   console.log('Value is set to ' + 6666);
// });


const formRef = ref(null);

const formValue = ref({
  id:  localStorage.getItem('id') || '',
});

const rules = {
  id: {
    required: true,
    message: "请输入id",
    trigger: ["input"],
  },
};

const onValidate = async () => {
  await formRef.value.validate();
};

const handleClick = async () => {
  await onValidate();
  useId(formValue)
};
</script>
