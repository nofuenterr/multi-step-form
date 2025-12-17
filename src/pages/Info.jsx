import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export default function Info() {
  const { 
    register, 
    trigger,
    formState: { errors }
  } = useFormContext()

  const navigate = useNavigate()

  const infoFields = ['fullName', 'email', 'phoneNumber']

  const nextStep = async () => {
    const isValid = await trigger(infoFields, { shouldFocus: true })

    if (isValid) {
      navigate("/plan")
    }
  }

  return (
    <div>
      <form>
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>

        <div>
          <label htmlFor='fullName'>Name</label>
          <span>{errors?.fullName?.message}</span>
          <input type="text" {...register('fullName')} id='fullName' placeholder='e.g. Merlin Hermes' />
        </div>
        <div>
          <label htmlFor='email'>Email Address</label>
          <span>{errors?.email?.message}</span>
          <input type="text" {...register('email')} id='email' placeholder='e.g. merlinhermes@lotm.com' />
        </div>
        <div>
          <label htmlFor='phoneNumber'>Phone Number</label>
          <span>{errors?.phoneNumber?.message}</span>
          <input type="tel" {...register('phoneNumber')} id='phoneNumber' placeholder='e.g. +1 234 567 890' />
        </div>

        <button type="button" onClick={nextStep}>Next Step</button>
      </form>
    </div>
  )
}
