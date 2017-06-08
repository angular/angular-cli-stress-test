/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service534Service } from './service-534.service';

describe('Service534Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service534Service]
    });
  });

  it('should ...', inject([Service534Service], (service: Service534Service) => {
    expect(service).toBeTruthy();
  }));
});
