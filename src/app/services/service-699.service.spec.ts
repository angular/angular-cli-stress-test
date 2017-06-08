/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service699Service } from './service-699.service';

describe('Service699Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service699Service]
    });
  });

  it('should ...', inject([Service699Service], (service: Service699Service) => {
    expect(service).toBeTruthy();
  }));
});
