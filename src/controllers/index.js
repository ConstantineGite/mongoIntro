// let rightsСheck = function(v) {
// 		console.log(v, "v----->");
// }
// rightsСheck(3);
//-------------------------------------------------------------------------------------------------------------------------------------------------------->

let checkPrivilegeCreate = function(val){
	return (val > 8) ? true : false;
}

let checkPrivilegeRead = function(val){
	return (val > 4) ? true : false;
}

let checkPrivilegeUpdate = function(val){
	return (val > 2) ? true : false;
}

let checkPrivilegeUpdate = function(val){
	return (val > 1) ? true : false;
}


console.log(checkPrivilegeCreate(2), "checkPrivilegeCreate");