import { ref, computed } from 'vue'
import { getIdDetailApi } from '../../api'

export const useId = async (formValue) => {
  const result = await getIdDetailApi(formValue.value.id)
}