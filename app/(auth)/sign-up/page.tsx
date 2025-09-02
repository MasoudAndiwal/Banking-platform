import AuthForm from '@/components/AuthForm'
import Image from 'next/image'
import React from 'react'

const SignUp = () => {
  return (
    <section className='flex min-h-screen w-full bg-gray-50 gap-8'>
      <div className='flex size-full max-w-[800px] flex-col justify-center px-12 py-10 md:px-24 bg-white'>
        <AuthForm type={"sign-up"} />
      </div>
      
      <div className='flex-1 flex items-center justify-center p-12 bg-gray-50'>
        <div className='max-w-[600px] w-full'>
          <Image 
            src="/icons/auth-image.svg"
            alt="Auth image"
            width={600}
            height={400}
            className='w-full h-auto object-contain'
          />
        </div>
      </div>
    </section>
  )
}

export default SignUp