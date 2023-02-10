import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import StarIcon from './assets/icon-star.svg';

function App() {
  const [selected, setSelected] = useState();

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex max-w-[330px] flex-col justify-between gap-4 rounded-2xl bg-_dark-blue/60 p-6 shadow-md">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-_dark-blue">
          <img src={StarIcon} alt="star icon" />
        </div>
        <h1 className="text-2xl font-semibold text-white">How did we do?</h1>

        <p className="text-_light-gray">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <RatingSelection />

        <button className="rounded-full bg-_orange py-3 uppercase tracking-wider text-white hover:bg-white hover:text-_orange">
          Submit
        </button>
      </div>

      {/* TODO: Thank You state */}

      {/* TODO: Attribution */}
    </main>
  );
}

const RatingSelection = () => {
  const [rating, setRating] = useState();

  return (
    <RadioGroup
      value={rating}
      onChange={setRating}
      className="flex justify-between py-2 text-_light-gray"
    >
      <RadioGroup.Option
        value={1}
        as="div"
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-_dark-blue hover:bg-_orange hover:text-white ui-checked:bg-_medium-gray ui-checked:text-white"
      >
        <p className="translate-y-0.5">1</p>
      </RadioGroup.Option>
      <RadioGroup.Option
        value={2}
        as="div"
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-_dark-blue hover:bg-_orange hover:text-white ui-checked:bg-_medium-gray ui-checked:text-white"
      >
        <p className="translate-y-0.5">2</p>
      </RadioGroup.Option>
      <RadioGroup.Option
        value={3}
        as="div"
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-_dark-blue hover:bg-_orange hover:text-white ui-checked:bg-_medium-gray ui-checked:text-white"
      >
        <p className="translate-y-0.5">3</p>
      </RadioGroup.Option>
      <RadioGroup.Option
        value={4}
        as="div"
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-_dark-blue hover:bg-_orange hover:text-white ui-checked:bg-_medium-gray ui-checked:text-white"
      >
        <p className="translate-y-0.5">4</p>
      </RadioGroup.Option>
      <RadioGroup.Option
        value={5}
        as="div"
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-_dark-blue hover:bg-_orange hover:text-white ui-checked:bg-_medium-gray ui-checked:text-white"
      >
        <p className="translate-y-0.5">5</p>
      </RadioGroup.Option>
    </RadioGroup>
  );
};

const ThankYou = () => {
  return (
    <div>
      <p>
        You selected <span>ADD RATING HERE</span> out of 5
      </p>

      <p>Thank you!</p>

      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

const Attribution = () => {
  return (
    <div>
      Challenge by{' '}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a href="https://www.frontendmentor.io/profile/orphandeity">
        Jeff R Williams
      </a>
      .
    </div>
  );
};

export default App;
