// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'What is Devops?',
		slug: 'what-is-devops',
		html: `
			<audio controls>
				<source src="Lobo_Loco-Inspector_Unvisible.mp3" type="audio/mp3" />
				Your browser does not support the audio tag.
	  		</audio>
		`
	},

	{
		title: 'Ansible',
		slug: 'ansible',
		html: `
			<h2>Ansible discussion</h2>
			Why we hate it?
		`
	},

	{
		title: 'SSL',
		slug: 'ssl',
		html: `
		   SSL is Secure.
		`
	},
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
