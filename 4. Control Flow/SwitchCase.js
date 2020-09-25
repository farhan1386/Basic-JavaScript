
let role='admin';

switch(role){
    case 'guest':
        console.log('Guest User');
        break;
    case 'admin':
        console.log('Admin User');
        break;
    case 'moderator':
        console.log('Moderator User')
        break;
    default:
        console.log('Unknown User');
}