function submitdata(event)
{

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (password.length <8)
    {
        document.getElementById('message').textContent = 'Password length must be min 8 characters'
        return
    }


    fetch('/signup',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        
        body: JSON.stringify({
            "name":name,
            "email":email,
            "password":password
        })
    })
    
    .then((response)=>{
        return response.text()
    })
    
    .then((data)=>{
        if (data == 'Email address is not valid')
        {
            document.getElementById('message').textContent = data
        }
        else if (data == 'Email address already exist')
        {
            document.getElementById('message').textContent = data
        }
        else
        {
            location.href = '/'
        }
    })
}

function newpost()
{
    window.location.replace('/newpost')
}

function updatePost()
{
    const text = document.getElementById('updated-text').value;
    const id = document.getElementById('postid').getAttribute('data-id');
    
    fetch(`/updatepost/${id}`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        
        body: JSON.stringify({
            "text":text
        })
    })
    
    .then((response)=>{
        return response.text()
    })
    
    .then((data)=>{
        
        if (data == 'Post has been updated')
            {location.href = `/comments/${id}`}
        else
        {
            location.href='/'
        }

        
    })

}

function deletePost()
{
    const id = document.getElementById('postid').getAttribute('data-id');
    
    fetch(`/deletepost/${id}`,{
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    })
    
    .then((response)=>{
        return response.text()
    })
    
    .then((data)=>{
        
        if (data == 'Post has been deleted')
            {location.href = `/`}
        else
        {
            location.href='/'
        }

        
    })

}

function newcomment()
{
    document.getElementById('comment-section').classList.add('show')
    document.getElementById('cancel-comment').classList.add('show')
    document.getElementById('new-comment-submit').classList.add('hide')

    // const id = document.getElementById('postid').getAttribute('data-id')
    // window.location.replace(`/newcomment/${id}`)
}

function hideCommentForm()
{
    document.getElementById('comment-section').classList.remove('show')
    document.getElementById('cancel-comment').classList.remove('show')
    document.getElementById('new-comment-submit').classList.remove('hide')

    document.getElementById('comment-section').classList.add('hide')
    document.getElementById('cancel-comment').classList.add('hide')

}

function submitnewpost()
{
    const heading = document.getElementById('new-post-heading').value;
    const text = document.getElementById('new-post-text').value;

    fetch('/newpost',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        
        body: JSON.stringify({
            "heading":heading,
            "text":text
        })
    })
    
    .then((response)=>{
        if (response.status == '200')
        {
            window.location.replace('/')
        }
    })
}

function submitComment()
{
    const text = document.getElementById('new-comment-text').value;
    const postid = document.getElementById('postid').getAttribute('data-id')

    fetch(`/newcomment/${postid}`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        
        body: JSON.stringify({
            "text":text
        })
    })
    
    .then((response)=>{
        if (response.status == '200')
        {
            window.location.reload(`/comments/${postid}`)
        }
    })

}

function signin()
{

    const email = document.getElementById('sign-in-email').value;
    const password = document.getElementById('sign-in-password').value;

    fetch('/signin', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    })
    
    .then((response)=>{
        return response.text()
    })
    
    .then((data)=>{
        console.log(data)
        if (data == 'Username or password is incorrect')
        {document.getElementById("login-fail-text").textContent = data}
        else
        {
            window.location.replace('/')
        }
    })
}


if (document.getElementById("sign-up-submit"))
{

document.getElementById("sign-up-submit").addEventListener("click", ()=>{
    event.preventDefault()
    submitdata(event)});
}

if (document.getElementById("sign-in-submit"))
{
    document.getElementById("sign-in-submit").addEventListener("click", ()=>{
        event.preventDefault()
        signin()});
}
if (document.getElementById("new-post-submit"))
{
document.getElementById("new-post-submit").addEventListener("click", ()=>{
    event.preventDefault()
    submitnewpost(event)});
}

if (document.getElementById("new-post"))
{
document.getElementById("new-post").addEventListener("click", ()=>{
    event.preventDefault()
    newpost(event)});
}

if (document.getElementById("new-comment-submit"))
{
document.getElementById('new-comment-submit').addEventListener("click", ()=>{
    event.preventDefault();
    newcomment(event);
})
}

if (document.getElementById("cancel-comment"))
{

document.getElementById('cancel-comment').addEventListener("click", ()=>{
    event.preventDefault();
    hideCommentForm();
})}

if (document.getElementById("add-comment-submit"))
{

    document.getElementById('add-comment-submit').addEventListener("click", ()=>{
        event.preventDefault();
        submitComment();
 })}
    

 if (document.getElementById("update-post-submit"))
{

    document.getElementById('update-post-submit').addEventListener("click", ()=>{
        event.preventDefault();
        updatePost();
 })}

 if (document.getElementById("delete-post"))
{

    document.getElementById('delete-post').addEventListener("click", ()=>{
        event.preventDefault();
        deletePost();
 })}

