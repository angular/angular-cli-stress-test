/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service978Service } from './service-978.service';

describe('Service978Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service978Service]
    });
  });

  it('should ...', inject([Service978Service], (service: Service978Service) => {
    expect(service).toBeTruthy();
  }));
});
