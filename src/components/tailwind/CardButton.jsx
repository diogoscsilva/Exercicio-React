export function CardButton ({className = "", aria = ""}) {
  return <button className="self-end bg-primary w-[7rem] py-[0.3rem] px-[0.7rem] rounded-[8px] text-card transition all duration-200 outline-none hover:brightness-95 hover:scale-105 hover:border-[3px] hover:border-solid hover:border-card hover:shadow-[0_0_0_3px_var(--card-background)] dark:bg-card-dark dark:border dark:border-solid text-primary-dark dark:border-primary-dark dark:bg-primary-dark dark:hover:border-card-dark hover:shadow-[0_0_0_3px_var(--primary-dark)]" aria-label={aria} >
        Comprar
  </button>
}