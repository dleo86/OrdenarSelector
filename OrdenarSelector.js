function mover(index,to) {
   var list = document.form.list;
   var total = list.options.length-1;
   if (index == -1) return false;
   if (to == +1 && index == total) return false;
   if (to == -1 && index == 0) return false;
   var items = new Array;
   var values = new Array;
   for (i = total; i >= 0; i--) {
   		items[i] = list.options[i].text;
   		values[i] = list.options[i].value;
   }
   for (i = total; i >= 0; i--) {
   		if (index == i) {
   			list.options[i + to] = new Option(items[i],values[i + to], 0, 1);
   			list.options[i] = new Option(items[i + to], values[i]);
   			i--;
   		}
   		else {
   			list.options[i] = new Option(items[i], values[i]);
      	}
   }
   list.focus();
}
function submitForm() {
   var list = document.form.list;
   var theList = "?";
   // comienza con "?" para hacer parecer una real cadena (query-string)
   for (i = 0; i <= list.options.length-1; i++) { 
       theList += "list" + list.options[i].value + "=" + list.options[i].text;
       // una "&" solo entre los items, no en el final
       if (i != list.options.length-1) theList += "&";
   }
   location.href = document.form.action + theList;
}
//  Fin -->