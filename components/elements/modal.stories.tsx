import { useState } from "react";
import Modal from "./modal";

export default {
  title: "Modal",
  component: Modal,
};

export const Small = () => {
  let [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open modal</button>
      <Modal size="small" open={open} onClose={() => setOpen(false)}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum
          cupiditate esse dolorem hic temporibus omnis, eveniet odit fuga alias
          minima quia, sunt deserunt. Mollitia fuga voluptate soluta ipsum
          similique.
        </p>
        <button onClick={() => setOpen(false)}>Close</button>
      </Modal>
    </>
  );
};

export const Medium = () => {
  let [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open modal</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          dolorem, facilis nostrum veritatis nihil aut. Aspernatur, laborum
          accusantium in veritatis et voluptatum molestias ipsam, fuga omnis
          sunt architecto quos dolores! Blanditiis quisquam quos, optio iste,
          corrupti neque fugiat dolore dolorem ex quam ratione porro commodi
          mollitia sunt rerum tempora dignissimos ea enim explicabo ab
          veritatis! Consequuntur itaque facere modi saepe.
        </p>
        <button onClick={() => setOpen(false)}>Close</button>
      </Modal>
    </>
  );
};

export const Large = () => {
  let [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open modal</button>
      <Modal size="large" open={open} onClose={() => setOpen(false)}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati,
          saepe itaque totam, ea eius dolores quae adipisci temporibus dolore
          fugit ipsa expedita iure maiores suscipit, explicabo maxime provident
          porro illo? Nesciunt id, ea suscipit voluptatem odio illo est
          laudantium voluptas, culpa libero nisi, alias mollitia dolorum fuga.
          Hic aspernatur deleniti quo, id totam ducimus quasi dicta recusandae,
          accusamus consequatur temporibus! Eveniet cupiditate exercitationem
          omnis consectetur perferendis consequuntur esse, consequatur quia,
          ipsa impedit voluptatem quis suscipit adipisci vitae maiores unde.
          Placeat recusandae voluptatibus ratione sequi, totam molestias
          voluptates quam. Obcaecati, perferendis.
        </p>
        <button onClick={() => setOpen(false)}>Close</button>
      </Modal>
    </>
  );
};

export const Form = () => {
  let [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open modal</button>
      <Modal as="form" open={open} onClose={() => setOpen(false)}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          dolorem, facilis nostrum veritatis nihil aut. Aspernatur, laborum
          accusantium in veritatis et voluptatum molestias ipsam, fuga omnis
          sunt architecto quos dolores! Blanditiis quisquam quos, optio iste,
          corrupti neque fugiat dolore dolorem ex quam ratione porro commodi
          mollitia sunt rerum tempora dignissimos ea enim explicabo ab
          veritatis! Consequuntur itaque facere modi saepe.
        </p>
        <button
          onClick={(event) => {
            event.preventDefault();
            setOpen(false);
          }}>
          Close
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();
            setOpen(false);
          }}>
          Submit
        </button>
      </Modal>
    </>
  );
};

export const Nested = () => {
  let [modal, setModal] = useState({
    first: false,
    second: false,
  });

  return (
    <>
      <button onClick={() => setModal({ ...modal, first: true })}>
        Open first modal
      </button>
      <Modal
        open={modal.first}
        onClose={() => setModal({ ...modal, first: false })}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
          cupiditate temporibus inventore eveniet illum, sint laudantium amet
          repellat quos ex ab magni obcaecati harum tenetur consectetur
          excepturi accusantium neque! Et!
        </p>
        <button onClick={() => setModal({ ...modal, second: true })}>
          Open second modal
        </button>
        <br />
        <button onClick={() => setModal({ ...modal, first: false })}>
          Close
        </button>
      </Modal>

      <Modal
        size="large"
        open={modal.second}
        onClose={() => setModal({ ...modal, second: false })}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
          cupiditate temporibus inventore eveniet illum, sint laudantium amet
          repellat quos ex ab magni obcaecati harum tenetur consectetur
          excepturi accusantium neque! Et!
        </p>
        <button onClick={() => setModal({ ...modal, second: false })}>
          Close
        </button>
      </Modal>
    </>
  );
};
