/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service936Service } from './service-936.service';

describe('Service936Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service936Service]
    });
  });

  it('should ...', inject([Service936Service], (service: Service936Service) => {
    expect(service).toBeTruthy();
  }));
});
