import jdoodle from "jdoodle-api"
let handler = async (m,{conn,text})=>{

  let code = text.split('#')
  let lang = code[1]
  code = code[0]
  
const language = {
	languageCode: lang,
	versionIndex: 2
}

const script = code

jdoodle(language, script).then((result) => {
	m.reply(result.output)
})
}
handler.command = 'run'
export default handler