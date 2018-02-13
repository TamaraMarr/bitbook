export default class RedirectionService {

    redirect(url){
        window.location.assign(`#/${url}`); 
    }
}