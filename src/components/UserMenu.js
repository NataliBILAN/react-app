import React, { Fragment } from 'react';


const UserMenu = ({UserName}) =>(
<Fragment>
    <img src="https://beztabu.net/uploads/770x433_DIR/media_news/2018/08/5b7ab1515ee6a335510834.jpg" alt={UserName} width="100" />
    <p>{UserName}</p> 
</Fragment>

)

export default UserMenu;