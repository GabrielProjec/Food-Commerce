import {SkeletonElement} from './style'

export interface SkeletonProps {
    type: 'title' | "text" | "image" | 'thumbnail'
}

function Skeleton({type} : SkeletonProps) {
    return <SkeletonElement type={type} />
}

export default Skeleton