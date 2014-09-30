function Calssroom (domain, api_version) {
    this.domain = domain;
    this.api_version = api_version;
    this.api = {
        'attendances': {
            'list': 'attendances',
            'update': 'attendances/{id}',
            'report': 'attendances/report'.
            'filter': 'attendances/filter'
        },
        'classrooms': {
            'create': 'classrooms'
        }
    }
}

Apple.prototype.getAPI = function('attendances.list', id) {
    return this.domain + '/' this.api_version + '/' + 
};
