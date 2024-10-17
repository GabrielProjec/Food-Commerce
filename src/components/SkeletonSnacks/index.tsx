import Skeleton from "./Skeleton";
import { Container } from "./styles";

function SkeletonSnacks() {
    return (
        <div className="skeleton-wrapper">
            <Container>
                <Skeleton type='title' />
                <Skeleton type='thumbnail' />
                <Skeleton type='text' />
                <Skeleton type='text' />

                <div>
                    <Skeleton type='title' />
                    <Skeleton type='image' />
                </div>
            </Container>
        </div>
    )
}

export default SkeletonSnacks;