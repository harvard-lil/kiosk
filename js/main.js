var featured_lil_pages = [
	'http://librarylab.law.harvard.edu/roundup/',
	'http://hlslwebtest.law.harvard.edu/dev/matt/p5-playground/perma-lines',
	'https://dashboard.thenetmonitor.org/dashboards/JzyYbHyCJEFWqZ4Qj'
]

window.setInterval(change_frame, 60000);

function change_frame() {
	var current_feature = $('#frame').attr('src');
	var current_index = featured_lil_pages.indexOf(current_feature);
	var next_index = current_index+=1;
	if (next_index === featured_lil_pages.length) {
		next_index = 0;
	}
	$('#frame').attr('src', featured_lil_pages[next_index]);
}