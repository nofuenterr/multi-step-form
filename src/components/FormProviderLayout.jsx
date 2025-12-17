import { Outlet } from "react-router-dom"
import { useForm, FormProvider } from 'react-hook-form'

export default function FormProviderLayout() {
  const form = useForm()

  return (
    <FormProvider {...form}>
      <Outlet />
    </FormProvider>
  )
}
