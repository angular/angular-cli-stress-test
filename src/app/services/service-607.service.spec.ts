/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service607Service } from './service-607.service';

describe('Service607Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service607Service]
    });
  });

  it('should ...', inject([Service607Service], (service: Service607Service) => {
    expect(service).toBeTruthy();
  }));
});
