/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service972Service } from './service-972.service';

describe('Service972Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service972Service]
    });
  });

  it('should ...', inject([Service972Service], (service: Service972Service) => {
    expect(service).toBeTruthy();
  }));
});
