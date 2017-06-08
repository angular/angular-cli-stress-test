/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service532Service } from './service-532.service';

describe('Service532Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service532Service]
    });
  });

  it('should ...', inject([Service532Service], (service: Service532Service) => {
    expect(service).toBeTruthy();
  }));
});
