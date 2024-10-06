export default function RatingBadge({ rating, justify, className }: { rating: number, justify?: "start" | "end" | undefined, className?: string }) {
    return (
        <h3 style={{color: "rgba(255, 255, 255," + rating / 8 + ")"}} className={["flex flex-row items-center gap-2  justify-" + (justify ? justify : "end"), className!].join(' ')}>
            {Math.round(rating * 100) / 100}
            <svg className="mb-[0.1rem]" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"
                fill={"rgba(59,130,255," + (rating * 10 / 80 - 0.5) + ")"}>
                <path d="M11.0748 3.25583C11.4141 2.42845 12.5859 2.42845 12.9252 3.25583L14.6493 7.45955C14.793 7.80979 15.1221 8.04889 15.4995 8.07727L20.0303 8.41798C20.922 8.48504 21.2841 9.59942 20.6021 10.1778L17.1369 13.1166C16.8482 13.3614 16.7225 13.7483 16.8122 14.1161L17.8882 18.5304C18.1 19.3992 17.152 20.0879 16.3912 19.618L12.5255 17.2305C12.2034 17.0316 11.7966 17.0316 11.4745 17.2305L7.60881 19.618C6.84796 20.0879 5.90001 19.3992 6.1118 18.5304L7.18785 14.1161C7.2775 13.7483 7.1518 13.3614 6.86309 13.1166L3.3979 10.1778C2.71588 9.59942 3.07796 8.48504 3.96971 8.41798L8.50046 8.07727C8.87794 8.04889 9.20704 7.80979 9.35068 7.45955L11.0748 3.25583Z"
                    stroke={"rgba(" + 59 * rating * 10 / 100 + "," + 130 * rating * 10 / 100 + "," + (rating * 10 / 100 * 255) + ")"} strokeWidth={rating * 10 / 30} />
            </svg>
        </h3>
    )
}