/**
 * Props
 * Propsとは、親コンポーネントから子コンポーネントにデータを渡すための仕組みである。
 */

/**
 * Propsデータの型定義
 */
type UserProps = {
  firstname: string; // 名
  lastname: string; // 姓
};
/**
 * 子コンポーネント：ユーザー名の表示
 * @param props
 * @returns
 */
const User: React.FC<UserProps> = (props) => {
  return (
    <div>
      {props.firstname} {props.lastname}
    </div>
  );
};

/**
 * Propsデータの型定義
 */
interface LoginStateProps {
  isLogin: boolean;
}
/**
 * 子コンポーネント：ログイン状態の表示
 * @param props
 * @returns
 */
const LoginState = (props: LoginStateProps) => {
  return <div>{props.isLogin ? "ログイン中" : "ログアウト中"}</div>;
};

/**
 * 親コンポーネント
 * @returns
 */
const App: React.FC = () => {
  return (
    <div>
      <User firstname="Taro" lastname="Tanaka" />
      <LoginState isLogin={true} />
      <User firstname="Ken" lastname="Kato" />
      <LoginState isLogin={false} />
    </div>
  );
};

export default App;
