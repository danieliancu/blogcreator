import { withPageAuthRequired } from "@auth0/nextjs-auth0"
import { AppLayout } from "../../components/AppLayout"


export default function NewPost(props) {
    return (
        <AppLayout>
            <h1>New page</h1>
        </AppLayout>
    )
} 



export const getServerSideProps = withPageAuthRequired (() => {
    return {
        props: {}
    }
})