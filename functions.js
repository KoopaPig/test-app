const { default: axios } = require("axios");

const functions = {
    add: function(num1, num2) {
        return num1 + num2;
    },

    isNull: function() { return null },

    checkValue: x => x,

    createUser: function() {
        const user = { firstName: 'Mike'};
        user['lastName'] = 'Walsh';
        return user;
    },

    fetchUser: function() {
        return axios.get('https://jsonplaceholder.typicode.com/users/4')
        .then(res => res.data)
        .catch(err => 'error');
    }

}
module.exports = functions;