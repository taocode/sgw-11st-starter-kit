module.exports = {
  heading: function (
    heading,
    level = 2,
    id = heading
      .toLowerCase()
      .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[]\/]/gi, '')
      .replace(/ +/g, '-'),
  ) {
    return `<h${level} id="${id}">${heading} <a class="anchor quicklink" href="#${id}">
    <svg class="icon icon--link" role="img" aria-hidden="true" aria-label="link" width="24" height="24">
                    <use xlink:href="#icon-link"></use>
                </svg><span class="sr-only">quicklink to ${heading}</span>
    </a></h${level}>`;
  },
  icon: function (name) {
    return `<svg class="icon icon--${name}" role="img" aria-hidden="true" aria-label="${name}" width="24" height="24">
                    <use xlink:href="#icon-${name}"></use>
                </svg>`;
  },
  quicklink: function (hash, description) {
    return `<a class="anchor quicklink" href="#${hash}"><span class="sr-only">quicklink to ${description}</span></a>`;
    // <a class="anchor" href="#high-sugar-consumption">{% icon "link" %}</a>
  },
};
