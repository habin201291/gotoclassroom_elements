function Classroom (api_domain, api_version, dashboard_domain) {
    this.api_domain = api_domain;
    this.api_version = api_version;
    this.dashboard_domain = dashboard_domain;
    this.access_token = null;
    this.current_user = null;
    this.api = {
        'attendances': {
            'list': 'attendances',
            'update': 'attendances/{id}',
            'report': 'attendances/report',
            'filter': 'attendances/filter'
        },
        'classrooms' : {
            'create': 'classrooms',
            'show': 'classrooms/{id}',
            'edit': 'classrooms/{id}',
            'delete': 'classrooms/{id}',
            'posts_list' : 'classrooms/{id}/posts',
            'posts_list_user': 'classrooms/{id}/posts_of_user',
            'parents_connect': 'classrooms/{id}/parents_connect',
            'assignments': 'classrooms/{id}/assignments',
            'events': 'classrooms/{id}/events',
            'quizzes': 'classrooms/{id}/quizzes',
            'students': 'classrooms/{id}/students',
            'parents': 'classrooms/{id}/parents',
            'add_student': 'classrooms/add_student',
            'add_parent': 'classrooms/add_parent',
            'lock_student': 'classrooms/{id}/lock_student',
            'lock_parent': 'classrooms/{id}/lock_parent',
            'unlock_student': 'classrooms/{id}/unlock_student',
            'unlock_parent': 'classrooms/{id}/unlock_parent',
            'remove_student': 'classrooms/{id}/remove_student',
            'remove_parent': 'classrooms/{id}/remove_parent',
            'invite_student': 'classrooms/{id}/invite_student',
            'invite_parent': 'classrooms/{id}/invite_parent',
            'convert_to_yearbook': 'classrooms/{id}/convert_to_yearbook'
        },
        'discussions' : {
            'add_question': 'discussions',
            'upload_file': 'discussions/{id}/upload_file',
            'delete_file': 'discussions/{id}/delete_file',
            'update': 'discussions/{id}',
            'delete': 'discussions/{id}',
            'show': 'discussions/{id}',
            'like_question': 'discussions/{id}/like',
            'unlike_question': 'discussions/{id}/unlike',
            'list': 'discussions/list',
            'random_question': 'discussions/random_question',
            'search_question': 'discussions/search_question',
            'add_to_watch_list': 'discussions/{id}/add_to_watch_list',
            'remove_item_from_watch_list': 'discussions/{id}/remove_item_from_watch_list',
            'answer_question': 'discussions/{id}/create_answer',
            'update_answer': 'discussions/update_answer',
            'delete_answer': 'discussions/delete_answer',
            'like_answer': 'discussions/like_answer',
            'unlike_answer': 'discussions/unlike_answer'
        },
        'assignments': {
            'create': 'assignments',
            'show': 'assignments/{id}',
            'update': 'assignments/{id}',
            'delete': 'assignments/{id}',
            'close': 'assignments/{id}/close',
            'studet_send_drop_off': 'assignments/{id}/send',
            'update_grade': 'assignments/update_grade',
            'create_comment': 'assignments/{id}/create_comment',
            'update_comment': 'assignments/update_comment',
            'delete_comment': 'assignments/delete_comment',
            'conversation': 'assignments/{id}/conversation'
        },
        'events' : {
            'create': 'events',
            'update': 'events/{id}',
            'delete': 'events/{id}',
            'show': 'events/{id}'
        },
        'posts' : {
            'create': 'posts',
            'update': 'posts/{id}',
            'delete': 'posts/{id}',
            'show': 'posts/{id}',
            'upload_image': 'posts/{id}/upload_image',
            'upload_video': 'posts/{id}/upload_video',
            'upload_file': 'posts/{id}/upload_file',
            'image_from_url': 'posts/{id}/image_from_url',
            'video_from_url': 'posts/{id}/video_from_url',
            'delete_image': 'posts/{id}/delete_image',
            'delete_file': 'posts/{id}/delete_file',
            'like': 'posts/{id}/like',
            'unlike': 'posts/{id}/unlike',
            'attach_link': 'posts/{id}/attach_link',
            'create_comment': 'posts/{id}/create_comment',
            'update_comment': 'posts/update_comment',
            'delete_comment': 'posts/delete_comment',
            'like_comment': 'posts/like_comment',
            'unlike_comment': 'posts/unlike_comment'
        },
        'quizzes' : {
            'create': 'quizzes',
            'add_question': 'quizzes/question',
            'update_question': 'quizzes/question',
            'file_for_question': 'quizzes/file',
            'list_all_draf': 'quizzes/draf',
            'publish': 'quizzes/publish',
            'update': 'quizzes/{id}',
            'delete': 'quizzes/{id}',
            'show': 'quizzes/{id}',
            'close': 'quizzes/close',
            'stats': 'quizzes/stats',
            'student_incomplete': 'quizzes/incomplete',
            'student_submit_solution': 'quizzes/send',
            'create_comment': 'quizzes/{id}/create_comment',
            'update_comment': 'quizzes/update_comment',
            'delete_comment': 'quizzes/delete_comment',
            'conversation': 'quizzes/{id}/conversation'
        },
        'messages' : {
            'send': 'messages/send',
            'reply': 'messages/reply',
            'create_draf': 'messages/draf',
            'detail_draf': 'messages/draf',
            'move_message_to_trash': 'messages/{id}',
            'detail': 'messages/{id}',
            'message_inbox': 'messages/inbox',
            'message_recent': 'messages/recent',
            'message_sent': 'messages/sent',
            'message_trash': 'messages/trash',
            'search': 'messages/search'
        },
        'users' : {
            'me': 'users/me',
            'create_user': 'users/create_user',
            'create_teacher': 'users/create_teacher',
            'create_student': 'users/create_student',
            'create_parent': 'users/create_parent',
            'update_profile': 'users/update_profile',
            'update_avatar': 'users/update_avatar',
            'change_password': 'users/change_password',
            'setting_teacher_email_notifications': 'users/setting_teacher_email_notification',
            'setting_student_email_notifications': 'users/setting_student_email_notification',
            'setting_parent_email_notifications': 'users/setting_parent_email_notification',
            'custion_api_domain': 'users/custion_api_domain',
            'search_user_and_classroom': 'users/search',
            'my_classrooms': 'users/my_classrooms',
            'my_yearbooks': 'users/my_yearbooks',
            'teacher_libraries': 'users/teacher_library',
            'parent_connect_activities_summary': 'users/parent_connect_activities_summary',
            'parent_connect_activities_with_classroom': 'users/parent_connect_activities_with_classroom',
            'activities_summary': 'users/activities_summary',
            'activities_with_classroom': 'users/activities_with_classroom',
            'activities_student_with_teacher': 'users/activities_student_with_teacher',
            'watch_list_questions': 'users/watch_list_questions',
            'my_questions': 'users/my_questions',
            'summary': 'users/summary'
        },
        'themes' : {
            'create': 'themes',
            'list': 'themes',
            'show': 'themes/{id}',
            'update': 'themes/{id}',
            'delete': 'themes/{id}'
        },
        'parent_connects' : {
            'ask_question': 'parent_connects',
            'upload_file': 'parent_connects/{id}/upload_file',
            'delete_file': 'parent_connects/{id}/delete_file',
            'update': 'parent_connects/{id}',
            'delete': 'parent_connects/{id}',
            'show': 'parent_connects/{id}',
            'like': 'parent_connects/{id}/like',
            'unlike': 'parent_connects/{id}/unlike',
            'answer_question': 'parent_connects/{id}/create_answer',
            'update_answer': 'parent_connects/update_answer',
            'delete_answer': 'parent_connects/delete_answer',
            'like_answer': 'parent_connects/like_answer',
            'unlike_answer': 'parent_connects/unlike_answer'
        },
        'tags' : {
            'return_list_post_tags': 'tags/get_tag'
        }
    };
}

Classroom.prototype.getAPI = function(str, id) {
    var sublink = eval('this.api.' + str);
    if (id && typeof id != 'undefined') {
        sublink = sublink.replace('{id}', id);
    }
    return this.api_domain + '/api/' + this.api_version + '/' + sublink;
};
