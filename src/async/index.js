console.log('Before');

//Asynchronous
 //getUser(1,getReosotories);


console.log('After');



console.log('After');

function getReosotories(user)
{
    getReosotories(user.gitHubUserName, getCommits);
}

function getCommits(repos)
{
    getCommits(repos, displayCommits);
}
function displayCommits(commits)
{
    console.log(commits);
}

//Calbacks

//Promises

getUser(1)
    .then(user => getReosotories(user.gitHubUserName))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('commits', commits))
    .catch(err => console.log('Error',err.message))

//Async/Await
async function displayCommits()
{   
    try
    {
        const user = await getUser(1);

        const repos = await getReosotories(user.gitHubUserName);

        const commits = await getCommits(repos[0]);

        console.log(commits);
    }
    catch(err)
    {
        console.log('Error', err.message);
    }
    
}

displayCommits()
function getUser(id)
{
    return new Promise((resolve, reject)=>{
        //Kick Of Aync  work

        setTimeout(()=>
        {
    
            console.log("Reading a user from a database...");
    
            resolve({id:id,gitHubUserName:'Ashen Dunusinghe'});
           
    
        },2000);
    });



   

   
}

function getReosotories(username)
{
    return new Promise((resolve, reject)=>{

        setTimeout(()=>
        {
    
            console.log('Calling GitHub API....');
    
            resolve(['repo1', 'repo2', 'repo3']);
    
    
        },2000)

    })
   
}

function getCommits(repo)
{
    return new Promise((resolve, reject)=>{

        setTimeout(()=>
        {
            console.log('Calling Github API....');

            resolve(['commit']);

        })
    })
   
}

//Synchronous

 console.log('Before');

const user = getUser(1);

const repos = getReosotories(user.gitHubUserName);

const commits = getCommits(repos[0]);