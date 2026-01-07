import styles from "./FormItem.module.css";

const FormItem = ({
  label,
  name,
  type = "text",
  value,
  placeholder,
  min,
  error,
  onChange,
}) => {
  const handleChange = (e) => {
    let val = e.target.value;

    if (type === "number") {
      val = val === "" ? "" : Number(val);
    }

    onChange(val);
  };

  return (
    <div className={styles.formItem}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>

      <input
        id={name}
        className={`${styles.input} ${error ? styles.inputError : ""}`}
        type={type}
        value={value}
        placeholder={placeholder}
        min={min}
        onChange={handleChange}
        onKeyDown={
          type === "number"
            ? (e) => {
                if (["e", "E", "+", "-", "."].includes(e.key)) {
                  e.preventDefault();
                }
              }
            : undefined
        }
      />

      <p className={styles.error}>{error || ""}</p>
    </div>
  );
};

export default FormItem;
