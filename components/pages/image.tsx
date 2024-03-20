import { useEffect, useState, useTransition } from 'react';
import { getWaifuTag, getSearchWaifu, getWaifuImage, getManyWaifuImages } from '@/data/waifu.im';
import Image from 'next/image';
import { Button } from '../ui/button';
import { addFavorite } from '@/actions/favorites';
import { FavoriteSchema } from '@/schemas';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import * as z from "zod";
import { useCurrentUser } from '@/hooks/use-current-user';
import { CgDanger } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { PopupMessage } from '../shared/popup';

interface TagData {
  versatile: string[];
  nsfw: string[];
}

interface ImageData {
  signature: string;
  extension: string;
  url: string;
  tags: { name: string }[];
}

const ImagePaging = () => {
  const [tags, setTags] = useState<TagData | null>(null);
  const [images, setImages] = useState<ImageData[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const user = useCurrentUser();

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const data = await getWaifuTag();
        setTags(data);
        console.log("Waifu.im:", data);
      } catch {
        setError("Tags not found!");
      }
    };
    fetchTags();
  }, []);

  const handleTagClick = async (tag: string) => {
    try {
      let imageData: ImageData[] = [];
      const data = await getSearchWaifu({ included_tags: [tag], many: true });

      const type = tag.endsWith("_sfw") || tag.includes("_sfw") ? "sfw" : "nsfw";
      const category = tag.split("_")[0];

      const response = await getWaifuImage(type, category);
      if (response && response.files) {
        imageData = response.files.map((url: string) => ({ url, tags: [{ name: tag }] }));
        setImages(imageData);
      } else {
        setImages(data.images);
      }
      setSelectedTags([tag]);
    } catch {
      setError("Images not found!");
    }
  };
  

  const handleFavorite = async (imageUrl: string) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      addFavorite({ email: user?.email ?? "", image: imageUrl }).then((data) => {
        if (data.error) {
          setError(data.error);
        }
        if (data.success) {
          setSuccess(data.success);
        }
      });
    });
  };

  const closeErrorPopup = () => {
    setError("");
  };

  const closeSuccessPopup = () => {
    setSuccess("");
  };

  return (
    <div className={`h-${selectedTags.length ? 'auto' : 'screen'} w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-zinc-900 py-24 px-4 flex item-start justify-center relative`}>
      <PopupMessage message={error} type="error" onClose={closeErrorPopup} />
      <PopupMessage message={success} type="success" onClose={closeSuccessPopup} />
      <div className='w-full space-y-6'>
        <div className='flex justify-center items-center'>
          {tags ? (
            <Accordion type="single" collapsible className=" md:w-[550px] w-full text-slate-100 rounded-md ">
              <AccordionItem value="item-1">
                <AccordionTrigger> All image </AccordionTrigger>
                <AccordionContent>
                  {tags.versatile.map((tag, index) => (
                    <Button variant="link" className='text-slate-100' size="lg" key={index} onClick={() => handleTagClick(tag)}>
                      {tag}
                    </Button>
                  ))}
                  {tags.nsfw.map((tag, index) => (
                    <Button variant="link" className='text-slate-100' size="lg" key={index} onClick={() => handleTagClick(tag)}>
                      {tag}
                    </Button>
                  ))}
                  {[...new Set([ "neko_sfw", "shinobu_sfw", "megumin_sfw", "bully_sfw", "cuddle_sfw", "cry_sfw", "hug_sfw", "awoo_sfw", "kiss_sfw", "lick_sfw", "pat_sfw", "smug_sfw", "bonk_sfw", "yeet_sfw", "blush_sfw", "smile_sfw", "wave_sfw", "highfive_sfw", "handhold_sfw", "nom_sfw", "bite_sfw", "glomp_sfw", "slap_sfw", "kill_sfw", "kick_sfw", "happy_sfw", "wink_sfw", "poke_sfw", "dance_sfw", "cringe_sfw","blowjob_nsfw"])].map((tag, index) => {
                    const displayTag = tag.replace("_sfw", "").replace("_nsfw", "");
                    return (
                      <Button variant="link" className='text-slate-100' size="lg" key={index} onClick={() => handleTagClick(tag)}>
                        {displayTag}
                      </Button>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
            <p className='text-slate-100'>Loading...</p>
          )}
        </div>
        <div className='w-full grid md:grid-cols-4 gap-2'>
          {images.map((image, index) => (
            <div key={index} className="relative">
              <Image src={image.url} width={300} height={300} alt={`Image ${index + 1}`} className='md:w-[450px] w-full md:h-[450px] h-[500px]' />
              <Button className="absolute top-2 right-2" onClick={() => handleFavorite(image.url)}>
                <MdFavorite />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagePaging;