/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service452Service } from './service-452.service';

describe('Service452Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service452Service]
    });
  });

  it('should ...', inject([Service452Service], (service: Service452Service) => {
    expect(service).toBeTruthy();
  }));
});
