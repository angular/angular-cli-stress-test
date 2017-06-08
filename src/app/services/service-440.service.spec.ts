/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service440Service } from './service-440.service';

describe('Service440Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service440Service]
    });
  });

  it('should ...', inject([Service440Service], (service: Service440Service) => {
    expect(service).toBeTruthy();
  }));
});
