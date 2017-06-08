/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service527Service } from './service-527.service';

describe('Service527Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service527Service]
    });
  });

  it('should ...', inject([Service527Service], (service: Service527Service) => {
    expect(service).toBeTruthy();
  }));
});
