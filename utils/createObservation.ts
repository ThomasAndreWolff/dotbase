import { R4 as FHIR } from "@ahryman40k/ts-fhir-types";

export default (
  steps: number,
  start: string,
  end: string
): FHIR.IObservation => ({
  resourceType: "Observation",
  id: "dotlink-example-examplestepcount",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "66334-4",
        display: "Steps taken",
      },
    ],
  },
  effectivePeriod: { start, end },
  subject: {
    reference: "Patient/dotbase-patient-maxmustermann",
  },
  performer: [
    {
      reference: "Patient/dotbase-patient-maxmustermann",
    },
  ],
  derivedFrom: [
    {
      reference: "QuestionnaireResponse/dotlink-example-datainputtypes",
    },
  ],
  extension: [
    {
      url: "https://dotbase.org/fhir/StructureDefinition/step-count",
      extension: [
        {
          url: "period",
          valuePeriod: { start, end },
        },
        {
          url: "steps",
          valuePositiveInt: steps,
        },
      ],
    },
  ],
});
