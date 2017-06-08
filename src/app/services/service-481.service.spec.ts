/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service481Service } from './service-481.service';

describe('Service481Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service481Service]
    });
  });

  it('should ...', inject([Service481Service], (service: Service481Service) => {
    expect(service).toBeTruthy();
  }));
});
