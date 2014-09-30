function Classroom (domain) {
    this.domain = domain;
    this.api_version = 'api/v1';
    this.access = null;
    this.current_user = null;
    this.api = {
        'attendances': {
            'list': 'attendances',
            'update': 'attendances/{id}',
            'report': 'attendances/report',
            'filter': 'attendances/filter'
        }
    };
}

Classroom.prototype.getAPI = function(str, id) {
    if (id && typeof id != 'undefined') {
        sublink_str = eval('this.api.' + str);
        sublink = sublink_str.replace('{id}', id);
    }else {
        sublink = eval('this.api.' + str);
    }
    return this.domain + '/' + this.api_version + '/' + sublink;
};


