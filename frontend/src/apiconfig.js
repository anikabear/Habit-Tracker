const habitServiceConfig = { 
 getApiUrl: () => {
    let url;
    switch(process.env.NODE_ENV) {
      case 'development':
        url = 'http://localhost:8080';
        break;
    }
  
    return url;
  }

}

export default habitServiceConfig;