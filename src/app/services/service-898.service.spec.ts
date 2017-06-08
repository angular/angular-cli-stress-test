/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service898Service } from './service-898.service';

describe('Service898Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service898Service]
    });
  });

  it('should ...', inject([Service898Service], (service: Service898Service) => {
    expect(service).toBeTruthy();
  }));
});
