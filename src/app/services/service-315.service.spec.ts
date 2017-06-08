/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service315Service } from './service-315.service';

describe('Service315Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service315Service]
    });
  });

  it('should ...', inject([Service315Service], (service: Service315Service) => {
    expect(service).toBeTruthy();
  }));
});
