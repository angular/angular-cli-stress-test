/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service726Service } from './service-726.service';

describe('Service726Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service726Service]
    });
  });

  it('should ...', inject([Service726Service], (service: Service726Service) => {
    expect(service).toBeTruthy();
  }));
});
