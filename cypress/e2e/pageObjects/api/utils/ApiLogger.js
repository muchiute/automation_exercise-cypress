class ApiLogger {
    logRequest(request) {
      console.log("📤 REQUEST:");
      console.log("Method:", request.method);
      console.log("URL:", request.url);
      console.log("Headers:", request.headers);
      console.log("Body:", request.body);
    }
  
    logResponse(response) {
      console.log("📥 RESPONSE:");
      console.log("Status:", response.status);
      console.log("Headers:", response.headers);
      console.log("Body:", response.body);
    }
  
    logValidation(name, result) {
      console.log(`✅ VALIDATION: ${name} ->`, result);
    }
  }
  
  export default new ApiLogger();