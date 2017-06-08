/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service651Service } from './service-651.service';

describe('Service651Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service651Service]
    });
  });

  it('should ...', inject([Service651Service], (service: Service651Service) => {
    expect(service).toBeTruthy();
  }));
});
