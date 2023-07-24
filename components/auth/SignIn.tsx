'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Input from '../Input'
import { useFormik } from 'formik';
import Button from '../Button'
import { loginSchema } from '@/utils/yupSchema'

const nav = [
    {
        label: 'JOIN',
        href: '/auth/sign-up'
    },
    {
        label: 'SIGN IN',
        href: '/auth/sign-in'
    },
]

const SignIn: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const pathname = usePathname()
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log(values, 'logged in');
        },
        validationSchema: loginSchema
    })

    return (
        <div className='flex flex-col items-center py-14 px-4'>
            <h1 className="text-[65px] text-primary font-medium -tracking-[0.12em]">
                <Link href='\'>asos</Link>
            </h1>
            <div className="max-w-[650px] w-full min-h-[40vh] bg-white mt-12 px-4">
                <div className="flex h-[50px] md:h-[70px]">
                    {nav.map(({ label, href }) =>
                        <Link
                            key={label}
                            replace href={href}
                            className={`flex text-sm md:text-base font-semibold justify-center items-center ${pathname === href ? 'border-blue-500' : 'border-gray-200'} border-b-2 flex-1 last:border-l last:border-l-gray-100`}
                        >
                            {label}
                        </Link>)}
                </div>

                <form onSubmit={formik.handleSubmit} className="w-full md:max-w-[360px] mt-12 mx-auto space-y-6">
                    <div>
                        <label htmlFor="username" className='font-semibold mb-3 block'>EMAIL ADDRESS:</label>
                        <Input
                            value={formik.values.username}
                            name='username'
                            type='email'
                            customStyles='border border-black h-[51px]'
                            handleChange={formik.handleChange}
                        />
                        <div className="text-xs text-red-500">{formik.errors.username}</div>
                    </div>

                    <div>
                        <label htmlFor="password" className='font-semibold mb-3 block'>PASSWORD:</label>
                        <Input
                            value={formik.values.password}
                            name='password'
                            type={showPassword ? 'text' : 'password'}
                            customStyles='border border-black h-[51px]'
                            handleChange={formik.handleChange}
                            rightIcon={formik.values.password.length > 0 && <p className='text-primary text-xs font-semibold cursor-pointer' onClick={() => setShowPassword(prevS => !prevS)}>{showPassword ? 'HIDE' : 'SHOW'}</p>}
                        />
                        <div className="text-xs text-red-500">{formik.errors.password}</div>
                    </div>

                    <Button type='submit' variant='dark' className='w-full h-[51px] font-medium'>
                        SIGN IN
                    </Button>
                </form>

                <Link href='/auth/forgot-password' className="text-center font-normal mx-auto w-fit block mt-4 text-base text-primary hover:underline">
                    Forgot password?
                </Link>

                <p className="text-primary font-semibold mt-8 text-center text-lg tracking-wider">
                    OR SIGN IN WITH...
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4  md:mx-4 mb-8 mt-10">
                    {['GOOGLE', 'APPLE', 'FACEBOOK'].map(itm =>
                        <button type='button' key={itm} className="h-[60px] font-semibold border">
                            {itm}
                        </button>)}
                </div>
            </div>
        </div>
    )
}

export default SignIn