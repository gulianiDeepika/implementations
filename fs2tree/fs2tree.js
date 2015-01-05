/*global $, jQuery, console, alert */

(function () {
	"use strict";

	
	
}(jQuery));

var TREE = {
		makeTree : function (flatlist) {
			var map = {}, node, tree = [];
			for (var i = 0; i < flatlist.length; i += 1) {
				node = flatlist[i];
				node.id = node.element.id;
				node.children = [];
				map[node.id] = i;
				node.parentId = node.element.parent ? node.element.parent.id : 0;
				if (node.parentId !== 0) {
					flatlist[map[node.parentId]].children.push(node);
				} else {
					tree.push(node);
				}
			}
			return tree;
			},

		renderTree : function(tree, level) {
			var self = this;
			if (!level) {
				level = 0;
			}
			console.log('TREE',tree);
			var $ul = $('<ul/>',{ 'class' : 'ul-container tree-'+level });
			for (var i = 0; i< tree.length; i++) {
				var $li = $('<li/>',{ 'class' : 'li-container'});
				var node = tree[i];
				var liInnerHtml = node.element.label;
				$li.html(liInnerHtml);
				if (node.children.length !== 0) {
					level++;
					$li.append(self.renderTree(node.children,level));
				}
				$ul.append($li);
			}
			return $ul;
		}
		
};