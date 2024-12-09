let res = $response;


let data = JSON.parse(res.body);


data.userData.profileProgress.hasUserBVNProfile = true;


for (let key in data.featureStatuses) {
    if (data.featureStatuses[key] === false) {
        data.featureStatuses[key] = true;
    }
}


res.body = JSON.stringify(data);


$done(res);
