/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service564Service } from './service-564.service';

describe('Service564Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service564Service]
    });
  });

  it('should ...', inject([Service564Service], (service: Service564Service) => {
    expect(service).toBeTruthy();
  }));
});
