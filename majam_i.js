
// majam_d
const majam_d = require("discord.js");
// majam_e
const majam_e = require('./majam_e.json');
// majam
const majam = new majam_d.Client();

// majam.on
majam.on('message', majam_m => {
    // if majam_m
    if(majam_m.author.bot)
        return;
    // if majam_m
    if(majam_m.isMemberMentioned( majam.users.get(majam_e.client_id) )){
        // majam_e
        let majam_e = '';
        // majam_i
        for (let majam_i = 0; majam_i < Math.random()*100; majam_i++)
            majam_e += 'E';
        // majam_m.reply
        majam_m.reply(`AL TREEEEE${majam_e}EEEEEEEN! 🚆`);
        return;
    }
    // if majam_m
    if(majam_m.content.toLowerCase().indexOf('majam') > -1)
        majam_m.reply('<:majam:361304496862789652>');
});
// majam.login
majam.login(majam_e.token)
    .then(console.log('AL TREEEEEEEEN!'))
    .catch(console.error);