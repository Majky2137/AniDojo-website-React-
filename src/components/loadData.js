export default async function LoadData(site, id) {
  return await fetch(`http://hxademo.atspace.tv/PHP/URL_Checker?site=${site}&id=${id}`)
  .then(response => response.json());
}