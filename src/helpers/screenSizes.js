const documentWidth = document.documentElement.clientWidth;
const documentHeight = document.documentElement.clientHeight;

export function documentOrientation() {
  return documentWidth > documentHeight ? "landscape" : "portrait");
}