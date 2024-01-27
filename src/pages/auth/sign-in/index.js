import RootLayout from '@/components/Layouts/RootLayout';
import GithubSigninForm from '@/components/__onetime_used/__sign_in/__GithubSigninForm';

const SignInPage = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <GithubSigninForm />
        </div>
    );
};

export default SignInPage;

SignInPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}