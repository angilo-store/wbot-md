let handler = async (m, { conn, text }) => {
m.reply('Hi 👋, I am Working')
handler.command = /^(Alive)$/i
handler.help = ['alive']
handler.tags = ['alivebot']
export default handler