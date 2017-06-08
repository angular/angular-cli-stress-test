/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service37Service } from './service-37.service';

describe('Service37Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service37Service]
    });
  });

  it('should ...', inject([Service37Service], (service: Service37Service) => {
    expect(service).toBeTruthy();
  }));
});
