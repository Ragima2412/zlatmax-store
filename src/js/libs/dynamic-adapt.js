

"use strict";

function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();


//=====================================================================

// (function() {
// 	let original_positions = [];
// 	let da_elements = document.querySelectorAll('[data-da]');
// 	let da_elemets_array = [];
// 	let da_match_media = [];
// 	//Заполняем массивы 
// 	if(da_elements.length > 0) {
//         let number = 0;
// 		for(let index = 0; index < da_elements.length; index++) {
// 			const da_element = da_elements[index];
// 			const da_move = da_element.getAttribute('data-da');
// 			const da_array = da_move.split(',');
// 			if(da_array.length == 3) {
// 				da_element.setAttribute('data-da-index', number);
// 				//Заполняем массив первоначальных позиций
// 				original_positions[number] = {
// 					"parent": da_element.parentNode,
// 					"index": index_in_parent(da_element)
// 				};
// 				da_elements_array[number] = {
// 					"element": da_element,
// 					"destination": document.querySelector('.' + da_array[0].trim()),
// 					"place": da_array[1].trim(),
// 					"brealpoint": da_array[2].trim()
// 				}
// 				number++;
// 			}
// 		}
// 		dynamic_adapt_sort(da_elemets_array);

// 		//Создаем события в точке брейкпоинта

// 		for(let index=0; index < da_elemets_array.length; index++) {
// 			const el = da_elemets_array[index];
// 			const da_breakpoint = el.breakpoint;
// 			const da_type = "max"; //Для mobile-first поменять на min

// 			da_match_media.push(window.matchMedia("(" + da_type + "-width" + da_breakpoint + "px)"));
// 			da_match_media[index].addEventListener(dynamic_adapt);
// 		}
// 	}
// 	//Основная функция
// 	function dynamic_adapt(e) {
// 		for(let index = 0; index < da_elemets_array.length; index++) {
// 			const el = da_elemets_array[index];
// 			const da_element = el.element;
// 			const da_destination = el.destination;
// 			const da_place = el.place;
// 			const da_breakpoint = el.breakpoint;
// 			const da_classname = "dynamic_adapt_" + da_breakpoint;

// 			if(da_match_media[index].matches) {
// 				if(!da_element.classList.contains(da_classname)) {
// 					let actual_index;
// 					if(da_place == "first") {
// 						actual_index = index_of_elements(da_destination)[0];
// 					} else if(da_place == "last") {
// 						actual_index = index_of_elements(da_destination)[index_of_elements(da_destination).length];

// 					} else {
//                       actual_index = index_of_elements(da_destination)[da_place];
// 					}
// 					da_destination.insertBefore(da_element, da_destination.children[actual_index]);
// 					da_element.classList.add(da_classname);
// 				}
// 			} else {
// 				if(da_element.classList.contains(da_classname)) {
// 					dynamic_adapt_back(da_element);
// 					da_element.classList.remove(da_classname);
// 				}
// 			}
// 		}
// 		custom_adapt();
// 	}
// 	dynamic_adapt();
//     //Функция возврата на место
// 	function dynamic_adapt_back(el) {
// 		const da_index = el.getAttribute('data-da-index');
// 		const original_place = original_positions[da_index];
// 		const parent_place = original_place['parent'];
// 		const index_place = original_place['index'];
// 		const actual_index = index_of_elements(parent_place, true)[index_place];
// 		parent_place.insertBefore(el, parent_place.children[actual_index]);
// 	}

// 	//Функция получения индекса внутри родителя

// 	function index_in_parent(el) {
// 		var children = Array.prototype.slice.call(el.parentNode.children);
// 		return children.indexOf(el);
// 	}

// 	//Функция получения массива индексов элементов внутри родителя
// 	function index_of_elements(parent, back) {
// 		const children = parent.children;
// 		const children_array = [];
// 		for(let i = 0; i < children.length; i++) {
// 			const children_element = children[i];
// 			if(back) {
// 				children_array.push(i);
// 			} else {
// 				if(children_element.getAttribute('data-da') == null) {
// 					children_array.push(i);
// 				}
// 			}
// 		}
// 		return children_array;
// 	}

// 	function dynamic_adapt_sort(arr) {
// 		arr.sort(function (a,b) {
// 			if(a.breakpoint > b.breakpoint) { return -1} else { return 1}  // Для мобайл поменять			
// 		});
// 		arr.sort(function(a,b) {
// 			if(a.place > b.place) {return 1} else {return -1}
// 		});
// 	}

// 	function custom_adapt() {
// 		const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
// 	}
// 	window.addEventListener('resize', function(event) {

// 	})
// })();