
/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title: 'Express Bootstrap Sample', year: new Date().getFullYear() });
};

exports.about = function (req, res) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Sample express application' });
};

exports.contact = function (req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Feel free to contact me', supportMail: 'gisfromscratch@live.de', marketingMail: 'gisfromscratch@live.de' });
};
