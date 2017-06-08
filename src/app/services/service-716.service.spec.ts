/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service716Service } from './service-716.service';

describe('Service716Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service716Service]
    });
  });

  it('should ...', inject([Service716Service], (service: Service716Service) => {
    expect(service).toBeTruthy();
  }));
});
