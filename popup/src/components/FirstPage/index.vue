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
import { NInput, NButton, NForm, NFormItem } from "naive-ui";
import { useForm } from "./use";

const { formRef, formValue, rules, handleClick } = useForm();

</script>
