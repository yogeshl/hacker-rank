async function getNumTransactions(username) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/article_users?username=<username>
    // API endpoint: https://jsonmock.hackerrank.com/api/transactions?&userId=<userId>
    
    const { page, per_page, total, total_pages, data } = await restCall(`https://jsonmock.hackerrank.com/api/article_users?username=${username}`);
    
    let result = data.find((item) => item.username === username);
    if(!result){
        return 'Username Not Found';
    }
    else{
        const { page, per_page, total, total_pages, data } = await restCall(`https://jsonmock.hackerrank.com/api/transactions?&userId=${result.id}`);
        
        return total;
    }
    
    
}

function restCall(url){
    return new Promise((resolve, reject) => {
        let result = '';
        https.get(url, successHandler).on('error', errorHandler);
        
        function successHandler(res){
            res.on('data', (chunk) => { result = result + chunk });
            res.on('end', () => { resolve(JSON.parse(result))});
        }
        
        function errorHandler(err){
            reject(err);
        }
        
    });
}