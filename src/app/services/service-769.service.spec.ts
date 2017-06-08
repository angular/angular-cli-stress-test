/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service769Service } from './service-769.service';

describe('Service769Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service769Service]
    });
  });

  it('should ...', inject([Service769Service], (service: Service769Service) => {
    expect(service).toBeTruthy();
  }));
});
