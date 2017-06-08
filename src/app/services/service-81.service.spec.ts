/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service81Service } from './service-81.service';

describe('Service81Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service81Service]
    });
  });

  it('should ...', inject([Service81Service], (service: Service81Service) => {
    expect(service).toBeTruthy();
  }));
});
