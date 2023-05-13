import { withPageAuthRequired } from "@auth0/nextjs-auth0"
import { AppLayout } from "../../components/AppLayout"

export default function Post() {
    return (
        <AppLayout>
            <h1>this is the post page</h1>
        </AppLayout>
    )
} 

export const getServerSideProps = withPageAuthRequired (() => {
    return {
        props: {}
    }
})