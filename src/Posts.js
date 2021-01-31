import React from 'react';
import PostItem from './Post-item';
const Posts = (props) => {
    return (
        <div>
            <PostItem title="Hello World" content="This is a content of Hello World" />
            <PostItem title="Goodbye World" content="This is a speech of say goobye" />
        </div>
    );
}
export default Posts;