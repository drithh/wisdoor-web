import { useEffect, useState } from 'react';
import { DoorButton } from '../components/button';
import { useDoorStore } from '../store';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { DoorAccordionItem } from '../components/accordion';
import { cn } from '@/lib/utils';
import { priceFormatPerThousand } from '@/lib/price-format';

interface Color {
  name: string;
  colorClass: string;
}

interface Finishing {
  name: string;
  price: number;
  color: Color[];
}

interface finishingFrameProps {
  finishings: Finishing[];
  className?: string;
}

export const FinishingFrame = (props: finishingFrameProps) => {
  // const storage = useDoorStore((state) => ({
  //   frameFinishing: state.frameFinishing,
  //   setFrameFinishing: state.setFrameFinishing,
  // }));
  // const [accordionValue, setAccordionValue] = useState(
  //   storage.frameFinishing?.name
  // );
  // useEffect(() => {
  //   setAccordionValue(storage.frameFinishing?.name);
  // }, [storage.frameFinishing?.name]);
  // return (
  //   <Accordion
  //     collapsible
  //     type="single"
  //     className="flex font-text flex-col gap-4 w-full"
  //     value={accordionValue}
  //     onValueChange={(value) => {
  //       setAccordionValue(value);
  //     }}
  //   >
  //     {props.finishings?.map((finishing) =>
  //       finishing.color?.length > 0 ? (
  //         <DoorAccordionItem
  //           key={finishing.name}
  //           isActive={finishing.name === storage.frameFinishing?.name}
  //           value={finishing.name}
  //           onClick={() => {
  //             if (storage.frameFinishing?.name !== finishing.name) {
  //               storage.setFrameFinishing({
  //                 name: finishing.name,
  //                 price: finishing.price,
  //                 color: finishing.color[0].name,
  //               });
  //             }
  //           }}
  //         >
  //           <AccordionTrigger className="hover:no-underline text-sm px-2 py-3 w-full h-full flex justify-start rounded-sm hover:opacity-100  hover:bg-gray-100">
  //             <div className="flex w-full place-content-between">
  //               <p>{finishing.name}</p>
  //               {finishing.price !== 0 && (
  //                 <p className="text-sm text-emerald-700">
  //                   {priceFormatPerThousand(finishing.price)}
  //                 </p>
  //               )}
  //             </div>
  //           </AccordionTrigger>
  //           <AccordionContent className="grid grid-cols-2 gap-4 2 ">
  //             {finishing.color.map((color) => (
  //               <DoorButton
  //                 key={color.name}
  //                 onClick={() => {
  //                   storage.setFrameFinishing({
  //                     name: finishing.name,
  //                     price: finishing.price,
  //                     color: color.name,
  //                   });
  //                 }}
  //                 isActive={false}
  //                 className={cn(
  //                   'flex h-full gap-2 hover:bg-gray-200 flex-col px-2 items-center cursor-pointer bg-transparent',
  //                   {
  //                     'opacity-100 bg-gray-200 animate-expand':
  //                       color.name === storage.frameFinishing?.color,
  //                   }
  //                 )}
  //               >
  //                 <div
  //                   className={cn(
  //                     'w-12 h-12 rounded-full  border-2  border-gray-300 flex items-center justify-center overflow-hidden peer-aria-checked:border-primary transition-colors bg-',
  //                     color.colorClass
  //                   )}
  //                 ></div>
  //                 <p className="whitespace-pre-wrap text-sm text-center transition-colors">
  //                   {color.name}
  //                 </p>
  //               </DoorButton>
  //             ))}
  //           </AccordionContent>
  //         </DoorAccordionItem>
  //       ) : (
  //         <DoorButton
  //           key={finishing.name}
  //           onClick={() => {
  //             setAccordionValue('');
  //             storage.setFrameFinishing({
  //               name: finishing.name,
  //               price: finishing.price,
  //               color: '',
  //             });
  //           }}
  //           isActive={finishing.name === storage.frameFinishing?.name}
  //         >
  //           {finishing.name}
  //         </DoorButton>
  //       )
  //     )}
  //   </Accordion>
  // );
};
