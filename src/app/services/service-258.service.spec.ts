/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service258Service } from './service-258.service';

describe('Service258Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service258Service]
    });
  });

  it('should ...', inject([Service258Service], (service: Service258Service) => {
    expect(service).toBeTruthy();
  }));
});
