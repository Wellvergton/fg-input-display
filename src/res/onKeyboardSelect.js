export default function (event, func) {
  let isEnterOrSpace = event.key === " " || event.key === "Enter";

  if (isEnterOrSpace) {
    func();
  }
}
