import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"

const questions = [
  //q = question, a = answer
  {
    q: "Do you have one-on-one sessions",
    a: "Yes, we do provide one-on-one sessions virtually based on demonstrated need. During the enrollment process, you will have the opportunity to apply for that package. Please contact us for more information.",
  },
  {
    q: "How will this program help me",
    a: "The skills and experiences you gain from this program will not only boost your current venture but will also be invaluable in whatever business you choose to pursue. Whether you choose to pursue entrepreneurship or another path, the problem-solving, leadership, and teamwork skills you develop here will serve you well.",
  },
]

export default function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {questions.map((i, idx) => (
        <AccordionItem value={`item-${idx + 1}`} key={idx}>
        <AccordionTrigger className="text-xl md:text-2xl">{i.q}</AccordionTrigger>
        <AccordionContent>
          {i.a}
        </AccordionContent>
      </AccordionItem>
      ))}
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl md:text-2xl">Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
