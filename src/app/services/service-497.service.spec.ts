/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service497Service } from './service-497.service';

describe('Service497Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service497Service]
    });
  });

  it('should ...', inject([Service497Service], (service: Service497Service) => {
    expect(service).toBeTruthy();
  }));
});
