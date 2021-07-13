import MainGrid from '../src/componentes/MainGrid'
import Box from '../src/componentes/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/alurakutcommons';
import { ProfileRelationsBoxWrapper } from '../src/componentes/ProfileRelations';


/**Criando componente (sempre maiusculo pq nao é tag) 
 * Tudo que está dentro da crase é css
 * 
*/

function ProfileSidebar(propriedades){
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser }.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}



export default function Home() {
  const githubUser  = 'peas';
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div  className="profileArea" style={{ gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser={githubUser } />
        </div>
        <div  className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">
              Bem vindo(a) 
            </h1>
            <OrkutNostalgicIconSet />

          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <Box>
              <h2 className="smallTitle">
                Pessoas da comunidade ({pessoasFavoritas.length})
              </h2>            
              <ul>
                {pessoasFavoritas.map((itemAtual) => {
                  return (
                    <li>
                      <a href={`/users/${itemAtual}`} key={itemAtual}>
                        <img src={`https://github.com/${itemAtual}.png`} />
                        <span>{itemAtual}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </Box>
          </ProfileRelationsBoxWrapper>

        </div>
      </MainGrid>
    </>
  )
}
