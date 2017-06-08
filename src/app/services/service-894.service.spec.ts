/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service894Service } from './service-894.service';

describe('Service894Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service894Service]
    });
  });

  it('should ...', inject([Service894Service], (service: Service894Service) => {
    expect(service).toBeTruthy();
  }));
});
