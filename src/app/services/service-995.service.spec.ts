/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service995Service } from './service-995.service';

describe('Service995Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service995Service]
    });
  });

  it('should ...', inject([Service995Service], (service: Service995Service) => {
    expect(service).toBeTruthy();
  }));
});
