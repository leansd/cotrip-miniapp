
export function generateTimeSlots(): Array<{ start: string; end: string; display: string }> {
  const timeSlots: Array<{ start: string; end: string; display: string }> = [];
  const startHours = Array.from({ length: 24 }, (_, hour) => hour);
  const startMinutes = ['01', '31'];

  for (const hour of startHours) {
    for (const minute of startMinutes) {
      const start = `${hour.toString().padStart(2, '0')}:${minute}`;
      const end = minute === '31' ? `${hour + 1}:00` : `${hour}:${minute === '01' ? '30' : '00'}`;
      const display = `${start}-${end}`;
      timeSlots.push({ start, end, display });
    }
  }
  return timeSlots;
}

export 
function formatTimeWithToday(dateString:string) {
  const currentTime = new Date();
  const [hours, minutes] = dateString.split(':').map(Number);
  // 设置时间部分
  currentTime.setHours(hours);
  currentTime.setMinutes(minutes);

  // 将时间格式化为 ISO 8601 格式
  const isoFormattedTime = currentTime.toISOString();

  return isoFormattedTime;
}