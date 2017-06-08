/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service738Service } from './service-738.service';

describe('Service738Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service738Service]
    });
  });

  it('should ...', inject([Service738Service], (service: Service738Service) => {
    expect(service).toBeTruthy();
  }));
});
