import styles from './Post.module.css';

import PostComments from '../PostComments';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    imageUrl: string;
}

const Post = ({ children, imageUrl }: Props) => (
    <div className={styles.post}>
      <img className={styles['post-image']} src={imageUrl} alt='Olha só que legal minha miniatura do Batmóvel.'/>
      <p className={styles['post-text']}> {children} </p>
    
      <div data-testid="post-do-comentario">
        <PostComments />
      </div>
    </div>
);

    export default Post;


