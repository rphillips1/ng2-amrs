/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ProgramsComponent } from './programs.component';

import { AppFeatureAnalytics } from '../../shared/app-analytics/app-feature-analytics.service';
import { FakeAppFeatureAnalytics } from '../../shared/app-analytics/app-feature-analytcis.mock';

describe('Component: PatientVitals', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AppFeatureAnalytics, useFactory: () => {
          return new FakeAppFeatureAnalytics();
        }, deps: []
        }
      ]
    });
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should create an instance', () => {
    let fakeAppFeatureAnalytics: AppFeatureAnalytics = TestBed.get(AppFeatureAnalytics);
    let component = new ProgramsComponent(fakeAppFeatureAnalytics);
    expect(component).toBeTruthy();
  });
});


