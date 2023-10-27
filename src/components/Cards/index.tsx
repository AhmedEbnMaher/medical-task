import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import styles from './index.module.scss';
type Props = {
  maxWidth: string;
  bottomSectionHeight: number;
  bottomSectionColor: string;
  bottomSectionbackground: string;
  cardHeight: number;
  cardImgHeight: number;
  cardTitle?: string;
  cardSubTitle: string;
  cardTitleColor: string;
  cardSubTitleColor: string;
  cardImgUrl: string;
  data?: any;
  handelClick: (value: any) => void;
};
export default function Cards({
  maxWidth,
  bottomSectionHeight,
  bottomSectionColor,
  bottomSectionbackground,
  cardHeight,
  cardImgHeight,
  cardTitle,
  cardSubTitle,
  cardTitleColor,
  cardSubTitleColor,
  cardImgUrl,
  data,
  handelClick,
}: Props) {
  return (
    <Card
      sx={{
        maxWidth: maxWidth,
        height: cardHeight,
        cardImgHeight,
        border: '1px solid #ccc',
        borderRadius: '10px',
      }}
      onClick={() => {
        handelClick(data);
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height={`${cardImgHeight}`}
          image={`${cardImgUrl}`}
          alt="green iguana"
        />

        <CardContent
          style={{
            height: `${bottomSectionHeight}px`,
            color: `${bottomSectionColor}`,
            backgroundColor: `${bottomSectionbackground}`,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ textAlign: 'left' }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className={styles.cardTitle}
              color={cardTitleColor}
            >
              {cardTitle}
            </Typography>
            <Box color={cardSubTitleColor}>
              <Typography
                variant="body2"
                color={cardSubTitleColor}
                className={styles.cardSubTitle}
              >
                {cardSubTitle}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
