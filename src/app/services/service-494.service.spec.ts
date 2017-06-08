/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service494Service } from './service-494.service';

describe('Service494Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service494Service]
    });
  });

  it('should ...', inject([Service494Service], (service: Service494Service) => {
    expect(service).toBeTruthy();
  }));
});
