/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'kkr\'">' + entity + '</span>' + html;
	}
	var icons = {
		'kkr-close': '&#xe919;',
		'kkr-lock1': '&#xe918;',
		'kkr-wrong': '&#xe917;',
		'kkr-lock': '&#xe916;',
		'kkr-equal': '&#xe915;',
		'kkr-cup': '&#xe900;',
		'kkr-arrow-heigh': '&#xe901;',
		'kkr-arrow-low': '&#xe902;',
		'kkr-tick': '&#xe903;',
		'kkr-jocker': '&#xe904;',
		'kkr-arrow-type-2': '&#xe905;',
		'kkr-arrow-type-1': '&#xe906;',
		'kkr-info': '&#xe907;',
		'kkr-pop-up-close': '&#xe908;',
		'kkr-ball': '&#xe909;',
		'kkr-catch': '&#xe90a;',
		'kkr-hundred': '&#xe90b;',
		'kkr-fifry': '&#xe90c;',
		'kkr-run': '&#xe90d;',
		'kkr-third-umpire': '&#xe90e;',
		'kkr-leg-bye': '&#xe90f;',
		'kkr-no-ball': '&#xe910;',
		'kkr-wide': '&#xe911;',
		'kkr-wickets': '&#xe912;',
		'kkr-six': '&#xe913;',
		'kkr-four': '&#xe914;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/kkr-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
