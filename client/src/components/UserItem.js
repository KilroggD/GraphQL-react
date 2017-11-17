const UserItem = (props) => {
    let first_name, last_name, id, info;
    ({id, first_name, last_name, ...info} = props);
    return (
        <div className='user-list__item'>
            <UserName prefix='user-list' name={first_name} surname={last_name} />
            <UserInfo {...info} />
            <Link className='user-list__todos' to={`/todos/${id}`}>View Todos</Link>
        </div>
    );

};

