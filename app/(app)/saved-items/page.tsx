import React from 'react'
import Loader from "@/components/Loader";
import Container from "@/components/Container";
import Button from '@/components/Button';
import { EmptyBoxIcon } from '@/assets/icons';

const page: React.FC = () => {
    return (
        <Container>
            <div className="min-h-[50vh] flex flex-col justify-center items-center text-primary">
                {/* <Loader /> */}
                {/* <EmptyBoxIcon /> */}
                <p className="text-lg font-semibold">You have no Saved Items</p>
                <p className="max-w-[244px] text-center mt-3 mb-6">Sign in to sync your Saved Items across all your devices.</p>
                <Button variant='dark' className='max-w-[320px] w-full h-[54px] font-semibold'>SIGN IN</Button>
            </div>
        </Container>
    )
}

export default page