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
 *
 * useFieldArrayというカスタムフックを利用して要素数が可変のフォームを実装することができる。
 */
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  // 名前
  name: z
    .string()
    .min(1, { message: "1文字以上で入力してください。" })
    .max(30, { message: "30文字以下で入力してください。" }),
  // 年齢
  age: z.coerce
    .number()
    .int()
    .positive()
    .min(18, {
      message: "18才以下は登録不可です。",
    })
    .max(150, { message: "150才以下で入力してください。" }),
  // 性別
  sex: z.enum(["man", "woman"], { message: "性別を選択してください。" }),
  // メールアドレス
  email: z.string().email({ message: "無効なメールアドレスです。" }),
  // 電話番号
  phone: z
    .string()
    .regex(/^\d*$/, { message: "0-9の数字を入力してください。" })
    .optional(),
  // 生年月日
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
  // プラン
  plan: z.coerce.number({ message: "プランを選択してください。" }),
  // パスワード
  password: z
    .string()
    .min(1, { message: "8-16桁の英大文字、英小文字、数字で入力してください。" })
    .max(16, {
      message: "8-16桁の英大文字、英小文字、数字で入力してください。",
    })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "8-16桁の英大文字、英小文字、数字で入力してください。",
    }),
  // 家族情報(要素数可変)
  family: z.array(
    z.object({
      relationship: z.coerce.number({ message: "続柄を選択してください。" }),
      name: z
        .string()
        .min(1, { message: "氏名は1文字以上で入力してください。" })
        .max(30, { message: "氏名は30文字以下で入力してください。" }),
      age: z
        .number()
        .int()
        .min(0, {
          message: "年齢は0才以上で入力してください。",
        })
        .max(150, { message: "年齢は150才以下で入力してください。" }),
    })
  ),
});

type Input = z.input<typeof schema>;
type Output = z.output<typeof schema>;

/**
 * プラン一覧
 */
const plans = [
  { code: 1, name: "Free" },
  { code: 2, name: "Personal" },
  { code: 3, name: "Family" },
  { code: 4, name: "Business" },
];

/**
 * 続柄一覧
 */
const relationship = [
  { code: 1, name: "夫" },
  { code: 2, name: "妻" },
  { code: 3, name: "実父" },
  { code: 4, name: "実母" },
  { code: 5, name: "義父" },
  { code: 6, name: "義母" },
  { code: 7, name: "息子" },
  { code: 8, name: "娘" },
  { code: 9, name: "兄" },
  { code: 10, name: "弟" },
  { code: 11, name: "姉" },
  { code: 12, name: "妹" },
  { code: 13, name: "祖父" },
  { code: 14, name: "祖母" },
  { code: 15, name: "孫息子" },
  { code: 16, name: "孫娘" },
];

const App: React.FC = () => {
  // フォームを作成
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    // useFormの型引数に変換前と変換後の型を渡す
  } = useForm<Input, unknown, Output>({
    // フォームのデフォルト値を設定
    defaultValues: {
      name: undefined,
      age: 20,
      sex: undefined,
      email: undefined,
      phone: undefined,
      plan: undefined,
      birthday: {
        year: undefined,
        month: undefined,
        day: undefined,
      },
      family: [],
    },
    // 入力値のリゾルバーにZodを指定
    resolver: zodResolver(schema),
  });
  // 要素数が可変のフォームを作成
  const { fields, append, remove } = useFieldArray({
    control,
    name: "family",
  });

  // 登録ボタン押下時(zodによるバリデーション後に呼ばれる)
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
        {/* 年齢の入力項目 */}
        <div style={{ padding: "10px" }}>
          <div>年齢 (18才以下は登録不可)*</div>
          <input type="number" min={18} max={150} {...register("age")} />
          {errors.age?.message && (
            <div style={{ color: "red" }}>{errors.age.message}</div>
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
        {/* 契約プランの選択項目 */}
        <div style={{ padding: "10px" }}>
          <div>契約プラン*</div>
          <select {...register("plan")}>
            {plans.map((pref) => {
              return (
                <option key={pref.code} value={pref.code}>
                  {pref.name}
                </option>
              );
            })}
          </select>
          {errors.plan?.message && (
            <div style={{ color: "red" }}>{errors.plan.message}</div>
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
        {/* 家族情報の入力項目 */}
        <div style={{ padding: "10px" }}>
          <div style={{ display: "flex" }}>
            <div>家族*</div>
            {/* 項目追加ボタン */}
            <button
              type="button"
              onClick={() => append({ relationship: 1, name: "", age: 20 })}
            >
              追加
            </button>
          </div>
          {fields.map((field, index) => (
            <div key={field.id}>
              続柄*
              <select {...register(`family.${index}.relationship` as const)}>
                {relationship.map((pref) => {
                  return (
                    <option key={pref.code} value={pref.code}>
                      {pref.name}
                    </option>
                  );
                })}
              </select>
              , 氏名*:
              <input
                {...register(`family.${index}.name` as const)}
                defaultValue={field.name}
              />
              , 年齢*:
              <input
                {...register(`family.${index}.age` as const)}
                defaultValue={field.age}
                type="number"
                min={0}
                max={150}
              />
              {errors.plan?.message && (
                <div style={{ color: "red" }}>
                  {errors.family?.[index]?.relationship?.message}
                </div>
              )}
              {errors.family?.[index]?.name?.message && (
                <div style={{ color: "red" }}>
                  {errors.family?.[index]?.name?.message}
                </div>
              )}
              {errors.family?.[index]?.age?.message && (
                <div style={{ color: "red" }}>
                  {errors.family?.[index]?.age?.message}
                </div>
              )}
              <button type="button" onClick={() => remove(index)}>
                削除
              </button>
            </div>
          ))}
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
