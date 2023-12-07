function formatName(firstName = "", lastName = "") {
  return firstName + " " + lastName;
}

console.log(formatName("Java", "Script"));

// 在原有的程式碼中，
// 我認為原開發者可能是希望 firstName 和 lastName 在非空字串的狀況下，
// 再將他們加進 formattedName 的字串當中，
// 且如果兩者皆為空字串，最後則會返回一個空字串。

// 先假設使用者只會提供空字串、字串以及不提供任何東西，
// 如果想要跟原有的程式碼維持一樣的功能，
// 我會乾脆先將 arguments 預設為空字串，
// 並在 function 中直接返回 firstName + " " + lastName，
// 這樣就可以避免當 arguments undefined 或為空字串時可能產生的錯誤，
// 也符合原有程式碼中 arguments 皆為空字串，則返回一個空字串的結果。
