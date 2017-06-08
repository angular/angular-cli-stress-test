/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service740Service } from './service-740.service';

describe('Service740Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service740Service]
    });
  });

  it('should ...', inject([Service740Service], (service: Service740Service) => {
    expect(service).toBeTruthy();
  }));
});
