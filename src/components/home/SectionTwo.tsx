import { Grid } from '@mui/material';
import John from '../../img/person.jpg'
import Bob from '../../img/person1.jpg'
import Anna from '../../img/person2.jpg'
import Britney from '../../img/person3.jpg'
import ReviewerCard from './ReviewerCard';

const reviewerUserNames = [
  {name: "John smith", photo: John},
  {name:"Bob Lewis", photo: Bob},
  {name:"Anna Calloway", photo: Anna},
  {name:"Britney Webster", photo: Britney}
]

const SectionTwo = () => {
  return <Grid container pb={4} spacing={2}>
    {reviewerUserNames.map(reviewer => (
      <ReviewerCard reviewer={reviewer} />
    ))}
  </Grid>;
};

export default SectionTwo;
