import RootLayout from '@/components/Layouts/RootLayout';
import GithubSigninForm from '@/components/__onetime_used/__sign_in/__GithubSigninForm';
import Head from 'next/head';
import { signIn, signOut, useSession } from "next-auth/react"
import SignOutButton from '@/components/__shared_multiple_time/__sign_out/__SignOutButton';
import { useState } from 'react';
import LoadingSpinner from '@/components/__shared_multiple_time/__buttons/__LoadingSpinner';

const socialLoginProviders = {
    GITHUB: "github",
};

const SignInPage = () => {
    const { data: session } = useSession()
    const [isLoading, setIsLoading] = useState(false);

    const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL;

    // this is callback url after login
    const callbackUrl = `${baseAPIUrl}`;

    const login = async (provider) => {
        setIsLoading(true);
        await signIn(provider, { callbackUrl });
        setIsLoading(false);
    };

    const logout = async () => {
        setIsLoading(true)
        await signOut()
        setIsLoading(false)
    }

    return (
        <>
            <Head>
                <title>GetPC | Sign-in</title>
            </Head>
            <section className='min-h-screen flex items-center justify-center'>
                {
                    isLoading ? <LoadingSpinner /> : <>
                        {
                            session ? (
                                <div>
                                    <p className='mb-2 text-2xl font-semibold'>Signed in as {session.user.email} <br /></p>
                                    <div
                                        onClick={() => logout()}
                                    >
                                        <SignOutButton />
                                    </div>
                                </div>
                            ) : (
                                <div
                                    onClick={() => login(socialLoginProviders.GITHUB)}
                                >
                                    <GithubSigninForm />
                                </div>
                            )

                        }
                    </>
                }


            </section>
        </>

    );
};

export default SignInPage;

SignInPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}