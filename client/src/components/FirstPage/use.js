import { ref, computed, reactive } from 'vue'
import { getIdDetailApi } from '@api'
import { storage } from "@utils";

const formValue = reactive({id: ""});

// 初始化, 从storage中取id
const id = await storage.getItem('id')
formValue.id = id

export const useForm = () => {
  const formRef = ref(null)

  const rules = {
    id: {
      required: true,
      message: "请输入id",
      trigger: ["input"],
    }
  }

  const handleClick = async () => {
    try {

      await formRef.value.validate()
      await getIdDetailApi(formValue.id)

    } catch (e) {
      // 校验不通过
    }
    
  }

  return {
    rules,
    formValue,
    formRef,
    handleClick
  }

}

export const useId = async (formValue) => {
  const result = await getIdDetailApi(formValue.value.id)
}
