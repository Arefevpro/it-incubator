```javascript
<Appo>
<Headerr>Header</Headerr>
<Aside>Aside</Aside>
<Main>
<Wrapper>
  <Box>Box</Box>
  <Box>Box</Box>
  <Box>Box</Box>
  <Box>Box</Box>
  <Box>Box</Box>
  <Box>Box</Box>
  <Box>Box</Box>
</Wrapper>
<Content>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
</Content>

</Main>
</Appo>







const Appo = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "header header"
    "aside main";
  height: 100vh;
`

const Headerr = styled.header`
  background-color: aliceblue;
  grid-area: header;
  border: 2px solid;

`

const Aside = styled.aside`
  grid-area: aside;
  background-color: #000;
  border: 2px solid;
`


const Main = styled.main`
  grid-area: main;
  background-color: #702b2b;
  border: 2px solid;
  overflow: hidden;
`

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border: 2px solid;
  overflow: auto;
` 

const Box = styled.div`
  background-color: #196225;
  border: 2px solid;
  min-width: 250px;
  min-height: 70px;
`

const Content = styled.p`
  padding: 10px;
  background-color: #19252f;
  overflow: auto;
  height: calc(100% - 110px);
`




```