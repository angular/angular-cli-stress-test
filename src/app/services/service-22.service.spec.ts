/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service22Service } from './service-22.service';

describe('Service22Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service22Service]
    });
  });

  it('should ...', inject([Service22Service], (service: Service22Service) => {
    expect(service).toBeTruthy();
  }));
});
