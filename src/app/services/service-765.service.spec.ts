/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service765Service } from './service-765.service';

describe('Service765Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service765Service]
    });
  });

  it('should ...', inject([Service765Service], (service: Service765Service) => {
    expect(service).toBeTruthy();
  }));
});
