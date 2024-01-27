import GithubProvider from "next-auth/providers/github";

const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: "/auth/sign-in",
    },
};

export default authOptions;
