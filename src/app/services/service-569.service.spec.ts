/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service569Service } from './service-569.service';

describe('Service569Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service569Service]
    });
  });

  it('should ...', inject([Service569Service], (service: Service569Service) => {
    expect(service).toBeTruthy();
  }));
});
