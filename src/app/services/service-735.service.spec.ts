/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service735Service } from './service-735.service';

describe('Service735Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service735Service]
    });
  });

  it('should ...', inject([Service735Service], (service: Service735Service) => {
    expect(service).toBeTruthy();
  }));
});
