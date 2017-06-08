/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service839Service } from './service-839.service';

describe('Service839Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service839Service]
    });
  });

  it('should ...', inject([Service839Service], (service: Service839Service) => {
    expect(service).toBeTruthy();
  }));
});
