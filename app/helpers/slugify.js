export function getSlug(item){
    return item.replace(/ /g, "_").replace(/\./g, "").replace(/-/g, "_").toLowerCase();
}