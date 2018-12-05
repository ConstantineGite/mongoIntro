
export let create = (val) => val > 8;

export let read = (val) => val > 4;

export let update = (val) => val > 2;

export let remove = (val) => val > 1;

console.log(create(2), "checkPrivilegeCreate");
