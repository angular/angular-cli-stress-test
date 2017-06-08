/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service427Service } from './service-427.service';

describe('Service427Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service427Service]
    });
  });

  it('should ...', inject([Service427Service], (service: Service427Service) => {
    expect(service).toBeTruthy();
  }));
});
