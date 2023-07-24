import React from 'react'
import Loader from "@/components/Loader";
import Container from "@/components/Container";
import Button from '@/components/Button';
// import { EmptyBoxIcon } from '@/assets/icons';
import Link from 'next/link';

const page: React.FC = () => {
    return (
        <Container>
            <div className="min-h-[50vh] flex flex-col justify-center items-center text-primary">
                {/* <Loader /> */}
                {/* <EmptyBoxIcon /> */}
                <p className="text-lg md:text-xl font-semibold">You have no Saved Items</p>
                <p className="max-w-[244px] text-sm md:text-base text-center mt-3 mb-8">Sign in to sync your Saved Items across all your devices.</p>
                <Link href='/auth/sign-in' className='max-w-[320px] w-full h-[54px] block'>
                    <Button variant='dark' className='font-semibold w-full h-full'>SIGN IN</Button>
                </Link>
            </div>
        </Container>
    )
}

export default page