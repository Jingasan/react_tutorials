/**
 * Navigator UserAgent
 * ユーザーデバイスの情報を取得する。
 */

/**
 * 親コンポーネント
 * @returns
 */
const App: React.FC = () => {
  // IEかどうか
  const isIE = () => {
    const ua = navigator.userAgent;
    // InternetExplorer で動作しているか
    if (ua.indexOf("Trident") !== -1) return true;
    return ua.indexOf("MSIE") !== -1;
  };

  // Chromeかどうか
  const isChrome = () => {
    const ua = navigator.userAgent;
    return ua.indexOf("Chrome") !== -1;
  };

  // Firefoxかどうか
  const isFirefox = () => {
    const ua = navigator.userAgent;
    // Firefox で動作しているか
    return ua.indexOf("Firefox") !== -1;
  };

  // Safariかどうか
  const isSafari = () => {
    const ua = navigator.userAgent;
    // Chromium 派生ブラウザを除外する
    if (ua.indexOf("Chrome") !== -1) return false;
    // Android 標準ブラウザを除外する
    if (ua.indexOf("Android") !== -1) return false;
    // Safari で動作しているか
    return ua.indexOf("Safari") !== -1;
  };

  // iOSかどうか
  const isiOS = () => {
    const ua = navigator.userAgent;
    if (
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    ) {
      return true;
    }
    return false;
  };

  // Androidかどうか
  const isAndroid = () => {
    const ua = navigator.userAgent;
    if (
      /android/i.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    ) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={{ border: "1px solid black" }}>UserAgent</td>
            <td style={{ border: "1px solid black" }}>{navigator.userAgent}</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black" }}>BrowserLanguage</td>
            <td style={{ border: "1px solid black" }}>{navigator.language}</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black" }}>iOS ?</td>
            <td style={{ border: "1px solid black" }}>
              {isiOS() ? "Yes" : "No"}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black" }}>Android ?</td>
            <td style={{ border: "1px solid black" }}>
              {isAndroid() ? "Yes" : "No"}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black" }}>Internet Explorer ?</td>
            <td style={{ border: "1px solid black" }}>
              {isIE() ? "Yes" : "No"}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black" }}>Chrome ?</td>
            <td style={{ border: "1px solid black" }}>
              {isChrome() ? "Yes" : "No"}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black" }}>Firefox ?</td>
            <td style={{ border: "1px solid black" }}>
              {isFirefox() ? "Yes" : "No"}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black" }}>Safari ?</td>
            <td style={{ border: "1px solid black" }}>
              {isSafari() ? "Yes" : "No"}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black" }}>Platform</td>
            <td style={{ border: "1px solid black" }}>{navigator.platform}</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black" }}>Is Cookie enabled ?</td>
            <td style={{ border: "1px solid black" }}>
              {navigator.cookieEnabled ? "Yes" : "No"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
