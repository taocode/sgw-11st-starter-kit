// const dateFormatUS = new Intl.DateTimeFormat('en');
const dateFormatOpts = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};
module.exports = {
  toWholeNumber: function (n) {
    return parseFloat(n).toLocaleString('en-US', { maximumFractionDigits: 0 });
  },
  dateFormat: function (d) {
    return d.toLocaleDateString('en-US', dateFormatOpts);
  },
};
