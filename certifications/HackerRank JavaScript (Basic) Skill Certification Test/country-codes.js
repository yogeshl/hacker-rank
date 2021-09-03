async function getCountryName(code) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>
    const { total_pages, data } = await restCall(`https://jsonmock.hackerrank.com/api/countries?page=1`);
    
    let result = data.find((item) => item['alpha2Code'] === code);
    if(result){
        return result.name;
    }
    else{
        for(let i=2; i <= total_pages ; i++){
            const { data } = await restCall(`https://jsonmock.hackerrank.com/api/countries?page=${i}`);
            
            result =  data.find((item) => item['alpha2Code'] === code);
            
            if(result){
                return result.name;
            }
        }
    }    
}

function restCall(url){
    return new Promise((resolve, reject) =>{
        
        let result='';
        https.get(url, successHandler).on('error', errorHandler);
        
        function successHandler(res){
            res.on('data', (chunk) => { result = result + chunk });
            res.on('end', () => { resolve(JSON.parse(result)) });
        }
        
        function errorHandler(err){
            reject(err);
        }
             
        
    });
}