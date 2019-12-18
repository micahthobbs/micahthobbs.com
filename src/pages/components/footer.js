import React from 'react';

export default () => (
    <div style={{ marginTop: `3rem`, marginBottom: `3rem` }}>
        {/* <label>Search for anything </label>
        <input type="text" value="" name="search"></input> */}
        <ul style={{ listStyle: `none`, float: `right`, paddingLeft: `0` }}>
            <li style={{ display: `inline-block`, marginLeft: `2rem` }}><a href="mailto:micahthobbs@gmail.com">Email</a></li>
            <li style={{ display: `inline-block`, marginLeft: `2rem` }}><a href="https://github.com/micahthobbs">Github</a></li>
            <li style={{ display: `inline-block`, marginLeft: `2rem` }}><a href="https://twitter.com/micahthobbs">Twitter</a></li>
            <li style={{ display: `inline-block`, marginLeft: `2rem` }}><a href="https://www.linkedin.com/in/micahthobbs/">LinkedIn</a></li>
        </ul>
    </div>
)