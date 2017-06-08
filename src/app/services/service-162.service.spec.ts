/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service162Service } from './service-162.service';

describe('Service162Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service162Service]
    });
  });

  it('should ...', inject([Service162Service], (service: Service162Service) => {
    expect(service).toBeTruthy();
  }));
});
