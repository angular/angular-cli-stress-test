/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service617Service } from './service-617.service';

describe('Service617Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service617Service]
    });
  });

  it('should ...', inject([Service617Service], (service: Service617Service) => {
    expect(service).toBeTruthy();
  }));
});
