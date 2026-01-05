import CodeExample from "./home-components/code";
import ContactHomeButtons from "./home-components/contact-buttons";
import HomeTitle from "./home-components/title";


export default function HomePage() {
    return (
        <div>
            <div className="flex">
                <HomeTitle />
                <CodeExample />
            </div>
            
            <ContactHomeButtons />
        </div>
    )
}