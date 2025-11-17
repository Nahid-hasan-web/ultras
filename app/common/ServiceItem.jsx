const ServiceItem = ({ Icon, title, subtitle }) => (
  <div className="flex items-start gap-4">
    <div className="text-2xl text-primary mt-1"><Icon /></div>
    <div>
      <div className="text-[18px] font-semibold font-inter text-[#191919]">{title}</div>
      <div className="text-[14px] font-normal font-inter text-[#6B6B6B]">{subtitle}</div>
    </div>
  </div>
)


module.exports =ServiceItem