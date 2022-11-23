import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Helmet } from "react-helmet-async";

export default function TermsScreen() {
    return (
        <Container className="mt-5" >
            <Helmet><title>Comparte tu idea</title></Helmet>
            <Card className="card shadow-lg p-3 mb-5 bg-body rounded">
                <Card.Title className="card-title color-red">
                    <h2>Términos de Servicio</h2>
                </Card.Title>
                <Card.Text className="card-text">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias a natus officia amet? Fugit
                        similique dolor aperiam, est culpa quas delectus consectetur? Cumque quam ab voluptatibus quis
                        sapiente voluptate labore!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ipsum fugit qui in inventore
                        beatae atque enim ab! Consequatur iste fuga ducimus inventore voluptates quod numquam quae
                        temporibus minima placeat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
                        ipsum fugit qui in inventore
                        beatae atque enim ab! Consequatur iste fuga ducimus inventore voluptates quod numquam quae
                        temporibus minima placeat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
                        ipsum fugit qui in inventore
                        beatae atque enim ab! Consequatur iste fuga ducimus inventore voluptates quod numquam quae
                        temporibus minima placeat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
                        ipsum fugit qui in inventore
                        beatae atque enim ab! Consequatur iste fuga ducimus inventore voluptates quod numquam quae
                        temporibus minima placeat.
                    </p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est amet eveniet repudiandae
                        reprehenderit perferendis ipsam sapiente tempore id sunt dicta possimus deleniti modi
                        repellendus consequatur, enim mollitia officia hic fugiat. Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Minima
                        ipsum fugit qui in inventore
                        beatae atque enim ab! Consequatur iste fuga ducimus inventore voluptates quod numquam quae
                        temporibus minima placeat.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure illum velit cum. Laborum nisi
                        soluta nihil cumque tempora? Earum aliquam nostrum molestiae, quae animi neque dolores
                        voluptatum reiciendis ea minus?</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est amet eveniet repudiandae
                        reprehenderit perferendis ipsam sapiente tempore id sunt dicta possimus deleniti modi
                        repellendus consequatur, enim mollitia officia hic fugiat. Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Minima
                        ipsum fugit qui in inventore
                        beatae atque enim ab! Consequatur iste fuga ducimus inventore voluptates quod numquam quae
                        temporibus minima placeat.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure illum velit cum. Laborum nisi
                        soluta nihil cumque tempora? Earum aliquam nostrum molestiae, quae animi neque dolores
                        voluptatum reiciendis ea minus?</p>
                </Card.Text>
            </Card>
        </Container>
    );
}