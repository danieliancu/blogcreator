import { WithPageAuthRequired } from "@auth0/nextjs-auth0"

export default function TokenTopup() {
    return (
        <div>
            <h1>Token TokenTopup</h1>
        </div>
    )
} 

export const getServerSideProps = withPageAuthRequired (() => {
    return {
        props: {}
    }
})