/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service584Service } from './service-584.service';

describe('Service584Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service584Service]
    });
  });

  it('should ...', inject([Service584Service], (service: Service584Service) => {
    expect(service).toBeTruthy();
  }));
});
