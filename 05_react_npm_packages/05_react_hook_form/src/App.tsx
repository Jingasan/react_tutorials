/**
 * react-hook-form
 * React専用のフォーム作成ライブラリ
 * https://www.react-hook-form.com/
 *
 * zod
 * TypeScript向けのスキーマ宣言＆データ検証(バリデーション)ライブラリ
 * https://zod.dev/
 *
 * resolvers
 * react-hook-formでzodなどによるデータ検証(バリデーション)を有効化するライブラリ
 * https://github.com/react-hook-form/resolvers
 *
 * react-hook-formはフォーム入力値の取得やバリデーション機能などを備えている。
 * useFormというカスタムフックを利用してフォームを実装することができる。
 * useForm利用時にresolverにzodResolverを指定することで、zodによるバリデーションが有効になる。
 */
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z
    .string()
    .min(1, { message: "1文字以上で入力してください。" })
    .max(30, { message: "30文字以下で入力してください。" }),
  sex: z.enum(["man", "woman"], { message: "選択してください。" }),
  email: z.string().email({ message: "無効なメールアドレスです。" }),
  phone: z
    .string()
    .regex(/^\d*$/, { message: "0-9の数字を入力してください。" })
    .optional(),
  birthday: z
    .object({
      year: z.coerce
        .number()
        .min(1900, { message: "1900-2020年の範囲で入力してください。" })
        .max(2020, { message: "1900-2020年の範囲で入力してください。" }),
      month: z.coerce
        .number()
        .min(1, { message: "1-12月の範囲で入力してください。" })
        .max(12, { message: "1-12月の範囲で入力してください。" }),
      day: z.coerce
        .number()
        .min(1, { message: "1-31日の範囲で入力してください。" })
        .max(31, { message: "1-31日の範囲で入力してください。" }),
    })
    .transform(({ year, month, day }) => {
      // 簡易的な日付の文字列変換処理です
      return new Date(`${year}-${month}-${day}`).toISOString();
    }),
  password: z
    .string()
    .min(1, { message: "8-16桁の英大文字、英小文字、数字で入力してください。" })
    .max(16, {
      message: "8-16桁の英大文字、英小文字、数字で入力してください。",
    })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "8-16桁の英大文字、英小文字、数字で入力してください。",
    }),
});

type Input = z.input<typeof schema>;
type Output = z.output<typeof schema>;

const App: React.FC = () => {
  // useFormの型引数に変換前と変換後の型を渡す
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Input, unknown, Output>({
    defaultValues: {
      name: undefined,
      sex: undefined,
      email: undefined,
      phone: undefined,
      birthday: {
        year: undefined,
        month: undefined,
        day: undefined,
      },
    },
    resolver: zodResolver(schema),
  });

  // Zodスキーマのパース後（RHFのバリデーション通過後）は変換後の型になる
  const onSubmit = handleSubmit((input: Output) => {
    console.log(input);
  });

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <legend>入力フォーム</legend>
        {/* 名前の入力項目 */}
        <div style={{ padding: "10px" }}>
          <div>名前*</div>
          <input type="text" placeholder="Taro" {...register("name")} />
          {errors.name?.message && (
            <div style={{ color: "red" }}>{errors.name.message}</div>
          )}
        </div>
        {/* 性別の選択項目 */}
        <div style={{ padding: "10px" }}>
          <div>性別*</div>
          <label>
            男
            <input type="radio" value="man" {...register("sex")} />
          </label>
          <label>
            女
            <input type="radio" value="woman" {...register("sex")} />
          </label>
          {errors.sex?.message && (
            <div style={{ color: "red" }}>{errors.sex.message}</div>
          )}
        </div>
        {/* メールアドレスの入力項目 */}
        <div style={{ padding: "10px" }}>
          <div>メールアドレス*</div>
          <input
            type="text"
            placeholder="xxx@gmail.com"
            {...register("email")}
          />
          {errors.email?.message && (
            <div style={{ color: "red" }}>{errors.email.message}</div>
          )}
        </div>
        {/* 電話番号の入力項目 */}
        <div style={{ padding: "10px" }}>
          <div>電話番号</div>
          <input type="text" placeholder="0123456789" {...register("phone")} />
          {errors.phone?.message && (
            <div style={{ color: "red" }}>{errors.phone.message}</div>
          )}
        </div>
        {/* 生年月日の入力項目 */}
        <div style={{ padding: "10px" }}>
          <div>生年月日*</div>
          <input
            type="text"
            id="year"
            placeholder="2000"
            {...register("birthday.year")}
          />
          <label htmlFor="year">年</label>
          <input
            type="text"
            id="month"
            placeholder="1"
            {...register("birthday.month")}
          />
          <label htmlFor="month">月</label>
          <input
            type="text"
            id="day"
            placeholder="1"
            {...register("birthday.day")}
          />
          <label htmlFor="day">日</label>
          {errors.birthday?.year?.message && (
            <div style={{ color: "red" }}>{errors.birthday?.year?.message}</div>
          )}
          {errors.birthday?.month?.message && (
            <div style={{ color: "red" }}>
              {errors.birthday?.month?.message}
            </div>
          )}
          {errors.birthday?.day?.message && (
            <div style={{ color: "red" }}>{errors.birthday?.day?.message}</div>
          )}
        </div>
        {/* パスワードの入力項目 */}
        <div style={{ padding: "10px" }}>
          <div>パスワード*</div>
          <input
            type="password"
            placeholder="xxxxxxxx"
            {...register("password")}
          />
          {errors.password?.message && (
            <div style={{ color: "red" }}>{errors.password.message}</div>
          )}
        </div>
      </fieldset>
      {/* 登録ボタン */}
      <div style={{ padding: "10px" }}>
        <button>登録</button>
      </div>
    </form>
  );
};

export default App;
