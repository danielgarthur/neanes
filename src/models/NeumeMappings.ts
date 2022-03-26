import {
  Neume,
  TimeNeume,
  QuantitativeNeume,
  Fthora,
  Accidental,
  TempoSign,
  VocalExpressionNeume,
  RootSign,
  Note,
  GorgonNeume,
  ModeSign,
  MeasureBar,
  MeasureNumber,
  NoteIndicator,
  Ison,
} from '@/models/Neumes';

import glyphnames from '@/assets/fonts/sbmufl/glyphnames.json';

export interface NeumeMapping {
  text: string;
  salt?: number;
}

interface NeumeToSbmuflMapping {
  glyph: keyof typeof glyphnames;
  salt?: number;
}

function mapNeumeToSbmufl(
  neume: Neume,
  glyph: keyof typeof glyphnames,
  salt?: number,
) {
  neumeToSbmuflGlyphMap.set(neume, { glyph, salt });
}

const neumeToSbmuflGlyphMap = new Map<Neume, NeumeToSbmuflMapping>();

mapNeumeToSbmufl(QuantitativeNeume.Ison, 'ison');
mapNeumeToSbmufl(QuantitativeNeume.Oligon, 'oligon');
mapNeumeToSbmufl(
  QuantitativeNeume.OligonPlusKentimaBelow,
  'oligonKentimaBelow',
);
mapNeumeToSbmufl(
  QuantitativeNeume.OligonPlusKentimaAbove,
  'oligonKentimaAbove',
);
mapNeumeToSbmufl(QuantitativeNeume.OligonPlusHypsiliRight, 'oligonYpsiliRight');
mapNeumeToSbmufl(QuantitativeNeume.OligonPlusHypsiliLeft, 'oligonYpsiliLeft');
mapNeumeToSbmufl(
  QuantitativeNeume.OligonPlusHypsiliPlusKentimaHorizontal,
  'oligonYpsiliKentimaRight',
);
mapNeumeToSbmufl(
  QuantitativeNeume.OligonPlusHypsiliPlusKentimaVertical,
  'oligonYpsiliKentimaMiddle',
);
mapNeumeToSbmufl(
  QuantitativeNeume.OligonPlusDoubleHypsili,
  'oligonDoubleYpsili',
);
mapNeumeToSbmufl(QuantitativeNeume.PetastiWithIson, 'petastiIson');
mapNeumeToSbmufl(QuantitativeNeume.Petasti, 'petasti');
mapNeumeToSbmufl(QuantitativeNeume.PetastiPlusOligon, 'petastiOligon');
mapNeumeToSbmufl(QuantitativeNeume.PetastiPlusKentimaAbove, 'petastiKentima');
mapNeumeToSbmufl(
  QuantitativeNeume.PetastiPlusHypsiliRight,
  'petastiYpsiliRight',
);
mapNeumeToSbmufl(QuantitativeNeume.PetastiPlusHypsiliLeft, 'petastiYpsiliLeft');
mapNeumeToSbmufl(
  QuantitativeNeume.PetastiPlusHypsiliPlusKentimaHorizontal,
  'petastiYpsiliKentimaRight',
);
mapNeumeToSbmufl(
  QuantitativeNeume.PetastiPlusHypsiliPlusKentimaVertical,
  'petastiYpsiliKentimaMiddle',
);
mapNeumeToSbmufl(
  QuantitativeNeume.PetastiPlusDoubleHypsili,
  'petastiDoubleYpsili',
);
mapNeumeToSbmufl(QuantitativeNeume.Apostrophos, 'apostrofos');
mapNeumeToSbmufl(QuantitativeNeume.Elaphron, 'elafron');
mapNeumeToSbmufl(QuantitativeNeume.Apostrophos, 'apostrofos');
mapNeumeToSbmufl(
  QuantitativeNeume.ElaphronPlusApostrophos,
  'elafronApostrofos',
);
mapNeumeToSbmufl(QuantitativeNeume.Hamili, 'chamili');
mapNeumeToSbmufl(QuantitativeNeume.HamiliPlusApostrophos, 'chamiliApostrofos');
mapNeumeToSbmufl(QuantitativeNeume.HamiliPlusElaphron, 'chamiliElafron');
mapNeumeToSbmufl(
  QuantitativeNeume.HamiliPlusElaphronPlusApostrophos,
  'chamiliElafronApostrofos',
);
mapNeumeToSbmufl(QuantitativeNeume.DoubleHamili, 'doubleChamili');
mapNeumeToSbmufl(QuantitativeNeume.PetastiPlusApostrophos, 'petastiApostrofos');
mapNeumeToSbmufl(QuantitativeNeume.PetastiPlusElaphron, 'petastiElafron');
mapNeumeToSbmufl(
  QuantitativeNeume.PetastiPlusElaphronPlusApostrophos,
  'petastiElafronApostrofos',
);
mapNeumeToSbmufl(QuantitativeNeume.OligonPlusKentemata, 'oligonKentimataAbove');
mapNeumeToSbmufl(QuantitativeNeume.KentemataPlusOligon, 'oligonKentimataBelow');
mapNeumeToSbmufl(
  QuantitativeNeume.OligonPlusIsonPlusKentemata,
  'oligonIsonKentimata',
);
mapNeumeToSbmufl(
  QuantitativeNeume.OligonPlusApostrophosPlusKentemata,
  'oligonApostrofosKentimata',
);
mapNeumeToSbmufl(
  QuantitativeNeume.OligonPlusHyporoePlusKentemata,
  'oligonYporroiKentimata',
);
mapNeumeToSbmufl(
  QuantitativeNeume.OligonPlusElaphronPlusKentemata,
  'oligonElafronKentimata',
);
mapNeumeToSbmufl(
  QuantitativeNeume.OligonPlusElaphronPlusApostrophosPlusKentemata,
  'oligonElafronApostrofosKentimata',
);
mapNeumeToSbmufl(
  QuantitativeNeume.OligonPlusHamiliPlusKentemata,
  'oligonChamiliKentimata',
);
mapNeumeToSbmufl(QuantitativeNeume.RunningElaphron, 'runningElafron');
mapNeumeToSbmufl(QuantitativeNeume.Hyporoe, 'yporroi');
mapNeumeToSbmufl(
  QuantitativeNeume.PetastiPlusRunningElaphron,
  'petastiRunningElafron',
);
mapNeumeToSbmufl(QuantitativeNeume.PetastiPlusHyporoe, 'petastiYporroi');
mapNeumeToSbmufl(QuantitativeNeume.OligonPlusIson, 'oligonIson');
mapNeumeToSbmufl(QuantitativeNeume.OligonPlusApostrophos, 'oligonApostrofos');
mapNeumeToSbmufl(QuantitativeNeume.OligonPlusElaphron, 'oligonElafron');
mapNeumeToSbmufl(
  QuantitativeNeume.OligonPlusElaphronPlusApostrophos,
  'oligonElafronApostrofos',
);
mapNeumeToSbmufl(QuantitativeNeume.Kentima, 'kentima');
mapNeumeToSbmufl(QuantitativeNeume.OligonPlusKentima, 'oligonKentimaMiddle');
mapNeumeToSbmufl(QuantitativeNeume.Kentemata, 'kentimata');
mapNeumeToSbmufl(
  QuantitativeNeume.OligonPlusRunningElaphronPlusKentemata,
  'oligonRunningElafronKentimata',
);
mapNeumeToSbmufl(QuantitativeNeume.DoubleApostrophos, 'apostrofosSyndesmos');
mapNeumeToSbmufl(QuantitativeNeume.IsonPlusApostrophos, 'isonApostrofos');
mapNeumeToSbmufl(
  QuantitativeNeume.OligonPlusKentemataPlusHypsiliLeft,
  'oligonKentimataYpsiliLeft',
);
mapNeumeToSbmufl(
  QuantitativeNeume.OligonPlusKentemataPlusHypsiliRight,
  'oligonKentimataYpsiliRight',
);
mapNeumeToSbmufl(QuantitativeNeume.Cross, 'stavros');
mapNeumeToSbmufl(QuantitativeNeume.VareiaDotted, 'leimma1');
mapNeumeToSbmufl(GorgonNeume.Gorgon_Top, 'gorgonAbove');
mapNeumeToSbmufl(GorgonNeume.Gorgon_Bottom, 'gorgonBelow');
mapNeumeToSbmufl(GorgonNeume.Gorgon_Hyporoe, 'gorgonYporroi');
mapNeumeToSbmufl(GorgonNeume.Digorgon, 'digorgon');
mapNeumeToSbmufl(GorgonNeume.Trigorgon, 'trigorgon');
mapNeumeToSbmufl(GorgonNeume.GorgonDottedLeft, 'gorgonDottedLeft');
mapNeumeToSbmufl(GorgonNeume.GorgonDottedRight, 'gorgonDottedRight');
mapNeumeToSbmufl(GorgonNeume.DigorgonDottedLeft1, 'digorgonDottedLeftBelow');
mapNeumeToSbmufl(GorgonNeume.DigorgonDottedLeft2, 'digorgonDottedLeftAbove');
mapNeumeToSbmufl(GorgonNeume.DigorgonDottedRight, 'digorgonDottedRight');
mapNeumeToSbmufl(GorgonNeume.TrigorgonDottedLeft1, 'trigorgonDottedLeftBelow');
mapNeumeToSbmufl(GorgonNeume.TrigorgonDottedLeft2, 'trigorgonDottedLeftAbove');
mapNeumeToSbmufl(GorgonNeume.TrigorgonDottedRight, 'trigorgonDottedRight');
mapNeumeToSbmufl(GorgonNeume.Argon, 'argon');
mapNeumeToSbmufl(GorgonNeume.Hemiolion, 'diargon');
mapNeumeToSbmufl(GorgonNeume.Diargon, 'triargon');
mapNeumeToSbmufl(TimeNeume.Klasma_Top, 'klasmaAbove');
mapNeumeToSbmufl(TimeNeume.Klasma_Bottom, 'klasmaBelow');
mapNeumeToSbmufl(TimeNeume.Hapli, 'apli');
mapNeumeToSbmufl(TimeNeume.Dipli, 'dipli');
mapNeumeToSbmufl(TimeNeume.Tripli, 'tripli');

mapNeumeToSbmufl(Fthora.DiatonicNiLow_Top, 'fthoraDiatonicNiLowAbove'),
  mapNeumeToSbmufl(Fthora.DiatonicPa_Top, 'fthoraDiatonicPaAbove');
mapNeumeToSbmufl(Fthora.DiatonicVou_Top, 'fthoraDiatonicVouAbove');
mapNeumeToSbmufl(Fthora.DiatonicGa_Top, 'fthoraDiatonicGaAbove');
mapNeumeToSbmufl(Fthora.DiatonicThi_Top, 'fthoraDiatonicDiAbove');
mapNeumeToSbmufl(Fthora.DiatonicKe_Top, 'fthoraDiatonicKeAbove');
mapNeumeToSbmufl(Fthora.DiatonicZo_Top, 'fthoraDiatonicZoAbove');
mapNeumeToSbmufl(Fthora.DiatonicNiHigh_Top, 'fthoraDiatonicNiHighAbove');
mapNeumeToSbmufl(Fthora.HardChromaticPa_Top, 'fthoraHardChromaticPaAbove');
mapNeumeToSbmufl(Fthora.HardChromaticThi_Top, 'fthoraHardChromaticDiAbove');
mapNeumeToSbmufl(Fthora.SoftChromaticThi_Top, 'fthoraSoftChromaticDiAbove');
mapNeumeToSbmufl(Fthora.SoftChromaticPa_Top, 'fthoraSoftChromaticKeAbove');
mapNeumeToSbmufl(Fthora.Enharmonic_Top, 'fthoraEnharmonicAbove');
mapNeumeToSbmufl(Fthora.Zygos_Top, 'chroaZygosAbove');
mapNeumeToSbmufl(Fthora.Kliton_Top, 'chroaKlitonAbove');
mapNeumeToSbmufl(Fthora.Spathi_Top, 'chroaSpathiAbove');
mapNeumeToSbmufl(Fthora.GeneralSharp_Top, 'diesisGenikiAbove');
mapNeumeToSbmufl(Fthora.GeneralFlat_Top, 'yfesisGenikiAbove');
mapNeumeToSbmufl(Fthora.DiatonicNiLow_Bottom, 'fthoraDiatonicNiLowBelow');
mapNeumeToSbmufl(Fthora.DiatonicPa_Bottom, 'fthoraDiatonicPaBelow');
mapNeumeToSbmufl(Fthora.DiatonicThi_Bottom, 'fthoraDiatonicDiBelow');
mapNeumeToSbmufl(Fthora.DiatonicKe_Bottom, 'fthoraDiatonicKeBelow');
mapNeumeToSbmufl(Fthora.DiatonicNiHigh_Bottom, 'fthoraDiatonicNiHighBelow');
mapNeumeToSbmufl(Fthora.HardChromaticPa_Bottom, 'fthoraHardChromaticPaBelow');
mapNeumeToSbmufl(Fthora.HardChromaticThi_Bottom, 'fthoraHardChromaticDiBelow');
mapNeumeToSbmufl(Fthora.SoftChromaticThi_Bottom, 'fthoraSoftChromaticDiBelow');
mapNeumeToSbmufl(Fthora.SoftChromaticPa_Bottom, 'fthoraSoftChromaticKeBelow');
mapNeumeToSbmufl(Fthora.Enharmonic_Bottom, 'fthoraEnharmonicBelow');
mapNeumeToSbmufl(Fthora.Zygos_Bottom, 'chroaZygosBelow');
mapNeumeToSbmufl(Fthora.Kliton_Bottom, 'chroaKlitonBelow');
mapNeumeToSbmufl(Fthora.GeneralSharp_Bottom, 'diesisGenikiBelow');
mapNeumeToSbmufl(Fthora.GeneralFlat_Bottom, 'yfesisGenikiBelow');
mapNeumeToSbmufl(Accidental.Sharp_2_Left, 'diesis2');
mapNeumeToSbmufl(Accidental.Sharp_4_Left, 'diesis4');
mapNeumeToSbmufl(Accidental.Sharp_6_Left, 'diesis6');
mapNeumeToSbmufl(Accidental.Flat_2_Right, 'yfesis2');
mapNeumeToSbmufl(Accidental.Flat_4_Right, 'yfesis4');
mapNeumeToSbmufl(Accidental.Flat_6_Right, 'yfesis6');
mapNeumeToSbmufl(TempoSign.VerySlow, 'agogiPoliArgi');
mapNeumeToSbmufl(TempoSign.Slower, 'agogiArgoteri');
mapNeumeToSbmufl(TempoSign.Slow, 'agogiArgi');
mapNeumeToSbmufl(TempoSign.Moderate, 'agogiMetria');
mapNeumeToSbmufl(TempoSign.Medium, 'agogiMesi');
mapNeumeToSbmufl(TempoSign.Quick, 'agogiGorgi');
mapNeumeToSbmufl(TempoSign.Quicker, 'agogiGorgoteri');
mapNeumeToSbmufl(TempoSign.VeryQuick, 'agogiPoliGorgi');
mapNeumeToSbmufl(VocalExpressionNeume.Vareia, 'vareia');
mapNeumeToSbmufl(VocalExpressionNeume.HomalonConnecting, 'omalonConnecting');
mapNeumeToSbmufl(VocalExpressionNeume.Homalon, 'omalon');
mapNeumeToSbmufl(VocalExpressionNeume.Antikenoma, 'antikenoma');
mapNeumeToSbmufl(VocalExpressionNeume.Psifiston, 'psifiston');
mapNeumeToSbmufl(VocalExpressionNeume.Heteron, 'heteron');
mapNeumeToSbmufl(RootSign.Delta, 'martyriaDeltaBelow');
mapNeumeToSbmufl(RootSign.Alpha, 'martyriaAlphaBelow');
mapNeumeToSbmufl(RootSign.Legetos, 'martyriaLegetosBelow');
mapNeumeToSbmufl(RootSign.Nana, 'martyriaNanaBelow');
mapNeumeToSbmufl(RootSign.Zo, 'martyriaZoBelow');
mapNeumeToSbmufl(RootSign.Squiggle, 'martyriaHardChromaticPaBelow');
mapNeumeToSbmufl(RootSign.Tilt, 'martyriaHardChromaticDiBelow');
mapNeumeToSbmufl(
  RootSign.SoftChromaticSquiggle,
  'martyriaSoftChromaticDiBelow',
);
mapNeumeToSbmufl(RootSign.Zygos, 'martyriaZygosBelow');
mapNeumeToSbmufl(RootSign.DeltaDotted, 'martyriaDeltaDottedBelow');
mapNeumeToSbmufl(RootSign.AlphaDotted, 'martyriaAlphaDottedBelow');
mapNeumeToSbmufl(
  RootSign.SoftChromaticPaRootSign,
  'martyriaSoftChromaticKeBelow',
);
mapNeumeToSbmufl(RootSign.AlphaLow, 'martyriaAlphaAbove');
mapNeumeToSbmufl(RootSign.DeltaLow, 'martyriaDeltaAbove');
mapNeumeToSbmufl(RootSign.NanaLow, 'martyriaNanaAbove');
mapNeumeToSbmufl(Note.GaLow, 'martyriaNoteGaLow');
mapNeumeToSbmufl(Note.ThiLow, 'martyriaNoteDiLow');
mapNeumeToSbmufl(Note.KeLow, 'martyriaNoteKeLow');
mapNeumeToSbmufl(Note.Zo, 'martyriaNoteZo');
mapNeumeToSbmufl(Note.Ni, 'martyriaNoteNi');
mapNeumeToSbmufl(Note.Pa, 'martyriaNotePa');
mapNeumeToSbmufl(Note.Vou, 'martyriaNoteVou');
mapNeumeToSbmufl(Note.Ga, 'martyriaNoteGa');
mapNeumeToSbmufl(Note.Thi, 'martyriaNoteDi');
mapNeumeToSbmufl(Note.Ke, 'martyriaNoteKe');
mapNeumeToSbmufl(Note.Apostrophe, 'martyriaTick');
mapNeumeToSbmufl(ModeSign.Ekhos, 'modeWordEchos');
mapNeumeToSbmufl(ModeSign.Plagal, 'modePlagal');
mapNeumeToSbmufl(ModeSign.First, 'modeAlpha');
mapNeumeToSbmufl(ModeSign.Second, 'modeBeta');
mapNeumeToSbmufl(ModeSign.Third, 'modeGamma');
mapNeumeToSbmufl(ModeSign.Fourth, 'modeDelta');
mapNeumeToSbmufl(ModeSign.FirstCapital, 'modeAlphaCapital');
mapNeumeToSbmufl(ModeSign.SecondCapital, 'modeBetaCapital');
mapNeumeToSbmufl(ModeSign.ThirdCapital, 'modeGammaCapital');
mapNeumeToSbmufl(ModeSign.FourthCapital, 'modeDeltaCapital');
mapNeumeToSbmufl(ModeSign.Varys, 'modeWordVarys');
mapNeumeToSbmufl(ModeSign.Alpha, 'modePlagalFirst');
mapNeumeToSbmufl(ModeSign.AlphaWithDeltaHat, 'modeFirst', 1);
mapNeumeToSbmufl(ModeSign.AlphaWithHypsili, 'modeFirst');
mapNeumeToSbmufl(ModeSign.SoftChromatic6, 'modePlagalSecond');
mapNeumeToSbmufl(ModeSign.SoftChromatic2, 'modeSecond');
mapNeumeToSbmufl(ModeSign.Nana, 'modeThirdNana');
mapNeumeToSbmufl(ModeSign.VarysZo, 'modeVarys');
mapNeumeToSbmufl(ModeSign.Delta, 'modePlagalFourth');
mapNeumeToSbmufl(ModeSign.DeltaWithDeltaHat, 'modeFourth', 1);
mapNeumeToSbmufl(ModeSign.DeltaWithHypsili, 'modeFourth');
mapNeumeToSbmufl(ModeSign.NanaOld, 'modeThird');
mapNeumeToSbmufl(ModeSign.Legetos, 'modeLegetos');
mapNeumeToSbmufl(ModeSign.ElaphronPlusApostrophos, 'modeRunningElafron');
mapNeumeToSbmufl(ModeSign.Elaphron, 'modeElafron');
mapNeumeToSbmufl(ModeSign.OligonPlusKentima, 'modeOligonKentimaAbove');
mapNeumeToSbmufl(ModeSign.OligonPlusHypsili, 'modeOligonYpsili');
mapNeumeToSbmufl(ModeSign.Ni, 'modeNi');
mapNeumeToSbmufl(ModeSign.Pa, 'modePa');
mapNeumeToSbmufl(ModeSign.Vou, 'modeVou');
mapNeumeToSbmufl(ModeSign.Ga, 'modeGa');
mapNeumeToSbmufl(ModeSign.Thi, 'modeDi');
mapNeumeToSbmufl(ModeSign.Ke, 'modeKe');
mapNeumeToSbmufl(ModeSign.Zo, 'modeZo');
mapNeumeToSbmufl(MeasureBar.MeasureBarRight, 'barlineSingle');
mapNeumeToSbmufl(MeasureBar.MeasureBarTop, 'barlineShortSingle');
mapNeumeToSbmufl(MeasureNumber.Two, 'measureNumber2');
mapNeumeToSbmufl(MeasureNumber.Three, 'measureNumber3');
mapNeumeToSbmufl(MeasureNumber.Four, 'measureNumber4');
mapNeumeToSbmufl(MeasureNumber.Five, 'measureNumber5');
mapNeumeToSbmufl(MeasureNumber.Six, 'measureNumber6');
mapNeumeToSbmufl(MeasureNumber.Seven, 'measureNumber7');
mapNeumeToSbmufl(MeasureNumber.Eight, 'measureNumber8');
mapNeumeToSbmufl(NoteIndicator.Ni, 'noteIndicatorNi');
mapNeumeToSbmufl(NoteIndicator.Pa, 'noteIndicatorPa');
mapNeumeToSbmufl(NoteIndicator.Vou, 'noteIndicatorVou');
mapNeumeToSbmufl(NoteIndicator.Ga, 'noteIndicatorGa');
mapNeumeToSbmufl(NoteIndicator.Thi, 'noteIndicatorDi');
mapNeumeToSbmufl(NoteIndicator.Ke, 'noteIndicatorKe');
mapNeumeToSbmufl(NoteIndicator.Zo, 'noteIndicatorZo');
mapNeumeToSbmufl(Ison.Unison, 'isonIndicatorUnison');
mapNeumeToSbmufl(Ison.ThiLow, 'isonIndicatorDiLow');
mapNeumeToSbmufl(Ison.KeLow, 'isonIndicatorKeLow');
mapNeumeToSbmufl(Ison.Zo, 'isonIndicatorZo');
mapNeumeToSbmufl(Ison.Ni, 'isonIndicatorNi');
mapNeumeToSbmufl(Ison.Pa, 'isonIndicatorPa');
mapNeumeToSbmufl(Ison.Vou, 'isonIndicatorVou');
mapNeumeToSbmufl(Ison.Ga, 'isonIndicatorGa');
mapNeumeToSbmufl(Ison.Thi, 'isonIndicatorDi');
mapNeumeToSbmufl(Ison.Ke, 'isonIndicatorKe');
mapNeumeToSbmufl(Ison.ZoHigh, 'isonIndicatorZoHigh');

// Create mapping from glyphname
const glyphNameToCodepointMap = new Map<string, string>();

for (let glyph in glyphnames) {
  const data: { codepoint: string } = (glyphnames as any)[glyph];
  const codepoint = Number('0x' + data.codepoint.substring(2));
  glyphNameToCodepointMap.set(glyph, String.fromCodePoint(codepoint));
}

export class NeumeMappingService {
  public static getMapping(neume: Neume): NeumeMapping {
    const mapping = neumeToSbmuflGlyphMap.get(neume)!;

    return {
      text: glyphNameToCodepointMap.get(mapping.glyph)!,
      salt: mapping.salt,
    };
  }
}

export const neumeMap = new Map<Neume, NeumeMapping>([
  [QuantitativeNeume.Ison, { text: '\ue000' }],

  [QuantitativeNeume.Oligon, { text: '\ue001' }],
  [QuantitativeNeume.OligonPlusKentimaBelow, { text: '\ue003' }],
  [QuantitativeNeume.OligonPlusKentimaAbove, { text: '\ue004' }],
  [QuantitativeNeume.OligonPlusHypsiliRight, { text: '\ue005' }],
  [QuantitativeNeume.OligonPlusHypsiliLeft, { text: '\ue006' }],
  [
    QuantitativeNeume.OligonPlusHypsiliPlusKentimaHorizontal,
    { text: '\ue007' },
  ],
  [QuantitativeNeume.OligonPlusHypsiliPlusKentimaVertical, { text: '\ue008' }],
  [QuantitativeNeume.OligonPlusDoubleHypsili, { text: '\ue009' }],

  [QuantitativeNeume.PetastiWithIson, { text: '\ue040' }],
  [QuantitativeNeume.Petasti, { text: '\ue041' }],
  [QuantitativeNeume.PetastiPlusOligon, { text: '\ue042' }],
  [QuantitativeNeume.PetastiPlusKentimaAbove, { text: '\ue043' }],
  [QuantitativeNeume.PetastiPlusHypsiliRight, { text: '\ue044' }],
  [QuantitativeNeume.PetastiPlusHypsiliLeft, { text: '\ue045' }],
  [
    QuantitativeNeume.PetastiPlusHypsiliPlusKentimaHorizontal,
    { text: '\ue046' },
  ],
  [QuantitativeNeume.PetastiPlusHypsiliPlusKentimaVertical, { text: '\ue047' }],
  [QuantitativeNeume.PetastiPlusDoubleHypsili, { text: '\ue048' }],

  [QuantitativeNeume.Apostrophos, { text: '\ue021' }],
  [QuantitativeNeume.Elaphron, { text: '\ue024' }],
  [QuantitativeNeume.ElaphronPlusApostrophos, { text: '\ue026' }],
  [QuantitativeNeume.Hamili, { text: '\ue027' }],
  [QuantitativeNeume.HamiliPlusApostrophos, { text: '\ue028' }],
  [QuantitativeNeume.HamiliPlusElaphron, { text: '\ue029' }],
  [QuantitativeNeume.HamiliPlusElaphronPlusApostrophos, { text: '\ue02A' }],
  [QuantitativeNeume.DoubleHamili, { text: '\ue02B' }],

  [QuantitativeNeume.PetastiPlusApostrophos, { text: '\ue060' }],
  [QuantitativeNeume.PetastiPlusElaphron, { text: '\ue062' }],
  [QuantitativeNeume.PetastiPlusElaphronPlusApostrophos, { text: '\ue064' }],

  [QuantitativeNeume.OligonPlusKentemata, { text: '\ue083' }],
  [QuantitativeNeume.KentemataPlusOligon, { text: '\ue082' }],
  [QuantitativeNeume.OligonPlusIsonPlusKentemata, { text: '\ue084' }],
  [QuantitativeNeume.OligonPlusApostrophosPlusKentemata, { text: '\ue087' }],
  [QuantitativeNeume.OligonPlusHyporoePlusKentemata, { text: '\ue088' }],
  [QuantitativeNeume.OligonPlusElaphronPlusKentemata, { text: '\ue089' }],
  [
    QuantitativeNeume.OligonPlusElaphronPlusApostrophosPlusKentemata,
    { text: '\ue08B' },
  ],
  [QuantitativeNeume.OligonPlusHamiliPlusKentemata, { text: '\ue08C' }],

  [QuantitativeNeume.RunningElaphron, { text: '\ue025' }],
  [QuantitativeNeume.Hyporoe, { text: '\ue023' }],
  [QuantitativeNeume.PetastiPlusRunningElaphron, { text: '\ue063' }],
  [QuantitativeNeume.PetastiPlusHyporoe, { text: '\ue061' }],

  [QuantitativeNeume.OligonPlusIson, { text: '\ue010' }],
  [QuantitativeNeume.OligonPlusApostrophos, { text: '\ue011' }],
  [QuantitativeNeume.OligonPlusElaphron, { text: '\ue013' }],
  [QuantitativeNeume.OligonPlusElaphronPlusApostrophos, { text: '\ue014' }],
  [QuantitativeNeume.OligonPlusHamili, { text: '\ue015' }],

  [QuantitativeNeume.Kentima, { text: '\ue080' }],
  [QuantitativeNeume.OligonPlusKentima, { text: '\ue002' }],
  [QuantitativeNeume.Kentemata, { text: '\ue081' }],

  [
    QuantitativeNeume.OligonPlusRunningElaphronPlusKentemata,
    { text: '\ue08a' },
  ],
  [QuantitativeNeume.DoubleApostrophos, { text: '\ue022' }],
  [QuantitativeNeume.IsonPlusApostrophos, { text: '\ue020' }],
  [QuantitativeNeume.OligonPlusKentemataPlusHypsiliLeft, { text: '\ue086' }],
  [QuantitativeNeume.OligonPlusKentemataPlusHypsiliRight, { text: '\ue087' }],

  [QuantitativeNeume.Cross, { text: '\ue0c0' }],
  [QuantitativeNeume.VareiaDotted, { text: '\ue0e0' }],

  [GorgonNeume.Gorgon_Top, { text: '\ue0f0' }],
  [GorgonNeume.Gorgon_Bottom, { text: '\ue0f1' }],
  [GorgonNeume.Gorgon_Hyporoe, { text: '\ue100' }],

  [GorgonNeume.Digorgon, { text: '\ue0f4' }],
  [GorgonNeume.Trigorgon, { text: '\ue0f8' }],

  [GorgonNeume.GorgonDottedLeft, { text: '\ue0f2' }],
  [GorgonNeume.GorgonDottedRight, { text: '\ue0f3' }],

  [GorgonNeume.DigorgonDottedLeft1, { text: '\ue0f5' }],
  [GorgonNeume.DigorgonDottedLeft2, { text: '\ue0f6' }],
  [GorgonNeume.DigorgonDottedRight, { text: '\ue0f7' }],

  [GorgonNeume.TrigorgonDottedLeft1, { text: '\ue0f9' }],
  [GorgonNeume.TrigorgonDottedLeft2, { text: '\ue0fa' }],
  [GorgonNeume.TrigorgonDottedRight, { text: '\ue0fb' }],

  [GorgonNeume.Argon, { text: '\ue0fc' }],
  [GorgonNeume.Hemiolion, { text: '\ue0fd' }],
  [GorgonNeume.Diargon, { text: '\ue0fe' }],

  [TimeNeume.Klasma_Top, { text: '\ue0d0' }],
  [TimeNeume.Klasma_Bottom, { text: '\ue0d1' }],

  [TimeNeume.Hapli, { text: '\ue0d2' }],
  [TimeNeume.Dipli, { text: '\ue0d3' }],
  [TimeNeume.Tripli, { text: '\ue0d4' }],

  [Fthora.DiatonicNiLow_Top, { text: '\ue190' }],
  [Fthora.DiatonicPa_Top, { text: '\ue191' }],
  [Fthora.DiatonicVou_Top, { text: '\ue192' }],
  [Fthora.DiatonicGa_Top, { text: '\ue193' }],
  [Fthora.DiatonicThi_Top, { text: '\ue194' }],
  [Fthora.DiatonicKe_Top, { text: '\ue195' }],
  [Fthora.DiatonicZo_Top, { text: '\ue196' }],
  [Fthora.DiatonicNiHigh_Top, { text: '\ue197' }],
  [Fthora.HardChromaticPa_Top, { text: '\ue198' }],
  [Fthora.HardChromaticThi_Top, { text: '\ue199' }],
  [Fthora.SoftChromaticThi_Top, { text: '\ue19A' }],
  [Fthora.SoftChromaticPa_Top, { text: '\ue19B' }],
  [Fthora.Enharmonic_Top, { text: '\ue19C' }],
  [Fthora.Zygos_Top, { text: '\ue19D' }],
  [Fthora.Kliton_Top, { text: '\ue19E' }],
  [Fthora.Spathi_Top, { text: '\ue19F' }],
  [Fthora.GeneralSharp_Top, { text: '\ue1f4' }],
  [Fthora.GeneralFlat_Top, { text: '\ue204' }],

  [Fthora.DiatonicNiLow_Bottom, { text: '\ue1c0' }],
  [Fthora.DiatonicPa_Bottom, { text: '\ue1c1' }],
  [Fthora.DiatonicThi_Bottom, { text: '\ue1c4' }],
  [Fthora.DiatonicKe_Bottom, { text: '\ue1c5' }],
  [Fthora.DiatonicNiHigh_Bottom, { text: '\ue1c7' }],
  [Fthora.HardChromaticPa_Bottom, { text: '\ue1c8' }],
  [Fthora.HardChromaticThi_Bottom, { text: '\ue1c9' }],
  [Fthora.SoftChromaticThi_Bottom, { text: '\ue1ca' }],
  [Fthora.SoftChromaticPa_Bottom, { text: '\ue1cb' }],
  [Fthora.Enharmonic_Bottom, { text: '\ue1cc' }],
  [Fthora.Zygos_Bottom, { text: '\ue1cd' }],
  [Fthora.Kliton_Bottom, { text: '\ue1ce' }],
  [Fthora.GeneralSharp_Bottom, { text: '\ue1f5' }],
  [Fthora.GeneralFlat_Bottom, { text: '\ue205' }],

  [Accidental.Sharp_2_Left, { text: '\ue1f0' }],
  [Accidental.Sharp_4_Left, { text: '\ue1f1' }],
  [Accidental.Sharp_6_Left, { text: '\ue1f2' }],

  [Accidental.Flat_2_Right, { text: '\ue200' }],
  [Accidental.Flat_4_Right, { text: '\ue201' }],
  [Accidental.Flat_6_Right, { text: '\ue202' }],

  [TempoSign.VerySlow, { text: '\ue120' }],
  [TempoSign.Slower, { text: '\ue121' }],
  [TempoSign.Slow, { text: '\ue122' }],
  [TempoSign.Moderate, { text: '\ue123' }],
  [TempoSign.Medium, { text: '\ue124' }],
  [TempoSign.Quick, { text: '\ue125' }],
  [TempoSign.Quicker, { text: '\ue126' }],
  [TempoSign.VeryQuick, { text: '\ue127' }],

  [VocalExpressionNeume.Vareia, { text: '\ue0a0' }],
  [VocalExpressionNeume.HomalonConnecting, { text: '\ue0a4' }],
  [VocalExpressionNeume.Homalon, { text: '\ue0a3' }],
  [VocalExpressionNeume.Antikenoma, { text: '\ue0a2' }],
  [VocalExpressionNeume.Psifiston, { text: '\ue0a1' }],
  [VocalExpressionNeume.Heteron, { text: '\ue0a5' }],

  [RootSign.Delta, { text: '\ue151' }],
  [RootSign.Alpha, { text: '\ue152' }],
  [RootSign.Legetos, { text: '\ue153' }],
  [RootSign.Nana, { text: '\ue154' }],
  [RootSign.Zo, { text: '\ue150' }],
  [RootSign.Squiggle, { text: '\ue157' }],
  [RootSign.Tilt, { text: '\ue158' }],
  [RootSign.SoftChromaticSquiggle, { text: '\ue159' }],
  [RootSign.Zygos, { text: '\ue15b' }],
  [RootSign.DeltaDotted, { text: '\ue155' }],
  [RootSign.AlphaDotted, { text: '\ue156' }],
  [RootSign.SoftChromaticPaRootSign, { text: '\ue15a' }],
  [RootSign.AlphaLow, { text: '\ue172' }],
  [RootSign.DeltaLow, { text: '\ue171' }],
  [RootSign.NanaLow, { text: '\ue174' }],

  [Note.GaLow, { text: '\ue134' }],
  [Note.ThiLow, { text: '\ue135' }],
  [Note.KeLow, { text: '\ue136' }],
  [Note.Zo, { text: '\ue137' }],
  [Note.Ni, { text: '\ue138' }],
  [Note.Pa, { text: '\ue139' }],
  [Note.Vou, { text: '\ue13a' }],
  [Note.Ga, { text: '\ue13b' }],
  [Note.Thi, { text: '\ue13c' }],
  [Note.Ke, { text: '\ue13d' }],
  [Note.Apostrophe, { text: '\ue145' }],

  [ModeSign.Ekhos, { text: '\ue2f1' }],
  [ModeSign.Plagal, { text: '\ue2f0' }],
  [ModeSign.First, { text: '\ue2f3' }],
  [ModeSign.Second, { text: '\ue2f4' }],
  [ModeSign.Third, { text: '\ue2f5' }],
  [ModeSign.Fourth, { text: '\ue2f6' }],
  [ModeSign.FirstCapital, { text: '\ue2f7' }],
  [ModeSign.SecondCapital, { text: '\ue2f8' }],
  [ModeSign.ThirdCapital, { text: '\ue2f9' }],
  [ModeSign.FourthCapital, { text: '\ue2fa' }],
  [ModeSign.Varys, { text: '\ue2f2' }],
  [ModeSign.Alpha, { text: '\ue2c0' }],
  [ModeSign.AlphaWithDeltaHat, { text: '\ue2a0' }],
  [ModeSign.AlphaWithHypsili, { text: '\ue2a1' }],
  [ModeSign.SoftChromatic6, { text: '\ue2c8' }],
  [ModeSign.SoftChromatic2, { text: '\ue2a8' }],
  [ModeSign.Nana, { text: '\ue2b1' }],
  [ModeSign.VarysZo, { text: '\ue2d0' }],
  [ModeSign.Delta, { text: '\ue2d8' }],
  [ModeSign.DeltaWithDeltaHat, { text: '\ue2b8' }],
  [ModeSign.DeltaWithHypsili, { text: '\ue2b9' }],
  [ModeSign.NanaOld, { text: '\ue2b0' }],
  [ModeSign.Legetos, { text: '\ue2ba' }],
  [ModeSign.ElaphronPlusApostrophos, { text: '\ue2eb' }],
  [ModeSign.Elaphron, { text: '\ue2e9' }],
  [ModeSign.OligonPlusKentima, { text: '\ue2e7' }],
  [ModeSign.OligonPlusHypsili, { text: '\ue2e8' }],

  [ModeSign.Ni, { text: '\ue2e0' }],
  [ModeSign.Pa, { text: '\ue2e1' }],
  [ModeSign.Vou, { text: '\ue2e2' }],
  [ModeSign.Ga, { text: '\ue2e3' }],
  [ModeSign.Thi, { text: '\ue2e4' }],
  [ModeSign.Ke, { text: '\ue2e5' }],
  [ModeSign.Zo, { text: '\ue2e6' }],

  [MeasureBar.MeasureBarRight, { text: '\ue210' }],
  [MeasureBar.MeasureBarTop, { text: '\ue213' }],

  [MeasureNumber.Two, { text: '\ue220' }],
  [MeasureNumber.Three, { text: '\ue221' }],
  [MeasureNumber.Four, { text: '\ue222' }],
  [MeasureNumber.Five, { text: '\ue223' }],
  [MeasureNumber.Six, { text: '\ue224' }],
  [MeasureNumber.Seven, { text: '\ue225' }],
  [MeasureNumber.Eight, { text: '\ue226' }],

  [NoteIndicator.Ni, { text: '\ue250' }],
  [NoteIndicator.Pa, { text: '\ue251' }],
  [NoteIndicator.Vou, { text: '\ue252' }],
  [NoteIndicator.Ga, { text: '\ue253' }],
  [NoteIndicator.Thi, { text: '\ue254' }],
  [NoteIndicator.Ke, { text: '\ue255' }],
  [NoteIndicator.Zo, { text: '\ue256' }],

  [Ison.Unison, { text: '\ue260' }],
  [Ison.ThiLow, { text: '\ue261' }],
  [Ison.KeLow, { text: '\ue262' }],
  [Ison.Zo, { text: '\ue263' }],
  [Ison.Ni, { text: '\ue264' }],
  [Ison.Pa, { text: '\ue265' }],
  [Ison.Vou, { text: '\ue266' }],
  [Ison.Ga, { text: '\ue267' }],
  [Ison.Thi, { text: '\ue268' }],
  [Ison.Ke, { text: '\ue269' }],
  [Ison.ZoHigh, { text: '\ue26A' }],
]);
