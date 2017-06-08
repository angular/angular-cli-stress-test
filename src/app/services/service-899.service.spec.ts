/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service899Service } from './service-899.service';

describe('Service899Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service899Service]
    });
  });

  it('should ...', inject([Service899Service], (service: Service899Service) => {
    expect(service).toBeTruthy();
  }));
});
